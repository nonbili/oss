---
title: "Nora 0.9.5: Inicio de sesión en proxy y un X más tranquilo"
description: Inicia sesión en servidores proxy en Android e iOS 17 o posterior, elige qué ocultar en X, busca por defecto en Más recientes y mantén visibles las publicaciones ordinarias de Facebook.
sidebar:
  label: Lanzamiento de Nora 0.9.5
  order: 3
---

*Publicado el 6 de noviembre de 2026*

**Nora 0.9.5 para móviles** añade campos de usuario y contraseña para servidores proxy en dispositivos móviles y ofrece más control sobre el contenido que aparece en X. También mejora el filtrado de publicidad en Facebook y la importación de cookies de navegación.

## Inicia sesión en tu proxy en el móvil

Abre **Ajustes → Navegación → Proxy** para elegir HTTP o SOCKS, introduce el host y puerto y proporciona tu usuario y contraseña. Los servidores proxy con autenticación son compatibles con **Android** e **iOS 17 o posterior**, tanto para la navegación como para las peticiones de los feeds.

Las credenciales permanecen en el dispositivo y quedan excluidas de copias de seguridad y sincronización. En iOS 16, la compatibilidad con proxys continúa limitada a solicitudes de feed vía HTTP sin autenticación.

## Elige qué ocultar en X

En **Ajustes → Servicios → X**, ahora puedes optar por ocultar:

- **Interfaz de Grok**, para retirar los elementos visuales de Grok.
- **Recomendaciones**, incluyendo «A quién seguir», tendencias y «Explorar más».
- **Contadores de interacciones**, para una cronología con menos cifras compitiendo por tu atención.

Estas opciones son voluntarias. En este mismo apartado se ofrece **Búsqueda por defecto en Más recientes**, de forma que las búsquedas muestren las publicaciones recientes en lugar de los resultados destacados. Puedes cambiar de pestaña de búsqueda en X siempre que desees otra vista.

<div class="screenshot-gallery" style="max-width: 24rem;">
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">Controles de X en Nora para Android: elige qué elementos de la interfaz ocultar y si las búsquedas se abren en Más recientes.</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/nora-0-9-5/x-settings.webp" alt="Ajustes de X en Nora en un teléfono Pixel, mostrando controles opcionales de Grok, recomendaciones, contadores de interacciones y búsqueda en Más recientes" width="1080" height="2220" loading="lazy" />
    </div>
  </figure>
</div>

## Mantén visibles las publicaciones ordinarias de Facebook

El filtrado de publicidad de Facebook ahora revisa la propia etiqueta de contenido patrocinado. Las publicaciones ordinarias que casualmente mencionan palabras como «Ad» o «広告» tienen muchas menos probabilidades de ocultarse por error.

## Importación de cookies más fiable

Al importar cookies del navegador ahora se conservan los nombres que comienzan por `__Host-` y `__Secure-`. Mantener intactos estos prefijos ayuda a que los sitios web reconozcan correctamente la sesión importada.

Consulta las [notas de la versión en GitHub](https://github.com/nonbili/Nora/releases/tag/v0.9.5) para ver la lista completa de cambios.

## Consigue Nora

[Instala o actualiza Nora](/es/nora/install/) o explora la [documentación de Nora](/es/nora/) para obtener más información.
