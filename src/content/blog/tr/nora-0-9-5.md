---
title: "Nora 0.9.5: Proxy Girişi ve Daha Sessiz Bir X"
description: Android ve iOS 17 veya sonraki sürümlerde proxy oturumu açın, X'te nelerin gizleneceğini seçin, aramaları varsayılan olarak En Son sekmesinde açın ve sıradan Facebook gönderilerini görünür tutun.
date: 2026-11-06
product: nora
---

Mobil için **Nora 0.9.5**, mobilde proxy kullanıcı adı ve şifre alanları ekler ve X'te nelerin görüneceği üzerinde daha fazla denetim sağlar. Ayrıca Facebook reklam filtrelemesini ve tarayıcı çerez içe aktarımını geliştirir.

## Mobil Cihazınızda Proxy Oturumu Açın

HTTP veya SOCKS seçmek, ana bilgisayarı ve bağlantı noktasını girmek, kullanıcı adı ve şifrenizi belirtmek için **Ayarlar → Gezinme → Proxy** bölümünü açın. Kimlik doğrulamalı proxyler hem web tarama hem de akış istekleri için **Android** ve **iOS 17 veya sonraki sürümlerde** desteklenir.

Kimlik bilgileri cihazda kalır ve yedekleme ile senkronizasyondan hariç tutulur. iOS 16'da proxy desteği, akışlar için kimlik doğrulaması yapılmayan HTTP proxy istekleriyle sınırlı kalmaya devam eder.

## X'te Nelerin Gizleneceğini Seçin

**Ayarlar → Hizmetler → X** altında artık şunları gizlemeyi seçebilirsiniz:

- **Grok Arayüzü**, Grok arayüz öğelerini kaldırmak için.
- **Öneriler**, Kimi takip etmeli, gündemler ve Daha fazlasını keşfet dahil.
- **Etkileşim sayıları**, dikkat çekmeye çalışan daha az sayının olduğu bir zaman akışı için.

Bu kontroller isteğe bağlıdır. Aynı ayarlar bölümü ayrıca **Aramaları varsayılan olarak En Son'da aç** seçeneğini sunar, böylece aramalar Popüler sonuçlar yerine en son gönderilerle açılır. Farklı bir görünüm istediğinizde X'te arama sekmelerini değiştirmeye devam edebilirsiniz.

<div class="screenshot-gallery" style="max-width: 24rem;">
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">Android'de Nora'nın X kontrolleri: hangi arayüz öğelerinin gizleneceğini ve aramaların En Son'da açılıp açılmayacağını seçin.</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/nora-0-9-5/x-settings.webp" alt="Pixel telefonda Nora'nın X ayarları; isteğe bağlı Grok, öneriler, etkileşim sayıları ve En Son arama kontrollerini gösteriyor" width="1080" height="2220" loading="lazy" />
    </div>
  </figure>
</div>

## Sıradan Facebook Gönderilerini Görünür Tutun

Facebook reklam filtrelemesi artık doğrudan sponsorlu etiketinin kendisini denetler. İçeriğinde tesadüfen «Ad» veya «広告» gibi ifadeler geçen sıradan gönderilerin yanlışlıkla gizlenme olasılığı çok daha düşüktür.

## Daha Güvenilir Çerez İçe Aktarımı

Tarayıcı çerezlerini içe aktarma işlemi artık `__Host-` ve `__Secure-` ile başlayan adları korur. Bu öneklerin bozulmadan tutulması, sitelerin içe aktarılan oturumu doğru şekilde tanımasına yardımcı olur.

Tüm değişikliklerin listesi için [GitHub'daki sürüm notlarına](https://github.com/nonbili/Nora/releases/tag/v0.9.5) bakın.

## Nora'yı Edinin

[Nora'yı yükleyin veya güncelleyin](/tr/nora/install/) veya daha fazla bilgi edinmek için [Nora belgelerini](/tr/nora/) inceleyin.
