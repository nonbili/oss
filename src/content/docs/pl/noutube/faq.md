---
title: Często zadawane pytania (FAQ)
description: Często zadawane pytania dotyczące NouTube, zebrane z problemów na GitHubie.
sidebar:
  order: 9
---
Ta strona podsumowuje powtarzające się pytania użytkowników z publicznego systemu śledzenia problemów na GitHubie.

## Problemy z logowaniem na komputerze

Jeśli aplikacja desktopowa nie wyświetla widocznego przycisku `Zaloguj się`, spróbuj najpierw otworzyć menu `Twoje dane w YouTube`. Jeśli strona logowania się otworzy, ale otrzymasz błąd "przeglądarka lub aplikacja może nie być bezpieczna", użyj funkcji **Wstrzyknij ciasteczko (Inject cookie)**:

1. Użyj rozszerzenia przeglądarki (np. `getcookies.txt`), aby wyeksportować swoje ciasteczka YouTube.
2. Zaimportuj ciasteczka do NouTube za pomocą przycisku **Wstrzyknij ciasteczko (Inject cookie)**.

Ta metoda omija sprawdzanie bezpiecznej przeglądarki przez Google i jest obecnie najbardziej niezawodnym rozwiązaniem problemów z logowaniem na komputerach.

Źródła:

- [Issue #142: Can't login to Google on Windows app](https://github.com/nonbili/NouTube/issues/142)

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
