---
title: Pārlūka paplašinājums
description: NouTube pārlūka paplašinājuma lietošana pārlūkos Firefox un Chrome.
sidebar:
  order: 6
---

NouTube ietver pārlūka paplašinājumu pārlūkiem Mozilla Firefox un Google Chrome, kas nodrošina NouTube tīrāku pārlūkošanu, uzlabotu atskaņošanu, personalizētas plūsmas, grāmatzīmes un pielāgošanas rīkus tieši jūsu datora pārlūkā.

## Paplašinājuma instalēšana

Instalējiet NouTube tieši no oficiālajiem paplašinājumu veikaliem:

- [Firefox Add-ons](https://addons.mozilla.org/addon/noutube/)
- [Chrome Web Store](https://chromewebstore.google.com/detail/noutube/cpmippodfdmialcoaegbbmhpdamodoif)

## Būvēšana no pirmkoda

Paplašinājums ir atvērtā pirmkoda, koplieto kodu ar NouTube lietotni un ir būvēts ar [WXT](https://wxt.dev/), izmantojot Manifest V3:

```bash
bun link
bun install
cd extension
bun run dev          # Chrome development mode
bun run dev:firefox  # Firefox development mode
bun run build:all    # Build production packages
```
