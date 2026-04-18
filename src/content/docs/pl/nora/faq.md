---
title: Często zadawane pytania (FAQ)
description: Często zadawane pytania dotyczące Nora, zebrane z problemów na GitHubie.
---
Ta strona podsumowuje powtarzające się pytania użytkowników z publicznego systemu śledzenia problemów na GitHubie.

## Czy Nora może otwierać linki do Instagrama lub Facebooka bezpośrednio z innych aplikacji?

Tak, tak to ma działać. Twórca wspomniał, że może być konieczne:

- włączenie w systemie Android opcji `Otwieraj domyślnie` dla Nora
- odinstalowanie lub wyłączenie oficjalnej aplikacji, jeśli nadal przejmuje te same linki
- aktualizacja do nowszego wydania Nora, jeśli deep linki otwierają aplikację, ale nie żądany post

Źródło:

- [Issue #51: Support opening links in Nora](https://github.com/nonbili/Nora/issues/51)

## Instagram nie otwiera się wewnątrz Nora

Obecny otwarty problem wskazuje, że niektórzy użytkownicy nadal trafiają na stronę błędu Instagrama nawet po próbie przeładowania, użycia trybu wersji na komputer i wyczyszczenia danych webview. Oznacza to, że nie ma jeszcze potwierdzonej poprawki. Jeśli dzieje się to na Twoim urządzeniu:

- spróbuj przeładować
- spróbuj trybu wersji na komputer
- wyczyść dane webview w Nora
- jeśli nadal nie działa, sprawdź aktualizacje na GitHubie lub dodaj szczegóły swojego urządzenia do problemu

Źródło:

- [Issue #147: Issue when trying to open Instagram](https://github.com/nonbili/Nora/issues/147)

## Media nadal grają po wyjściu z aplikacji

Zgłaszano, że dźwięk z Instagrama nadal gra w tle bez możliwości sterowania. Twórca odpowiedział, że zostanie to naprawione w następnym wydaniu, więc pierwszą rzeczą, którą należy zrobić, jest aktualizacja Nora do najnowszej wersji dostępnej w Twoim sklepie lub kanale wydawniczym.

Źródło:

- [Issue #119: can you make it stop playing in background ? pls](https://github.com/nonbili/Nora/issues/119)

## Czy mogę pobierać zdjęcia lub filmy?

Tak, przynajmniej częściowo jest to już obsługiwane:

- przytrzymaj dłużej zdjęcie, aby wyświetlić menu pobierania
- pobieranie Facebook i Instagram Reels było już obsługiwane, gdy omawiano ten problem
- obsługa pobierania wideo z X została dodana później

Źródło:

- [Issue #153: download](https://github.com/nonbili/Nora/issues/153)

## Dlaczego logowanie do X nie działa?

Dyskusja sugeruje, że zwykłe logowanie e-mail/hasło powinno działać, podczas gdy logowanie przez Google w webview wymagało dodatkowej pracy. Twórca później poinformował, że w wersji `v0.1.5` dodano menu `Inject cookie` jako obejście dla dotkniętych użytkowników.

Źródło:

- [Issue #1: Unable to sign in to X](https://github.com/nonbili/Nora/issues/1)

## Czy mogę używać rozszerzeń przeglądarki, takich jak uBlock Origin lub Dark Reader, wewnątrz Nora?

Nie w taki sam sposób, jak w pełnym profilu przeglądarki. W dyskusji nad propozycją funkcji, twórca wskazał użytkownikom obsługę własnego niestandardowego CSS w Nora do zmian UI, zamiast obiecywać obsługę wbudowanych rozszerzeń przeglądarki.

Źródło:

- [Issue #96: Open the socials in the webview provided by browser](https://github.com/nonbili/Nora/issues/96)

## Gdzie powinienem zgłaszać błędy lub prosić o nowe funkcje?

Użyj repozytorium GitHub:

- [nonbili/Nora issues](https://github.com/nonbili/Nora/issues)
