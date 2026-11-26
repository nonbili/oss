---
title: "NouTube 0.7.11: własny pasek narzędzi na Androidzie i pobieranie filmów na iOS"
description: Umieść ulubione akcje na pasku narzędzi Androida, przesuń palcem, aby przejść do pełnego ekranu, ukryj komentarze YouTube i zapisuj filmy na iPhonie i iPadzie.
date: 2026-11-24
product: noutube
---

NouTube 0.7.11 pozwala umieścić akcje takie jak **Udostępnij** i **Otwórz URL** bezpośrednio na pasku narzędzi Androida. Na iPhonie i iPadzie możesz teraz pobierać zgodne filmy z poziomu **Narzędzi**, a filmy uruchamiają się szybciej. Aktualizacja mobilna dodaje też gesty przesunięcia do trybu pełnoekranowego oraz ustawienie ukrywające komentarze YouTube.

## Najczęściej używane akcje na pasku narzędzi Androida

Otwórz **Ustawienia → Wygląd → Przyciski paska narzędzi**. Przełącznikami wybierz, które przyciski mają się pojawiać, a następnie przeciągnij uchwyty, aby ustalić ich kolejność. Na przykład włącz **Udostępnij** i **Otwórz URL** i przeciągnij je na początek listy, aby mieć obie akcje pod ręką podczas oglądania filmu.

Do paska narzędzi możesz też dodać **Narzędzia**, **Wersję na komputer**, **Ustawienia** albo przełącznik **YouTube / YouTube Music**. Na tej samej liście możesz zmienić kolejność istniejących przycisków, takich jak **Biblioteka**, **Karty kanałów** i **Historia**.

![Ustawienia wyglądu na Androidzie z włączonymi opcjami Udostępnij i Otwórz URL w pierwszych dwóch wierszach oraz uchwytami przeciągania po prawej](/blog/noutube-0-7-11/android-toolbar-settings.webp "Włącz Udostępnij i Otwórz URL i przeciągnij je na początek listy.")
![Pasek narzędzi NouTube nad stroną odtwarzania Big Buck Bunny, z ikoną Udostępnij i ikoną linku Otwórz URL po lewej stronie](/blog/noutube-0-7-11/android-toolbar-result.webp "Udostępnij i Otwórz URL są teraz pierwszymi dwoma przyciskami na pasku narzędzi strony odtwarzania.")

## Pobieranie filmów na iPhonie i iPadzie

W przypadku filmu, który masz prawo zapisać, otwórz **Narzędzia** i stuknij **Pobierz wideo**. NouTube pobiera zgodny plik MP4, jeśli jest dostępny. Po zakończeniu pobierania stuknij **Eksportuj**, aby zapisać lub udostępnić plik.

![Panel pobierania na iPhonie z wpisanym URL filmu, informacją o dostępności MP4 i przyciskiem Pobierz wideo](/blog/noutube-0-7-11/ios-download-tools.webp "Narzędzia automatycznie wpisują URL bieżącego filmu.")
![Wpis w Historii pobierania na iPhonie z zielonym znacznikiem, stanem Pobieranie zakończone i przyciskiem Eksportuj](/blog/noutube-0-7-11/ios-download-export.webp "Gdy plik jest gotowy, w Historii pobierania pojawia się przycisk Eksportuj.")

*Big Buck Bunny* © 2008 Blender Foundation / [www.bigbuckbunny.org](https://peach.blender.org/about/). [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/).

Szybsze uruchamianie filmów, wprowadzone na Androidzie w wersji 0.7.10, działa teraz także na iOS. Na iPadzie elementy sterowania odtwarzaniem YouTube pozostają dostępne w trybie pełnoekranowym.

## Przesuń, aby przejść do pełnego ekranu, lub ukryj komentarze

Na urządzeniach mobilnych przesuń palcem w górę po odtwarzaczu YouTube, aby przejść do pełnego ekranu, i w dół, aby wrócić do strony odtwarzania. Zaczynaj gest na samym filmie, aby nadal normalnie korzystać z elementów sterowania i paska postępu.

Aby usunąć sekcję komentarzy ze stron odtwarzania YouTube, otwórz **Ustawienia → Preferencje → Tryb skupienia** i włącz **Ukryj komentarze**.

![Ekran Preferencji na Androidzie z włączonym przełącznikiem Ukryj komentarze na dole sekcji Tryb skupienia](/blog/noutube-0-7-11/hide-comments-setting.webp "Ukryj komentarze znajduje się na dole ustawień Trybu skupienia.")

## Inne poprawki

- Pobrane pliki audio Opus mają teraz rozszerzenie `.opus`. NouTube naprawia problem z uruchamianiem yt-dlp w wydaniach produkcyjnych na Androida i lepiej radzi sobie z błędami pobierania i odtwarzania.
- Komputerowa strona odtwarzania YouTube mieści się teraz na wąskich ekranach Androida. Na Androidzie podglądy z kanału nie trafiają już do historii oglądania, a przycisk **Dalej** w systemowych elementach sterowania YouTube Music nie zmienia już własnej kolejki NouTube.
- To wydanie aktualizuje tłumaczenia na język włoski, polski, portugalski brazylijski, rosyjski i ukraiński.

[Zobacz wydanie na GitHubie](https://github.com/nonbili/NouTube/releases/tag/v0.7.11).

## Pobierz NouTube

[Zainstaluj lub zaktualizuj NouTube](/pl/noutube/install/) albo przejrzyj [dokumentację NouTube](/pl/noutube/).
