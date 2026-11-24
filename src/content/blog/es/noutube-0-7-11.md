---
title: "NouTube 0.7.11 añade una barra de herramientas personalizable en Android y descargas de vídeo en iOS"
description: Coloca tus acciones favoritas en la barra de herramientas de Android, desliza para pasar a pantalla completa, oculta los comentarios de YouTube y guarda vídeos en iPhone y iPad.
date: 2026-11-24
product: noutube
---

NouTube 0.7.11 te permite colocar acciones como **Compartir** y **Abrir URL** directamente en la barra de herramientas de Android. En iPhone y iPad, ahora puedes descargar vídeos compatibles desde **Herramientas**, y los vídeos empiezan más rápido. La actualización móvil también añade gestos de deslizamiento para la pantalla completa y un ajuste para ocultar los comentarios de YouTube.

## Coloca tus acciones más usadas en la barra de herramientas de Android

Abre **Ajustes → Apariencia → Botones de la barra de herramientas**. Usa los interruptores para elegir qué botones aparecen y arrastra los controladores para establecer su orden. Por ejemplo, activa **Compartir** y **Abrir URL** y arrástralos a la parte superior de la lista para tener ambas acciones a mano mientras ves un vídeo.

También puedes añadir a la barra de herramientas **Herramientas**, **Sitio de escritorio**, **Ajustes** o el selector **YouTube / YouTube Music**. En la misma lista puedes reordenar botones existentes como **Biblioteca**, **Feed de canales** e **Historial**.

<div class="screenshot-gallery">
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">Activa Compartir y Abrir URL y arrástralos a la parte superior de la lista.</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/noutube-0-7-11/android-toolbar-settings.webp" alt="Ajustes de Apariencia en Android con Compartir y Abrir URL activados en las dos primeras filas y controladores de arrastre a la derecha" width="1080" height="2220" loading="lazy" />
    </div>
  </figure>
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">Compartir y Abrir URL son ahora los dos primeros botones de la barra de herramientas de la página de reproducción.</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/noutube-0-7-11/android-toolbar-result.webp" alt="Barra de herramientas de NouTube sobre la página de reproducción de Big Buck Bunny, con el icono de Compartir y el icono de enlace de Abrir URL a la izquierda del todo" width="1080" height="2220" loading="lazy" />
    </div>
  </figure>
</div>

## Descarga vídeos en iPhone y iPad

En un vídeo que tengas permiso para guardar, abre **Herramientas** y toca **Descargar vídeo**. NouTube descarga un MP4 compatible cuando hay uno disponible. Cuando termine la descarga, toca **Exportar** para guardar o compartir el archivo.

<div class="screenshot-gallery">
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">Herramientas rellena la URL del vídeo actual.</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/noutube-0-7-11/ios-download-tools.webp" alt="Panel de descarga en iPhone con la URL del vídeo rellenada, una nota sobre la disponibilidad de MP4 y el botón Descargar vídeo" width="1206" height="2622" loading="lazy" />
    </div>
  </figure>
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">Exportar aparece en el Historial de descargas cuando el archivo está listo.</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/noutube-0-7-11/ios-download-export.webp" alt="Entrada del Historial de descargas en iPhone con una marca de verificación verde, el estado Descarga completada y un botón Exportar" width="1206" height="2622" loading="lazy" />
    </div>
  </figure>
</div>

*Big Buck Bunny* © 2008 Blender Foundation / [www.bigbuckbunny.org](https://peach.blender.org/about/). [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/).

El inicio de vídeo más rápido que llegó a Android en la 0.7.10 ahora también se aplica a iOS. En iPad, los controles de reproducción de YouTube siguen disponibles en pantalla completa.

## Desliza para pantalla completa u oculta los comentarios

En móvil, desliza hacia arriba sobre el reproductor de YouTube para entrar en pantalla completa y hacia abajo para volver a la página de reproducción. Empieza el gesto sobre el propio vídeo para poder seguir usando los controles de reproducción y la barra de progreso como siempre.

Para quitar la sección de comentarios de las páginas de reproducción de YouTube, abre **Ajustes → Preferencias → Sin distracciones** y activa **Ocultar comentarios**.

<div class="screenshot-gallery" style="max-width: 24rem;">
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">Ocultar comentarios está al final de los ajustes Sin distracciones.</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/noutube-0-7-11/hide-comments-setting.webp" alt="Pantalla de Preferencias en Android con el interruptor Ocultar comentarios activado al final de la sección Sin distracciones" width="1080" height="2220" loading="lazy" />
    </div>
  </figure>
</div>

## Otras correcciones

- Las descargas de audio Opus ahora usan la extensión `.opus`. NouTube corrige un problema de inicio de yt-dlp en las versiones de lanzamiento de Android y gestiona de forma más fiable los fallos de descarga y reproducción.
- La página de reproducción de escritorio de YouTube ahora se ajusta a las pantallas estrechas de Android. Las vistas previas del feed ya no se guardan en el historial de reproducciones en Android, y **Siguiente** en los controles de YouTube Music del sistema ya no altera la cola propia de NouTube.
- Esta versión actualiza las traducciones al italiano, polaco, portugués de Brasil, ruso y ucraniano.

[Ver la versión en GitHub](https://github.com/nonbili/NouTube/releases/tag/v0.7.11).

## Consigue NouTube

[Instala o actualiza NouTube](/es/noutube/install/), o consulta la [documentación de NouTube](/es/noutube/).
