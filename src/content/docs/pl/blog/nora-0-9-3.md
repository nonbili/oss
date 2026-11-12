---
title: "Nora 0.9.3: Otwieraj pobrane pliki szybciej, przeglądaj płynniej"
description: Otwieraj ukończone pobierania z powiadomień, przesuwaj karuzele na Androidzie oraz zmniejsz aktywność w tle i zużycie pamięci.
sidebar:
  label: Wydanie Nora 0.9.3
  order: 5
---

*Opublikowano 31 października 2026 r.*

**Nora 0.9.3 na urządzenia mobilne** ułatwia dostęp do zapisanych plików dzięki skrótowi umieszczonemu bezpośrednio w powiadomieniu o pobraniu. Naprawia również gesty karuzeli na Androidzie i ogranicza zadania wykonywane przez Norę, gdy strony nie są już używane.

## Przejdź bezpośrednio do pobranego pliku

Na **Androidzie** potwierdzenia pobrania zawierają teraz przycisk **Otwórz**, który pozwala otworzyć zapisany plik w kompatybilnej aplikacji. Zapisanie pojedynczego zdjęcia lub filmu z kanału również oferuje tę możliwość.

Zapisz plik, a następnie użyj przycisku w komunikacie z potwierdzeniem, aby szybko do niego przejść bez szukania w folderze Pobrane.

## Przesuwanie karuzel na Androidzie

Przesuwanie zdjęć na stronie w poziomie mogło przypadkowo uruchomić gest przeciągnięcia w celu odświeżenia strony. Nora odróżnia teraz gesty poziome od pionowych, dzięki czemu można przeglądać karuzelę bez przeładowywania strony.

## Mniejsza aktywność w tle, lepsze zwalnianie kart

Na Androidzie Nora wstrzymuje liczniki czasu WebView, gdy aplikacja działa w tle, ograniczając niepotrzebne zużycie procesora i baterii. Aktualizacje postępu odtwarzania wideo w kanale działają teraz tylko wtedy, gdy kontrolki powiększenia ich potrzebują.

Zamknięte karty i odrzucone wyskakujące okna zwalniają teraz swoje instancje WebView bardziej niezawodnie na Androidzie, a na iOS zamknięte karty są poprawnie usuwane z pamięci. W tym wydaniu usunięto również problem na Androidzie, w wyniku którego otwarcie linku w nowej karcie mogło skutkować białą stroną.

Zobacz [informacje o wydaniu na GitHubie](https://github.com/nonbili/Nora/releases/tag/v0.9.3), aby zapoznać się z pełną listą zmian.

## Pobierz Norę

[Zainstaluj lub zaktualizuj Norę](/pl/nora/install/) lub zapoznaj się z [dokumentacją Nory](/pl/nora/), aby dowiedzieć się więcej.
