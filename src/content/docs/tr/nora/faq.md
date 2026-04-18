---
title: Sıkça Sorulan Sorular (FAQ)
description: GitHub sorunlarından çekilen yaygın Nora soruları.
---
Bu sayfa, genel GitHub sorun takipçisinden gelen ve tekrar eden kullanıcı sorularını özetlemektedir.

## Nora, diğer uygulamalardan doğrudan Instagram veya Facebook bağlantılarını açabilir mi?

Evet, bu amaçlanmıştır. Geliştirici şunları yapmanız gerekebileceğini belirtti:

- Nora için Android'in `Varsayılan olarak aç` davranışını etkinleştirin
- Aynı bağlantıları talep etmeye devam ediyorsa resmi uygulamayı kaldırın veya devre dışı bırakın
- Derin bağlantılar uygulamayı açıyor ancak istenen gönderiyi açmıyorsa daha yeni bir Nora sürümüne güncelleyin

Kaynak:

- [Issue #51: Support opening links in Nora](https://github.com/nonbili/Nora/issues/51)

## Instagram, Nora içinde açılamıyor

Mevcut bir açık sorun, bazı kullanıcıların yeniden yükleme, masaüstü sitesi modu ve webview verilerini temizlemeyi denedikten sonra bile Instagram hata sayfasıyla karşılaştığını gösteriyor. Bu, henüz onaylanmış bir düzeltme olmadığı anlamına gelir. Bu durum cihazınızda gerçekleşirse:

- yeniden yüklemeyi deneyin
- masaüstü sitesi modunu deneyin
- Nora'nın webview verilerini temizleyin
- hala başarısız olursa, güncellemeler için GitHub'ı kontrol edin veya cihaz detaylarınızı soruna ekleyin

Kaynak:

- [Issue #147: Issue when trying to open Instagram](https://github.com/nonbili/Nora/issues/147)

## Uygulamadan ayrıldıktan sonra medya çalmaya devam ediyor

Bu, Instagram sesinin yararlı kontroller olmadan arka planda devam etmesi olarak rapor edildi. Geliştirici, bunun bir sonraki sürümde düzeltileceğini belirtti; bu nedenle yapılması gereken ilk şey, Nora'yı mağazanızdaki veya sürüm kanalınızdaki en yeni sürüme güncellemektir.

Kaynak:

- [Issue #119: can you make it stop playing in background ? pls](https://github.com/nonbili/Nora/issues/119)

## Görsel veya video indirebilir miyim?

Evet, bunun en azından bir kısmı zaten destekleniyor:

- indirme menüsünü göstermek için bir görsele uzun basın
- sorun tartışıldığında Facebook ve Instagram Reel indirmeleri zaten destekleniyordu
- X video indirme desteği daha sonra eklendi

Kaynak:

- [Issue #153: download](https://github.com/nonbili/Nora/issues/153)

## X oturumu neden başarısız oluyor?

Sorun tartışması, normal e-posta/şifre ile oturum açmanın çalışmasının beklendiğini, ancak bir webview'da Google tabanlı oturum açmanın ekstra çalışma gerektirdiğini göstermektedir. Geliştirici daha sonra, etkilenen kullanıcılar için bir geçici çözüm olarak `v0.1.5` sürümüne bir `Inject cookie` menüsü eklendiğini söyledi.

Kaynak:

- [Issue #1: Unable to sign in to X](https://github.com/nonbili/Nora/issues/1)

## Tarayıcımın uBlock Origin veya Dark Reader gibi uzantılarını Nora içinde kullanabilir miyim?

Tam bir tarayıcı profiliyle aynı şekilde kullanamazsınız. Özellik isteği tartışmasında geliştirici, gömülü tarayıcı uzantısı desteği vaat etmek yerine kullanıcıları UI değişiklikleri için Nora'nın kendi özel CSS desteğine yönlendirdi.

Kaynak:

- [Issue #96: Open the socials in the webview provided by browser](https://github.com/nonbili/Nora/issues/96)

## Hataları nereye bildirmeli veya özellikleri nerede istemeliyim?

GitHub deposunu kullanın:

- [nonbili/Nora issues](https://github.com/nonbili/Nora/issues)
