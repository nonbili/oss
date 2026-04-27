---
title: Pertanyaan Sering Diajukan (FAQ)
description: Pertanyaan umum NouTube yang diambil dari issue GitHub.
sidebar:
  order: 9
---
Halaman ini merangkum pertanyaan pengguna yang berulang dari pelacak issue GitHub publik.

## Masalah masuk (login) desktop

Jika aplikasi desktop tidak menampilkan tombol `Masuk` (Sign in) yang terlihat, coba buka menu `Data Anda di YouTube` terlebih dahulu. Jika halaman masuk terbuka tetapi Anda menerima kesalahan "browser atau aplikasi mungkin tidak aman", gunakan fitur **Suntikkan cookie (Inject cookie)**:

1. Gunakan ekstensi browser (seperti `getcookies.txt`) untuk mengekspor cookie YouTube Anda.
2. Impor cookie ke NouTube menggunakan tombol **Suntikkan cookie (Inject cookie)**.

Metode ini melewati pemeriksaan browser aman Google dan saat ini merupakan perbaikan paling andal untuk masalah masuk desktop.

Sumber:

- [Issue #142: Can't login to Google on Windows app](https://github.com/nonbili/NouTube/issues/142)

## YouTube Music tidak memuat dengan benar

Jika YouTube Music tidak memuat dengan benar, coba aktifkan **Situs desktop (Desktop site)** di menu aplikasi.

Sumber:

- [Issue #150: Noutube Music Error Message, Not Loading.](https://github.com/nonbili/NouTube/issues/150)

## NouTube membuka kembali antrean alih-alih halaman beranda

Jika NouTube terus memulihkan pemutaran atau membuka kembali ke item lama alih-alih halaman beranda, periksa apakah ikon antrean masih aktif. Dalam utas issue, pengembang mengidentifikasi antrean yang tidak dihapus sebagai alasan NouTube terus mencoba melanjutkan pemutaran.

Sumber:

- [Issue #138: Restoring playback](https://github.com/nonbili/NouTube/issues/138)

## Di mana saya harus melaporkan bug atau meminta fitur?

Gunakan repo GitHub:

- [nonbili/NouTube issues](https://github.com/nonbili/NouTube/issues)
