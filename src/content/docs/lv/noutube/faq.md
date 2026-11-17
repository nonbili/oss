---
title: BUJ
description: Biežāk uzdotie jautājumi par NouTube no GitHub problēmām.
sidebar:
  order: 9
---
Šajā lapā ir apkopoti biežāk uzdotie lietotāju jautājumi no publiskā GitHub problēmu izsekotāja.

## Pierakstīšanās problēmas

Google bieži noraida pierakstīšanos no lietotnēm, kas iegulst tīmekļa lapu, tāpēc pierakstīšanās lietotnē NouTube var neizdoties gan Android ierīcēs, gan datorā, parasti ar kļūdu "This browser or app may not be secure". Datorā, ja nav redzama poga `Sign in`, vispirms mēģiniet atvērt izvēlni `Your data in YouTube`.

Ja nevarat pierakstīties, tā vietā izmantojiet funkciju **Inject cookie**:

1. Datorā pierakstieties YouTube pārlūkā Chrome vai citā Chromium balstītā pārlūkā, pēc tam eksportējiet savus YouTube sīkfailus ar pārlūka paplašinājumu (piemēram, `getcookies.txt`).
2. Android ierīcē nokopējiet eksportēto failu uz savu ierīci.
3. Lietotnē NouTube atveriet **Settings > Tools > Inject cookie**, importējiet failu (vai ielīmējiet tā saturu) un saglabājiet.

Tas apiet Google drošā pārlūka pārbaudi un pašlaik ir uzticamākais risinājums pierakstīšanās problēmām gan Android ierīcēs, gan datorā.

Avoti:

- [Issue #142: Can't login to Google on Windows app](https://github.com/nonbili/NouTube/issues/142)

## Kāpēc jaunākais atjauninājums vēl nav pieejams vietnē F-Droid?

Laidienu grafiku vietnē F-Droid nekontrolē NouTube uzturētāji. F-Droid būvē un publicē atjauninājumus neatkarīgi pa partijām, kas parasti aizņem vairākas dienas pēc jaunas versijas izlaišanas vietnē GitHub.

Ja vēlaties jaunāko versiju uzreiz, varat lejupielādēt APK no [GitHub Releases](https://github.com/nonbili/NouTube/releases) lapas. Tomēr ņemiet vērā, ka GitHub laidieni izmanto citu parakstīšanas atslēgu nekā F-Droid, tāpēc vispirms ir jāatinstalē F-Droid versija, pirms instalējat APK no GitHub.

Avoti:

- [Issue #16: Update request](https://github.com/nonbili/NouTube/issues/16)
- [Issue #14: Bug: rotate to landscape resets app to home page](https://github.com/nonbili/NouTube/issues/14)

## YouTube Music neielādējas pareizi

Ja YouTube Music neielādējas pareizi, mēģiniet lietotnes izvēlnē pārslēgt opciju **Desktop site**.

Avots:

- [Issue #150: Noutube Music Error Message, Not Loading.](https://github.com/nonbili/NouTube/issues/150)

## NouTube atkārtoti atver rindu, nevis sākuma lapu

Ja NouTube turpina atjaunot atskaņošanu vai atveras vecā vienumā, nevis sākuma lapā, pārbaudiet, vai rindas ikona joprojām ir aktīva. Problēmas pavedienā uzturētājs norādīja uz neiztīrītu rindu kā iemeslu, kāpēc NouTube turpināja mēģināt atsākt atskaņošanu.

Avots:

- [Issue #138: Restoring playback](https://github.com/nonbili/NouTube/issues/138)

## Kur ziņot par kļūdām vai pieprasīt funkcijas?

Izmantojiet GitHub repozitoriju:

- [nonbili/NouTube issues](https://github.com/nonbili/NouTube/issues)
