---
title: Pertanyaan Sering Diajukan (FAQ)
description: Pertanyaan umum NouTube yang diambil dari issue GitHub.
sidebar:
  order: 9
---
Halaman ini merangkum pertanyaan pengguna yang berulang dari pelacak issue GitHub publik.

## Masalah login

Google sering menolak login dari aplikasi yang menyematkan halaman web, sehingga login di dalam NouTube bisa gagal baik di Android maupun desktop, biasanya dengan error "Browser atau aplikasi ini mungkin tidak aman". Di desktop, jika tidak ada tombol `Login` yang terlihat, coba buka menu `Data Anda di YouTube` terlebih dahulu.

Jika tidak bisa login, gunakan fitur **Inject cookie** sebagai gantinya:

1. Di komputer, login ke YouTube di Chrome atau browser berbasis Chromium lainnya, lalu ekspor cookie YouTube Anda dengan ekstensi browser (seperti `getcookies.txt`).
2. Di Android, salin file yang diekspor ke perangkat Anda.
3. Di NouTube, buka **Settings > Tools > Inject cookie**, impor file tersebut (atau tempel isinya), lalu simpan.

Metode ini melewati pemeriksaan browser aman Google dan saat ini merupakan solusi paling andal untuk masalah login, baik di Android maupun desktop.

Sumber:

- [Issue #142: Can't login to Google on Windows app](https://github.com/nonbili/NouTube/issues/142)

## Mengapa pembaruan terbaru belum tersedia di F-Droid?

Jadwal rilis di F-Droid tidak dikendalikan oleh pemelihara NouTube. F-Droid membangun dan menerbitkan pembaruan secara independen dalam beberapa batch, yang biasanya memakan waktu beberapa hari setelah versi baru dirilis di GitHub.

Jika Anda menginginkan versi terbaru segera, Anda dapat mengunduh APK dari halaman [GitHub Releases](https://github.com/nonbili/NouTube/releases). Namun, perlu diperhatikan bahwa versi GitHub menggunakan kunci penandatanganan yang berbeda dari F-Droid, sehingga Anda harus mencopot pemasangan versi F-Droid terlebih dahulu sebelum memasang APK dari GitHub.

Sumber:

- [Issue #16: Update request](https://github.com/nonbili/NouTube/issues/16)
- [Issue #14: Bug: rotate to landscape resets app to home page](https://github.com/nonbili/NouTube/issues/14)

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
