---
title: Extensión de navegador
description: Uso de la extensión de navegador Nori en Firefox y Chrome.
sidebar:
  order: 5
---

Nori incluye una extensión de navegador local (Local-First) para Mozilla Firefox y Google Chrome.

## Características principales

- **Experiencia móvil adaptada**: La ventana emergente de la extensión ofrece las mismas listas, panel de búsqueda, historial, gestión de listas y ajustes que la app móvil.
- **Guardado en un clic**: Añade instantáneamente la pestaña actual a la lista que elijas con detección automática del título.
- **Lanzador rápido**: Busca y abre tus marcadores en nuevas pestañas directamente desde la barra de herramientas del navegador.
- **Almacenamiento local**: Guarda los marcadores de forma local en el almacenamiento de extensiones del navegador, con soporte opcional para Nori Sync.
- **Privacidad ante todo**: No se monitoriza la actividad de navegación ni se lee el contenido de las páginas. Nori solo recibe los enlaces que decides guardar expresamente.

## Instalación de la extensión

Instala Nori directamente desde las tiendas oficiales de extensiones:

- [Firefox Add-ons](https://addons.mozilla.org/addon/nori/)
- [Chrome Web Store](https://chromewebstore.google.com/detail/nori/ojgmnocnegcbhlmfoackgoocnjbfejpg)

## Compilación desde el código fuente

La extensión es de código abierto y está desarrollada con [WXT](https://wxt.dev/) utilizando Manifest V3:

```bash
cd extension
bun install
bun run dev          # Modo desarrollo para Chrome
bun run dev:firefox  # Modo desarrollo para Firefox
bun run build:all    # Compilar paquetes zip de producción
```
