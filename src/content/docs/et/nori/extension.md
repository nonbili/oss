---
title: Brauserilaiendus
description: Nori brauserilaienduse kasutamine Firefoxis ja Chrome'is.
sidebar:
  order: 5
---

Nori sisaldab kohalik-esimesena (local-first) brauserilaiendust Mozilla Firefoxile ja Google Chrome'ile.

## Põhifunktsioonid

- **Peegeldatud mobiilikogemus**: laienduse hüpikaken pakub samu loendeid, otsingusahtlit, ajalugu, loendite haldust ja seadeid nagu mobiilirakendus.
- **Ühe klõpsuga järjehoidjasse lisamine**: lisa aktiivne vahekaart kohe valitud loendisse koos automaatse pealkirja toomisega.
- **Kiire käivitaja**: otsi ja ava oma salvestatud lingid uutel vahekaartidel otse brauseri tööriistaribalt.
- **Kohalik salvestusruum**: salvestab järjehoidjad lokaalselt sinu brauseri laienduse salvestusruumi koos valikulise Nori Synci toega.
- **Privaatsusele keskendunud**: sirvimistegevust ega lehtede sisu ei jälgita. Nori saab ainult neid linke, mille sa ise selgesõnaliselt salvestad.

## Laienduse paigaldamine

Paigalda Nori otse ametlikest laienduste poodidest:

- [Firefox Add-ons](https://addons.mozilla.org/addon/nori/)
- [Chrome Web Store](https://chromewebstore.google.com/detail/nori/ojgmnocnegcbhlmfoackgoocnjbfejpg)

## Lähtekoodist ehitamine

Laiendus on avatud lähtekoodiga ja ehitatud [WXT](https://wxt.dev/) abil, kasutades Manifest V3:

```bash
cd extension
bun install
bun run dev          # Chrome development mode
bun run dev:firefox  # Firefox development mode
bun run build:all    # Build production zip packages
```
