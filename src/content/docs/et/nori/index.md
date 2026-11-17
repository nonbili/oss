---
title: Nori
description: Nori ning selle järjehoidjate halduse ja käivitaja mudeli ülevaade.
sidebar:
  order: 1
---
<div class="product-overview-header">
  <img class="product-overview-header__logo" src="/app-logos/nori.png" alt="Nori logo" />
  <p class="product-overview-header__meta">Android, iOS, töölaud ja laiendus</p>
</div>

Nori on avatud lähtekoodiga järjehoidjate haldur ja käivitaja, mis on loodud kiireks igapäevaseks ligipääsuks mobiilseadmetes, lauaarvutites ja veebibrauserites.

Selle asemel et matta linke sügavatesse brauserikaustade puudesse või suletud ökosüsteemidesse, korraldab Nori sinu järjehoidjad puhastesse ja keskendunud loenditesse koos kohese avamise, otsingu, rikkalike kaardi eelvaadete ja jagamislehe integratsiooniga.

## Põhipunktid

- Mitu kohandatud järjehoidjate loendit
- Kohene avamine süsteemi vaikebrauseris või natiivsetes kohandatud vahekaartides
- Jagatud URL-ide salvestamine mis tahes rakendusest loendivalija ja kiirsalvestuse valikutega
- Kompaktne käivitajarežiim ja rikkalike kaardi eelvaadete režiim veebisaitide kaanepiltidega
- Kiire otsingusahtel märksõna- ja sildifiltreerimisega
- Hiljuti kasutatud ja hiljuti lisatud avamisajalugu
- Import ja eksport standardse HTML-järjehoidjate faili, lihtteksti ja täielike JSON-varukoopiate kaudu
- Paindlik välimus: hele, tume, AMOLED ja kohandatud aktsentvärvid
- Kohalik-esimesena (local-first) brauserilaiendus Chrome'ile ja Firefoxile
- Platvormiülene töölauarakendus Linuxile, macOS-ile ja Windowsile
- Valikuline mitme seadme sünkroonimine Nori Synci kaudu

## Platvormid

- **Android**: saadaval Google Plays ja otseste GitHubi APK-väljalasetena.
- **iOS**: saadaval App Store'is iPhone'ile ja iPadile.
- **Töölaud**: eraldiseisvad natiivsed rakendused Linuxile (AppImage ja tarball), macOS-ile (Apple Silicon ja Intel) ja Windowsile.
- **Brauserilaiendus**: Manifest V3 laiendus Mozilla Firefoxile ja Google Chrome'ile.

## Esimene käivitus

Mõistlik esmane seadistus on:

1. Loo mõned loendid oma tavapäraste lingikategooriate jaoks (nt `Daily`, `Tools`, `Reading`, `Work`).
2. Lisa oma peamised lingid või impordi olemasolevad järjehoidjad brauseri HTML-ekspordist.
3. Testi järjehoidja avamist, et veenduda, et vaikebrauser avab lingid ootuspäraselt.
4. Proovi veebilehe jagamist mobiilibrauserist Norisse süsteemi jagamismenüü kaudu.
5. Kohanda välimuse seadeid, näiteks tumedat režiimi või eelistatud aktsentvärvi.

## Kuidas see töötab

Nori lahutab sinu järjehoidjate kogu konkreetsetest brauserimootoritest:

- Androidis avanevad järjehoidjad Custom Tabsi kaudu (`expo-web-browser`) või antakse otse üle sinu vaikebrauseri rakendusele.
- iOS-is avanevad järjehoidjad natiivse brauserilehe või süsteemi vaikebrauseri kaudu.
- Töölaual ja laienduses avanevad järjehoidjad otse sinu aktiivsetes brauseri vahekaartides.

Selline lähenemine tagab, et sirvid alati oma eelistatud reklaamiblokeerijate, sisselogimiste ja brauseriprofiilidega, hoides samal ajal kõik lingid korrastatuna ühes kiires ja otsitavas käivitajas.

## Rohkem linke

Lähtekoodi, väljalasete ja vigade jälgimise jaoks kasuta GitHubi hoidlat:

- [nonbili/Nori](https://github.com/nonbili/Nori)

Jätka lehega [Paigaldamine](/et/nori/install/), et näha poe märke, APK-sid, töölauaversiooni allalaadimisi ja brauserilaienduse pakette.
