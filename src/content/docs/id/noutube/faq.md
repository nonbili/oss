---
title: Pertanyaan Sering Diajukan (FAQ)
description: Pertanyaan umum NouTube yang diambil dari issue GitHub.
sidebar:
  order: 9
---
Halaman ini merangkum pertanyaan pengguna yang berulang dari pelacak issue GitHub publik.

## Tombol masuk desktop hilang atau login tampak macet

Jika aplikasi desktop tidak menampilkan tombol `Masuk` (Sign in) yang terlihat, coba buka menu `Data Anda di YouTube` terlebih dahulu. Dalam diskusi issue, jalur tersebut memungkinkan pengguna yang terdampak mencapai alur masuk, dan pengembang kemudian mengatakan tombol yang terlihat seharusnya kembali di `v0.1.6`.

Sumber:

- [Issue #46: desktop version never logs in always error](https://github.com/nonbili/NouTube/issues/46)

## Login desktop masih gagal bahkan saat halaman masuk terbuka

Ada laporan bahwa beberapa penyiapan desktop masih gagal masuk Google bahkan setelah menghapus data. Utas issue tidak berakhir dengan perbaikan universal yang dikonfirmasi, jadi panduan praktisnya adalah:

- perbarui ke rilis desktop terbaru
- hapus data webview/profil aplikasi jika Anda sudah mencoba masuk
- jika masih gagal, laporkan OS, format paket, dan screenshot Anda di GitHub

Sumber:

- [Issue #103: Unable to login from desktop client](https://github.com/nonbili/NouTube/issues/103)

## YouTube Music tidak memuat dengan benar

Salah satu jalur pemecahan masalah yang didokumentasikan adalah:

1. Pastikan `NouTube` adalah aplikasi default untuk `music.youtube.com`.
2. Jika aplikasi resmi YouTube Music terinstal, hapus penanganan tautan default-nya terlebih dahulu.
3. Jika masalah berlanjut, coba user agent kustom dari `Settings > Tools > Custom user agent`.

Panduan ini datang langsung dari pengembang di utas issue. Ini adalah solusi sementara, bukan perbaikan yang dijamin untuk setiap perangkat.

Sumber:

- [Issue #150: Noutube Music Error Message, Not Loading.](https://github.com/nonbili/NouTube/issues/150)

## Beberapa iklan masih lolos

Ada laporan tentang iklan pendek YouTube Premium yang muncul sebelum video. Pengembang mengarahkan pengguna ke `v0.4.9`, yang menyiratkan perbaikan pemblokiran iklan dikirimkan pada rilis berikutnya. Jika Anda melihat iklan:

- perbarui ke rilis terbaru dari F-Droid atau GitHub
- jika masalah berlanjut, buka issue baru dengan versi aplikasi dan screenshot

Sumber:

- [Issue #117: Ad not blocked](https://github.com/nonbili/NouTube/issues/117)

## NouTube membuka kembali antrean alih-alih halaman beranda

Jika NouTube terus memulihkan pemutaran atau membuka kembali ke item lama alih-alih halaman beranda, periksa apakah ikon antrean masih aktif. Dalam utas issue, pengembang mengidentifikasi antrean yang tidak dihapus sebagai alasan NouTube terus mencoba melanjutkan pemutaran.

Sumber:

- [Issue #138: Restoring playback](https://github.com/nonbili/NouTube/issues/138)

## Di mana saya harus melaporkan bug atau meminta fitur?

Gunakan repo GitHub:

- [nonbili/NouTube issues](https://github.com/nonbili/NouTube/issues)
