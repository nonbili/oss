---
title: Браузерное расширение
description: Использование браузерного расширения NouTube в Firefox и Chrome.
sidebar:
  order: 6
---

NouTube включает браузерное расширение для Mozilla Firefox и Google Chrome, которое переносит более чистый просмотр, улучшенное воспроизведение, персонализированные ленты, закладки и инструменты настройки NouTube прямо в ваш десктопный браузер.

## Установка расширения

Установите NouTube напрямую из официальных каталогов расширений:

- [Firefox Add-ons](https://addons.mozilla.org/addon/noutube/)
- [Chrome Web Store](https://chromewebstore.google.com/detail/noutube/cpmippodfdmialcoaegbbmhpdamodoif)

## Сборка из исходного кода

Расширение имеет открытый исходный код, использует общий код с приложением NouTube и построено с помощью [WXT](https://wxt.dev/) на базе Manifest V3:

```bash
bun link
bun install
cd extension
bun run dev          # Режим разработки для Chrome
bun run dev:firefox  # Режим разработки для Firefox
bun run build:all    # Сборка готовых пакетов
```
