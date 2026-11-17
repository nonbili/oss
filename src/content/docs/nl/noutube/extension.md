---
title: Browserextensie
description: De NouTube-browserextensie gebruiken in Firefox en Chrome.
sidebar:
  order: 6
---

NouTube bevat een browserextensie voor Mozilla Firefox en Google Chrome die NouTube's rustigere browse-ervaring, verbeterd afspelen, gepersonaliseerde feeds, bladwijzers en aanpassingstools rechtstreeks naar je desktopbrowser brengt.

## De extensie installeren

Installeer NouTube rechtstreeks vanuit de officiële extensiewinkels:

- [Firefox Add-ons](https://addons.mozilla.org/addon/noutube/)
- [Chrome Web Store](https://chromewebstore.google.com/detail/noutube/cpmippodfdmialcoaegbbmhpdamodoif)

## Bouwen vanuit broncode

De extensie is open source, deelt code met de NouTube-app en is gebouwd met [WXT](https://wxt.dev/) met behulp van Manifest V3:

```bash
bun link
bun install
cd extension
bun run dev          # Chrome-ontwikkelmodus
bun run dev:firefox  # Firefox-ontwikkelmodus
bun run build:all    # Bouw productiepakketten
```
