---
title: "Nora 0.9.3: İndirmeleri Daha Hızlı Açın, Daha Akıcı Gezinin"
description: Tamamlanan indirmeleri bildirimlerinden açın, Android'de döngüsel görselleri kaydırın ve arka plan işlemlerini ve bellek kullanımını azaltın.
sidebar:
  label: Nora 0.9.3 Sürümü
  order: 5
---

*31 Ekim 2026'da yayımlandı*

Mobil için **Nora 0.9.3**, doğrudan indirme onayında yer alan kısayol sayesinde kaydedilen bir dosyaya erişmeyi kolaylaştırır. Ayrıca Android'deki döngüsel görsel (carousel) hareketlerini düzeltir ve artık kullanılmayan sayfaların arka plandaki yükünü azaltır.

## Doğrudan İndirilen Dosyanıza Gidin

**Android**'de indirme bildirimleri, kaydedilen dosyayı uyumlu bir uygulamada açmak için artık bir **Aç** düğmesi içerir. Akıştan tek bir fotoğraf veya video kaydederken de bu seçenek sunulur.

Dosyayı kaydedin, ardından İndirilenler klasöründe arama yapmadan dosyaya ulaşmak için onay mesajındaki düğmeyi kullanın.

## Android'de Döngüsel Görselleri Kaydırın

Bir sayfanın fotoğrafları arasında yatay olarak kaydırma yaparken yanlışlıkla sayfayı yenileme (pull-to-refresh) tetiklenebiliyordu. Nora artık yatay kaydırmaları dikey sürüklemelerden ayırt eder, böylece sayfayı yeniden yüklemeden bir döngüsel görsel grubunda gezinebilirsiniz.

## Daha Az Arka Plan İşi, Daha İyi Sekme Temizliği

Android'de Nora, uygulama arka plandayken WebView zamanlayıcılarını duraklatarak gereksiz CPU ve pil kullanımını azaltır. Akış videosu ilerleme güncellemeleri de yalnızca yakınlaştırma kontrolleri ihtiyaç duyduğunda çalışır.

Kapatılan sekmeler ve kapatılan açılır pencereler artık Android'de WebView kaynaklarını daha güvenilir bir şekilde serbest bırakır ve iOS'ta kapatılan sekmeler düzgün bir şekilde temizlenir. Bu sürüm ayrıca Android'de bir bağlantıyı yeni sekmede açarken boş sayfa kalmasına yol açabilen bir sorunu da giderir.

Tüm değişikliklerin listesi için [GitHub'daki sürüm notlarına](https://github.com/nonbili/Nora/releases/tag/v0.9.3) bakın.

## Nora'yı Edinin

[Nora'yı yükleyin veya güncelleyin](/tr/nora/install/) veya daha fazla bilgi edinmek için [Nora belgelerini](/tr/nora/) inceleyin.
