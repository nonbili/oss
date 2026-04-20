---
title: Sıkça Sorulan Sorular (FAQ)
description: GitHub sorunlarından çekilen yaygın NouTube soruları.
sidebar:
  order: 9
---
Bu sayfa, genel GitHub sorun takipçisinden gelen ve tekrar eden kullanıcı sorularını özetlemektedir.

## Masaüstü giriş sorunları

Masaüstü uygulamasında görünür bir `Oturum aç` düğmesi yoksa, önce `YouTube'daki verileriniz` menüsünü açmayı deneyin. Oturum açma sayfası açılıyor ancak "tarayıcı veya uygulama güvenli olmayabilir" hatası alıyorsanız, **Inject cookie** özelliğini kullanın:

1. YouTube çerezlerinizi dışa aktarmak için bir tarayıcı uzantısı (`getcookies.txt` gibi) kullanın.
2. **Inject cookie** düğmesini kullanarak çerezleri NouTube'a aktarın.

Bu yöntem Google'ın güvenli tarayıcı kontrolünü atlar ve şu anda masaüstü giriş sorunları için en güvenilir çözümdür.

Kaynaklar:

- [Issue #142: Can't login to Google on Windows app](https://github.com/nonbili/NouTube/issues/142)

## YouTube Music doğru şekilde yüklenmiyor

YouTube Music doğru şekilde yüklenmiyorsa, uygulama menüsünden **Masaüstü sitesi** seçeneğini açıp kapatmayı deneyin (`v0.5.1`'den beri mevcuttur).

Diğer sorun giderme adımları:

1. `NouTube`'un `music.youtube.com` için varsayılan uygulama olduğundan emin olun.
2. Resmi YouTube Music uygulaması yüklüyse, önce varsayılan bağlantı işlemesini kaldırın.
3. Sorun devam ederse, `Settings > Tools > Custom user agent` kısmından özel bir kullanıcı aracısı deneyin.

Kaynak:

- [Issue #150: Noutube Music Error Message, Not Loading.](https://github.com/nonbili/NouTube/issues/150)

## NouTube ana sayfa yerine bir sırayı yeniden açıyor

NouTube oynatmayı geri yüklemeye devam ederse veya ana sayfa yerine eski bir öğeye geri dönerse, sıra simgesinin hala aktif olup olmadığını kontrol edin. Sorun dizisinde geliştirici, temizlenmemiş bir sırayı NouTube'un oynatmaya devam etmeye çalışmasının nedeni olarak tanımladı.

Kaynak:

- [Issue #138: Restoring playback](https://github.com/nonbili/NouTube/issues/138)

## Hataları nereye bildirmeli veya özellikleri nerede istemeliyim?

GitHub deposunu kullanın:

- [nonbili/NouTube issues](https://github.com/nonbili/NouTube/issues)
