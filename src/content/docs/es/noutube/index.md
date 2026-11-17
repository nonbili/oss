---
title: NouTube
description: Información general sobre NouTube y para qué está diseñado.
sidebar:
  order: 1
---
<div class="product-overview-header">
  <img class="product-overview-header__logo" src="/app-logos/noutube.png" alt="Logotipo de NouTube" />
  <p class="product-overview-header__meta">Android, iOS, escritorio y extensión</p>
</div>

NouTube es una aplicación para Android, iOS, escritorio y extensión de navegador para YouTube y YouTube Music.

Envuelve las aplicaciones web móviles de YouTube y YouTube Music y añade comportamiento nativo encima, incluyendo bloqueo de anuncios, ganchos de control de reproducción, soporte para descargas, feeds RSS y gestión de biblioteca pensada para usarse sin conexión.

## Aspectos destacados

- Sin anuncios
- Reproducción en segundo plano
- Soporte de vídeo y música en una sola aplicación
- Gestión de biblioteca e historial sin iniciar sesión
- Descargas de vídeo
- Lector de feeds RSS para canales de YouTube
- Soporte de chat en vivo
- Soporte de CSS personalizado

## Plataformas

- **Android**: Disponible en F-Droid y en lanzamientos directos de APK en GitHub.
- **iOS**: Disponible a través de la beta en TestFlight.
- **Escritorio**: Instaladores nativos para Linux, macOS y Windows.
- **Extensión de navegador**: Extensión Manifest V3 para Mozilla Firefox y Google Chrome.

La versión de escritorio sigue el mismo modelo de producto que la aplicación móvil, con instaladores nativos para pantallas más grandes.

## Primer inicio

Tras la instalación, una configuración inicial práctica es la siguiente:

1. Abre YouTube o YouTube Music dentro de la aplicación.
2. Comprueba el comportamiento de la reproducción, especialmente la reproducción en segundo plano si ese es tu uso principal.
3. Configura tus preferencias de biblioteca, historial, feeds y descargas.
4. Añade CSS personalizado solo después de confirmar que la experiencia predeterminada te funciona bien.

## Enlaces compatibles

NouTube está configurado para gestionar estos dominios:

- `youtube.com`
- `www.youtube.com`
- `m.youtube.com`
- `music.youtube.com`
- `youtu.be`

Si tu dispositivo pregunta qué aplicación debe abrir un enlace compatible, elige `NouTube`.

## Cómo funciona

NouTube envuelve las aplicaciones web en lugar de reconstruir YouTube desde cero. En la práctica, esto significa que:

- Mantienes el flujo y el diseño del sitio oficial
- La aplicación añade bloqueo de anuncios y ganchos nativos de reproducción
- La reproducción en segundo plano y la integración con el dispositivo funcionan mejor que usando el sitio en un navegador normal

## Más enlaces

Para lanzamientos, seguimiento de problemas y novedades del proyecto, utiliza el repositorio de GitHub:

- [nonbili/NouTube](https://github.com/nonbili/NouTube)

Continúa con [Instalación](/es/noutube/install/) para ver descargas y enlaces de paquetes.
