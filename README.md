# Pratyush Shrivastav — Portfolio

A flagship personal site built with Astro. Warm editorial design: Newsreader (serif), Instrument Sans, Spline Sans Mono. No trackers, no frameworks on the client, near-zero JavaScript.

## Preview without installing anything

Open `preview/index.html` in any browser. This is a fully clickable offline copy of the built site.

## Run locally

```bash
npm install
npm run dev        # dev server at localhost:4321
npm run build      # production build → dist/
```

## Deploy

Static output — deploys as-is to Vercel, Netlify, Cloudflare Pages, or GitHub Pages. Before deploying, set your final domain in `astro.config.mjs` (`site:` field).

## Structure

- `src/pages/index.astro` — Home (narrative arc, stack, principles)
- `src/pages/systems/` — PROVE, Friday, Accelerator Program, Sonex
- `src/pages/work.astro` — selected work by phase
- `src/pages/thinking/` — essays (add new ones as `.mdx` files with the Essay layout)
- `src/pages/about.astro` — about + contact
- `src/styles/global.css` — all design tokens (colors, type scale, spacing)

## Before going live — placeholders to fill

Marked in red italic throughout the site (`.placeholder` class):

1. **Work page** — outcome specifics for Enrole, Toprankers, ProBano, and the three PlayVerse products (metrics, reach, results)
2. **Sonex page** — current status and first integrations
3. **About page** — personal paragraph, portrait photo, LinkedIn URL
4. **astro.config.mjs** — final domain

## Adding an essay

Create `src/pages/thinking/your-slug.mdx`:

```mdx
---
layout: ../../layouts/Essay.astro
title: Your title
description: One-line description.
kicker: Category label
readingTime: 5 min read
---

Your prose here.
```

Then add it to the list in `src/pages/thinking/index.astro`.
