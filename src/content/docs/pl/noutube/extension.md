---
title: Rozszerzenie przeglądarki
description: Korzystanie z rozszerzenia przeglądarki NouTube w Firefox i Chrome.
sidebar:
  order: 6
---

NouTube zawiera rozszerzenie dla przeglądarek Mozilla Firefox i Google Chrome, które przenosi przejrzystsze przeglądanie, ulepszone odtwarzanie, spersonalizowane kanały, zakładki oraz narzędzia personalizacji NouTube bezpośrednio do Twojej przeglądarki na komputerze.

## Instalacja rozszerzenia

Zainstaluj NouTube bezpośrednio z oficjalnych sklepów z rozszerzeniami:

- [Firefox Add-ons](https://addons.mozilla.org/addon/noutube/)
- [Chrome Web Store](https://chromewebstore.google.com/detail/noutube/cpmippodfdmialcoaegbbmhpdamodoif)

## Budowanie ze źródeł

Rozszerzenie jest otwartoźródłowe, współdzieli kod z aplikacją NouTube i jest zbudowane przy użyciu [WXT](https://wxt.dev/) w oparciu o Manifest V3:

```bash
bun link
bun install
cd extension
bun run dev          # Tryb deweloperski Chrome
bun run dev:firefox  # Tryb deweloperski Firefox
bun run build:all    # Budowanie pakietów produkcyjnych
```
