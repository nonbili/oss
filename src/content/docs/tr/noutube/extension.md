---
title: Tarayıcı Uzantısı
description: NouTube tarayıcı uzantısını Firefox ve Chrome'da kullanma.
sidebar:
  order: 6
---

NouTube, Mozilla Firefox ve Google Chrome için NouTube'un daha temiz gezinme, gelişmiş oynatma, kişiselleştirilmiş feed'ler, yer imleri ve özelleştirme araçlarını doğrudan masaüstü tarayıcınıza getiren bir tarayıcı uzantısı içerir.

## Uzantıyı Yükleme

NouTube'u doğrudan resmi uzantı mağazalarından yükleyin:

- [Firefox Add-ons](https://addons.mozilla.org/addon/noutube/)
- [Chrome Web Store](https://chromewebstore.google.com/detail/noutube/cpmippodfdmialcoaegbbmhpdamodoif)

## Kaynak Koddan Derleme

Uzantı açık kaynaklıdır, NouTube uygulamasıyla kod paylaşır ve Manifest V3 kullanılarak [WXT](https://wxt.dev/) ile oluşturulmuştur:

```bash
bun link
bun install
cd extension
bun run dev          # Chrome geliştirme modu
bun run dev:firefox  # Firefox geliştirme modu
bun run build:all    # Üretim paketlerini derleyin
```
