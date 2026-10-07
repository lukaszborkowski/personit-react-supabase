import type { MDXComponents } from 'mdx/types'
import { Link } from 'react-router-dom'
import { Callout } from './Callout'
import { CodeBlock } from './CodeBlock'

export const mdxComponents: MDXComponents = {
  pre: CodeBlock,
  // Linki wewnętrzne przez router (bez przeładowania strony), zewnętrzne w nowej karcie
  a: ({ href = '', ...props }) =>
    href.startsWith('/') ? (
      <Link to={href} {...props} />
    ) : (
      <a href={href} {...(href.startsWith('#') ? {} : { target: '_blank', rel: 'noreferrer' })} {...props} />
    ),
  table: (props) => (
    <div className="overflow-x-auto">
      <table {...props} />
    </div>
  ),
  Callout,
}
