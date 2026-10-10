---
title: Desktop
description: Använda Nori på Linux, macOS och Windows.
sidebar:
  order: 4
---

Nori erbjuder en dedikerad skrivbordsapp för Linux, macOS och Windows.

## Vad skrivbordsversionen tillför

Skrivbordsversionen för över Noris organiserade bokmärkesstartare till din dator som en snabb, tangentbordsvänlig följeslagare:

- **Fristående startverktyg**: Håll dina länkar organiserade i ett självständigt fönster utan att belamra webbläsarens flikfält.
- **Local-first-arkitektur**: Byggd med [Wails v3](https://v3.wails.io/) och Go, vilket förenar operativsystemets fönsterhantering med moderna webbkomponenter.
- **Öppnas i systemwebbläsaren**: När du klickar på länkar öppnas de direkt i din vanliga skrivbordswebbläsare.
- **Synkroniseringsintegrering**: Anslut ditt Nori Sync-konto för att sömlöst dela bokmärken mellan dator, mobil och webbläsartillägg.

## Plattforms-paket

- **Linux**: Distribueras som portabla AppImage- och `.tar.gz`-paket för `amd64`.
- **macOS**: Universellt stöd för Apple Silicon (`arm64`) och Intel (`amd64`), distribueras som `.dmg`-installationsprogram och `.app.zip`-paket.
- **Windows**: Distribueras som installationsprogram (`.exe`) och portabla `.zip`-arkiv.

## Systemkrav för Linux

Linux AppImage använder systemets WebKit-motor. Se till att systemet har GTK 3 och `webkit2gtk-4.1` installerat:

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

## Versioner

För de senaste skrivbordsnedladdningarna och versionsanteckningarna, besök sidan för [Nori GitHub Releases](https://github.com/nonbili/Nori/releases).
