# nonbili oss

Documentation site and blog for nonbili's open-source apps:

- `NouTube`: Android, iOS, desktop, and browser-extension app for YouTube and YouTube Music
- `Nora`: Android, iOS, and desktop browser optimized for social network services
- `Nori`: bookmark manager and launcher for Android, iOS, desktop, and browsers

The site is built with Astro and Starlight.

## Layout

- `src/content/docs/` – product docs (Starlight). English lives at the root, translations in `<locale>/`.
- `src/content/blog/<locale>/` – blog posts (`en` is the default locale). The blog index, post pages, and
  RSS feeds are generated from this folder by `src/pages/[...locale]/blog/`.
- `src/i18n/locales/<locale>.json` – strings for the home page, header, and blog chrome.
- `src/components/` – home page, footer, and Starlight overrides (header, page title).
- `src/styles/` – `theme.css` (Starlight tokens), `site.css` (home and blog), `docs.css` (docs widgets).

## Writing a blog post

Add `src/content/blog/en/<slug>.md`:

```md
---
title: "Nora 1.0.0: ..."
description: One or two sentences shown in the post list, RSS feed, and search results.
date: 2026-12-01
product: nora # noutube | nora | nori, optional
---
```

The post appears on `/blog/`, the home page, and `/blog/rss.xml` automatically. Translations go in
`src/content/blog/<locale>/<slug>.md` with the same slug; locales without one show the English post.

## Development

```sh
bun install
bun run dev
```

## Build

```sh
bun run build
```
