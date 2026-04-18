---
title: Özelleştirme
description: NouTube için özel CSS ve davranış notları.
---
NouTube, gömülü YouTube ve YouTube Music sayfaları için özel CSS'yi destekler.

## Özel CSS Ne İçin İyidir?

- Önemsemediğiniz öğeleri gizleme
- Sayfa yoğunluğunu artırma
- Boşlukları veya tipografiyi ayarlama
- Yolunuza çıkan site kullanıcı arayüzü seçimlerini aşma

## Önerilen Yaklaşım

Değişiklikleri dar kapsamlı ve kaldırılması kolay tutun.

- Bir veya iki hedeflenmiş kural ile başlayın
- Mümkün olduğunda kararlı seçicileri (selectors) tercih edin
- Kaynak site düzeni değiştikden sonra tekrar test edin

NouTube canlı web özelliklerini kabuk içine aldığından, YouTube kaynak kodlarını değiştirdiğinde özel CSS bozulabilir.

## Özelleştirmeden Önce

Varsayılan uygulama davranışının aşağıdakiler için zaten çalıştığından emin olun:

- Oynatma
- Gezinme
- Feed'ler
- İndirmeler

Temel seviye kararlı olduğunda, CSS değişikliklerini kademeli olarak ekleyin.
