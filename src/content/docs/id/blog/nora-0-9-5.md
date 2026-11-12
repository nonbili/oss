---
title: "Nora 0.9.5: Masuk ke Proksi dan Tampilan X Lebih Tenang"
description: Masuk ke proksi di Android dan iOS 17 atau yang lebih baru, pilih konten yang ingin disembunyikan di X, default pencarian ke Terbaru, dan pertahankan postingan Facebook biasa.
sidebar:
  label: Rilis Nora 0.9.5
  order: 3
---

*Diterbitkan pada 6 November 2026*

**Nora 0.9.5 untuk perangkat seluler** menambahkan kolom nama pengguna dan kata sandi proksi di ponsel serta kontrol lebih besar terhadap apa yang ditampilkan di X. Pembaruan ini juga meningkatkan pemfilteran iklan Facebook dan impor cookie peramban.

## Masuk ke Proksi Anda di Ponsel

Buka **Pengaturan → Penjelajahan → Proksi** untuk memilih HTTP atau SOCKS, masukkan host dan port, serta tentukan nama pengguna dan kata sandi Anda. Proksi terotentikasi didukung di **Android** dan **iOS 17 atau yang lebih baru**, baik untuk penjelajahan web maupun permintaan feed.

Kredensial disimpan secara lokal di perangkat dan dikecualikan dari pencadangan serta sinkronisasi. Di iOS 16, dukungan proksi tetap terbatas pada permintaan feed HTTP tanpa otentikasi.

## Pilih Konten yang Ingin Disembunyikan di X

Di bawah **Pengaturan → Layanan → X**, Anda kini dapat memilih untuk menyembunyikan:

- **Antarmuka Grok**, untuk menghapus elemen antarmuka Grok.
- **Rekomendasi**, termasuk Siapa yang harus diikuti, tren, dan Jelajahi lebih banyak.
- **Jumlah interaksi**, untuk linimasa dengan angka yang lebih sedikit menyita perhatian.

Kontrol ini bersifat opsional. Bagian pengaturan yang sama juga menyediakan opsi **Default pencarian ke Terbaru**, sehingga pencarian langsung menampilkan postingan terbaru alih-alih hasil Populer. Anda tetap dapat beralih tab pencarian di X kapan pun menginginkan tampilan berbeda.

<div class="screenshot-gallery" style="max-width: 24rem;">
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">Kontrol X di Nora pada Android: pilih elemen antarmuka yang akan disembunyikan dan apakah pencarian dibuka di Terbaru.</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/nora-0-9-5/x-settings.webp" alt="Pengaturan X Nora di ponsel Pixel, menampilkan opsi Grok, rekomendasi, jumlah interaksi, dan pencarian Terbaru" width="1080" height="2220" loading="lazy" />
    </div>
  </figure>
</div>

## Pertahankan Postingan Facebook Biasa Tetap Terlihat

Pemfilteran iklan Facebook kini memeriksa langsung label bersponsor. Postingan biasa yang kebetulan memuat kata seperti «Ad» atau «広告» kini jauh lebih kecil kemungkinannya untuk disembunyikan secara tidak sengaja.

## Impor Cookie Lebih Andal

Mengimpor cookie peramban kini mempertahankan nama yang diawali dengan `__Host-` dan `__Secure-`. Mempertahankan awalan ini membantu situs web mengenali sesi yang diimpor dengan benar.

Lihat [catatan rilis di GitHub](https://github.com/nonbili/Nora/releases/tag/v0.9.5) untuk daftar perubahan lengkap.

## Dapatkan Nora

[Pasang atau perbarui Nora](/id/nora/install/), atau jelajahi [dokumentasi Nora](/id/nora/) untuk mempelajari lebih lanjut.
