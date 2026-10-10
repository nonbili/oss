---
title: Desktop
description: Nori unter Linux, macOS und Windows nutzen.
sidebar:
  order: 4
---

Nori bietet eine dedizierte Desktop-App für Linux, macOS und Windows.

## Was der Desktop bietet

Die Desktop-Version bringt Noris organisierten Lesezeichen-Starter als schnellen, tastaturfreundlichen Begleiter auf Ihren Computer:

- **Eigenständiger Starter**: Behalten Sie Ihre Links in einem separaten Fenster im Blick, ohne die Tableiste des Browsers zu überfüllen.
- **Local-First-Architektur**: Entwickelt mit [Wails v3](https://v3.wails.io/) und Go, kombiniert native Fensterverwaltung des Betriebssystems mit modernen Web-UI-Komponenten.
- **Starten im Systembrowser**: Das Anklicken von Links öffnet diese direkt in Ihrem Standard-Desktop-Browser.
- **Sync-Integration**: Verbinden Sie Ihr Nori Sync-Konto, um Lesezeichen nahtlos zwischen Desktop, Mobilgeräten und der Browser-Erweiterung zu synchronisieren.

## Plattformpakete

- **Linux**: Als portable AppImage- und `.tar.gz`-Pakete für `amd64` bereitgestellt.
- **macOS**: Universelle Unterstützung für Apple Silicon (`arm64`) und Intel (`amd64`), bereitgestellt als `.dmg`-Installationsprogramme und `.app.zip`-Pakete.
- **Windows**: Bereitgestellt als Setup-Installationsprogramme (`.exe`) und portable `.zip`-Archive.

## Linux-Systemanforderungen

Das Linux-AppImage verwendet die WebKit-Engine des Systems. Stellen Sie sicher, dass auf Ihrem System GTK 3 und `webkit2gtk-4.1` installiert sind:

- **Debian / Ubuntu**:
  ```bash
  sudo apt install libwebkit2gtk-4.1-0 libgtk-3-0 libfuse2
  ```
- **Fedora**:
  ```bash
  sudo dnf install webkit2gtk4.1 gtk3
  ```
- **Arch Linux**:
  ```bash
  sudo pacman -S webkit2gtk-4.1 gtk3
  ```

## Veröffentlichungen

Die neuesten Desktop-Downloads und Versionshinweise finden Sie auf der Seite der [Nori GitHub Releases](https://github.com/nonbili/Nori/releases).
