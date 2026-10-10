---
title: Tarayıcı Uzantısı
description: Nori tarayıcı uzantısını Firefox ve Chrome'da kullanma.
sidebar:
  order: 5
---

Nori, Mozilla Firefox ve Google Chrome için yerel öncelikli bir tarayıcı uzantısı içerir.

## Temel Özellikler

- **Mobil deneyimi yansıtır**: Uzantı açılır penceresi, mobil uygulamayla aynı listeleri, arama panelini, geçmişi, liste yönetimini ve ayarları sunar.
- **Tek tıklamayla yer imi ekleme**: Geçerli sekmeyi otomatik başlık alımıyla seçtiğiniz listeye anında yer imi olarak kaydedin.
- **Hızlı başlatıcı**: Kaydedilen bağlantılarınızı doğrudan tarayıcı araç çubuğunuzdan arayın ve yeni sekmelerde açın.
- **Yerel depolama**: İsteğe bağlı Nori Sync desteğiyle yer imlerini yerel olarak tarayıcınızın uzantı depolama alanında saklar.
- **Gizlilik odaklı**: Hiçbir tarama etkinliği veya sayfa içeriği izlenmez. Nori yalnızca açıkça kaydettiğiniz bağlantıları alır.

## Uzantıyı Yükleme

Nori'yi doğrudan resmi uzantı mağazalarından yükleyin:

- [Firefox Add-ons](https://addons.mozilla.org/addon/nori/)
- [Chrome Web Store](https://chromewebstore.google.com/detail/nori/ojgmnocnegcbhlmfoackgoocnjbfejpg)

## Kaynak Koddan Derleme

Uzantı açık kaynaklıdır ve Manifest V3 kullanılarak [WXT](https://wxt.dev/) ile oluşturulmuştur:

```bash
cd extension
bun install
bun run dev          # Chrome geliştirme modu
bun run dev:firefox  # Firefox geliştirme modu
bun run build:all    # Üretim zip paketlerini derleyin
```
