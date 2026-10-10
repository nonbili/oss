---
title: Bureau
description: Utiliser Nori sur Linux, macOS et Windows.
sidebar:
  order: 4
---

Nori propose une application de bureau dédiée pour Linux, macOS et Windows.

## Ce qu'apporte la version de bureau

La version de bureau met à votre disposition le lanceur de favoris de Nori sous la forme d'un compagnon rapide et adapté au clavier :

- **Lanceur indépendant** : Gardez vos liens organisés dans une fenêtre distincte sans encombrer la barre d'onglets de votre navigateur.
- **Architecture axée sur le local** : Conçu avec [Wails v3](https://v3.wails.io/) et Go, associant la gestion native des fenêtres du système d'exploitation à une interface web moderne.
- **Lancement dans le navigateur du système** : Les clics sur les liens ouvrent directement la page dans votre navigateur par défaut.
- **Intégration de la synchronisation** : Connectez votre compte Nori Sync pour partager vos favoris en toute transparence entre ordinateurs, mobiles et extensions.

## Paquets par plateforme

- **Linux** : Distribué sous forme de paquets portables AppImage et `.tar.gz` pour `amd64`.
- **macOS** : Prise en charge universelle pour Apple Silicon (`arm64`) et Intel (`amd64`), distribué en programmes d'installation `.dmg` et archives `.app.zip`.
- **Windows** : Distribué sous forme d'installateurs (`.exe`) et d'archives portables `.zip`.

## Prérequis système pour Linux

L'AppImage Linux utilise le moteur WebKit du système. Assurez-vous que GTK 3 et `webkit2gtk-4.1` sont installés sur votre système :

- **Debian / Ubuntu** :
  ```bash
  sudo apt install libwebkit2gtk-4.1-0 libgtk-3-0 libfuse2
  ```
- **Fedora** :
  ```bash
  sudo dnf install webkit2gtk4.1 gtk3
  ```
- **Arch Linux** :
  ```bash
  sudo pacman -S webkit2gtk-4.1 gtk3
  ```

## Versions

Pour télécharger les dernières versions de bureau et consulter les notes de version, rendez-vous sur la page des [Releases GitHub de Nori](https://github.com/nonbili/Nori/releases).
