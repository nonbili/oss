---
title: FAQ
description: Veelgestelde vragen over NouTube uit GitHub-issues.
sidebar:
  order: 9
---
Deze pagina vat terugkerende gebruikersvragen samen uit de openbare GitHub-issuetracker.

## Inlogproblemen

Google weigert vaak aanmeldingen vanuit apps die een webpagina insluiten, waardoor inloggen in NouTube op zowel Android als desktop kan mislukken, meestal met de foutmelding "This browser or app may not be secure". Als er op desktop geen zichtbare knop `Sign in` is, probeer dan eerst het menu `Your data in YouTube` te openen.

Als je niet kunt inloggen, gebruik dan in plaats daarvan de functie **Inject cookie**:

1. Log op een computer in bij YouTube in Chrome of een andere Chromium-gebaseerde browser en exporteer vervolgens je YouTube-cookies met een browserextensie (zoals `getcookies.txt`).
2. Kopieer op Android het geëxporteerde bestand naar je apparaat.
3. Open in NouTube **Settings > Tools > Inject cookie**, importeer het bestand (of plak de inhoud ervan) en sla op.

Dit omzeilt de controle op veilige browsers van Google en is momenteel de meest betrouwbare oplossing voor inlogproblemen op zowel Android als desktop.

Bronnen:

- [Issue #142: Can't login to Google on Windows app](https://github.com/nonbili/NouTube/issues/142)

## Waarom is de nieuwste update nog niet beschikbaar op F-Droid?

Het releaseschema op F-Droid wordt niet beheerd door de beheerders van NouTube. F-Droid bouwt en publiceert updates zelfstandig in batches, wat doorgaans enkele dagen duurt nadat een nieuwe versie op GitHub is uitgebracht.

Als je de nieuwste versie direct wilt hebben, kun je de APK downloaden vanaf de pagina [GitHub Releases](https://github.com/nonbili/NouTube/releases). Houd er echter rekening mee dat GitHub-releases een andere ondertekeningssleutel gebruiken dan F-Droid, dus je moet eerst de F-Droid-versie verwijderen voordat je de APK van GitHub installeert.

Bronnen:

- [Issue #16: Update request](https://github.com/nonbili/NouTube/issues/16)
- [Issue #14: Bug: rotate to landscape resets app to home page](https://github.com/nonbili/NouTube/issues/14)

## YouTube Music laadt niet correct

Als YouTube Music niet correct laadt, probeer dan **Desktop site** in of uit te schakelen in het applicatiemenu.

Bron:

- [Issue #150: Noutube Music Error Message, Not Loading.](https://github.com/nonbili/NouTube/issues/150)

## NouTube opent opnieuw een wachtrij in plaats van de startpagina

Als NouTube het afspelen blijft hervatten of weer opent bij een oud item in plaats van de startpagina, controleer dan of het wachtrij-icoon nog actief is. In de issuethread identificeerde de beheerder een niet-gewiste wachtrij als de reden waarom NouTube probeerde het afspelen te hervatten.

Bron:

- [Issue #138: Restoring playback](https://github.com/nonbili/NouTube/issues/138)

## Waar kan ik bugs melden of functies aanvragen?

Gebruik de GitHub-repository:

- [nonbili/NouTube issues](https://github.com/nonbili/NouTube/issues)
