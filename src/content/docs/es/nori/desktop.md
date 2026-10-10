---
title: Escritorio
description: Uso de Nori en Linux, macOS y Windows.
sidebar:
  order: 4
---

Nori ofrece una aplicación de escritorio dedicada para Linux, macOS y Windows.

## Ventajas de la versión de escritorio

La versión de escritorio traslada el lanzador de marcadores de Nori a tu ordenador como una herramienta rápida y adaptada al teclado:

- **Lanzador independiente**: Mantén tus enlaces organizados en una ventana propia sin sobrecargar la barra de pestañas del navegador.
- **Arquitectura centrada en lo local**: Creado con [Wails v3](https://v3.wails.io/) y Go, combinando la gestión nativa de ventanas del sistema operativo con una interfaz web moderna.
- **Apertura en el navegador del sistema**: Al hacer clic en un enlace, este se abre directamente en tu navegador de escritorio predeterminado.
- **Integración con sincronización**: Conecta tu cuenta de Nori Sync para compartir marcadores sin fricciones entre ordenadores, móviles y la extensión de navegador.

## Paquetes por plataforma

- **Linux**: Distribuido como paquetes portables AppImage y archivos `.tar.gz` para `amd64`.
- **macOS**: Compatibilidad universal con Apple Silicon (`arm64`) e Intel (`amd64`), distribuido en instaladores `.dmg` y paquetes `.app.zip`.
- **Windows**: Distribuido como instaladores ejecutables (`.exe`) y archivos portables `.zip`.

## Requisitos del sistema en Linux

La versión AppImage para Linux utiliza el motor WebKit del sistema. Asegúrate de tener instalados GTK 3 y `webkit2gtk-4.1` en tu distribución:

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

## Versiones

Para descargar las últimas versiones de escritorio y leer las notas de lanzamiento, visita la página de [Releases de Nori en GitHub](https://github.com/nonbili/Nori/releases).
