---
title: Desktop
description: Korzystanie z Nori w systemach Linux, macOS i Windows.
sidebar:
  order: 4
---

Nori oferuje dedykowaną aplikację desktopową dla systemów Linux, macOS i Windows.

## Co dodaje wersja desktopowa

Wersja desktopowa przenosi zorganizowany launcher zakładek Nori na Twój komputer jako szybkie narzędzie wygodne w obsłudze z klawiatury:

- **Samodzielny launcher**: Trzymaj linki uporządkowane w niezależnym oknie, bez zaśmiecania paska kart przeglądarki.
- **Architektura local-first**: Zbudowana przy użyciu [Wails v3](https://v3.wails.io/) i języka Go, łącząc natywne zarządzanie oknami systemu z nowoczesnym interfejsem webowym.
- **Otwieranie w przeglądarce systemowej**: Kliknięcie linku otwiera go bezpośrednio w domyślnej przeglądarce komputera.
- **Integracja z synchronizacją**: Połącz konto Nori Sync, aby płynnie współdzielić zakładki między komputerem, telefonem a rozszerzeniem przeglądarki.

## Pakiety dla poszczególnych platform

- **Linux**: Dystrybuowane jako przenośne pakiety AppImage oraz archiwa `.tar.gz` dla architektury `amd64`.
- **macOS**: Uniwersalne wsparcie dla Apple Silicon (`arm64`) i Intel (`amd64`), dystrybuowane jako instalatory `.dmg` oraz archiwa `.app.zip`.
- **Windows**: Dystrybuowane jako instalatory `.exe` oraz przenośne archiwa `.zip`.

## Wymagania systemowe dla systemu Linux

Pakiet Linux AppImage korzysta z systemowego silnika WebKit. Upewnij się, że w systemie zainstalowane są biblioteki GTK 3 i `webkit2gtk-4.1`:

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

## Wydania

Najnowsze pliki do pobrania i informacje o wydaniach znajdziesz na stronie [wydań Nori na GitHubie](https://github.com/nonbili/Nori/releases).
