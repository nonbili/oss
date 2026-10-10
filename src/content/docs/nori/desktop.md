---
title: Desktop
description: Using Nori on Linux, macOS, and Windows.
sidebar:
  order: 4
---

Nori provides a dedicated desktop app for Linux, macOS, and Windows.

## What Desktop Adds

The desktop version brings Nori's organized bookmark launcher to your computer as a fast, keyboard-friendly companion:

- **Standalone launcher**: Keep your links organized in an independent window without cluttering browser tab bars.
- **Local-first architecture**: Built with [Wails v3](https://v3.wails.io/) and Go, pairing native OS windowing with modern web UI components.
- **System browser launching**: Clicking links opens them directly in your default desktop browser.
- **Sync integration**: Connect your Nori Sync account to share bookmarks seamlessly between desktop, mobile, and browser extension.

## Platform Packages

- **Linux**: Distributed as portable AppImage and `.tar.gz` packages for `amd64`.
- **macOS**: Universal support for Apple Silicon (`arm64`) and Intel (`amd64`), distributed as `.dmg` installers and `.app.zip` bundles.
- **Windows**: Distributed as setup installers (`.exe`) and portable `.zip` archives.

## Linux System Requirements

The Linux AppImage uses the system WebKit engine. Ensure your system has GTK 3 and `webkit2gtk-4.1` installed:

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

For the latest desktop downloads and release notes, visit the [Nori GitHub Releases](https://github.com/nonbili/Nori/releases) page.
