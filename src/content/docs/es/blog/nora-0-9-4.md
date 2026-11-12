---
title: "Nora 0.9.4: Enlaces de X más limpios y descargas más fiables"
description: Elimina tokens de seguimiento en enlaces de publicaciones de X, corrige descargas de vídeo atascadas en Análisis y mantén los nombres de archivo y los controles de pantalla completa de TikTok.
sidebar:
  label: Lanzamiento de Nora 0.9.4
  order: 4
---

*Publicado el 3 de noviembre de 2026*

Un enlace copiado a una publicación debería ser fácil de compartir, y la descarga de un vídeo no debería quedarse atascada en **Análisis**. **Nora 0.9.4 para móviles** soluciona ambos aspectos con un conjunto de mejoras para compartir enlaces, guardar archivos y ver vídeos de TikTok.

## Comparte enlaces de X sin tokens innecesarios

Nora ahora elimina los parámetros de seguimiento de X como `s` y `t` al copiar o compartir el enlace de una publicación. Por ejemplo:

```text
Before: https://x.com/nonbili/status/1234567890?s=20&t=example
After:  https://x.com/nonbili/status/1234567890
```

La dirección de la publicación permanece intacta y se eliminan los tokens de seguimiento superfluos. Esta limpieza se aplica a las URL de publicaciones de X y Twitter, por lo que parámetros idénticos en otras páginas no se ven afectados.

## Supera la fase de «Análisis» al guardar vídeos

Algunas descargas de vídeo podían quedarse bloqueadas en la fase de **Análisis** (Parsing) antes de comenzar la descarga. Esta versión soluciona dicho error para que las descargas afectadas continúen con normalidad.

Los archivos generados por una página web a través de una URL `blob:` también conservan sus nombres de archivo previstos cuando están disponibles, lo que facilita su identificación posterior.

## Restaura los controles de pantalla completa de TikTok

Los controles de pantalla completa de TikTok en Nora podían no mostrarse si el script de la página se ejecutaba antes de que el cuerpo del documento estuviese listo. Los controles gestionan ahora correctamente este orden de carga, haciendo que el botón de pantalla completa aparezca según lo esperado.

Consulta las [notas de la versión en GitHub](https://github.com/nonbili/Nora/releases/tag/v0.9.4) para ver la lista completa de cambios.

## Consigue Nora

[Instala o actualiza Nora](/es/nora/install/) o explora la [documentación de Nora](/es/nora/) para obtener más información.
