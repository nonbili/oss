---
title: Pertanyaan Sering Diajukan (FAQ)
description: Pertanyaan umum Nora yang diambil dari issue GitHub.
---
Halaman ini merangkum pertanyaan pengguna yang berulang dari pelacak issue GitHub publik.

## Bisakah Nora membuka tautan Instagram atau Facebook langsung dari aplikasi lain?

Ya, itu dimaksudkan untuk berfungsi. Pengembang mengatakan Anda mungkin perlu:

- aktifkan perilaku Android `Buka secara default` untuk Nora
- hapus instalan atau nonaktifkan aplikasi resmi jika terus mengklaim tautan yang sama
- perbarui ke rilis Nora yang lebih baru jika deep link membuka aplikasi tetapi bukan postingan yang diminta

Sumber:

- [Issue #51: Support opening links in Nora](https://github.com/nonbili/Nora/issues/51)

## Instagram gagal dibuka di dalam Nora

Issue terbuka saat ini menunjukkan beberapa pengguna masih menemui halaman kesalahan Instagram bahkan setelah mencoba muat ulang, mode situs desktop, dan menghapus data webview. Itu berarti belum ada perbaikan yang dikonfirmasi. Jika ini terjadi pada perangkat Anda:

- coba muat ulang
- coba mode situs desktop
- hapus data webview Nora
- jika masih gagal, periksa GitHub untuk pembaruan atau tambahkan detail perangkat Anda ke issue tersebut

Sumber:

- [Issue #147: Issue when trying to open Instagram](https://github.com/nonbili/Nora/issues/147)

## Media terus diputar setelah saya keluar dari aplikasi

Ini dilaporkan untuk audio Instagram yang terus berlanjut di latar belakang tanpa kontrol yang berguna. Pengembang menjawab bahwa itu akan diperbaiki pada rilis berikutnya, jadi hal pertama yang harus dilakukan adalah memperbarui Nora ke versi terbaru yang tersedia di store atau saluran rilis Anda.

Sumber:

- [Issue #119: can you make it stop playing in background ? pls](https://github.com/nonbili/Nora/issues/119)

## Bisakah saya mengunduh gambar atau video?

Ya, setidaknya sebagian dari ini sudah didukung:

- tekan lama pada gambar untuk menampilkan menu unduhan
- unduhan Facebook dan Instagram Reel sudah didukung saat issue tersebut dibahas
- dukungan unduhan video X ditambahkan setelahnya

Sumber:

- [Issue #153: download](https://github.com/nonbili/Nora/issues/153)

## Mengapa masuk X gagal?

Diskusi issue menunjukkan bahwa masuk email/kata sandi normal diharapkan berfungsi, sementara masuk berbasis Google di webview memerlukan pekerjaan tambahan. Pengembang kemudian mengatakan menu `Inject cookie` ditambahkan di `v0.1.5` sebagai solusi bagi pengguna yang terdampak.

Sumber:

- [Issue #1: Unable to sign in to X](https://github.com/nonbili/Nora/issues/1)

## Bisakah saya menggunakan ekstensi browser saya seperti uBlock Origin atau Dark Reader di dalam Nora?

Tidak dengan cara yang sama seperti profil browser lengkap. Dalam diskusi permintaan fitur, pengembang mengarahkan pengguna ke dukungan CSS kustom Nora sendiri untuk perubahan UI alih-alih menjanjikan dukungan ekstensi browser yang disematkan.

Sumber:

- [Issue #96: Open the socials in the webview provided by browser](https://github.com/nonbili/Nora/issues/96)

## Di mana saya harus melaporkan bug atau meminta fitur?

Gunakan repo GitHub:

- [nonbili/Nora issues](https://github.com/nonbili/Nora/issues)
