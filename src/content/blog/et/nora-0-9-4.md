---
title: "Nora 0.9.4: puhtamad X-i lingid ja töökindlamad allalaadimised"
description: Eemalda jagamispääsmikud X-i postituste linkidelt, paranda Parsing-olekusse takerduvad videote allalaadimised ning hoia failinimed ja TikToki täisekraani nupud töökorras.
date: 2026-11-03
product: nora
---

Kopeeritud postituse linki peaks olema lihtne jagada ja video allalaadimine peaks jõudma kaugemale olekust **Parsing**. **Nora 0.9.4 mobiilile** lahendab mõlemad, pakkudes väikest komplekti parandusi linkide jagamiseks, failide salvestamiseks ja TikToki videote vaatamiseks.

## Jaga X-i linke ilma lisaparameetriteta

Nora eemaldab nüüd X-i jagamisparameetrid, nagu `s` ja `t`, kui kopeerid või jagad postituse linki. Näiteks:

```text
Before: https://x.com/nonbili/status/1234567890?s=20&t=example
After:  https://x.com/nonbili/status/1234567890
```

Postituse aadress jääb puutumata; liigsed jagamisparameetrid eemaldatakse. See puhastus kehtib X-i ja Twitteri postituste URL-idele, nii et samade lühikeste nimedega parameetrid teistel lehtedel jäävad puutumata.

## Pääse videote salvestamisel edasi olekust „Parsing“

Mõned videote allalaadimised võisid enne allalaadimise algust takerduda etappi **Parsing**. See väljalase parandab selle tõrke, et mõjutatud allalaadimised saaksid jätkuda.

Veebilehe poolt `blob:` URL-i kaudu loodud failid säilitavad võimaluse korral ka oma kavandatud failinimed. See muudab salvestatud failid hiljem kergemini äratuntavaks.

## Taasta TikToki täisekraani nupud

Nora TikToki täisekraani nupud võisid jääda ilmumata, kui lehe skript käivitus enne lehe sisu valmimist. Juhtnupud arvestavad nüüd selle laadimisjärjekorraga, nii et täisekraani nupp ilmub ootuspäraselt.

Täieliku muudatuste loendi leiad [väljalaskemärkmetest GitHubis](https://github.com/nonbili/Nora/releases/tag/v0.9.4).

## Hangi Nora

[Paigalda või uuenda Nora](/et/nora/install/) või tutvu lähemalt [Nora dokumentatsiooniga](/et/nora/).
