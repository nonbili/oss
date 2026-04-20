---
title: Vanliga frågor (FAQ)
description: Vanliga frågor om NouTube hämtade från GitHub-ärenden.
sidebar:
  order: 9
---
Denna sida sammanfattar återkommande användarfrågor från det offentliga GitHub-ärendesystemet.

## Inloggningsproblem på desktop

Om skrivbordsappen inte visar en synlig `Logga in`-knapp, försök att öppna menyn `Dina data i YouTube` först. Om inloggningssidan öppnas men du får ett felmeddelande om att "webbläsaren eller appen kanske inte är säker", använd funktionen **Inject cookie**:

1. Använd ett webbläsartillägg (som `getcookies.txt`) för att exportera dina YouTube-cookies.
2. Importera cookies till NouTube med knappen **Inject cookie**.

Denna metod kringgår Googles säkerhetskontroll av webbläsaren och är för närvarande den mest tillförlitliga lösningen för inloggningsproblem på skrivbordet.

Källor:

- [Issue #142: Can't login to Google on Windows app](https://github.com/nonbili/NouTube/issues/142)

## YouTube Music laddas inte korrekt

Om YouTube Music inte laddas korrekt, försök att växla till **Skrivbordsplats** i appmenyn (tillgängligt sedan `v0.5.1`).

Andra felsökningssteg:

1. Se till att `NouTube` är standardappen för `music.youtube.com`.
2. Om den officiella YouTube Music-appen är installerad, ta bort dess standardlänkhantering först.
3. Om problemet fortsätter, prova en anpassad user agent från `Settings > Tools > Custom user agent`.

Källa:

- [Issue #150: Noutube Music Error Message, Not Loading.](https://github.com/nonbili/NouTube/issues/150)

## NouTube återöppnar en kö istället för startsidan

Om NouTube fortsätter att återställa uppspelningen eller öppnas tillbaka i ett gammalt objekt istället för startsidan, kontrollera om köikonen fortfarande är aktiv. I ärendetråden identifierade utvecklaren en orensad kö som anledningen till att NouTube fortsatte att försöka återuppta uppspelningen.

Källa:

- [Issue #138: Restoring playback](https://github.com/nonbili/NouTube/issues/138)

## Var ska jag rapportera buggar eller föreslå funktioner?

Använd GitHub-repot:

- [nonbili/NouTube issues](https://github.com/nonbili/NouTube/issues)
