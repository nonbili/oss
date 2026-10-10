---
title: SSS
description: Nori hakkında sıkça sorulan sorular.
sidebar:
  order: 9
---

## Mobil tarayıcımdan Nori'ye bağlantıları nasıl kaydederim?

Standart sistem paylaşım menüsünü kullanın:

1. Tarayıcınızda (Chrome, Firefox, Safari, Brave vb.) **Paylaş**'a dokunun.
2. Uygulama listesinden **Nori**'yi seçin.
3. Bağlantıyı kaydetmek istediğiniz hedef listeyi seçin veya onay istemeden belirlenen bir listeye doğrudan kaydetmek için ayarlarda **Paylaşılan bağlantıları hızlı kaydet** seçeneğini etkinleştirin.

## Yer imlerini uygulama içi sekme yerine doğrudan tarayıcı uygulamamda açabilir miyim?

Evet. **Ayarlar → Genel** bölümüne gidin ve **Bağlantıları varsayılan tarayıcıda aç** seçeneğini açın. Etkinleştirildiğinde herhangi bir yer imine dokunmak, URL'yi hemen telefonunuzun varsayılan tarayıcı uygulamasına aktaracaktır.

## Masaüstü tarayıcılarımdaki yer imlerimi nasıl içe aktarırım?

Mevcut yer imlerinizi bir HTML dosyasına aktarın:

- **Chrome / Brave / Edge**: Yer İmi Yöneticisi'ni açın (`Ctrl+Shift+O` veya `Cmd+Option+B`) → `⋮` menüsüne tıklayın → **Yer işaretlerini dışa aktar**'ı seçin.
- **Firefox**: Arşiv'i açın (`Ctrl+Shift+O` veya `Cmd+Shift+O`) → **İçe Aktarma ve Yedekleme** → **Yer İmlerini HTML Olarak Dışa Aktar…**.
- **Safari**: Dosya → **Yer İmlerini Dışa Aktar…**.

Ardından Nori'de **Ayarlar → Yer İmleri → Yer imlerini içe aktar** bölümüne gidin, `.html` dosyasını seçin; Nori tüm bağlantıları ve klasörleri karşılık gelen listelere aktaracaktır.

## Yer imlerimi yedekleyip geri yükleyebilir miyim?

Evet. **Ayarlar → Yer İmleri** altında:

- **Yedeği dışa aktar**: Tüm listeleri, yer imlerini, etiketleri ve ayarları içeren eksiksiz bir JSON yedekleme dosyası kaydeder.
- **Yedeklemeyi geri yükle**: Mevcut bir Nori yedekleme dosyasından geri yükleme yapar.
- **HTML / Düz metin dışa aktar**: Tarayıcıyla uyumlu bir HTML dosyası veya okunabilir bir metin listesi oluşturur.

## Çoklu cihaz senkronizasyonu nasıl çalışır?

Nori Sync; mobil uygulamalarınızı, masaüstü uygulamalarınızı ve tarayıcı uzantılarınızı bağlar:

- Yer imleri, eksiksiz çevrimdışı işlevsellik için her cihazda yerel olarak önbellekte kalır.
- Bağlandığında, değişiklikler tüm etkin istemciler arasında sorunsuz bir şekilde senkronize edilir.

## Tarayıcı uzantısı tarama etkinliğimi izler mi?

Hayır. Nori tarama geçmişinizi izlemez veya web sayfası içeriğini okumaz. Uzantı yalnızca açılır pencereyi açıp geçerli sekmeyi yer imlerine eklemek için tıkladığınızda URL'leri alır.

## Sorunları nereden bildirebilirim veya özellik talep edebilirim?

Tüm geliştirme ve sorun takibi GitHub'da yürütülmektedir:

- [nonbili/Nori Sorunları](https://github.com/nonbili/Nori/issues)
