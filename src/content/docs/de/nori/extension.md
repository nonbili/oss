---
title: Browser-Erweiterung
description: Verwendung der Nori-Browser-Erweiterung für Firefox und Chrome.
sidebar:
  order: 5
---

Nori enthält eine lokale Browser-Erweiterung für Mozilla Firefox und Google Chrome.

## Hauptfunktionen

- **Spiegelt das mobile Erlebnis wider**: Das Popup-Fenster der Erweiterung bietet dieselben Listen, die Suchleiste, den Verlauf, die Listenverwaltung und die Einstellungen wie die mobile App.
- **Lesezeichen mit einem Klick**: Speichern Sie den aktuellen Tab sofort mit automatischer Titelabfrage in Ihrer gewünschten Liste.
- **Schneller Starter**: Suchen und öffnen Sie Ihre gespeicherten Links direkt aus der Browser-Symbolleiste in neuen Tabs.
- **Lokaler Speicher**: Speichert Lesezeichen lokal im Erweiterungsspeicher Ihres Browsers mit optionaler Unterstützung für Nori Sync.
- **Fokus auf Privatsphäre**: Weder Surfaktivitäten noch Seiteninhalte werden erfasst. Nori empfängt nur Links, die Sie ausdrücklich speichern.

## Installation der Erweiterung

Installieren Sie Nori direkt aus den offiziellen Erweiterungs-Stores:

- [Firefox Add-ons](https://addons.mozilla.org/addon/nori/)
- [Chrome Web Store](https://chromewebstore.google.com/detail/nori/ojgmnocnegcbhlmfoackgoocnjbfejpg)

## Aus dem Quellcode erstellen

Die Erweiterung ist quelloffen und mit [WXT](https://wxt.dev/) unter Verwendung von Manifest V3 erstellt:

```bash
cd extension
bun install
bun run dev          # Chrome-Entwicklungsmodus
bun run dev:firefox  # Firefox-Entwicklungsmodus
bun run build:all    # Produktions-ZIP-Pakete erstellen
```
