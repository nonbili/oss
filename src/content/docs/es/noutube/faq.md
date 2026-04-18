---
title: Preguntas Frecuentes (FAQ)
description: Preguntas comunes sobre NouTube extraídas de los problemas de GitHub.
---
Esta página resume las preguntas recurrentes de los usuarios del rastreador público de problemas de GitHub.

## Falta el botón de inicio de sesión en escritorio o el inicio de sesión parece bloqueado

Si la aplicación de escritorio no muestra un botón de `Iniciar sesión` visible, intenta abrir primero el menú `Tus datos en YouTube`. En la discusión del problema, esa ruta permitió a los usuarios afectados llegar al flujo de inicio de sesión, y el mantenedor dijo más tarde que el botón visible debería volver en la `v0.1.6`.

Fuentes:

- [Issue #46: desktop version never logs in always error](https://github.com/nonbili/NouTube/issues/46)

## El inicio de sesión en escritorio sigue fallando incluso cuando se abre la página de inicio de sesión

Se ha informado de que algunas configuraciones de escritorio siguen fallando en el inicio de sesión de Google incluso después de borrar los datos. El hilo del problema no terminó con una solución universal confirmada, por lo que la guía práctica es:

- actualizar a la última versión de escritorio
- borrar los datos de webview/perfil de la aplicación si ya has intentado iniciar sesión
- si sigue fallando, informa de tu sistema operativo, formato de paquete y capturas de pantalla en GitHub

Fuente:

- [Issue #103: Unable to login from desktop client](https://github.com/nonbili/NouTube/issues/103)

## YouTube Music no se carga correctamente

Una de las vías de solución de problemas documentadas fue:

1. Asegúrate de que `NouTube` sea la aplicación predeterminada para `music.youtube.com`.
2. Si la aplicación oficial de YouTube Music está instalada, elimina primero su gestión de enlaces predeterminada.
3. Si el problema persiste, prueba con un agente de usuario personalizado desde `Ajustes > Herramientas > Agente de usuario personalizado`.

Esta guía proviene directamente del mantenedor en el hilo del problema. Es una solución temporal, no una solución garantizada para todos los dispositivos.

Fuente:

- [Issue #150: Noutube Music Error Message, Not Loading.](https://github.com/nonbili/NouTube/issues/150)

## Algunos anuncios se siguen colando

Hubo un informe de anuncios cortos de YouTube Premium que aparecían antes de los vídeos. El mantenedor remitió a los usuarios a la versión `v0.4.9`, lo que implica que las correcciones de bloqueo de anuncios se incluyeron en versiones posteriores. Si ves anuncios:

- actualiza a la última versión desde F-Droid o GitHub
- si el problema persiste, abre un nuevo problema con la versión de la aplicación y una captura de pantalla

Fuente:

- [Issue #117: Ad not blocked](https://github.com/nonbili/NouTube/issues/117)

## NouTube vuelve a abrir una cola en lugar de la página de inicio

Si NouTube sigue restaurando la reproducción o se abre en un elemento antiguo en lugar de en la página de inicio, comprueba si el icono de la cola sigue activo. En el hilo del problema, el mantenedor identificó una cola no borrada como la razón por la que NouTube seguía intentando reanudar la reproducción.

Fuente:

- [Issue #138: Restoring playback](https://github.com/nonbili/NouTube/issues/138)

## ¿Dónde debo informar de errores o solicitar funciones?

Utiliza el repositorio de GitHub:

- [Problemas de nonbili/NouTube](https://github.com/nonbili/NouTube/issues)
