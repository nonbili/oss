---
title: Nori
description: Überblick über Nori und sein Modell zur Lesezeichenverwaltung und als Starter.
sidebar:
  order: 1
---
<div class="product-overview-header">
  <img class="product-overview-header__logo" src="/app-logos/nori.png" alt="Nori Logo" />
  <p class="product-overview-header__meta">Android, iOS, Desktop und Browser-Erweiterung</p>
</div>

Nori ist ein quelloffener Lesezeichen-Manager und Starter, der für den schnellen täglichen Zugriff auf Mobilgeräten, Desktop-Computern und Webbrowsern entwickelt wurde.

Statt Links in tiefen Browser-Ordnerstrukturen oder geschlossenen Ökosystemen zu vergraben, organisiert Nori Ihre Lesezeichen in übersichtlichen, fokussierten Listen mit sofortigem Start, Suche, ansprechenden Vorschaukarten und Freigabemenü-Integration.

## Highlights

- Mehrere benutzerdefinierte Lesezeichenlisten
- Sofortiges Öffnen im Standardbrowser des Systems oder in nativen Custom Tabs
- Geteilte URLs aus jeder App mit Listenauswahl und Schnellspeicher-Optionen speichern
- Kompakter Starter-Modus und ansprechender Vorschaukarten-Modus mit Website-Vorschaubildern
- Schnelle Suchleiste mit Filterung nach Stichwörtern und Tags
- Verlauf für kürzlich verwendete und kürzlich hinzugefügte Lesezeichen
- Import und Export über Standard-HTML-Lesezeichen, Nur-Text und vollständige JSON-Sicherungen
- Flexible Erscheinung: Hell, Dunkel, AMOLED und benutzerdefinierte Akzentfarben
- Lokale Browser-Erweiterung für Chrome und Firefox (Local-First)
- Plattformübergreifende Desktop-App für Linux, macOS und Windows
- Optionale geräteübergreifende Synchronisation über Nori Sync

## Plattformen

- **Android**: Verfügbar bei Google Play und als direkte APK-Releases auf GitHub.
- **iOS**: Verfügbar im App Store für iPhone und iPad.
- **Desktop**: Eigenständige native Apps für Linux (AppImage & Tarball), macOS (Apple Silicon & Intel) und Windows.
- **Browser-Erweiterung**: Manifest-V3-Erweiterung für Mozilla Firefox und Google Chrome.

## Erste Schritte

Ein sinnvoller erster Aufbau ist:

1. Erstellen Sie einige Listen für Ihre gängigen Link-Kategorien (z. B. `Täglich`, `Tools`, `Lesen`, `Arbeit`).
2. Fügen Sie Ihre wichtigsten Links hinzu oder importieren Sie vorhandene Lesezeichen aus dem HTML-Export Ihres Browsers.
3. Testen Sie das Öffnen eines Lesezeichens, um zu bestätigen, dass Ihr Standardbrowser Links wie erwartet öffnet.
4. Teilen Sie eine Webseite aus Ihrem mobilen Browser über das Freigabemenü des Systems mit Nori.
5. Passen Sie die Einstellungen des Erscheinungsbilds an, wie den Dunkelmodus oder Ihre bevorzugte Akzentfarbe.

## So funktioniert es

Nori entkoppelt Ihre Lesezeichensammlung von bestimmten Browser-Engines:

- Unter Android öffnen sich Lesezeichen über Custom Tabs via `expo-web-browser` oder werden direkt an Ihre Standard-Browser-App übergeben.
- Unter iOS öffnen sich Lesezeichen über das native Browser-Sheet oder den Systemstandard-Browser.
- Auf dem Desktop und in der Erweiterung öffnen sich Lesezeichen direkt in Ihren aktiven Browser-Tabs.

Dieser Ansatz stellt sicher, dass Sie stets mit Ihren bevorzugten Werbeblockern, Logins und Browserprofilen surfen, während alle Links in einem schnellen, durchsuchbaren Starter organisiert bleiben.

## Weitere Links

Für Quellcode, Releases und Issue-Tracking nutzen Sie das GitHub-Repository:

- [nonbili/Nori](https://github.com/nonbili/Nori)

Fahren Sie mit [Installation](/de/nori/install/) fort, um Store-Badges, APKs, Desktop-Downloads und Browser-Erweiterungspakete zu erhalten.
