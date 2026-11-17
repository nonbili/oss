---
title: Extension de navigateur
description: Utiliser l'extension de navigateur NouTube sur Firefox et Chrome.
sidebar:
  order: 6
---

NouTube propose une extension de navigateur pour Mozilla Firefox et Google Chrome qui apporte directement à votre navigateur de bureau la navigation épurée, la lecture améliorée, les flux personnalisés, les favoris et les outils de personnalisation de NouTube.

## Installer l'extension

Installez NouTube directement depuis les magasins d'extensions officiels :

- [Firefox Add-ons](https://addons.mozilla.org/addon/noutube/)
- [Chrome Web Store](https://chromewebstore.google.com/detail/noutube/cpmippodfdmialcoaegbbmhpdamodoif)

## Compiler depuis les sources

L'extension est open source, partage du code avec l'application NouTube et est développée avec [WXT](https://wxt.dev/) selon la norme Manifest V3 :

```bash
bun link
bun install
cd extension
bun run dev          # Mode développement Chrome
bun run dev:firefox  # Mode développement Firefox
bun run build:all    # Création des paquets de production
```
