---
title: Masaüstü
description: Nori'yi Linux, macOS ve Windows'ta kullanma.
sidebar:
  order: 4
---

Nori; Linux, macOS ve Windows için özel bir masaüstü uygulaması sunar.

## Masaüstü Neler Ekler

Masaüstü sürümü, Nori'nin düzenli yer imi başlatıcısını klavye dostu ve hızlı bir yardımcı olarak bilgisayarınıza getirir:

- **Bağımsız başlatıcı**: Bağlantılarınızı tarayıcı sekme çubuklarını doldurmadan bağımsız bir pencerede düzenli tutun.
- **Yerel öncelikli mimari**: [Wails v3](https://v3.wails.io/) ve Go ile oluşturulmuş olup yerel işletim sistemi pencere yönetimini modern web arayüz bileşenleriyle birleştirir.
- **Sistem tarayıcısında açma**: Bağlantılara tıklamak onları doğrudan varsayılan masaüstü tarayıcınızda açar.
- **Senkronizasyon entegrasyonu**: Masaüstü, mobil ve tarayıcı uzantısı arasında yer imlerini sorunsuz paylaşmak için Nori Sync hesabınızı bağlayın.

## Platform Paketleri

- **Linux**: `amd64` için taşınabilir AppImage ve `.tar.gz` paketleri olarak dağıtılır.
- **macOS**: Apple Silicon (`arm64`) ve Intel (`amd64`) için evrensel destek, `.dmg` yükleyicileri ve `.app.zip` paketleri olarak dağıtılır.
- **Windows**: Kurulum yükleyicileri (`.exe`) ve taşınabilir `.zip` arşivleri olarak dağıtılır.

## Linux Sistem Gereksinimleri

Linux AppImage paketi sistem WebKit motorunu kullanır. Sisteminizde GTK 3 ve `webkit2gtk-4.1` paketlerinin kurulu olduğundan emin olun:

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

## Sürümler

En son masaüstü indirmeleri ve sürüm notları için [Nori GitHub Sürümleri](https://github.com/nonbili/Nori/releases) sayfasını ziyaret edin.
