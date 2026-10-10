---
title: Sıkça Sorulan Sorular (FAQ)
description: GitHub sorunlarından çekilen yaygın NouTube soruları.
sidebar:
  order: 9
---
Bu sayfa, genel GitHub sorun takipçisinden gelen ve tekrar eden kullanıcı sorularını özetlemektedir.

## Oturum açma sorunları

Google, web sayfası gömen uygulamalardan yapılan oturum açma işlemlerini sıklıkla reddeder; bu yüzden NouTube içinde oturum açmak hem Android'de hem de masaüstünde başarısız olabilir ve genellikle "Bu tarayıcı veya uygulama güvenli olmayabilir" hatası görünür. Masaüstünde görünür bir `Oturum aç` düğmesi yoksa önce `YouTube'daki verileriniz` menüsünü açmayı deneyin.

Oturum açamıyorsanız bunun yerine **Inject cookie** özelliğini kullanın:

1. Bir bilgisayarda Chrome veya Chromium tabanlı başka bir tarayıcıda YouTube'da oturum açın, ardından bir tarayıcı uzantısı (`getcookies.txt` gibi) ile YouTube çerezlerinizi dışa aktarın.
2. Android'de, dışa aktarılan dosyayı cihazınıza kopyalayın.
3. NouTube'da **Settings > Tools > Inject cookie** bölümünü açın, dosyayı içe aktarın (veya içeriğini yapıştırın) ve kaydedin.

Bu yöntem Google'ın güvenli tarayıcı denetimini atlar ve şu anda hem Android'de hem de masaüstünde oturum açma sorunları için en güvenilir çözümdür.

Kaynaklar:

- [Issue #142: Can't login to Google on Windows app](https://github.com/nonbili/NouTube/issues/142)

## YouTube Music doğru şekilde yüklenmiyor

YouTube Music doğru şekilde yüklenmiyorsa, uygulama menüsünden **Masaüstü sitesi** seçeneğini açıp kapatmayı deneyin.

Kaynak:

- [Issue #150: Noutube Music Error Message, Not Loading.](https://github.com/nonbili/NouTube/issues/150)

## NouTube ana sayfa yerine bir sırayı yeniden açıyor

NouTube oynatmayı geri yüklemeye devam ederse veya ana sayfa yerine eski bir öğeye geri dönerse, sıra simgesinin hala aktif olup olmadığını kontrol edin. Sorun dizisinde geliştirici, temizlenmemiş bir sırayı NouTube'un oynatmaya devam etmeye çalışmasının nedeni olarak tanımladı.

Kaynak:

- [Issue #138: Restoring playback](https://github.com/nonbili/NouTube/issues/138)

## Hataları nereye bildirmeli veya özellikleri nerede istemeliyim?

GitHub deposunu kullanın:

- [nonbili/NouTube issues](https://github.com/nonbili/NouTube/issues)
