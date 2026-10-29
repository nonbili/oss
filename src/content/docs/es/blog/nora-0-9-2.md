---
title: "Nora 0.9.2: Más formas de seguir tus feeds"
description: Lee feeds de Instagram desde imginn y feeds de X desde instancias de Nitter, amplía cronologías y archivos multimedia de la galería, y elige dónde guardar las descargas en Android.
sidebar:
  label: Lanzamiento de Nora 0.9.2
  order: 2
---

*Publicado el 29 de octubre de 2026*

¿Instagram o X dejaron de actualizarse? **Nora 0.9.2** añade fuentes alternativas opcionales para mantener tus feeds al día. También incorpora zoom en cronologías y en la galería, controles de velocidad de vídeo y la opción de elegir dónde guardar las descargas en Android.

Si eres nuevo en el lector de feeds de Nora, empieza por la [introducción a la versión 0.9.0](/es/blog/nora-0-9-0/).

## Lee Instagram desde imginn y X desde Nitter

Seguir perfiles públicos de **Instagram** y **X** sin iniciar sesión puede toparse con barreras de inicio de sesión o límites de solicitudes. Nora 0.9.2 añade dos alternativas opcionales en **Ajustes del feed** para que tus cronologías sigan actualizándose sin necesidad de iniciar sesión en una cuenta:

- **Leer Instagram desde imginn:** Elige **Cuando falle Instagram** para usar imginn como respaldo, o **Primero, luego Instagram** para consultar imginn en primer lugar. Ambos modos funcionan únicamente mientras Nora está abierta. Si imginn te pide confirmar que no eres un robot, Nora te solicitará completar la verificación dentro de la aplicación.
- **Leer X desde Nitter:** Elige **Cuando falle X** o **Primero, luego X** y añade una o más direcciones de instancias de Nitter. Nora probará tus instancias por turno. Las instancias que requieren verificación del navegador funcionan solo mientras Nora está abierta.

Ambas opciones están desactivadas de forma predeterminada y se pueden activar en cualquier momento desde **Ajustes del feed**.

<div class="screenshot-gallery">
  <figure class="screenshot-card">
    <div class="screenshot-card__eyebrow">Ajustes del feed</div>
    <h2 class="screenshot-card__title">Fuentes de imginn y Nitter</h2>
    <p class="screenshot-card__body">
      Lee perfiles de Instagram desde imginn y perfiles de X desde tus instancias configuradas de Nitter, ya sea como respaldo o como fuente principal.
    </p>
    <div class="screenshot-frame">
      <img src="/blog/nora-0-9-2/feed-settings.png" alt="Ajustes del feed de Nora 0.9.2 mostrando las opciones de imginn y Nitter" />
    </div>
  </figure>

  <figure class="screenshot-card">
    <div class="screenshot-card__eyebrow">Multimedia</div>
    <h2 class="screenshot-card__title">Galería a pantalla completa y zoom</h2>
    <p class="screenshot-card__body">
      Pellizca para ampliar fotos y vídeos en la galería a pantalla completa, mantén pulsado el borde de la pantalla para acelerar la reproducción o guarda el contenido directamente.
    </p>
    <div class="screenshot-frame">
      <img src="/blog/nora-0-9-2/media-gallery.png" alt="Pantalla de galería multimedia a pantalla completa de Nora 0.9.2" />
    </div>
  </figure>

  <figure class="screenshot-card">
    <div class="screenshot-card__eyebrow">Perfiles</div>
    <h2 class="screenshot-card__title">Reabrir pestaña en perfil</h2>
    <p class="screenshot-card__body">
      Cambia cualquier pestaña móvil abierta a otro perfil de Nora directamente desde el menú de encabezado o el selector de pestañas.
    </p>
    <div class="screenshot-frame">
      <img src="/blog/nora-0-9-2/reopen-in-profile.png" alt="Diálogo para reabrir pestaña en otro perfil de Nora 0.9.2" />
    </div>
  </figure>
</div>

## Controles de vídeo en el feed, zoom y notificaciones

Ponerse al día con las cronologías y el contenido multimedia del feed también es más flexible:

- **Controles de velocidad de vídeo en la galería:** Los vídeos del feed ahora respetan tus preferencias de **Velocidad de reproducción de vídeo predeterminada** y **Mantener pulsado el borde para velocidad 2x**. Mantén pulsado el borde izquierdo o derecho de un vídeo en reproducción para saltar a velocidad 2x y luego desliza horizontalmente para cambiar de velocidad.
- **Zoom en cronologías y galería:** Pellizca para ampliar en dispositivos móviles —o mantén pulsado `Ctrl`/`Cmd` y desplázate en escritorio— tanto en las cronologías del feed como en la galería de fotos y vídeos a pantalla completa. Los controles de reproducción y búsqueda de vídeo siguen estando accesibles mientras usas el zoom.
- **Abrir notificaciones en las cronologías:** Al tocar una notificación de nueva publicación, ahora se abre directamente la cronología correspondiente de Nora.
- **Alternativa para vídeos que fallan:** Cuando un vídeo no se puede reproducir en la galería a pantalla completa, puedes abrir la publicación directamente en el sitio original.

## Descargas, perfiles y mejoras en sitios

Esta versión también incluye varias mejoras de navegación y descarga en todas las plataformas:

- **Elige dónde guardar las descargas en Android:** Activa **Preguntar dónde guardar cada descarga** en **Ajustes → Descargas** para elegir la carpeta de destino y el nombre de cada archivo. Esta versión también hace que guardar descargas sea más fiable.
- **Reabrir en otro perfil desde el menú de encabezado:** Cambia la pestaña móvil activa a otro perfil de Nora directamente desde el menú de encabezado, además de mantener pulsadas las pestañas en el selector de pestañas.
- **Correcciones en TikTok e Instagram:** Mira vídeos de TikTok con un nuevo botón de pantalla completa y descarga vídeos de forma más fiable desde TikTok e Instagram, incluso sin haber iniciado sesión en Instagram.
- **Desplazamiento más fluido y comprobaciones en segundo plano:** Las páginas ya no saltan cuando la barra de herramientas se oculta o aparece, y las comprobaciones de feeds en segundo plano funcionan mejor en Android.

Consulta el [registro de cambios](/es/nora/changelog/) para obtener todos los detalles del lanzamiento.

## Consigue Nora 0.9.2

[Instala o actualiza Nora](/es/nora/install/) en Android, iOS, Linux, macOS o Windows.

También puedes explorar la [documentación de Nora](/es/nora/) o leer las [notas de la versión en GitHub](https://github.com/nonbili/Nora/releases/tag/v0.9.2).
