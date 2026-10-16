import { lazy, type ComponentType, type LazyExoticComponent } from 'react'

export type DocPage = {
  title: string
  path: string
  /** Strona w planach – widoczna w menu, ale bez treści */
  soon?: boolean
  component?: LazyExoticComponent<ComponentType>
}

export type DocGroup = {
  title: string
  pages: DocPage[]
}

// Jedno miejsce, w którym rejestrujemy strony: menu, router i nawigacja „poprzednia / następna”
export const nav: DocGroup[] = [
  {
    title: 'Start',
    pages: [
      { title: 'Wprowadzenie', path: '/', component: lazy(() => import('./start/wprowadzenie.mdx')) },
    ],
  },
  {
    title: 'Architektura',
    pages: [
      {
        title: 'Struktura folderów',
        path: '/architektura/struktura-folderow',
        component: lazy(() => import('./architektura/struktura-folderow.mdx')),
      },
      { title: 'Granice modułów i importy', path: '/architektura/granice-modulow', soon: true },
      { title: 'Konwencje nazewnictwa', path: '/architektura/konwencje', soon: true },
    ],
  },
  {
    title: 'Komponenty',
    pages: [
      { title: 'Dialog', path: '/komponenty/dialog', component: lazy(() => import('./komponenty/dialog.mdx')) },
      {
        title: 'Upload plików',
        path: '/komponenty/upload-plikow',
        component: lazy(() => import('./komponenty/upload-plikow.mdx')),
      },
    ],
  },
  {
    title: 'Supabase',
    pages: [
      { title: 'Klient i zmienne środowiskowe', path: '/supabase/klient', soon: true },
      { title: 'Migracje i generowanie typów', path: '/supabase/migracje', soon: true },
      { title: 'Auth i Row Level Security', path: '/supabase/auth-rls', soon: true },
      { title: 'Storage i pliki', path: '/supabase/storage', soon: true },
      { title: 'Edge Functions', path: '/supabase/edge-functions', soon: true },
    ],
  },
  {
    title: 'Dane w React',
    pages: [
      { title: 'Warstwa api/', path: '/dane/api', soon: true },
      { title: 'Klucze i zapytania', path: '/dane/zapytania', soon: true },
      { title: 'Mutacje i optymizm', path: '/dane/mutacje', soon: true },
      { title: 'Ładowanie i błędy', path: '/dane/ladowanie-bledy', soon: true },
      { title: 'Realtime', path: '/dane/realtime', soon: true },
    ],
  },
  {
    title: 'UI',
    pages: [
      { title: 'shadcn/ui w projekcie', path: '/ui/shadcn', soon: true },
      { title: 'Formularze (RHF + zod)', path: '/ui/formularze', soon: true },
      { title: 'Stan UI w zustand', path: '/ui/zustand', soon: true },
    ],
  },
]

export const publishedPages = nav.flatMap((group) =>
  group.pages.filter((page) => !page.soon).map((page) => ({ ...page, group: group.title })),
)
