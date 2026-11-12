---
title: "Nora 0.9.4: Tautan X Lebih Bersih dan Unduhan Lebih Andal"
description: Hapus token berbagi dari tautan postingan X, perbaiki unduhan video yang macet di Parsing, serta pertahankan nama file dan kontrol layar penuh TikTok.
sidebar:
  label: Rilis Nora 0.9.4
  order: 4
---

*Diterbitkan pada 3 November 2026*

Tautan postingan yang disalin seharusnya mudah dibagikan, dan unduhan video harus dapat melewati tahap **Parsing**. **Nora 0.9.4 untuk perangkat seluler** menjawab kedua hal tersebut dengan serangkaian perbaikan untuk berbagi tautan, menyimpan file, dan menonton video TikTok.

## Bagikan Tautan X Tanpa Token Tambahan

Nora kini menghapus parameter berbagi X seperti `s` dan `t` saat Anda menyalin atau membagikan tautan postingan. Sebagai contoh:

```text
Before: https://x.com/nonbili/status/1234567890?s=20&t=example
After:  https://x.com/nonbili/status/1234567890
```

Alamat postingan tetap utuh; token berbagi tambahan dibersihkan. Pembersihan ini berlaku untuk URL postingan X dan Twitter, sehingga parameter dengan nama pendek serupa pada halaman lain yang tidak terkait tidak terpengaruh.

## Lewati Tahap «Parsing» Saat Menyimpan Video

Beberapa unduhan video sebelumnya dapat macet pada tahap **Parsing** sebelum proses unduhan dimulai. Rilis ini mengatasi masalah tersebut sehingga unduhan yang terpengaruh dapat berjalan dengan semestinya.

File yang dihasilkan oleh halaman web melalui URL `blob:` juga mempertahankan nama file aslinya jika tersedia. Hal ini memudahkan Anda mengenali file yang disimpan di kemudian hari.

## Pulihkan Kontrol Layar Penuh TikTok

Kontrol layar penuh TikTok di Nora terkadang tidak muncul jika skrip halaman berjalan sebelum badan dokumen siap sepenuhnya. Kontrol kini menangani urutan pemuatan tersebut dengan benar, sehingga tombol layar penuh muncul seperti yang diharapkan.

Lihat [catatan rilis di GitHub](https://github.com/nonbili/Nora/releases/tag/v0.9.4) untuk daftar perubahan lengkap.

## Dapatkan Nora

[Pasang atau perbarui Nora](/id/nora/install/), atau jelajahi [dokumentasi Nora](/id/nora/) untuk mempelajari lebih lanjut.
