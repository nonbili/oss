---
title: "Nora 0.9.4: Daha Temiz X Bağlantıları ve Daha Güvenilir İndirmeler"
description: X gönderi bağlantılarından paylaşım etiketlerini kaldırın, Ayrıştırma aşamasında takılan video indirmelerini düzeltin, dosya adlarını ve TikTok tam ekran kontrollerini koruyun.
date: 2026-11-03
product: nora
---

Kopyalanan bir gönderi bağlantısının paylaşımı kolay olmalı ve bir video indirmesi **Ayrıştırma** (Parsing) aşamasını takılmadan geçmelidir. Mobil için **Nora 0.9.4**, bağlantı paylaşımı, dosya kaydetme ve TikTok videoları izleme konusunda bir dizi düzeltmeyle her iki duruma da çözüm sunar.

## X Bağlantılarını Ekstra Parametreler Olmadan Paylaşın

Nora artık bir gönderi bağlantısını kopyaladığınızda veya paylaştığınızda `s` ve `t` gibi X paylaşım parametrelerini kaldırır. Örneğin:

```text
Before: https://x.com/nonbili/status/1234567890?s=20&t=example
After:  https://x.com/nonbili/status/1234567890
```

Gönderi adresi bozulmadan kalır; fazladan paylaşım belirteçleri temizlenir. Bu temizleme yalnızca X ve Twitter gönderi URL'leri için geçerlidir; alakasız sayfalarda aynı kısa adlara sahip parametrelere dokunulmaz.

## Videoları Kaydederken «Parsing» Aşamasını Geçin

Bazı video indirmeleri, indirme başlamadan önce **Parsing** (Ayrıştırma) aşamasında takılı kalabiliyordu. Bu sürüm, etkilenen indirmelerin devam edebilmesi için bu sorunu giderir.

Bir web sayfası tarafından `blob:` URL'si üzerinden oluşturulan dosyalar da mevcut olduğunda hedeflenen dosya adlarını korur. Bu sayede kaydedilen dosyaların daha sonra tanınması kolaylaşır.

## TikTok Tam Ekran Kontrollerini Geri Getirin

Nora'nın TikTok tam ekran kontrolleri, sayfa komut dosyası sayfa gövdesi hazır olmadan önce çalıştığında görünmeyebiliyordu. Kontroller artık bu yükleme sırasını destekler, böylece tam ekran düğmesi beklendiği gibi görüntülenebilir.

Tüm değişikliklerin listesi için [GitHub'daki sürüm notlarına](https://github.com/nonbili/Nora/releases/tag/v0.9.4) bakın.

## Nora'yı Edinin

[Nora'yı yükleyin veya güncelleyin](/tr/nora/install/) veya daha fazla bilgi edinmek için [Nora belgelerini](/tr/nora/) inceleyin.
