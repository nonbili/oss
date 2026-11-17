---
title: Extensión de navegador
description: Uso de la extensión de navegador NouTube en Firefox y Chrome.
sidebar:
  order: 6
---

NouTube incluye una extensión de navegador para Mozilla Firefox y Google Chrome que lleva la navegación más limpia, la reproducción mejorada, los feeds personalizados, los marcadores y las herramientas de personalización de NouTube directamente a tu navegador de escritorio.

## Instalación de la extensión

Instala NouTube directamente desde las tiendas oficiales de extensiones:

- [Firefox Add-ons](https://addons.mozilla.org/addon/noutube/)
- [Chrome Web Store](https://chromewebstore.google.com/detail/noutube/cpmippodfdmialcoaegbbmhpdamodoif)

## Compilación desde el código fuente

La extensión es de código abierto, comparte código con la aplicación NouTube y está desarrollada con [WXT](https://wxt.dev/) utilizando Manifest V3:

```bash
bun link
bun install
cd extension
bun run dev          # Modo desarrollo para Chrome
bun run dev:firefox  # Modo desarrollo para Firefox
bun run build:all    # Compilar paquetes de producción
```
