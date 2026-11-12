---
title: "Nora 0.9.5: Proxy-inloggning och ett tystare X"
description: Logga in på proxyservrar på Android och iOS 17 eller senare, välj vad som ska döljas på X, sök som standard efter Senaste och håll vanliga Facebook-inlägg synliga.
sidebar:
  label: Nora 0.9.5-lansering
  order: 3
---

*Publicerad den 6 november 2026*

**Nora 0.9.5 för mobilen** lägger till fält för användarnamn och lösenord för proxy på mobilen och ger mer kontroll över vad som visas på X. Versionen förbättrar också annonsfiltrering på Facebook och import av webbläsarcookies.

## Logga in på din proxy på mobilen

Öppna **Inställningar → Surfning → Proxy** för att välja HTTP eller SOCKS, ange värd och port samt ange användarnamn och lösenord. Autentiserade proxyservrar stöds på **Android** och **iOS 17 eller senare**, för både webbsurfning och flödesförfrågningar.

Inloggningsuppgifterna stannar på enheten och utesluts från säkerhetskopior och synkronisering. På iOS 16 förblir proxystödet begränsat till oautentiserade HTTP-proxyförfrågningar för flöden.

## Välj vad som ska döljas på X

Under **Inställningar → Tjänster → X** kan du nu välja att dölja:

- **Grok-gränssnitt**, för att ta bort Grok-gränssnittselement.
- **Rekommendationer**, inklusive Vem du kan följa, trender och Upptäck mer.
- **Engagemangsantal**, för en tidslinje med färre siffror som konkurrerar om uppmärksamheten.

Dessa kontroller är valfria. Samma inställningssektion erbjuder även **Sök som standard efter Senaste**, så att sökningar öppnas med nya inlägg istället för populära resultat. Du kan fortfarande byta sökflikar på X när du vill ha en annan vy.

<div class="screenshot-gallery" style="max-width: 24rem;">
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">X-kontroller i Nora på Android: välj vilka gränssnittselement som ska döljas och om sökningar ska öppnas i Senaste.</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/nora-0-9-5/x-settings.png" alt="Noras X-inställningar på en Pixel-telefon, som visar kontroller för Grok, rekommendationer, engagemangsantal och Senaste sökning" width="1080" height="2220" loading="lazy" />
    </div>
  </figure>
</div>

## Håll vanliga Facebook-inlägg synliga

Facebook-annonsfiltrering kontrollerar nu själva sponsrad-etiketten direkt. Det är mindre troligt att vanliga inlägg som råkar nämna ord som ”Ad” eller ”広告” döljs av misstag.

## Mer pålitlig cookie-import

Import av webbläsarcookies bevarar nu namn som börjar med `__Host-` och `__Secure-`. Att behålla dessa prefix intakta hjälper webbplatser att känna igen den importerade sessionen korrekt.

Se [versionsanteckningarna på GitHub](https://github.com/nonbili/Nora/releases/tag/v0.9.5) för en fullständig lista över ändringar.

## Hämta Nora

[Installera eller uppdatera Nora](/sv/nora/install/), eller utforska [Nora-dokumentationen](/sv/nora/) för att läsa mer.
