---
title: FAQ
description: Veelgestelde vragen over Nora uit GitHub-issues.
sidebar:
  order: 9
---
Deze pagina vat terugkerende gebruikersvragen samen uit de openbare GitHub-issuetracker.

## Kan Nora Instagram- of Facebook-links rechtstreeks vanuit andere apps openen?

Ja, dat is de bedoeling. De beheerder gaf aan dat je mogelijk het volgende moet doen:

- de Android-instelling `Open by default` voor Nora inschakelen
- de officiële app verwijderen of uitschakelen als die dezelfde links blijft opeisen
- updaten naar een nieuwere Nora-release als deep links wel de app openen, maar niet het gevraagde bericht

Bron:

- [Issue #51: Support opening links in Nora](https://github.com/nonbili/Nora/issues/51)

## Instagram opent niet in Nora

Een huidig openstaand issue laat zien dat sommige gebruikers nog steeds een foutpagina van Instagram krijgen, zelfs na het opnieuw laden, inschakelen van de desktopsite-modus en wissen van webview-gegevens. Dat betekent dat er nog geen bevestigde oplossing is. Als dit op jouw apparaat gebeurt:

- probeer de pagina opnieuw te laden
- probeer de desktopsite-modus
- wis de webview-gegevens van Nora
- als het nog steeds mislukt, controleer GitHub op updates of voeg je apparaatgegevens toe aan het issue

Bron:

- [Issue #147: Issue when trying to open Instagram](https://github.com/nonbili/Nora/issues/147)

## Media blijft afspelen nadat ik de app verlaat

Dit werd gemeld voor Instagram-audio die op de achtergrond bleef doorspelen zonder bruikbare bediening. De beheerder antwoordde dat dit in de volgende release zou worden opgelost, dus het eerste wat je moet doen is Nora updaten naar de nieuwste versie die beschikbaar is in je appwinkel of releasekanaal.

Bron:

- [Issue #119: can you make it stop playing in background ? pls](https://github.com/nonbili/Nora/issues/119)

## Kan ik afbeeldingen of video's downloaden?

Ja, in ieder geval een deel hiervan wordt al ondersteund:

- houd een afbeelding lang ingedrukt om het downloadmenu te tonen
- downloads van Facebook- en Instagram-Reels werden al ondersteund toen het issue werd besproken
- ondersteuning voor het downloaden van X-video's is daarna toegevoegd

Bron:

- [Issue #153: download](https://github.com/nonbili/Nora/issues/153)

## Waarom mislukt het inloggen bij X?

De discussie bij het issue suggereert dat normaal inloggen met e-mail/wachtwoord naar verwachting werkte, terwijl inloggen via Google in een webview extra werk vereiste. De beheerder meldde later dat er in `v0.1.5` een menu `Inject cookie` is toegevoegd als tijdelijke oplossing voor getroffen gebruikers.

Bron:

- [Issue #1: Unable to sign in to X](https://github.com/nonbili/Nora/issues/1)

## Kan ik browserextensies zoals uBlock Origin of Dark Reader gebruiken in Nora?

Niet op dezelfde manier als in een volledig browserprofiel. In de discussie over het functieverzoek verwees de beheerder gebruikers naar de eigen ondersteuning voor aangepaste CSS van Nora voor UI-aanpassingen, in plaats van ondersteuning voor ingebedde browserextensies te beloven.

Bron:

- [Issue #96: Open the socials in the webview provided by browser](https://github.com/nonbili/Nora/issues/96)

## Waar kan ik bugs melden of functies aanvragen?

Gebruik de GitHub-repository:

- [nonbili/Nora issues](https://github.com/nonbili/Nora/issues)
