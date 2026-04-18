---
title: Często zadawane pytania (FAQ)
description: Często zadawane pytania dotyczące NouTube, zebrane z problemów na GitHubie.
sidebar:
  order: 9
---
Ta strona podsumowuje powtarzające się pytania użytkowników z publicznego systemu śledzenia problemów na GitHubie.

## Przycisk logowania w wersji desktopowej brakuje lub logowanie wydaje się zablokowane

Jeśli aplikacja desktopowa nie wyświetla widocznego przycisku `Zaloguj się` (Sign in), spróbuj najpierw otworzyć menu `Twoje dane w YouTube`. W dyskusji nad tym problemem ta ścieżka pozwoliła dotkniętym użytkownikom dotrzeć do formularza logowania, a twórca poinformował później, że widoczny przycisk powinien wrócić w wersji `v0.1.6`.

Źródła:

- [Issue #46: desktop version never logs in always error](https://github.com/nonbili/NouTube/issues/46)

## Logowanie na desktopie nadal nie działa, mimo że strona logowania się otwiera

Pojawiły się zgłoszenia, że w niektórych konfiguracjach desktopowych logowanie Google nadal nie działa, nawet po wyczyszczeniu danych. Wątek problemu nie zakończył się potwierdzoną uniwersalną poprawką, więc praktyczne wskazówki to:

- aktualizacja do najnowszego wydania desktopowego
- wyczyszczenie danych webview/profilu aplikacji, jeśli próbowano już logowania
- jeśli nadal nie działa, zgłoś swój system operacyjny, format paczki i dołącz zrzuty ekranu na GitHubie

Źródło:

- [Issue #103: Unable to login from desktop client](https://github.com/nonbili/NouTube/issues/103)

## YouTube Music nie ładuje się poprawnie

Jedną z udokumentowanych ścieżek rozwiązywania problemów było:

1. Upewnienie się, że `NouTube` jest domyślną aplikacją dla `music.youtube.com`.
2. Jeśli oficjalna aplikacja YouTube Music jest zainstalowana, najpierw usuń jej domyślne przypisanie linków.
3. Jeśli problem nadal występuje, spróbuj ustawić niestandardowy user agent w `Settings > Tools > Custom user agent`.

Ta wskazówka pochodzi bezpośrednio od twórcy z wątku na GitHubie. Jest to obejście problemu, a nie gwarantowana poprawka dla każdego urządzenia.

Źródło:

- [Issue #150: Noutube Music Error Message, Not Loading.](https://github.com/nonbili/NouTube/issues/150)

## Niektóre reklamy nadal się pojawiają

Pojawiło się zgłoszenie o krótkich reklamach YouTube Premium pojawiających się przed filmami. Twórca wskazał użytkownikom wersję `v0.4.9`, co sugeruje, że poprawki blokowania reklam zostały zawarte w późniejszych wydaniach. Jeśli widzisz reklamy:

- zaktualizuj aplikację do najnowszej wersji z F-Droid lub GitHuba
- jeśli problem nadal występuje, otwórz nowe zgłoszenie, podając wersję aplikacji i dołączając zrzut ekranu

Źródło:

- [Issue #117: Ad not blocked](https://github.com/nonbili/NouTube/issues/117)

## NouTube ponownie otwiera kolejkę zamiast strony głównej

Jeśli NouTube ciągle przywraca odtwarzanie lub otwiera się na starym elemencie zamiast strony głównej, sprawdź, czy ikona kolejki jest nadal aktywna. W wątku zgłoszenia twórca zidentyfikował niewyczyszczoną kolejkę jako przyczynę, dla której NouTube próbował wznowić odtwarzanie.

Źródło:

- [Issue #138: Restoring playback](https://github.com/nonbili/NouTube/issues/138)

## Gdzie powinienem zgłaszać błędy lub prosić o nowe funkcje?

Użyj repozytorium GitHub:

- [nonbili/NouTube issues](https://github.com/nonbili/NouTube/issues)
