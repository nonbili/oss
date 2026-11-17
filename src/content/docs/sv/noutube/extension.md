---
title: Webbläsartillägg
description: Använda NouTube-webbläsartillägget på Firefox och Chrome.
sidebar:
  order: 6
---

NouTube innehåller ett webbläsartillägg för Mozilla Firefox och Google Chrome som tar NouTubes renare surfning, förbättrade uppspelning, anpassade flöden, bokmärken och anpassningsverktyg direkt till din datorwebbläsare.

## Installera Tillägget

Installera NouTube direkt från de officiella tilläggsbutikerna:

- [Firefox Add-ons](https://addons.mozilla.org/addon/noutube/)
- [Chrome Web Store](https://chromewebstore.google.com/detail/noutube/cpmippodfdmialcoaegbbmhpdamodoif)

## Bygga Från Källkod

Tillägget har öppen källkod, delar kod med NouTube-appen och är byggt med [WXT](https://wxt.dev/) med Manifest V3:

```bash
bun link
bun install
cd extension
bun run dev          # Utvecklingsläge för Chrome
bun run dev:firefox  # Utvecklingsläge för Firefox
bun run build:all    # Bygg produktionspaket
```
