# Personit Docs

Dobre praktyki React + Supabase w Personit. Vite + React + shadcn/ui, treści w MDX.

```bash
npm install
npm run dev
```

## Dodawanie strony

1. Utwórz plik `.mdx` w `src/content/<sekcja>/`.
2. Zarejestruj go w `src/content/nav.ts` (menu, trasa i nawigacja „poprzednia / następna” biorą się stąd).
   Strony w planach mają `soon: true` – są widoczne w menu jako „wkrótce”.

W MDX dostępne są:
- `<Callout type="info | tip | warning" title="…">…</Callout>`
- bloki kodu z nazwą pliku: ```` ```ts title="api/requests.api.ts" ````
