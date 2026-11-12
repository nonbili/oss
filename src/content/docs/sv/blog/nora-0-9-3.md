---
title: "Nora 0.9.3: Öppna nedladdningar snabbare, surfa smidigare"
description: Öppna slutförda nedladdningar från deras aviseringar, svep genom karuseller på Android och minska bakgrundsarbete och minnesanvändning.
sidebar:
  label: Nora 0.9.3-lansering
  order: 5
---

*Publicerad den 31 oktober 2026*

**Nora 0.9.3 för mobilen** gör det enklare att nå sparade filer, med en direktgenväg i nedladdningsbekräftelsen. Den åtgärdar också karusellgester på Android och minskar det arbete Nora utför när sidor inte längre används.

## Gå direkt till din nedladdning

På **Android** innehåller bekräftelser för nedladdning nu en **Öppna**-knapp för att öppna den sparade filen i en kompatibel app. När du sparar ett enskilt foto eller en video från flödet visas också denna åtgärd.

Spara filen och använd sedan knappen i bekräftelsemeddelandet för att nå den utan att behöva leta i mappen Hämtade filer.

## Svep genom karuseller på Android

När du svepte i sidled genom en sidas foton kunde gesten för att dra nedåt och uppdatera oavsiktligt starta. Nora skiljer nu mellan horisontella svepningar och vertikala dragningar, så att du kan bläddra genom en karusell utan att ladda om sidan.

## Mindre bakgrundsarbete, bättre flikrensning

På Android pausar Nora WebView-timers medan appen är i bakgrunden, vilket minskar onödig processor- och batterianvändning. Uppdateringar av videoförlopp i flödet körs också endast när zoomkontrollerna behöver dem.

Stängda flikar och avfärdade popup-fönster frigör nu sina WebViews mer tillförlitligt på Android, och stängda flikar kan rensas korrekt på iOS. Denna version åtgärdar även ett problem på Android där en länk som öppnades i en ny flik kunde visa en tom sida.

Se [versionsanteckningarna på GitHub](https://github.com/nonbili/Nora/releases/tag/v0.9.3) för en fullständig lista över ändringar.

## Hämta Nora

[Installera eller uppdatera Nora](/sv/nora/install/), eller utforska [Nora-dokumentationen](/sv/nora/) för att läsa mer.
