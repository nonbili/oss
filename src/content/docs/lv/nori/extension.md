---
title: Pārlūka paplašinājums
description: Nori pārlūka paplašinājuma lietošana pārlūkos Firefox un Chrome.
sidebar:
  order: 5
---

Nori ietver lokāli prioritāru pārlūka paplašinājumu pārlūkiem Mozilla Firefox un Google Chrome.

## Galvenās funkcijas

- **Atspoguļota mobilā pieredze**: paplašinājuma uznirstošais logs nodrošina tos pašus sarakstus, meklēšanas atvilktni, vēsturi, sarakstu pārvaldību un iestatījumus kā mobilā lietotne.
- **Grāmatzīmes pievienošana ar vienu klikšķi**: nekavējoties pievienojiet pašreizējo cilni izvēlētajam sarakstam ar automātisku nosaukuma izgūšanu.
- **Ātrais palaidējs**: meklējiet un atveriet saglabātās saites jaunās cilnēs tieši no pārlūka rīkjoslas.
- **Lokālā krātuve**: saglabā grāmatzīmes lokāli jūsu pārlūka paplašinājuma krātuvē ar izvēles Nori Sync atbalstu.
- **Orientēts uz privātumu**: netiek izsekota pārlūkošanas darbība vai lapu saturs. Nori saņem tikai tās saites, kuras jūs skaidri saglabājat.

## Paplašinājuma instalēšana

Instalējiet Nori tieši no oficiālajiem paplašinājumu veikaliem:

- [Firefox Add-ons](https://addons.mozilla.org/addon/nori/)
- [Chrome Web Store](https://chromewebstore.google.com/detail/nori/ojgmnocnegcbhlmfoackgoocnjbfejpg)

## Būvēšana no pirmkoda

Paplašinājums ir atvērtā pirmkoda un būvēts ar [WXT](https://wxt.dev/), izmantojot Manifest V3:

```bash
cd extension
bun install
bun run dev          # Chrome development mode
bun run dev:firefox  # Firefox development mode
bun run build:all    # Build production zip packages
```
