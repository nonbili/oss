---
title: Ekstensi Browser
description: Menggunakan ekstensi browser Nori di Firefox dan Chrome.
sidebar:
  order: 5
---

Nori menyertakan ekstensi browser lokal-utama untuk Mozilla Firefox dan Google Chrome.

## Fitur Utama

- **Pengalaman seluler yang serupa**: Popup ekstensi menyediakan daftar, panel pencarian, riwayat, manajemen daftar, dan pengaturan yang sama seperti aplikasi seluler.
- **Bookmark satu klik**: Simpan tab aktif secara instan ke dalam daftar pilihan Anda dengan pengambilan judul otomatis.
- **Peluncur cepat**: Cari dan buka tautan yang disimpan ke tab baru langsung dari bilah alat browser Anda.
- **Penyimpanan lokal**: Menyimpan markah secara lokal di penyimpanan ekstensi browser Anda dengan dukungan opsional Nori Sync.
- **Fokus privasi**: Tidak ada aktivitas penjelajahan atau konten halaman yang dipantau. Nori hanya menerima tautan yang Anda simpan secara eksplisit.

## Memasang Ekstensi

Pasang Nori langsung dari toko ekstensi resmi:

- [Firefox Add-ons](https://addons.mozilla.org/addon/nori/)
- [Chrome Web Store](https://chromewebstore.google.com/detail/nori/ojgmnocnegcbhlmfoackgoocnjbfejpg)

## Membangun Dari Sumber

Ekstensi ini open-source dan dibangun menggunakan [WXT](https://wxt.dev/) dengan Manifest V3:

```bash
cd extension
bun install
bun run dev          # Mode pengembangan Chrome
bun run dev:firefox  # Mode pengembangan Firefox
bun run build:all    # Bangun paket produksi zip
```
