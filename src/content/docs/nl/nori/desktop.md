---
title: Desktop
description: Nori gebruiken op Linux, macOS en Windows.
sidebar:
  order: 4
---

Nori biedt een speciale desktop-app voor Linux, macOS en Windows.

## Wat Desktop toevoegt

De desktopversie brengt de georganiseerde bladwijzerlauncher van Nori naar je computer als een snelle, toetsenbordvriendelijke metgezel:

- **Zelfstandige launcher**: Houd je links geordend in een onafhankelijk venster zonder de tabbladbalken van je browser te vullen.
- **Local-first architectuur**: Gebouwd met [Wails v3](https://v3.wails.io/) en Go, waarbij native OS-vensters worden gecombineerd met moderne web-UI-componenten.
- **Openen in systeembrowser**: Klikken op links opent ze rechtstreeks in je standaard desktopbrowser.
- **Synchronisatie-integratie**: Koppel je Nori Sync-account om bladwijzers naadloos te delen tussen desktop, mobiel en browserextensie.

## Platformpakketten

- **Linux**: Verspreid als draagbare AppImage- en `.tar.gz`-pakketten voor `amd64`.
- **macOS**: Universele ondersteuning voor Apple Silicon (`arm64`) en Intel (`amd64`), verspreid als `.dmg`-installatieprogramma's en `.app.zip`-bundels.
- **Windows**: Verspreid als setup-installatieprogramma's (`.exe`) en draagbare `.zip`-archieven.

## Systeemvereisten voor Linux

De Linux AppImage gebruikt de WebKit-engine van het systeem. Zorg ervoor dat GTK 3 en `webkit2gtk-4.1` op je systeem zijn geïnstalleerd:

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

## Releases

Ga voor de nieuwste desktopdownloads en release-opmerkingen naar de pagina [Nori GitHub Releases](https://github.com/nonbili/Nori/releases).
