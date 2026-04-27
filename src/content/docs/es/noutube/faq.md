---
title: Preguntas Frecuentes (FAQ)
description: Preguntas comunes sobre NouTube extraídas de los problemas de GitHub.
sidebar:
  order: 9
---
Esta página resume las preguntas recurrentes de los usuarios del rastreador público de problemas de GitHub.

## Problemas de inicio de sesión en escritorio

Si la aplicación de escritorio no muestra un botón de `Iniciar sesión` visible, intenta abrir primero el menú `Tus datos en YouTube`. Si se abre la página de inicio de sesión pero recibes el error "es posible que el navegador o la aplicación no sean seguros", utiliza la función **Inyectar cookie (Inject cookie)**:

1. Utiliza una extensión del navegador (como `getcookies.txt`) para exportar tus cookies de YouTube.
2. Importa las cookies a NouTube usando el botón **Inyectar cookie (Inject cookie)**.

Este método omite la comprobación de navegador seguro de Google y es actualmente la solución más fiable para los problemas de inicio de sesión en escritorio.

Fuentes:

- [Issue #142: Can't login to Google on Windows app](https://github.com/nonbili/NouTube/issues/142)

## YouTube Music no se carga correctamente

Si YouTube Music no se carga correctamente, intenta activar **Sitio de escritorio (Desktop site)** en el menú de la aplicación.

Fuente:

- [Issue #150: Noutube Music Error Message, Not Loading.](https://github.com/nonbili/NouTube/issues/150)

## NouTube vuelve a abrir una cola en lugar de la página de inicio

Si NouTube sigue restaurando la reproducción o se abre en un elemento antiguo en lugar de en la página de inicio, comprueba si el icono de la cola sigue activo. En el hilo del problema, el mantenedor identificó una cola no borrada como la razón por la que NouTube seguía intentando reanudar la reproducción.

Fuente:

- [Issue #138: Restoring playback](https://github.com/nonbili/NouTube/issues/138)

## ¿Dónde debo informar de errores o solicitar funciones?

Utiliza el repositorio de GitHub:

- [Problemas de nonbili/NouTube](https://github.com/nonbili/NouTube/issues)
