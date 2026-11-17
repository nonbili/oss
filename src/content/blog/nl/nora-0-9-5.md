---
title: "Nora 0.9.5: Proxy-aanmelding en een rustiger X"
description: Log in bij proxy's op Android en iOS 17 of nieuwer, kies wat je op X wilt verbergen, zet zoekopdrachten standaard op Latest en houd gewone Facebook-berichten zichtbaar.
date: 2026-11-06
product: nora
---

**Nora 0.9.5 voor mobiel** voegt velden voor proxy-gebruikersnaam en -wachtwoord toe op mobiel en meer controle over wat er op X verschijnt. Het verbetert ook de advertentiefiltering op Facebook en het importeren van browsercookies.

## Log in bij je proxy op mobiel

Open **Settings → Browsing → Proxy** om HTTP of SOCKS te kiezen, de host en poort in te voeren en je gebruikersnaam en wachtwoord op te geven. Geauthenticeerde proxy's worden ondersteund op **Android** en **iOS 17 of nieuwer**, voor zowel browsen als feedverzoeken.

Inloggegevens blijven op het apparaat en worden uitgesloten van back-ups en synchronisatie. Op iOS 16 blijft proxy-ondersteuning beperkt tot ongeauthenticeerde HTTP-proxyverzoeken voor feeds.

## Kies wat je op X wilt verbergen

Onder **Settings → Services → X** kun je er nu voor kiezen om het volgende te verbergen:

- **Grok UI**, om Grok-interface-elementen te verwijderen.
- **Recommendations**, waaronder Who to follow, trends en Discover more.
- **Engagement counts**, voor een tijdlijn met minder cijfers die om aandacht vragen.

Deze opties zijn facultatief. Dezelfde instellingensectie biedt ook **Default search to Latest**, zodat zoekopdrachten openen met recente berichten in plaats van Topresultaten. Je kunt op X nog steeds van zoektabblad wisselen als je een andere weergave wilt.

<div class="screenshot-gallery" style="max-width: 24rem;">
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">X-bediening in Nora op Android: kies welke interface-elementen worden verborgen en of zoekopdrachten openen in Latest.</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/nora-0-9-5/x-settings.png" alt="De X-instellingen van Nora op een Pixel-telefoon, met optionele bediening voor Grok, aanbevelingen, interactietellingen en zoeken op Latest" width="1080" height="2220" loading="lazy" />
    </div>
  </figure>
</div>

## Houd gewone Facebook-berichten zichtbaar

De advertentiefiltering op Facebook controleert nu het gesponsorde label zelf. Gewone berichten die toevallig “Ad” of “広告” noemen, worden minder snel per ongeluk verborgen.

## Betrouwbaarder importeren van cookies

Het importeren van browsercookies behoudt nu namen die beginnen met `__Host-` en `__Secure-`. Door die voorvoegsels intact te houden, herkennen sites de geïmporteerde sessie correct.

Bekijk de [release-opmerkingen op GitHub](https://github.com/nonbili/Nora/releases/tag/v0.9.5) voor de volledige lijst met wijzigingen.

## Download Nora

[Installeer of update Nora](/nl/nora/install/), of verken de [Nora-documentatie](/nl/nora/) voor meer informatie.
