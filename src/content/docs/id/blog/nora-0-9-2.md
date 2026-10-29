---
title: "Nora 0.9.2: Lebih Banyak Cara untuk Mengikuti Feed Anda"
description: Baca feed Instagram dari imginn dan feed X dari instance Nitter, perbesar linimasa dan media galeri, serta pilih lokasi penyimpanan unduhan di Android.
sidebar:
  label: Rilis Nora 0.9.2
  order: 2
---

*Diterbitkan pada 29 Oktober 2026*

Instagram atau X berhenti memperbarui? **Nora 0.9.2** menambahkan sumber alternatif opsional untuk membantu menjaga feed Anda tetap mengalir. Rilis ini juga menghadirkan fitur zoom pada linimasa dan galeri, kontrol kecepatan video, serta pilihan lokasi untuk menyimpan unduhan di Android.

Jika Anda baru mengenal pembaca feed Nora, mulailah dengan [pengenalan versi 0.9.0](/id/blog/nora-0-9-0/).

## Baca Instagram dari imginn dan X dari Nitter

Mengikuti profil publik **Instagram** dan **X** tanpa masuk log dapat terhalang oleh permintaan login atau batas permintaan (rate limit). Nora 0.9.2 menambahkan dua alternatif opsional di **Pengaturan Feed** agar linimasa Anda tetap diperbarui tanpa perlu masuk ke akun:

- **Baca Instagram dari imginn:** Pilih **Saat Instagram gagal** untuk menggunakan imginn sebagai cadangan, atau **Pertama, lalu Instagram** untuk memeriksa imginn terlebih dahulu. Kedua mode ini hanya berfungsi saat Nora sedang dibuka. Jika imginn meminta Anda mengonfirmasi bahwa Anda bukan robot, Nora akan meminta Anda menyelesaikan pemeriksaan tersebut di dalam aplikasi.
- **Baca X dari Nitter:** Pilih **Saat X gagal** atau **Pertama, lalu X** dan tambahkan satu atau beberapa alamat instance Nitter. Nora akan mencoba instance Anda secara bergantian. Instance yang memerlukan pemeriksaan peramban hanya berfungsi saat Nora sedang dibuka.

Kedua opsi ini nonaktif secara default dan dapat diaktifkan kapan saja di **Pengaturan Feed**.

<div class="screenshot-gallery">
  <figure class="screenshot-card">
    <div class="screenshot-card__eyebrow">Pengaturan Feed</div>
    <h2 class="screenshot-card__title">Sumber imginn & Nitter</h2>
    <p class="screenshot-card__body">
      Baca profil Instagram dari imginn dan profil X dari instance Nitter yang Anda konfigurasi — sebagai cadangan atau sumber utama.
    </p>
    <div class="screenshot-frame">
      <img src="/blog/nora-0-9-2/feed-settings.png" alt="Pengaturan feed Nora 0.9.2 menampilkan opsi imginn dan Nitter" />
    </div>
  </figure>

  <figure class="screenshot-card">
    <div class="screenshot-card__eyebrow">Media</div>
    <h2 class="screenshot-card__title">Galeri Layar Penuh & Zoom</h2>
    <p class="screenshot-card__body">
      Cubit untuk memperbesar foto dan video di galeri layar penuh, tahan tepi layar untuk mempercepat pemutaran, atau simpan media secara langsung.
    </p>
    <div class="screenshot-frame">
      <img src="/blog/nora-0-9-2/media-gallery.png" alt="Layar galeri media layar penuh Nora 0.9.2" />
    </div>
  </figure>

  <figure class="screenshot-card">
    <div class="screenshot-card__eyebrow">Profil</div>
    <h2 class="screenshot-card__title">Buka Ulang Tab di Profil</h2>
    <p class="screenshot-card__body">
      Pindahkan tab seluler yang sedang terbuka ke profil Nora lain secara langsung dari menu header atau pengalih tab.
    </p>
    <div class="screenshot-frame">
      <img src="/blog/nora-0-9-2/reopen-in-profile.png" alt="Dialog buka ulang tab di profil pada Nora 0.9.2" />
    </div>
  </figure>
</div>

## Kontrol Video Feed, Zoom, dan Notifikasi

Menjelajahi linimasa dan media di dalam feed kini juga lebih fleksibel:

- **Kontrol kecepatan video di galeri:** Video feed kini menggunakan preferensi **Kecepatan pemutaran video default** dan **Tekan lama tepi untuk kecepatan 2x** Anda. Sentuh dan tahan tepi kiri atau kanan video yang sedang diputar untuk melompat ke kecepatan 2x, lalu geser secara horizontal untuk mengganti kecepatan.
- **Zoom linimasa dan galeri:** Cubit untuk memperbesar di perangkat seluler — atau tahan `Ctrl`/`Cmd` sambil menggulir di desktop — baik di linimasa feed maupun di galeri foto dan video layar penuh. Kontrol pemutaran dan penggeser waktu video tetap dapat diakses saat tampilan diperbesar.
- **Buka notifikasi di linimasa:** Mengetuk notifikasi postingan baru kini langsung membuka linimasa Nora yang sesuai.
- **Cadangan untuk video yang gagal diputar:** Saat video tidak dapat diputar di galeri layar penuh, Anda dapat membuka postingan tersebut secara langsung di situs aslinya.

## Unduhan, Profil, dan Peningkatan Situs

Rilis ini juga mencakup sejumlah peningkatan penjelajahan dan pengunduhan di berbagai platform:

- **Pilih lokasi penyimpanan unduhan di Android:** Aktifkan **Tanyakan tempat menyimpan setiap unduhan** di **Pengaturan → Unduhan** untuk memilih folder tujuan dan nama file bagi setiap unduhan. Rilis ini juga membuat penyimpanan unduhan lebih andal.
- **Buka ulang di profil dari menu header:** Pindahkan tab seluler yang aktif ke profil Nora lain langsung dari menu header, selain dengan menekan lama tab di pengalih tab.
- **Perbaikan TikTok dan Instagram:** Tonton video TikTok dengan tombol layar penuh baru dan unduh video lebih andal dari TikTok dan Instagram, termasuk saat keluar log dari Instagram.
- **Pengguliran lebih mulus dan pemeriksaan latar belakang:** Halaman tidak lagi melompat saat bilah alat disembunyikan atau ditampilkan, dan pemeriksaan feed di latar belakang bekerja lebih baik di Android.

Lihat [catatan perubahan](/id/nora/changelog/) untuk detail rilis lengkap.

## Dapatkan Nora 0.9.2

[Pasang atau perbarui Nora](/id/nora/install/) di Android, iOS, Linux, macOS, atau Windows.

Anda juga dapat menjelajahi [dokumentasi Nora](/id/nora/) atau membaca [catatan rilis di GitHub](https://github.com/nonbili/Nora/releases/tag/v0.9.2).
