---
title: Vanliga frågor (FAQ)
description: Vanliga frågor om NouTube hämtade från GitHub-ärenden.
sidebar:
  order: 9
---
Denna sida sammanfattar återkommande användarfrågor från det offentliga GitHub-ärendesystemet.

## Inloggningsproblem

Google nekar ofta inloggning från appar som bäddar in en webbsida, så inloggning i NouTube kan misslyckas både på Android och på datorn, oftast med felet "Den här webbläsaren eller appen kanske inte är säker". Om datorappen inte visar någon synlig `Logga in`-knapp kan du först prova att öppna menyn `Din data i YouTube`.

Om du inte kan logga in använder du funktionen **Inject cookie** i stället:

1. Logga in på YouTube på en dator i Chrome eller en annan Chromium-baserad webbläsare och exportera sedan dina YouTube-cookies med ett webbläsartillägg (t.ex. `getcookies.txt`).
2. På Android kopierar du den exporterade filen till din enhet.
3. Öppna **Settings > Tools > Inject cookie** i NouTube, importera filen (eller klistra in dess innehåll) och spara.

Den här metoden kringgår Googles kontroll av säker webbläsare och är för närvarande den mest pålitliga lösningen på inloggningsproblem både på Android och på datorn.

Källor:

- [Issue #142: Can't login to Google on Windows app](https://github.com/nonbili/NouTube/issues/142)

## YouTube Music laddas inte korrekt

Om YouTube Music inte laddas korrekt, försök att växla till **Skrivbordsplats** i appmenyn.

Källa:

- [Issue #150: Noutube Music Error Message, Not Loading.](https://github.com/nonbili/NouTube/issues/150)

## NouTube återöppnar en kö istället för startsidan

Om NouTube fortsätter att återställa uppspelningen eller öppnas tillbaka i ett gammalt objekt istället för startsidan, kontrollera om köikonen fortfarande är aktiv. I ärendetråden identifierade utvecklaren en orensad kö som anledningen till att NouTube fortsatte att försöka återuppta uppspelningen.

Källa:

- [Issue #138: Restoring playback](https://github.com/nonbili/NouTube/issues/138)

## Var ska jag rapportera buggar eller föreslå funktioner?

Använd GitHub-repot:

- [nonbili/NouTube issues](https://github.com/nonbili/NouTube/issues)
