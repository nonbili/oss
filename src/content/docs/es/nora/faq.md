---
title: Preguntas Frecuentes (FAQ)
description: Preguntas comunes sobre Nora extraídas de los problemas de GitHub.
sidebar:
  order: 9
---
Esta página resume las preguntas recurrentes de los usuarios del rastreador público de problemas de GitHub.

## ¿Puede Nora abrir enlaces de Instagram o Facebook directamente desde otras aplicaciones?

Sí, está pensado para que funcione así. El mantenedor indicó que es posible que debas:

- habilitar el comportamiento `Abrir de forma predeterminada` de Android para Nora
- desinstalar o deshabilitar la aplicación oficial si sigue reclamando los mismos enlaces
- actualizar a una versión más reciente de Nora si los enlaces profundos abren la aplicación pero no la publicación solicitada

Fuente:

- [Issue #51: Support opening links in Nora](https://github.com/nonbili/Nora/issues/51)

## Instagram no se abre dentro de Nora

Un problema abierto actual muestra que algunos usuarios todavía se encuentran con una página de error de Instagram incluso después de intentar recargar, el modo de sitio de escritorio y borrar los datos de webview. Eso significa que aún no hay una solución confirmada. Si esto sucede en tu dispositivo:

- intenta recargar
- intenta el modo de sitio de escritorio
- borra los datos de webview de Nora
- si sigue fallando, consulta las actualizaciones en GitHub o añade los detalles de tu dispositivo al problema

Fuente:

- [Issue #147: Issue when trying to open Instagram](https://github.com/nonbili/Nora/issues/147)

## El contenido multimedia se sigue reproduciendo después de salir de la aplicación

Se informó de que el audio de Instagram continuaba en segundo plano sin controles útiles. El mantenedor respondió que se solucionaría en la próxima versión, por lo que lo primero que hay que hacer es actualizar Nora a la versión más reciente disponible en tu tienda o canal de versiones.

Fuente:

- [Issue #119: can you make it stop playing in background ? pls](https://github.com/nonbili/Nora/issues/119)

## ¿Puedo descargar imágenes o vídeos?

Sí, al menos una parte de esto ya es compatible:

- mantén pulsada una imagen para mostrar el menú de descarga
- las descargas de Reels de Facebook e Instagram ya eran compatibles cuando se debatió el problema
- la compatibilidad con la descarga de vídeos de X se añadió después

Fuente:

- [Issue #153: download](https://github.com/nonbili/Nora/issues/153)

## ¿Por qué falla el inicio de sesión en X?

La discusión del problema sugiere que se esperaba que el inicio de sesión normal con correo electrónico/contraseña funcionara, mientras que el inicio de sesión basado en Google en un webview necesitaba trabajo adicional. El mantenedor dijo más tarde que se añadió un menú `Inject cookie` en la `v0.1.5` como solución temporal para los usuarios afectados.

Fuente:

- [Issue #1: Unable to sign in to X](https://github.com/nonbili/Nora/issues/1)

## ¿Puedo usar las extensiones de mi navegador como uBlock Origin o Dark Reader dentro de Nora?

No de la misma manera que en un perfil de navegador completo. En la discusión de la solicitud de función, el mantenedor dirigió a los usuarios al soporte de CSS personalizado propio de Nora para los cambios de la interfaz de usuario en lugar de prometer el soporte de extensiones de navegador integradas.

Fuente:

- [Issue #96: Open the socials in the webview provided by browser](https://github.com/nonbili/Nora/issues/96)

## ¿Dónde debo informar de errores o solicitar funciones?

Utiliza el repositorio de GitHub:

- [Problemas de nonbili/Nora](https://github.com/nonbili/Nora/issues)
