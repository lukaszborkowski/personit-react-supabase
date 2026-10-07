import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import { publishedPages } from '@/content/nav'

export function PageNav({ path }: { path: string }) {
  const index = publishedPages.findIndex((page) => page.path === path)
  const prev = publishedPages[index - 1]
  const next = publishedPages[index + 1]

  return (
    <div className="mt-16 grid gap-4 border-t pt-6 sm:grid-cols-2">
      {prev ? (
        <Link to={prev.path} className="group rounded-lg border p-4 transition-colors hover:border-brand">
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <ArrowLeftIcon className="size-3" /> Poprzednia
          </span>
          <span className="font-medium group-hover:text-brand">{prev.title}</span>
        </Link>
      ) : (
        <span />
      )}
      {next && (
        <Link to={next.path} className="group rounded-lg border p-4 text-right transition-colors hover:border-brand">
          <span className="flex items-center justify-end gap-1 text-xs text-muted-foreground">
            Następna <ArrowRightIcon className="size-3" />
          </span>
          <span className="font-medium group-hover:text-brand">{next.title}</span>
        </Link>
      )}
    </div>
  )
}
