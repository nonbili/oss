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

Save lossless WebP blog screenshots under `public/blog/<slug>/`. Put each screenshot on its own Markdown line and
use the quoted title as its visible caption. Consecutive screenshot lines with no blank lines between
them form one gallery. A standalone screenshot uses the narrower single-image layout.

```md
![Pinterest enabled in Services](/blog/nora-0-9-8/pinterest-service.webp "Turn on Pinterest in Services.")
![Pinterest shortcut on a new tab](/blog/nora-0-9-8/pinterest-new-tab.webp "Pinterest appears in the shortcut grid.")
```

For cards with a heading and a short label, use a `:::screenshots` block. Write each card as an H2,
its label on a separate line, and a captioned image. Repeat those three blocks for each card.

```md
:::screenshots
## Custom Timelines

Feed

![Nora feed timeline](/blog/nora-0-9-0/feed-timeline.webp "Read updates from the accounts you follow.")
:::
```

Regular Markdown images also open in the page’s image viewer. The viewer moves through article
images in page order, across sections and screenshot galleries.

## Development

```sh
bun install
bun run dev
```

## Build

```sh
bun run build
```
