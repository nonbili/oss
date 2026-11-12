---
title: "Nora 0.9.4: Czystsze linki do X i bardziej niezawodne pobieranie"
description: Usuwaj parametry śledzenia z linków do postów na X, rozwiązuj problem pobierania wideo zablokowanego na analizie oraz zachowaj nazwy plików i sterowanie pełnoekranowe na TikToku.
date: 2026-11-03
product: nora
---

Skopiowany link do posta powinien być łatwy do udostępnienia, a pobieranie wideo powinno szybko przekraczać etap **Analizowania**. **Nora 0.9.4 na urządzenia mobilne** odpowiada na obie te potrzeby, wprowadzając zestaw poprawek dotyczących udostępniania linków, zapisywania plików oraz oglądania filmów na TikToku.

## Udostępniaj linki do X bez zbędnych parametrów

Nora usuwa teraz parametry udostępniania X, takie jak `s` i `t`, podczas kopiowania lub udostępniania linku do posta. Na przykład:

```text
Before: https://x.com/nonbili/status/1234567890?s=20&t=example
After:  https://x.com/nonbili/status/1234567890
```

Adres posta pozostaje nienaruszony; usuwane są jedynie zbędne parametry śledzące. Czyszczenie to dotyczy wyłącznie adresów URL postów w serwisach X i Twitter, dzięki czemu parametry o takich samych krótkich nazwach na innych stronach pozostają nienaruszone.

## Pomiń etap „Analizowanie” podczas zapisywania filmów

Niektóre pobierania wideo mogły wcześniej zawieszać się na etapie **Analizowania** (Parsing) przed rozpoczęciem pobierania pliku. To wydanie rozwiązuje ten problem, umożliwiając prawidłowe pobranie materiału.

Pliki generowane przez stronę internetową za pośrednictwem adresu URL `blob:` zachowują również swoje zamierzone nazwy plików, jeśli są dostępne. Ułatwia to późniejsze rozpoznanie zapisanych materiałów.

## Przywróć sterowanie pełnoekranowe na TikToku

Elementy sterujące trybem pełnoekranowym na TikToku w Norze mogły się nie pojawiać, jeśli skrypt strony został uruchomiony, zanim zawartość strony była gotowa. Elementy te radzą sobie teraz z taką kolejnością ładowania, dzięki czemu przycisk pełnego ekranu pojawia się zgodnie z oczekiwaniami.

Zobacz [informacje o wydaniu na GitHubie](https://github.com/nonbili/Nora/releases/tag/v0.9.4), aby zapoznać się z pełną listą zmian.

## Pobierz Norę

[Zainstaluj lub zaktualizuj Norę](/pl/nora/install/) lub zapoznaj się z [dokumentacją Nory](/pl/nora/), aby dowiedzieć się więcej.
