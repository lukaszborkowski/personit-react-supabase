import path from 'node:path'
import mdx from '@mdx-js/rollup'
import rehypeShiki from '@shikijs/rehype'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import rehypeSlug from 'rehype-slug'
import type { ShikiTransformer } from 'shiki'
import remarkGfm from 'remark-gfm'
import { defineConfig } from 'vite'

const codeTitle: ShikiTransformer = {
  pre(node) {
    const title = (this.options.meta as { title?: string } | undefined)?.title
    if (title) node.properties['data-title'] = title
  },
}

export default defineConfig({
  plugins: [
    {
      enforce: 'pre',
      ...mdx({
        providerImportSource: '@mdx-js/react',
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          rehypeSlug,
          [
            rehypeShiki,
            {
              themes: { light: 'github-light', dark: 'github-dark' },
              defaultColor: false,
              // ```ts title="api/requests.api.ts" → nagłówek bloku kodu z nazwą pliku
              parseMetaString: (meta: string) => ({ title: /title="([^"]+)"/.exec(meta)?.[1] }),
              transformers: [codeTitle],
            },
          ],
        ],
      }),
    },
    react({ include: /\.(mdx|tsx?)$/ }),
    tailwindcss(),
  ],
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') },
  },
})
