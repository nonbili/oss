---
title: Nori
description: Overzicht van Nori en het model voor bladwijzerbeheer en launcher.
sidebar:
  order: 1
---
<div class="product-overview-header">
  <img class="product-overview-header__logo" src="/app-logos/nori.png" alt="Nori-logo" />
  <p class="product-overview-header__meta">Android, iOS, desktop en extensie</p>
</div>

Nori is een opensource-bladwijzerbeheerder en launcher, ontworpen voor snelle dagelijkse toegang op mobiele apparaten, desktopcomputers en webbrowsers.

In plaats van links te begraven in diepe browsermappenstructuren of gesloten ecosystemen, organiseert Nori je bladwijzers in overzichtelijke, gerichte lijsten met direct openen, zoeken, rijke kaartvoorbeelden en integratie met het deelmenu.

## Hoogtepunten

- Meerdere aangepaste bladwijzerlijsten
- Direct openen in de standaard systeembrowser of native aangepaste tabbladen
- Gedeelde URL's vanuit elke app opslaan met lijstkiezer en snel-opslaan-opties
- Compacte launcher-modus en rijke kaartvoorbeeldmodus met omslagafbeeldingen van websites
- Snelle zoeklade met trefwoord- en tagfiltering
- Geschiedenis van recent gebruikte en recent toegevoegde links
- Importeren en exporteren via standaard HTML-bladwijzers, platte tekst en volledige JSON-back-ups
- Flexibele weergave: Light, Dark, AMOLED en aangepaste accentkleuren
- Local-first browserextensie voor Chrome en Firefox
- Platformonafhankelijke desktop-app voor Linux, macOS en Windows
- Optionele synchronisatie tussen meerdere apparaten via Nori Sync

## Platformen

- **Android**: Beschikbaar op Google Play en directe GitHub APK-releases.
- **iOS**: Beschikbaar in de App Store voor iPhone en iPad.
- **Desktop**: Zelfstandige native apps voor Linux (AppImage & tarball), macOS (Apple Silicon & Intel) en Windows.
- **Browserextensie**: Manifest V3-extensie voor Mozilla Firefox en Google Chrome.

## Eerste gebruik

Een verstandige eerste configuratie is:

1. Maak een paar lijsten aan voor je veelgebruikte linkcategorieën (bijv. `Dagelijks`, `Tools`, `Lezen`, `Werk`).
2. Voeg je belangrijkste links toe of importeer bestaande bladwijzers vanuit de HTML-export van je browser.
3. Test het openen van een bladwijzer om te controleren of je standaardbrowser links zoals verwacht opent.
4. Probeer een webpagina vanuit je mobiele browser te delen met Nori via het deelmenu van het systeem.
5. Pas weergave-instellingen aan, zoals de donkere modus of je favoriete accentkleur.

## Hoe het werkt

Nori koppelt je bladwijzerverzameling los van specifieke browser-engines:

- Op Android openen bladwijzers via Custom Tabs via `expo-web-browser` of worden ze rechtstreeks doorgegeven aan je standaardbrowser-app.
- Op iOS openen bladwijzers via het native browservenster of de standaard systeembrowser.
- Op desktop en in de extensie openen bladwijzers rechtstreeks in je actieve browsertabbladen.

Deze aanpak zorgt ervoor dat je altijd browst met je favoriete advertentieblokkers, aanmeldingen en browserprofielen intact, terwijl al je links geordend blijven in één snelle, doorzoekbare launcher.

## Meer links

Voor broncode, releases en issuetracking gebruik je de GitHub-repository:

- [nonbili/Nori](https://github.com/nonbili/Nori)

Ga verder met [Installeren](/nl/nori/install/) voor winkelbadges, APK's, desktopdownloads en browserextensiepakketten.
