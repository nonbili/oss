---
title: Vanliga frågor (FAQ)
description: Vanliga frågor om NouTube hämtade från GitHub-ärenden.
sidebar:
  order: 9
---
Denna sida sammanfattar återkommande användarfrågor från det offentliga GitHub-ärendesystemet.

## Inloggningsknappen på desktop saknas eller inloggningen verkar ha fastnat

Om desktop-appen inte visar en synlig `Sign in`-knapp, försök att öppna menyn `Dina data i YouTube` först. I diskussionen i ärendet gjorde denna väg att drabbade användare kunde nå inloggningsflödet, och utvecklaren sa senare att den synliga knappen borde vara tillbaka i `v0.1.6`.

Källor:

- [Ärende #46: desktop version never logs in always error](https://github.com/nonbili/NouTube/issues/46)

## Inloggning på desktop misslyckas fortfarande även när inloggningssidan öppnas

Det har kommit rapporter om att vissa desktop-installationer fortfarande misslyckas med Google-inloggning även efter att ha rensat data. Ärendetråden slutade inte med en bekräftad universell lösning, så den praktiska vägledningen är:

- uppdatera till den senaste desktop-releasen
- rensa appens webview/profil-data om du redan har försökt logga in
- om det fortfarande misslyckas, rapportera ditt operativsystem, paketformat och skärmdumpar på GitHub

Källa:

- [Ärende #103: Unable to login from desktop client](https://github.com/nonbili/NouTube/issues/103)

## YouTube Music laddas inte korrekt

En dokumenterad felsökningsväg var:

1. Se till att `NouTube` är standardappen för `music.youtube.com`.
2. Om den officiella YouTube Music-appen är installerad, ta bort dess standardlänkhantering först.
3. Om problemet fortsätter, prova en anpassad user agent från `Settings > Tools > Custom user agent`.

Denna vägledning kommer direkt från utvecklaren i ärendetråden. Det är en tillfällig lösning, inte en garanterad fix för varje enhet.

Källa:

- [Ärende #150: Noutube Music Error Message, Not Loading.](https://github.com/nonbili/NouTube/issues/150)

## Vissa annonser slipper fortfarande igenom

Det fanns en rapport om korta YouTube Premium-annonser som dök upp före videor. Utvecklaren hänvisade användare till `v0.4.9`, vilket tyder på att annonsblockeringsfixar skickades i senare releaser. Om du ser annonser:

- uppdatera till den senaste releasen från F-Droid eller GitHub
- om problemet kvarstår, öppna ett nytt ärende med appversion och en skärmdump

Källa:

- [Ärende #117: Ad not blocked](https://github.com/nonbili/NouTube/issues/117)

## NouTube återöppnar en kö istället för startsidan

Om NouTube fortsätter att återställa uppspelningen eller öppnas tillbaka i ett gammalt objekt istället för startsidan, kontrollera om köikonen fortfarande är aktiv. I ärendetråden identifierade utvecklaren en orensad kö som anledningen till att NouTube fortsatte att försöka återuppta uppspelningen.

Källa:

- [Ärende #138: Restoring playback](https://github.com/nonbili/NouTube/issues/138)

## Var ska jag rapportera buggar eller föreslå funktioner?

Använd GitHub-repot:

- [nonbili/NouTube issues](https://github.com/nonbili/NouTube/issues)
