---
title: Preguntas Frecuentes (FAQ)
description: Preguntas comunes sobre NouTube extraídas de los problemas de GitHub.
sidebar:
  order: 9
---
Esta página resume las preguntas recurrentes de los usuarios del rastreador público de problemas de GitHub.

## Problemas de inicio de sesión

Google suele rechazar el inicio de sesión desde aplicaciones que incrustan una página web, por lo que iniciar sesión dentro de NouTube puede fallar tanto en Android como en el escritorio, normalmente con el error «Es posible que este navegador o aplicación no sean seguros». En el escritorio, si no aparece un botón `Iniciar sesión` visible, intenta abrir primero el menú `Tus datos en YouTube`.

Si no puedes iniciar sesión, utiliza en su lugar la función **Inject cookie**:

1. En un ordenador, inicia sesión en YouTube con Chrome u otro navegador basado en Chromium y exporta tus cookies de YouTube con una extensión del navegador (como `getcookies.txt`).
2. En Android, copia el archivo exportado a tu dispositivo.
3. En NouTube, abre **Settings > Tools > Inject cookie**, importa el archivo (o pega su contenido) y guarda.

Este método evita la comprobación de navegador seguro de Google y es actualmente la solución más fiable para los problemas de inicio de sesión, tanto en Android como en el escritorio.

Fuentes:

- [Issue #142: Can't login to Google on Windows app](https://github.com/nonbili/NouTube/issues/142)

## ¿Por qué la última actualización aún no está disponible en F-Droid?

El calendario de publicación en F-Droid no está controlado por los mantenedores de NouTube. F-Droid compila y publica actualizaciones de forma independiente por lotes, lo que normalmente tarda varios días tras el lanzamiento de una nueva versión en GitHub.

Si deseas la última versión de inmediato, puedes descargar el APK desde la página de [GitHub Releases](https://github.com/nonbili/NouTube/releases). Sin embargo, ten en cuenta que las compilaciones de GitHub usan una clave de firma diferente a la de F-Droid, por lo que primero deberás desinstalar la versión de F-Droid antes de instalar el APK de GitHub.

Fuentes:

- [Issue #16: Update request](https://github.com/nonbili/NouTube/issues/16)
- [Issue #14: Bug: rotate to landscape resets app to home page](https://github.com/nonbili/NouTube/issues/14)

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
