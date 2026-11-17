---
title: "Nora 0.9.4: Tīrākas X saites un uzticamākas lejupielādes"
description: Noņemiet kopīgošanas marķierus no X ierakstu saitēm, novērsiet video lejupielāžu iestrēgšanu posmā Parsing un saglabājiet failu nosaukumus un TikTok pilnekrāna vadīklas.
date: 2026-11-03
product: nora
---

Nokopētai ieraksta saitei jābūt viegli kopīgojamai, un video lejupielādei ir jāpārvar posms **Parsing**. **Nora 0.9.4 mobilajām ierīcēm** risina abus šos jautājumus ar nelielu labojumu kopumu saišu kopīgošanai, failu saglabāšanai un TikTok video skatīšanai.

## Kopīgojiet X saites bez liekajiem marķieriem

Nora tagad noņem X kopīgošanas parametrus, piemēram, `s` un `t`, kad kopējat vai kopīgojat ieraksta saiti. Piemēram:

```text
Before: https://x.com/nonbili/status/1234567890?s=20&t=example
After:  https://x.com/nonbili/status/1234567890
```

Ieraksta adrese paliek neskarta; liekie kopīgošanas marķieri tiek noņemti. Šī tīrīšana attiecas uz X un Twitter ierakstu URL, tāpēc parametri ar tādiem pašiem īsajiem nosaukumiem nesaistītās lapās netiek aiztikti.

## Pārvariet posmu “Parsing”, saglabājot video

Dažas video lejupielādes varēja iestrēgt posmā **Parsing**, pirms lejupielāde sākās. Šis laidiens novērš šo kļūmi, lai skartās lejupielādes varētu turpināties.

Faili, ko tīmekļa lapa ģenerē caur `blob:` URL, arī saglabā savus paredzētos failu nosaukumus, ja tie ir pieejami. Tas atvieglo saglabāto failu atpazīšanu vēlāk.

## Atjaunojiet TikTok pilnekrāna vadīklas

Nora TikTok pilnekrāna vadīklas varēja neparādīties, ja lapas skripts tika palaists pirms lapas pamatteksta sagatavošanas. Vadīklas tagad apstrādā šo ielādes secību, tāpēc pilnekrāna poga var parādīties, kā paredzēts.

Skatiet [laidiena piezīmes vietnē GitHub](https://github.com/nonbili/Nora/releases/tag/v0.9.4), lai uzzinātu pilnu izmaiņu sarakstu.

## Iegūstiet Nora

[Instalējiet vai atjauniniet Nora](/lv/nora/install/) vai izpētiet [Nora dokumentāciju](/lv/nora/), lai uzzinātu vairāk.
