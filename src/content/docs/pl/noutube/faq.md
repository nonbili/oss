---
title: Często zadawane pytania (FAQ)
description: Często zadawane pytania dotyczące NouTube, zebrane z problemów na GitHubie.
sidebar:
  order: 9
---
Ta strona podsumowuje powtarzające się pytania użytkowników z publicznego systemu śledzenia problemów na GitHubie.

## Problemy z logowaniem

Google często odrzuca logowanie z aplikacji osadzających stronę internetową, dlatego logowanie w NouTube może się nie udać zarówno na Androidzie, jak i na komputerze — zwykle z błędem „Ta przeglądarka lub aplikacja może nie być bezpieczna”. Jeśli w aplikacji na komputer nie widać przycisku `Zaloguj się`, spróbuj najpierw otworzyć menu `Twoje dane w YouTube`.

Jeśli nie możesz się zalogować, skorzystaj z funkcji **Inject cookie**:

1. Na komputerze zaloguj się do YouTube w Chrome lub innej przeglądarce opartej na Chromium, a następnie wyeksportuj pliki cookie YouTube za pomocą rozszerzenia przeglądarki (np. `getcookies.txt`).
2. Na Androidzie skopiuj wyeksportowany plik na swoje urządzenie.
3. W NouTube otwórz **Settings > Tools > Inject cookie**, zaimportuj plik (lub wklej jego zawartość) i zapisz.

Ta metoda omija kontrolę bezpieczeństwa przeglądarki Google i jest obecnie najbardziej niezawodnym rozwiązaniem problemów z logowaniem zarówno na Androidzie, jak i na komputerze.

Źródła:

- [Issue #142: Can't login to Google on Windows app](https://github.com/nonbili/NouTube/issues/142)

## Dlaczego najnowsza aktualizacja nie jest jeszcze dostępna w F-Droid?

Harmonogram wydań w F-Droid nie jest kontrolowany przez twórców NouTube. F-Droid buduje i publikuje aktualizacje niezależnie w partiach, co zwykle zajmuje kilka dni po opublikowaniu nowej wersji w serwisie GitHub.

Jeśli chcesz mieć najnowszą wersję od razu, możesz pobrać plik APK ze strony [GitHub Releases](https://github.com/nonbili/NouTube/releases). Pamiętaj jednak, że wersje z GitHuba używają innego klucza podpisywania niż F-Droid, więc przed zainstalowaniem pliku APK z GitHuba musisz najpierw odinstalować wersję z F-Droid.

Źródła:

- [Issue #16: Update request](https://github.com/nonbili/NouTube/issues/16)
- [Issue #14: Bug: rotate to landscape resets app to home page](https://github.com/nonbili/NouTube/issues/14)

## YouTube Music nie ładuje się poprawnie

Jeśli YouTube Music nie ładuje się poprawnie, spróbuj przełączyć opcję **Wersja na komputer (Desktop site)** w menu aplikacji.

Źródło:

- [Issue #150: Noutube Music Error Message, Not Loading.](https://github.com/nonbili/NouTube/issues/150)

## NouTube ponownie otwiera kolejkę zamiast strony głównej

Jeśli NouTube ciągle przywraca odtwarzanie lub otwiera się na starym elemencie zamiast strony głównej, sprawdź, czy ikona kolejki jest nadal aktywna. W wątku zgłoszenia twórca zidentyfikował niewyczyszczoną kolejkę jako przyczynę, dla której NouTube próbował wznowić odtwarzanie.

Źródło:

- [Issue #138: Restoring playback](https://github.com/nonbili/NouTube/issues/138)

## Gdzie powinienem zgłaszać błędy lub prosić o nowe funkcje?

Użyj repozytorium GitHub:

- [nonbili/NouTube issues](https://github.com/nonbili/NouTube/issues)
