---
title: Desktop
description: Menggunakan Nori di Linux, macOS, dan Windows.
sidebar:
  order: 4
---

Nori menyediakan aplikasi desktop khusus untuk Linux, macOS, dan Windows.

## Keunggulan Versi Desktop

Versi desktop menghadirkan peluncur markah Nori yang terorganisir ke komputer Anda sebagai pendamping yang cepat dan ramah keyboard:

- **Peluncur mandiri**: Kelola tautan Anda dalam jendela terpisah tanpa memenuhi bilah tab browser.
- **Arsitektur lokal-utama**: Dibangun dengan [Wails v3](https://v3.wails.io/) dan Go, memadukan kemampuan jendela native OS dengan antarmuka web modern.
- **Peluncuran browser sistem**: Mengklik tautan akan membukanya langsung di browser desktop default Anda.
- **Integrasi sinkronisasi**: Hubungkan akun Nori Sync Anda untuk berbagi markah dengan mulus antara desktop, seluler, dan ekstensi browser.

## Paket Platform

- **Linux**: Didistribusikan sebagai paket portabel AppImage dan `.tar.gz` untuk `amd64`.
- **macOS**: Dukungan Universal untuk Apple Silicon (`arm64`) dan Intel (`amd64`), didistribusikan sebagai installer `.dmg` dan bundel `.app.zip`.
- **Windows**: Didistribusikan sebagai penginstal setup (`.exe`) dan arsip portabel `.zip`.

## Persyaratan Sistem Linux

Linux AppImage menggunakan mesin WebKit sistem. Pastikan sistem Anda telah menginstal GTK 3 dan `webkit2gtk-4.1`:

- **Debian / Ubuntu**:
  ```bash
  sudo apt install libwebkit2gtk-4.1-0 libgtk-3-0 libfuse2
  ```
- **Fedora**:
  ```bash
  sudo dnf install webkit2gtk4.1 gtk3
  ```
- **Arch Linux**:
  ```bash
  sudo pacman -S webkit2gtk-4.1 gtk3
  ```

## Rilis

Untuk unduhan desktop terbaru dan catatan rilis, kunjungi halaman [Nori GitHub Releases](https://github.com/nonbili/Nori/releases).
