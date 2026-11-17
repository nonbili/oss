---
title: Brauserilaiendus
description: NouTube'i brauserilaienduse kasutamine Firefoxis ja Chrome'is.
sidebar:
  order: 6
---

NouTube sisaldab brauserilaiendust Mozilla Firefoxile ja Google Chrome'ile, mis toob NouTube'i puhtama sirvimise, täiustatud esituse, isikupärastatud vood, järjehoidjad ja kohandamistööriistad otse sinu töölauabrauserisse.

## Laienduse paigaldamine

Paigalda NouTube otse ametlikest laienduste poodidest:

- [Firefox Add-ons](https://addons.mozilla.org/addon/noutube/)
- [Chrome Web Store](https://chromewebstore.google.com/detail/noutube/cpmippodfdmialcoaegbbmhpdamodoif)

## Lähtekoodist ehitamine

Laiendus on avatud lähtekoodiga, jagab koodi NouTube'i rakendusega ning on ehitatud [WXT](https://wxt.dev/) abil, kasutades Manifest V3:

```bash
bun link
bun install
cd extension
bun run dev          # Chrome'i arendusrežiim
bun run dev:firefox  # Firefoxi arendusrežiim
bun run build:all    # Tootmispakettide ehitamine
```
