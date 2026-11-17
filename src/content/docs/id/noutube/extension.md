---
title: Ekstensi Browser
description: Menggunakan ekstensi browser NouTube di Firefox dan Chrome.
sidebar:
  order: 6
---

NouTube menyertakan ekstensi browser untuk Mozilla Firefox dan Google Chrome yang menghadirkan pengalaman menjelajah yang lebih bersih, pemutaran yang ditingkatkan, feed yang dipersonalisasi, markah, dan alat kustomisasi NouTube langsung ke browser desktop Anda.

## Memasang Ekstensi

Pasang NouTube langsung dari toko ekstensi resmi:

- [Firefox Add-ons](https://addons.mozilla.org/addon/noutube/)
- [Chrome Web Store](https://chromewebstore.google.com/detail/noutube/cpmippodfdmialcoaegbbmhpdamodoif)

## Membangun Dari Sumber

Ekstensi ini bersifat open-source, berbagi kode dengan aplikasi NouTube, dan dibangun menggunakan [WXT](https://wxt.dev/) dengan Manifest V3:

```bash
bun link
bun install
cd extension
bun run dev          # Mode pengembangan Chrome
bun run dev:firefox  # Mode pengembangan Firefox
bun run build:all    # Bangun paket produksi
```
