---
title: Rozszerzenie przeglądarki
description: Korzystanie z rozszerzenia przeglądarki Nori w Firefox i Chrome.
sidebar:
  order: 5
---

Nori zawiera działające lokalnie rozszerzenie dla przeglądarek Mozilla Firefox i Google Chrome.

## Główne funkcje

- **Identyczne doświadczenie jak w aplikacji mobilnej**: Okno rozszerzenia oferuje te same listy, panel wyszukiwania, historię, zarządzanie listami i ustawienia.
- **Dodawanie zakładek jednym kliknięciem**: Błyskawicznie zapisuj bieżącą kartę na wybranej liście z automatycznym pobieraniem tytułu.
- **Szybki launcher**: Przeszukuj i otwieraj zapisane linki w nowych kartach bezpośrednio z paska narzędzi przeglądarki.
- **Pamięć lokalna**: Przechowuje zakładki lokalnie w pamięci rozszerzenia przeglądarki z opcjonalną synchronizacją Nori Sync.
- **Nacisk na prywatność**: Żadna aktywność związana z przeglądaniem ani zawartość stron nie jest śledzona. Nori odbiera tylko te linki, które jawnie zapiszesz.

## Instalacja rozszerzenia

Zainstaluj Nori bezpośrednio z oficjalnych sklepów z rozszerzeniami:

- [Firefox Add-ons](https://addons.mozilla.org/addon/nori/)
- [Chrome Web Store](https://chromewebstore.google.com/detail/nori/ojgmnocnegcbhlmfoackgoocnjbfejpg)

## Budowanie ze źródeł

Rozszerzenie jest otwartoźródłowe i zbudowane przy użyciu [WXT](https://wxt.dev/) w oparciu o Manifest V3:

```bash
cd extension
bun install
bun run dev          # Tryb deweloperski Chrome
bun run dev:firefox  # Tryb deweloperski Firefox
bun run build:all    # Budowanie gotowych pakietów zip
```
