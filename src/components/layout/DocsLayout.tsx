import { Suspense, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Separator } from '@/components/ui/separator'
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { publishedPages } from '@/content/nav'
import { AppSidebar } from './AppSidebar'
import { PageNav } from './PageNav'
import { ThemeToggle } from './ThemeToggle'

export function DocsLayout() {
  const { pathname, hash } = useLocation()
  const page = publishedPages.find((p) => p.path === pathname)

  useEffect(() => {
    if (!hash) window.scrollTo(0, 0)
  }, [pathname, hash])

  return (
    <SidebarProvider open onOpenChange={() => {}}>
      <AppSidebar />
      <SidebarInset>
        <header className="sticky top-0 z-10 flex h-14 items-center gap-2 border-b bg-background/80 px-4 backdrop-blur">
          <SidebarTrigger className="-ml-1 md:hidden" />
          <Separator orientation="vertical" className="mr-2 data-[orientation=vertical]:h-4 md:hidden" />
          <div className="flex min-w-0 items-center gap-1.5 text-sm">
            {page && <span className="hidden text-muted-foreground sm:inline">{page.group} /</span>}
            <span className="truncate font-medium">{page?.title ?? 'Nie znaleziono'}</span>
          </div>
          <div className="ml-auto">
            <ThemeToggle />
          </div>
        </header>

        <div className="mx-auto box-content max-w-3xl px-4 py-10 sm:px-8">
          <Suspense fallback={<div className="text-sm text-muted-foreground">Ładowanie…</div>}>
            <div className="min-w-0">
              <article
                className="prose max-w-none prose-neutral dark:prose-invert prose-headings:scroll-mt-20 prose-headings:font-semibold prose-a:text-brand prose-a:no-underline hover:prose-a:underline prose-code:before:content-none prose-code:after:content-none prose-table:text-sm"
              >
                <Outlet />
              </article>
              <PageNav path={pathname} />
            </div>
          </Suspense>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
