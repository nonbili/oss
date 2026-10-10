---
title: Desktop
description: Utilizzo di Nori su Linux, macOS e Windows.
sidebar:
  order: 4
---

Nori mette a disposizione un'applicazione desktop dedicata per Linux, macOS e Windows.

## Vantaggi della versione desktop

La versione desktop porta l'avviatore di segnalibri di Nori sul computer come strumento rapido e comodo da usare con la tastiera:

- **Avviatore autonomo**: Mantieni i tuoi link organizzati in una finestra separata senza appesantire la barra delle schede del browser.
- **Architettura incentrata sul locale**: Sviluppato con [Wails v3](https://v3.wails.io/) e Go, combina la gestione nativa delle finestre del sistema operativo con un'interfaccia utente web moderna.
- **Avvio nel browser di sistema**: Facendo clic su un link, la pagina si aprirà direttamente nel tuo browser desktop predefinito.
- **Integrazione con la sincronizzazione**: Collega il tuo account Nori Sync per sincronizzare i segnalibri senza interruzioni tra computer, dispositivi mobili ed estensione per browser.

## Pacchetti per piattaforma

- **Linux**: Distribuito come pacchetti portabili AppImage e archivi `.tar.gz` per `amd64`.
- **macOS**: Supporto universale per Apple Silicon (`arm64`) e Intel (`amd64`), distribuito come programmi di installazione `.dmg` e pacchetti `.app.zip`.
- **Windows**: Distribuito come programmi di installazione eseguibili (`.exe`) e archivi portabili `.zip`.

## Requisiti di sistema per Linux

L'AppImage per Linux utilizza il motore WebKit di sistema. Verifica che GTK 3 e `webkit2gtk-4.1` siano installati sul tuo sistema:

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

## Rilasci

Per scaricare le versioni desktop più recenti e consultare le note di rilascio, visita la pagina [GitHub Releases di Nori](https://github.com/nonbili/Nori/releases).
