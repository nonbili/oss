---
title: Nori
description: Información general sobre Nori y su modelo de gestión y apertura de marcadores.
sidebar:
  order: 1
---
<div class="product-overview-header">
  <img class="product-overview-header__logo" src="/app-logos/nori.png" alt="Logotipo de Nori" />
  <p class="product-overview-header__meta">Android, iOS, escritorio y extensión</p>
</div>

Nori es un gestor y lanzador de marcadores de código abierto diseñado para un acceso diario y rápido en dispositivos móviles, ordenadores y navegadores web.

En lugar de sepultar tus enlaces en complejas estructuras de carpetas del navegador o en ecosistemas cerrados, Nori organiza tus marcadores en listas claras y enfocadas con apertura instantánea, búsqueda, tarjetas con vista previa e integración con el menú compartir del sistema.

## Aspectos destacados

- Múltiples listas de marcadores personalizadas
- Apertura instantánea en el navegador predeterminado del sistema o en Custom Tabs nativas
- Guarda URL compartidas desde cualquier app con selector de listas y opciones de guardado rápido
- Modo lanzador compacto y modo de vista previa en tarjetas con imágenes de portada
- Panel de búsqueda rápida con filtrado por palabras clave y etiquetas
- Historial de uso reciente y de enlaces añadidos recientemente
- Importación y exportación mediante archivos HTML estándar de marcadores, texto plano y copias de seguridad completas en JSON
- Apariencia personalizable: Claro, Oscuro, AMOLED y colores de acento personalizados
- Extensión de navegador local (Local-First) para Chrome y Firefox
- Aplicación de escritorio multiplataforma para Linux, macOS y Windows
- Sincronización multidispositivo opcional mediante Nori Sync

## Plataformas

- **Android**: Disponible en Google Play y mediante descargas directas de APK en GitHub.
- **iOS**: Disponible en App Store para iPhone y iPad.
- **Escritorio**: Aplicaciones nativas independientes para Linux (AppImage y tarball), macOS (Apple Silicon e Intel) y Windows.
- **Extensión de navegador**: Extensión Manifest V3 para Mozilla Firefox y Google Chrome.

## Primeros pasos

Una configuración inicial recomendada:

1. Crea algunas listas para tus categorías habituales (p. ej., `Diario`, `Herramientas`, `Lectura`, `Trabajo`).
2. Añade tus enlaces principales o importa tus marcadores actuales desde el archivo HTML exportado de tu navegador.
3. Prueba a abrir un marcador para confirmar que tu navegador predeterminado abre los enlaces como esperas.
4. Comparte una página web desde tu navegador móvil hacia Nori usando el menú compartir del sistema.
5. Personaliza las opciones de apariencia, como el modo oscuro o tu color de acento favorito.

## Cómo funciona

Nori desacopla tu colección de marcadores de los motores de navegación específicos:

- En Android, los marcadores se abren a través de Custom Tabs con `expo-web-browser` o se transfieren directamente a tu navegador predeterminado.
- En iOS, los marcadores se abren mediante Safari View Controller o en el navegador predeterminado del sistema.
- En escritorio y extensión, los marcadores se abren directamente en pestañas activas de tu navegador.

Este enfoque garantiza que siempre navegues con tus bloqueadores de anuncios, sesiones iniciadas y perfiles habituales, manteniendo todos tus enlaces organizados en un lanzador ágil y fácil de buscar.

## Más enlaces

Para acceder al código fuente, lanzamientos y seguimiento de problemas, visita el repositorio de GitHub:

- [nonbili/Nori](https://github.com/nonbili/Nori)

Continúa con [Instalación](/es/nori/install/) para consultar enlaces a tiendas, APK, descargas de escritorio y paquetes de extensiones.
