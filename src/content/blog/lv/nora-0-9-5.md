---
title: "Nora 0.9.5: Starpniekservera pierakstīšanās un mierīgāks X"
description: Pierakstieties starpniekserveros Android un iOS 17 vai jaunākās versijās, izvēlieties, ko paslēpt vietnē X, iestatiet meklēšanai noklusējumu Jaunākie un saglabājiet parastos Facebook ierakstus redzamus.
date: 2026-11-06
product: nora
---

**Nora 0.9.5 mobilajām ierīcēm** pievieno starpniekservera lietotājvārda un paroles laukus mobilajā versijā un lielāku kontroli pār to, kas tiek rādīts vietnē X. Tas uzlabo arī Facebook reklāmu filtrēšanu un pārlūka sīkfailu importēšanu.

## Pierakstieties savā starpniekserverī mobilajā ierīcē

Atveriet **Iestatījumi → Pārlūkošana → Starpniekserveris**, lai izvēlētos HTTP vai SOCKS, ievadītu resursdatoru un portu un norādītu lietotājvārdu un paroli. Autentificēti starpniekserveri tiek atbalstīti **Android** un **iOS 17 vai jaunākās** versijās gan pārlūkošanai, gan plūsmas pieprasījumiem.

Akreditācijas dati paliek ierīcē un tiek izslēgti no dublējumiem un sinhronizācijas. Operētājsistēmā iOS 16 starpniekservera atbalsts joprojām ir ierobežots līdz neautentificētiem HTTP starpniekservera pieprasījumiem plūsmām.

## Izvēlieties, ko paslēpt vietnē X

Sadaļā **Iestatījumi → Pakalpojumi → X** tagad varat izvēlēties paslēpt:

- **Grok saskarni**, lai noņemtu Grok saskarnes elementus.
- **Ieteikumus**, tostarp “Kam sekot”, tendences un “Atklājiet vairāk”.
- **Iesaistes skaitu**, lai laika joslā būtu mazāk skaitļu, kas sacenšas par uzmanību.

Šīs vadīklas nav obligātas. Tajā pašā iestatījumu sadaļā ir pieejama arī opcija **Noklusējuma meklēšana uz Jaunākie**, lai meklēšana atvērtos ar jaunākajiem ierakstiem, nevis populārākajiem rezultātiem. Jūs joprojām varat pārslēgt meklēšanas cilnes vietnē X, kad vēlaties citu skatu.

![Nora X iestatījumi Pixel tālrunī, kas rāda izvēles Grok, ieteikumu, iesaistes skaita un Jaunāko meklēšanas vadīklas](/blog/nora-0-9-5/x-settings.webp "X vadīklas lietotnē Nora Android ierīcē: izvēlieties, kurus saskarnes elementus paslēpt un vai meklēšana atveras sadaļā Jaunākie.")

## Saglabājiet parastos Facebook ierakstus redzamus

Facebook reklāmu filtrēšana tagad pārbauda pašu sponsorēto etiķeti. Parastie ieraksti, kuros gadās pieminēt “Ad” vai “広告”, retāk tiks paslēpti kļūdas dēļ.

## Uzticamāka sīkfailu importēšana

Pārlūka sīkfailu importēšana tagad saglabā nosaukumus, kas sākas ar `__Host-` un `__Secure-`. Šo prefiksu saglabāšana neskartu palīdz vietnēm pareizi atpazīt importēto sesiju.

Skatiet [laidiena piezīmes vietnē GitHub](https://github.com/nonbili/Nora/releases/tag/v0.9.5), lai uzzinātu pilnu izmaiņu sarakstu.

## Iegūstiet Nora

[Instalējiet vai atjauniniet Nora](/lv/nora/install/) vai izpētiet [Nora dokumentāciju](/lv/nora/), lai uzzinātu vairāk.
