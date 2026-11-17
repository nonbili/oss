---
title: Browserextensie
description: De Nori-browserextensie gebruiken in Firefox en Chrome.
sidebar:
  order: 5
---

Nori bevat een local-first browserextensie voor Mozilla Firefox en Google Chrome.

## Belangrijkste functies

- **Gespiegelde mobiele ervaring**: De extensie-pop-up biedt dezelfde lijsten, zoeklade, geschiedenis, lijstbeheer en instellingen als de mobiele app.
- **Bladwijzers maken met één klik**: Voeg het huidige tabblad direct toe aan je gekozen lijst met automatische titelophaling.
- **Snelle launcher**: Doorzoek en open je opgeslagen links in nieuwe tabbladen rechtstreeks vanuit de werkbalk van je browser.
- **Lokale opslag**: Slaat bladwijzers lokaal op in de extensieopslag van je browser met optionele Nori Sync-ondersteuning.
- **Gericht op privacy**: Er wordt geen browse-activiteit of pagina-inhoud gevolgd. Nori ontvangt alleen links die je expliciet opslaat.

## De extensie installeren

Installeer Nori rechtstreeks vanuit de officiële extensiewinkels:

- [Firefox Add-ons](https://addons.mozilla.org/addon/nori/)
- [Chrome Web Store](https://chromewebstore.google.com/detail/nori/ojgmnocnegcbhlmfoackgoocnjbfejpg)

## Bouwen vanuit broncode

De extensie is open source en gebouwd met [WXT](https://wxt.dev/) met behulp van Manifest V3:

```bash
cd extension
bun install
bun run dev          # Chrome-ontwikkelmodus
bun run dev:firefox  # Firefox-ontwikkelmodus
bun run build:all    # Bouw productie-zippakketten
```
