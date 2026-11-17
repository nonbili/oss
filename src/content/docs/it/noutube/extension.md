---
title: Estensione per browser
description: Utilizzo dell'estensione per browser NouTube su Firefox e Chrome.
sidebar:
  order: 6
---

NouTube include un'estensione per browser per Mozilla Firefox e Google Chrome che porta la navigazione più pulita, la riproduzione migliorata, i feed personalizzati, i segnalibri e gli strumenti di personalizzazione di NouTube direttamente sul tuo browser desktop.

## Installazione dell'estensione

Installa NouTube direttamente dagli store ufficiali delle estensioni:

- [Firefox Add-ons](https://addons.mozilla.org/addon/noutube/)
- [Chrome Web Store](https://chromewebstore.google.com/detail/noutube/cpmippodfdmialcoaegbbmhpdamodoif)

## Compilazione dal codice sorgente

L'estensione è open source, condivide il codice con l'app NouTube ed è sviluppata con [WXT](https://wxt.dev/) utilizzando Manifest V3:

```bash
bun link
bun install
cd extension
bun run dev          # Modalità di sviluppo per Chrome
bun run dev:firefox  # Modalità di sviluppo per Firefox
bun run build:all    # Crea i pacchetti di produzione
```
