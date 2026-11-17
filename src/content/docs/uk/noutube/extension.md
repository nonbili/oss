---
title: Розширення браузера
description: Використання розширення браузера NouTube у Firefox та Chrome.
sidebar:
  order: 6
---

NouTube містить розширення браузера для Mozilla Firefox та Google Chrome, яке переносить чистіший перегляд, покращене відтворення, персоналізовані стрічки, закладки та інструменти налаштування NouTube безпосередньо у ваш комп'ютерний браузер.

## Встановлення розширення

Встановіть NouTube безпосередньо з офіційних магазинів розширень:

- [Firefox Add-ons](https://addons.mozilla.org/addon/noutube/)
- [Chrome Web Store](https://chromewebstore.google.com/detail/noutube/cpmippodfdmialcoaegbbmhpdamodoif)

## Збирання з вихідного коду

Розширення має відкритий вихідний код, використовує спільний код із програмою NouTube і створене за допомогою [WXT](https://wxt.dev/) з використанням Manifest V3:

```bash
bun link
bun install
cd extension
bun run dev          # Режим розробки для Chrome
bun run dev:firefox  # Режим розробки для Firefox
bun run build:all    # Зібрати готові пакунки
```
