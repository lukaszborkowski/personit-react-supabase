import { MDXProvider } from '@mdx-js/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { DocsLayout } from '@/components/layout/DocsLayout'
import { mdxComponents } from '@/components/mdx/mdxComponents'
import { TooltipProvider } from '@/components/ui/tooltip'
import { publishedPages } from '@/content/nav'
import { NotFound } from '@/content/NotFound'

export default function App() {
  return (
    <MDXProvider components={mdxComponents}>
      <TooltipProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<DocsLayout />}>
              {publishedPages.map(({ path, component: Page }) =>
                Page ? <Route key={path} path={path} element={<Page />} /> : null,
              )}
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </MDXProvider>
  )
}
