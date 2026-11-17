---
title: Browser-Erweiterung
description: Verwendung der NouTube-Browser-Erweiterung für Firefox und Chrome.
sidebar:
  order: 6
---

NouTube enthält eine Browser-Erweiterung für Mozilla Firefox und Google Chrome, die das aufgeräumte Surfen, die verbesserte Wiedergabe, personalisierte Feeds, Lesezeichen und Anpassungswerkzeuge von NouTube direkt in Ihren Desktop-Browser bringt.

## Installation der Erweiterung

Installieren Sie NouTube direkt aus den offiziellen Erweiterungs-Stores:

- [Firefox Add-ons](https://addons.mozilla.org/addon/noutube/)
- [Chrome Web Store](https://chromewebstore.google.com/detail/noutube/cpmippodfdmialcoaegbbmhpdamodoif)

## Aus dem Quellcode erstellen

Die Erweiterung ist quelloffen, teilt sich Code mit der NouTube-App und ist mit [WXT](https://wxt.dev/) unter Verwendung von Manifest V3 erstellt:

```bash
bun link
bun install
cd extension
bun run dev          # Chrome-Entwicklungsmodus
bun run dev:firefox  # Firefox-Entwicklungsmodus
bun run build:all    # Produktionspakete erstellen
```
