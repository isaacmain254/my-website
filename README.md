# isaacmaina.vercel.app

Personal portfolio for **Isaac Maina**, a full-stack software engineer based in Nairobi, Kenya. Built as a single-page site with anchor navigation and an accessible, deep-linkable project case-study modal.

Live: [isaacmaina.vercel.app](https://isaacmaina.vercel.app)

## Stack

- [Next.js](https://nextjs.org) (App Router, server components by default)
- React + TypeScript
- [Tailwind CSS](https://tailwindcss.com) v4 (CSS-first theme in `app/globals.css`)
- Fonts via `next/font` — Fraunces (display), Inter (body), JetBrains Mono (labels)
- Deployed on Vercel

## Structure

```
app/            layout, page, generated OG/Twitter images, robots, sitemap
components/
  layout/       navbar, footer, back-to-top
  sections/     hero, selected-work, experience, about, toolbox, writing, contact
  work/         project entry, accessible modal, history/hash provider, visual
  diagrams/     accurate architecture diagrams for backend projects
  ui/           section shell, reveal, tag, arrow link, skip link
content/        typed content data (projects, experience, writing, toolbox, site)
lib/            utils and client hooks
```

Content lives in `content/` and is typed in `content/types.ts`, so presentation stays separate from data. Projects render from `content/projects.ts` and open in a modal at `#project-<slug>`.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — ESLint
- `npm run typecheck` — TypeScript

## Notes

- No environment variables are required.
- The design uses solid colours only (no gradients).
- Motion respects `prefers-reduced-motion`.
