---
title: Nori
description: Nori'ye genel bakış, yer imi yönetimi ve başlatıcı modeli.
sidebar:
  order: 1
---
<div class="product-overview-header">
  <img class="product-overview-header__logo" src="/app-logos/nori.png" alt="Nori logosu" />
  <p class="product-overview-header__meta">Android, iOS, masaüstü ve uzantı</p>
</div>

Nori; mobil cihazlar, masaüstü bilgisayarlar ve web tarayıcılarında bağlantılara hızlı günlük erişim için tasarlanmış açık kaynaklı bir yer imi yöneticisi ve başlatıcıdır.

Nori, bağlantıları derin tarayıcı klasör ağaçlarına veya kapalı ekosistemlere gömmek yerine yer imlerinizi anında başlatma, arama, zengin önizleme kartları ve sistem paylaşım menüsü entegrasyonuyla temiz, odaklanmış listeler halinde düzenler.

## Öne Çıkanlar

- Birden fazla özel yer imi listesi
- Sistem varsayılan tarayıcısında veya yerel özel sekmelerde anında başlatma
- Liste seçimi ve hızlı kaydetme seçenekleriyle herhangi bir uygulamadan paylaşılan URL'leri kaydetme
- Kompakt başlatıcı modu ve web sitesi kapak görselleri içeren zengin önizleme kartı modu
- Anahtar kelime ve etiket filtrelemeli hızlı arama paneli
- Son kullanılan ve son eklenen başlatma geçmişi
- Standart HTML yer imleri, düz metin ve tam JSON yedekleri ile içe ve dışa aktarma
- Esnek görünüm: Açık, Karanlık, AMOLED temaları ve özel vurgu renkleri
- Chrome ve Firefox için yerel öncelikli (local-first) tarayıcı uzantısı
- Linux, macOS ve Windows için platformlar arası masaüstü uygulaması
- Nori Sync ile isteğe bağlı çoklu cihaz senkronizasyonu

## Platformlar

- **Android**: Google Play'de ve doğrudan GitHub APK sürümleri olarak mevcuttur.
- **iOS**: iPhone ve iPad için App Store'da mevcuttur.
- **Masaüstü**: Linux (AppImage ve tar arşivi), macOS (Apple Silicon ve Intel) ve Windows için bağımsız yerel uygulamalar.
- **Tarayıcı Uzantısı**: Mozilla Firefox ve Google Chrome için Manifest V3 uzantısı.

## İlk Çalıştırma

Mantıklı bir ilk kurulum adımı:

1. Yaygın bağlantı kategorileriniz için birkaç liste oluşturun (ör. `Günlük`, `Araçlar`, `Okuma`, `İş`).
2. Birincil bağlantılarınızı ekleyin veya tarayıcınızın HTML dışa aktarımından mevcut yer imlerini içe aktarın.
3. Varsayılan tarayıcınızın bağlantıları beklendiği gibi açtığını doğrulamak için bir yer imini başlatmayı test edin.
4. Sistem paylaşım menüsünü kullanarak mobil tarayıcınızdan Nori'ye bir web sayfası paylaşmayı deneyin.
5. Karanlık mod veya tercih ettiğiniz vurgu rengi gibi görünüm ayarlarını özelleştirin.

## Nasıl Çalışır

Nori, yer imi koleksiyonunuzu belirli tarayıcı motorlarından ayırır:

- Android'de yer imleri `expo-web-browser` aracılığıyla Özel Sekmelerde (Custom Tabs) açılır veya doğrudan varsayılan tarayıcı uygulamanıza aktarılır.
- iOS'ta yer imleri yerel tarayıcı sayfasında veya sistem varsayılan tarayıcısında açılır.
- Masaüstünde ve uzantıda yer imleri doğrudan etkin tarayıcı sekmelerinizde açılır.

Bu yaklaşım; tercih ettiğiniz reklam engelleyiciler, oturumlar ve tarayıcı profilleriniz bozulmadan gezinmenizi sağlarken tüm bağlantılarınızı hızlı, aranabilir tek bir başlatıcıda düzenli tutar.

## Diğer Bağlantılar

Kaynak kodu, sürümler ve sorun takibi için GitHub deposunu kullanın:

- [nonbili/Nori](https://github.com/nonbili/Nori)

Mağaza rozetleri, APK'lar, masaüstü indirmeleri ve tarayıcı uzantısı paketleri için [Yükle](/tr/nori/install/) sayfasıyla devam edin.
