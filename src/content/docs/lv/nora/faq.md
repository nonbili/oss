---
title: BUJ
description: Biežāk uzdotie jautājumi par Nora no GitHub problēmām.
sidebar:
  order: 9
---
Šajā lapā ir apkopoti biežāk uzdotie lietotāju jautājumi no publiskā GitHub problēmu izsekotāja.

## Vai Nora var tieši atvērt Instagram vai Facebook saites no citām lietotnēm?

Jā, tam ir paredzēts darboties. Uzturētājs norādīja, ka var būt nepieciešams:

- iespējot Android darbību `Open by default` lietotnei Nora;
- atinstalēt vai atspējot oficiālo lietotni, ja tā turpina pārņemt tās pašas saites;
- atjaunināt uz jaunāku Nora laidienu, ja dziļās saites atver lietotni, bet ne pieprasīto ierakstu.

Avots:

- [Issue #51: Support opening links in Nora](https://github.com/nonbili/Nora/issues/51)

## Instagram neizdodas atvērt lietotnē Nora

Pašreizējā atvērtā problēma rāda, ka daži lietotāji joprojām saskaras ar Instagram kļūdas lapu pat pēc atkārtotas ielādes, datora vietnes režīma un WebView datu notīrīšanas. Tas nozīmē, ka apstiprināta labojuma vēl nav. Ja tas notiek jūsu ierīcē:

- mēģiniet atkārtoti ielādēt;
- mēģiniet datora vietnes režīmu;
- notīriet Nora WebView datus;
- ja joprojām neizdodas, pārbaudiet atjauninājumus vietnē GitHub vai pievienojiet savas ierīces informāciju problēmai.

Avots:

- [Issue #147: Issue when trying to open Instagram](https://github.com/nonbili/Nora/issues/147)

## Multivide turpina atskaņoties pēc iziešanas no lietotnes

Par to tika ziņots saistībā ar Instagram audio, kas turpināja skanēt fonā bez noderīgām vadīklām. Uzturētājs atbildēja, ka tas tiks novērsts nākamajā laidienā, tāpēc vispirms atjauniniet Nora uz jaunāko versiju, kas pieejama jūsu veikalā vai laidienu kanālā.

Avots:

- [Issue #119: can you make it stop playing in background ? pls](https://github.com/nonbili/Nora/issues/119)

## Vai varu lejupielādēt attēlus vai video?

Jā, vismaz daļa no tā jau tiek atbalstīta:

- ilgi nospiediet attēlu, lai parādītu lejupielādes izvēlni;
- Facebook un Instagram Reel lejupielādes jau tika atbalstītas, kad šis jautājums tika apspriests;
- X video lejupielādes atbalsts tika pievienots pēc tam.

Avots:

- [Issue #153: download](https://github.com/nonbili/Nora/issues/153)

## Kāpēc neizdodas pierakstīties vietnē X?

Diskusija problēmā liecina, ka parastajai pierakstīšanās metodei ar e-pastu/paroli vajadzētu darboties, savukārt Google pierakstīšanās WebView vidē prasīja papildu darbu. Uzturētājs vēlāk norādīja, ka versijā `v0.1.5` tika pievienota izvēlne `Inject cookie` kā pagaidu risinājums skartajiem lietotājiem.

Avots:

- [Issue #1: Unable to sign in to X](https://github.com/nonbili/Nora/issues/1)

## Vai lietotnē Nora varu izmantot savus pārlūka paplašinājumus, piemēram, uBlock Origin vai Dark Reader?

Ne tādā pašā veidā kā pilnā pārlūka profilā. Funkcijas pieprasījuma diskusijā uzturētājs norādīja lietotājiem uz Nora paša pielāgotā CSS atbalstu saskarnes izmaiņām, nevis solīja iebūvētu pārlūka paplašinājumu atbalstu.

Avots:

- [Issue #96: Open the socials in the webview provided by browser](https://github.com/nonbili/Nora/issues/96)

## Kur ziņot par kļūdām vai pieprasīt funkcijas?

Izmantojiet GitHub repozitoriju:

- [nonbili/Nora issues](https://github.com/nonbili/Nora/issues)
