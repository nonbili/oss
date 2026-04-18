---
title: SSS
description: GitHub sorunlarından çekilen yaygın NouTube soruları.
---
Bu sayfa, genel GitHub sorun takipçisinden gelen ve tekrar eden kullanıcı sorularını özetlemektedir.

## Masaüstü giriş düğmesi eksik veya oturum açma takılmış görünüyor

Masaüstü uygulaması görünür bir `Oturum aç` (Sign in) düğmesi göstermiyorsa, önce `YouTube'daki verileriniz` menüsünü açmayı deneyin. Sorun tartışmasında, bu yol etkilenen kullanıcıların oturum açma akışına ulaşmasını sağladı ve geliştirici daha sonra görünür düğmenin `v0.1.6` sürümünde geri gelmesi gerektiğini söyledi.

Kaynaklar:

- [Issue #46: desktop version never logs in always error](https://github.com/nonbili/NouTube/issues/46)

## Oturum açma sayfası açılsa bile masaüstü girişi hala başarısız oluyor

Verileri temizledikten sonra bile bazı masaüstü kurulumlarının Google girişinde hala başarısız olduğuna dair raporlar var. Sorun dizisi onaylanmış bir evrensel düzeltme ile sona ermedi, bu nedenle pratik rehberlik şöyledir:

- en son masaüstü sürümüne güncelleyin
- oturum açmayı zaten denediyseniz uygulamanın webview/profil verilerini temizleyin
- hala başarısız olursa, işletim sisteminizi, paket formatınızı ve ekran görüntülerini GitHub'da bildirin

Kaynak:

- [Issue #103: Unable to login from desktop client](https://github.com/nonbili/NouTube/issues/103)

## YouTube Music doğru şekilde yüklenmiyor

Belgelenen bir sorun giderme yolu şuydu:

1. `NouTube`'un `music.youtube.com` için varsayılan uygulama olduğundan emin olun.
2. Resmi YouTube Music uygulaması yüklüyse, önce varsayılan bağlantı işlemesini kaldırın.
3. Sorun devam ederse, `Settings > Tools > Custom user agent` kısmından özel bir kullanıcı aracısı deneyin.

Bu rehberlik, sorun dizisindeki geliştiriciden doğrudan gelmektedir. Bu bir geçici çözümdür, her cihaz için garantili bir düzeltme değildir.

Kaynak:

- [Issue #150: Noutube Music Error Message, Not Loading.](https://github.com/nonbili/NouTube/issues/150)

## Bazı reklamlar hala geçiyor

Videolardan önce görünen kısa YouTube Premium reklamları hakkında bir rapor vardı. Geliştirici, kullanıcıları `v0.4.9` sürümüne yönlendirdi; bu da reklam engelleme düzeltmelerinin sonraki sürümlerde sunulduğu anlamına geliyor. Reklam görürseniz:

- F-Droid veya GitHub'dan en son sürüme güncelleyin
- sorun devam ederse, uygulama sürümü ve bir ekran görüntüsü ile yeni bir sorun açın

Kaynak:

- [Issue #117: Ad not blocked](https://github.com/nonbili/NouTube/issues/117)

## NouTube ana sayfa yerine bir sırayı yeniden açıyor

NouTube oynatmayı geri yüklemeye devam ederse veya ana sayfa yerine eski bir öğeye geri dönerse, sıra simgesinin hala aktif olup olmadığını kontrol edin. Sorun dizisinde geliştirici, temizlenmemiş bir sırayı NouTube'un oynatmaya devam etmeye çalışmasının nedeni olarak tanımladı.

Kaynak:

- [Issue #138: Restoring playback](https://github.com/nonbili/NouTube/issues/138)

## Hataları nereye bildirmeli veya özellikleri nerede istemeliyim?

GitHub deposunu kullanın:

- [nonbili/NouTube issues](https://github.com/nonbili/NouTube/issues)
