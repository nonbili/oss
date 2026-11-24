---
title: "NouTube 0.7.11 Menghadirkan Bilah Alat Android Kustom dan Unduhan Video di iOS"
description: Letakkan tindakan favorit Anda di bilah alat Android, geser untuk layar penuh, sembunyikan komentar YouTube, dan simpan video di iPhone dan iPad.
date: 2026-11-24
product: noutube
---

NouTube 0.7.11 memungkinkan Anda meletakkan tindakan seperti **Bagikan** dan **Buka URL** langsung di bilah alat Android. Di iPhone dan iPad, kini Anda dapat mengunduh video yang kompatibel dari **Alat**, dan video mulai diputar lebih cepat. Pembaruan seluler ini juga menambahkan gestur geser untuk layar penuh dan pengaturan untuk menyembunyikan komentar YouTube.

## Letakkan Tindakan yang Paling Sering Dipakai di Bilah Alat Android

Buka **Pengaturan → Tampilan → Tombol bilah alat**. Gunakan sakelar untuk memilih tombol yang ditampilkan, lalu seret pegangan untuk mengatur urutannya. Misalnya, aktifkan **Bagikan** dan **Buka URL** lalu seret keduanya ke bagian atas daftar agar kedua tindakan selalu mudah dijangkau saat menonton video.

Anda juga dapat menambahkan **Alat**, **Situs desktop**, **Pengaturan**, atau pengalih **YouTube / YouTube Music** ke bilah alat. Daftar yang sama memungkinkan Anda mengatur ulang urutan tombol yang sudah ada seperti **Pustaka**, **Feed channel**, dan **Riwayat**.

<div class="screenshot-gallery">
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">Aktifkan Bagikan dan Buka URL lalu seret keduanya ke bagian atas daftar.</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/noutube-0-7-11/android-toolbar-settings.webp" alt="Pengaturan Tampilan Android dengan Bagikan dan Buka URL aktif di dua baris pertama serta pegangan seret di sebelah kanan" width="1080" height="2220" loading="lazy" />
    </div>
  </figure>
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">Bagikan dan Buka URL kini menjadi dua tombol pertama di bilah alat halaman tonton.</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/noutube-0-7-11/android-toolbar-result.webp" alt="Bilah alat NouTube di atas halaman tonton Big Buck Bunny, dengan ikon Bagikan dan ikon tautan Buka URL di paling kiri" width="1080" height="2220" loading="lazy" />
    </div>
  </figure>
</div>

## Unduh Video di iPhone dan iPad

Untuk video yang boleh Anda simpan, buka **Alat** dan ketuk **Unduh video**. NouTube mengunduh MP4 yang kompatibel jika tersedia. Setelah unduhan selesai, ketuk **Ekspor** untuk menyimpan atau membagikan file.

<div class="screenshot-gallery">
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">Alat mengisi URL video yang sedang diputar.</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/noutube-0-7-11/ios-download-tools.webp" alt="Panel unduhan iPhone dengan URL video terisi, catatan ketersediaan MP4, dan tombol Unduh video" width="1206" height="2622" loading="lazy" />
    </div>
  </figure>
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">Ekspor muncul di Riwayat Unduhan saat file sudah siap.</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/noutube-0-7-11/ios-download-export.webp" alt="Entri Riwayat Unduhan di iPhone dengan tanda centang hijau, status Unduhan selesai, dan tombol Ekspor" width="1206" height="2622" loading="lazy" />
    </div>
  </figure>
</div>

*Big Buck Bunny* © 2008 Blender Foundation / [www.bigbuckbunny.org](https://peach.blender.org/about/). [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/).

Pemutaran video yang lebih cepat dimulai, yang diperkenalkan di Android pada 0.7.10, kini juga berlaku di iOS. Di iPad, kontrol pemutaran YouTube tetap tersedia dalam layar penuh.

## Geser untuk Layar Penuh atau Sembunyikan Komentar

Di perangkat seluler, geser ke atas pada pemutar YouTube untuk masuk ke layar penuh dan geser ke bawah untuk kembali ke halaman tonton. Mulailah geseran pada video itu sendiri agar Anda tetap dapat menggunakan kontrol pemutaran dan menggeser bilah progres seperti biasa.

Untuk menghapus bagian komentar dari halaman tonton YouTube, buka **Pengaturan → Preferensi → Bebas gangguan** lalu aktifkan **Sembunyikan komentar**.

<div class="screenshot-gallery" style="max-width: 24rem;">
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">Sembunyikan komentar ada di bagian bawah pengaturan Bebas gangguan.</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/noutube-0-7-11/hide-comments-setting.webp" alt="Layar Preferensi Android dengan sakelar Sembunyikan komentar aktif di bagian bawah bagian Bebas gangguan" width="1080" height="2220" loading="lazy" />
    </div>
  </figure>
</div>

## Perbaikan Lainnya

- Unduhan audio Opus kini menggunakan ekstensi `.opus`. NouTube memperbaiki masalah saat memulai yt-dlp pada build rilis Android dan menangani kegagalan unduhan serta pemutaran dengan lebih andal.
- Halaman tonton desktop YouTube kini pas di layar Android yang sempit. Pratinjau feed tidak lagi masuk ke riwayat tontonan di Android, dan **Berikutnya** di kontrol YouTube Music sistem tidak lagi mengubah antrean milik NouTube.
- Rilis ini memperbarui terjemahan bahasa Italia, Polandia, Portugis Brasil, Rusia, dan Ukraina.

[Lihat rilis di GitHub](https://github.com/nonbili/NouTube/releases/tag/v0.7.11).

## Dapatkan NouTube

[Instal atau perbarui NouTube](/id/noutube/install/), atau jelajahi [dokumentasi NouTube](/id/noutube/).
