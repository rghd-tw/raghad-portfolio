# Raghad Altuwayjiri — Portfolio

Personal portfolio of **Raghad Altuwayjiri**: Software Developer | Full-Stack Development | AI Integration.

The site's centerpiece is **[AYN | أَيْن](https://ayn-wheat.vercel.app/)**, an AI-powered commercial site selection platform. Raghad developed it independently, from initial development through deployment.

## Highlights

- **Bilingual:** English (default, LTR) at `/` and Arabic (RTL) at `/ar`. Each language has its own server-rendered `lang`/`dir`, metadata and typography.
- **Featured project:** an AYN showcase with an accessible screenshot gallery and lightbox built from real screenshots of the deployed platform.
- **Static by default:** every route is prerendered. There is no backend, no database, and no environment secrets.
- **SEO:** per-language metadata, `hreflang` alternates, Open Graph images, JSON-LD (`Person`), `robots.txt` and `sitemap.xml`.
- **Accessibility:** semantic landmarks, a skip link, keyboard-operable navigation and gallery, visible focus states, and `prefers-reduced-motion` support.

## Tech stack

Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · lucide-react

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

| Script | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create the production build |
| `npm start` | Serve the production build |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run the TypeScript compiler without emitting |

## Project structure

```
src/
  app/
    (en)/            English root layout + page  →  /
    (ar)/ar/         Arabic root layout + page   →  /ar
    global-not-found.tsx, robots.ts, sitemap.ts, icon.svg, globals.css
  components/        Section components (Hero, About, FeaturedProject, …)
  lib/
    content.ts       All copy, in English and Arabic (typed dictionary)
    site.ts          Contact links and site URL helper
    metadata.ts      SEO metadata and JSON-LD
public/ayn/          Optimized AYN screenshots (WebP)
```

To edit text, update `src/lib/content.ts`. The Arabic dictionary has the same type as the English one, so a missing translation fails the type check.

## Deployment (Vercel)

The project works with Vercel's zero-config Next.js deployment:

1. Import this repository in Vercel.
2. Keep the defaults (Framework: Next.js, Build: `next build`).
3. Optional: if you use a custom domain, set `NEXT_PUBLIC_SITE_URL` (for example `https://example.com`). Without it, the site uses Vercel's production URL for canonical and Open Graph links.

No other environment variables are required.

## Privacy & security

This repository contains only the portfolio. It holds none of AYN's source code, no API keys, and no private data. The AYN screenshots show the public, deployed interface.

---

© Raghad Altuwayjiri. All rights reserved.
