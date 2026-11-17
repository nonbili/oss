---
title: KKK
description: Levinumad küsimused NouTube'i kohta GitHubi probleemidest.
sidebar:
  order: 9
---
See leht võtab kokku korduvad kasutajate küsimused avalikust GitHubi vigade jälgijast.

## Sisselogimise probleemid

Google lükkab sageli tagasi sisselogimised rakendustest, mis manustavad veebilehe, mistõttu võib NouTube'is sisselogimine ebaõnnestuda nii Androidis kui ka töölaual, tavaliselt veaga „This browser or app may not be secure“. Kui töölaual pole nähtavat nuppu `Sign in`, proovi esmalt avada menüü `Your data in YouTube`.

Kui sa ei saa sisse logida, kasuta selle asemel funktsiooni **Inject cookie**:

1. Logi arvutis Chrome'is või mõnes teises Chromiumi-põhises brauseris YouTube'i sisse ja ekspordi oma YouTube'i küpsised brauserilaiendusega (nt `getcookies.txt`).
2. Kopeeri eksporditud fail Androidis oma seadmesse.
3. Ava NouTube'is **Settings > Tools > Inject cookie**, impordi fail (või kleebi selle sisu) ja salvesta.

See möödub Google'i turvalise brauseri kontrollist ja on praegu kõige töökindlam lahendus sisselogimisprobleemidele nii Androidis kui ka töölaual.

Allikad:

- [Issue #142: Can't login to Google on Windows app](https://github.com/nonbili/NouTube/issues/142)

## Miks pole uusim uuendus veel F-Droidis saadaval?

Väljalaskegraafikut F-Droidis ei kontrolli NouTube'i hooldajad. F-Droid ehitab ja avaldab uuendusi iseseisvalt partiidena, mis võtab tavaliselt mitu päeva pärast uue versiooni ilmumist GitHubis.

Kui soovid uusimat versiooni kohe, saad APK alla laadida [GitHub Releases](https://github.com/nonbili/NouTube/releases) lehelt. Kuid pane tähele, et GitHubi väljalasked kasutavad teist allkirjastamisvõtit kui F-Droid, seega pead enne GitHubi APK paigaldamist F-Droidi versiooni esmalt desinstallima.

Allikad:

- [Issue #16: Update request](https://github.com/nonbili/NouTube/issues/16)
- [Issue #14: Bug: rotate to landscape resets app to home page](https://github.com/nonbili/NouTube/issues/14)

## YouTube Music ei laadi korralikult

Kui YouTube Music ei laadi korralikult, proovi rakenduse menüüs lülitada sisse/välja **Desktop site**.

Allikas:

- [Issue #150: Noutube Music Error Message, Not Loading.](https://github.com/nonbili/NouTube/issues/150)

## NouTube avab avalehe asemel uuesti järjekorra

Kui NouTube jätkab esituse taastamist või avaneb avalehe asemel vanas kirjes, kontrolli, kas järjekorra ikoon on endiselt aktiivne. Probleemi lõimes tuvastas hooldaja tühjendamata järjekorra põhjusena, miks NouTube üritas esitust jätkata.

Allikas:

- [Issue #138: Restoring playback](https://github.com/nonbili/NouTube/issues/138)

## Kuhu peaksin vigadest teatama või funktsioone küsima?

Kasuta GitHubi hoidlat:

- [nonbili/NouTube issues](https://github.com/nonbili/NouTube/issues)
