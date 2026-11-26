---
title: "Nora 0.9.5: puhverserverisse sisselogimine ja vaiksem X"
description: Logi puhverserveritesse sisse Androidis ja iOS 17 või uuemas versioonis, vali mida X-is peita, määra otsingu vaikevaateks Latest ja hoia tavalised Facebooki postitused nähtaval.
date: 2026-11-06
product: nora
---

**Nora 0.9.5 mobiilile** lisab mobiilis puhverserveri kasutajanime ja parooli väljad ning suurema kontrolli X-is kuvatava sisu üle. Samuti parandab see Facebooki reklaamide filtreerimist ja brauseri küpsiste importimist.

## Logi mobiilis oma puhverserverisse sisse

Ava **Settings → Browsing → Proxy**, et valida HTTP või SOCKS, sisestada host ja port ning anda oma kasutajanimi ja parool. Autentitud puhverservereid toetatakse **Androidis** ja **iOS 17 või uuemas versioonis** nii sirvimise kui ka voo päringute jaoks.

Sisselogimisandmed jäävad seadmesse ning jäetakse varukoopiatest ja sünkroonimisest välja. iOS 16 puhul jääb puhverserveri tugi piiratuks autentimata HTTP-puhverserveri päringutega voogude jaoks.

## Vali, mida X-is peita

Jaotises **Settings → Services → X** saad nüüd valida, kas peita:

- **Grok UI**, et eemaldada Groki kasutajaliidese elemendid.
- **Recommendations**, sealhulgas Who to follow, trendid ja Discover more.
- **Engagement counts**, et ajajoonel oleks vähem tähelepanu nõudvaid numbreid.

Need valikud on valikulised. Sama seadete jaotis pakub ka valikut **Default search to Latest**, nii et otsingud avanevad Top-tulemuste asemel hiljutiste postitustega. Saad X-is endiselt otsinguvahekaarte vahetada, kui soovid teistsugust vaadet.

![Nora X-i seaded Pixeli telefonis, mis näitavad valikulisi Groki, soovituste, kaasatuse arvu ja Latest-otsingu juhtnuppe](/blog/nora-0-9-5/x-settings.webp "X-i juhtnupud Noras Androidis: vali, millised kasutajaliidese elemendid peita ja kas otsingud avanevad vaates Latest.")

## Hoia tavalised Facebooki postitused nähtaval

Facebooki reklaamide filtreerimine kontrollib nüüd sponsoreeritud silti ennast. Tavalised postitused, mis juhtuvad mainima sõna „Ad“ või „広告“, peidetakse harvemini kogemata ära.

## Töökindlam küpsiste importimine

Brauseri küpsiste importimine säilitab nüüd nimed, mis algavad eesliidetega `__Host-` ja `__Secure-`. Nende eesliidete säilitamine aitab saitidel imporditud seanssi õigesti ära tunda.

Täieliku muudatuste loendi leiad [väljalaskemärkmetest GitHubis](https://github.com/nonbili/Nora/releases/tag/v0.9.5).

## Hangi Nora

[Paigalda või uuenda Nora](/et/nora/install/) või tutvu lähemalt [Nora dokumentatsiooniga](/et/nora/).
