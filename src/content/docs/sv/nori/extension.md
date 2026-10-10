---
title: Webbläsartillägg
description: Använda Nori-webbläsartillägget på Firefox och Chrome.
sidebar:
  order: 5
---

Nori innehåller ett local-first webbläsartillägg för Mozilla Firefox och Google Chrome.

## Huvudfunktioner

- **Speglar mobilupplevelsen**: Tilläggets popup-fönster ger samma listor, sökpanel, historik, listhantering och inställningar som mobilappen.
- **Bokmärk med ett klick**: Lägg direkt till den aktuella fliken i vald lista med automatisk titelhämntning.
- **Snabbstart**: Sök och öppna sparade länkar i nya flikar direkt från webbläsarens verktygsfält.
- **Lokal lagring**: Sparar bokmärken lokalt i webbläsarens tilläggslagring med valfritt stöd för Nori Sync.
- **Integritetsfokus**: Ingen surfhistorik eller sidinnehåll spåras. Nori tar endast emot länkar som du uttryckligen sparar.

## Installera tillägget

Installera Nori direkt från de officiella tilläggsbutikerna:

- [Firefox Add-ons](https://addons.mozilla.org/addon/nori/)
- [Chrome Web Store](https://chromewebstore.google.com/detail/nori/ojgmnocnegcbhlmfoackgoocnjbfejpg)

## Bygga från källkod

Tillägget har öppen källkod och är byggt med [WXT](https://wxt.dev/) med Manifest V3:

```bash
cd extension
bun install
bun run dev          # Utvecklingsläge för Chrome
bun run dev:firefox  # Utvecklingsläge för Firefox
bun run build:all    # Bygg färdiga zip-paket
```
