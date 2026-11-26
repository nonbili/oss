---
title: "Nori 0.2.9: Zachowuj wpisy społecznościowe, udostępniaj karty graficzne, sortuj listy"
description: Zachowuj czytelną kopię wpisów z serwisów społecznościowych do czytania offline, zamieniaj zakładki w karty graficzne i wybieraj inną kolejność sortowania dla każdej listy.
date: 2026-11-18
product: nori
---

Zakładka zapisuje adres. Dzięki **Nori 0.2.9 na urządzenia mobilne** możesz też zachować czytelną kopię wpisu z serwisu społecznościowego. To wydanie pozwala również udostępniać zakładki jako karty graficzne i wybierać sposób sortowania każdej listy.

## Zachowaj kopię wpisu

Gdy dodasz zakładkę do obsługiwanego wpisu społecznościowego, Nori automatycznie próbuje zapisać jego treść do czytania offline. Po zapisaniu kopia pozostaje dostępna, gdy nie masz połączenia lub gdy oryginalny wpis zniknie.

Obsługiwane serwisy to **X, Instagram, Threads, TikTok, Facebook, Bluesky, Reddit i Mastodon**. W zależności od tego, co udostępnia dany serwis, zapisana kopia obejmuje autora, treść wpisu, załączone obrazy oraz cytowane lub powiązane wpisy. Możesz też skopiować treść wpisu.

**Wideo i dźwięk są zapisywane jako miniatury podglądu, a nie pliki do odtwarzania offline.**

Niektóre witryny wymagają zalogowania lub blokują automatyczne pobieranie. Jeśli wpis się nie zapisze, wybierz **Zapisz wpis ze strony**, zaloguj się, jeśli witryna o to poprosi, i stuknij **Zapisz**, gdy Nori znajdzie wpis.

W edytorze zakładek pole **Zapisany wpis** pokazuje datę zapisanej kopii. Użyj **Odśwież**, aby pobrać ją ponownie; jeśli witryna zwróci mniej treści, Nori zachowa istniejącą kopię.

Automatyczne zapisywanie jest domyślnie włączone. Możesz je wyłączyć w **Ustawienia → Ogólne → Zapisuj wpisy społecznościowe offline**. Jeśli korzystasz z **Nori Sync**, zapisane wpisy i ich obrazy są synchronizowane między Twoimi urządzeniami.

![Nori wyświetlający zapisany wpis z Bluesky z autorem, tekstem i załączonym obrazem przy włączonym trybie samolotowym](/blog/nori-0-2-9/saved-social-post.webp "Zapisany wpis z Bluesky pozostaje czytelny wraz z obrazem, gdy telefon jest w trybie samolotowym.")

## Udostępniaj więcej niż sam link

Znalazłeś coś, czym chcesz się podzielić? Otwórz menu akcji zakładki i wybierz **Udostępnij jako obraz**. Nori zamienia zakładkę strony internetowej lub zapisany wpis społecznościowy w kartę graficzną, którą możesz obejrzeć przed wysłaniem.

Wybierz **jasne lub ciemne** tło i zdecyduj, czy dołączyć **Notatkę** oraz **Tagi** zakładki, jeśli są obecne. Notatki są domyślnie ukryte, więc sam decydujesz, czy udostępnić to, co zapisałeś dla siebie.

Stuknij **Udostępnij**, aby wysłać kartę za pomocą systemowego menu udostępniania, lub stuknij przycisk pobierania, aby użyć opcji **Zapisz obraz** w swojej bibliotece zdjęć.

![Podgląd funkcji Udostępnij jako obraz z jasnym i ciemnym motywem, przełącznikami Notatki i Tagów, przyciskiem pobierania i przyciskiem Udostępnij](/blog/nori-0-2-9/share-as-image.webp "Podejrzyj kartę, wybierz, co ma zawierać, a następnie udostępnij lub zapisz obraz.")

## Nadaj każdej liście własną kolejność

Trzymaj kolejkę do przeczytania w kolejności, w jakiej chcesz ją przeglądać, na innej liście umieszczaj nowości na górze, a zbiór materiałów referencyjnych posortuj alfabetycznie.

Otwórz **Edytuj listę** lub utwórz **Nową listę** i wybierz **Kolejność zakładek**:

- **Ręcznie (przeciągnij, aby zmienić kolejność)** dla układu ustalanego samodzielnie.
- **Od najnowszych** lub **Od najstarszych**, aby sortować według czasu dodania zakładek.
- **Nazwa A–Z** lub **Nazwa Z–A**, aby sortować według nazwy.

Wybór jest przypisany do danej listy, więc pozostałe listy mogą zachować własną kolejność. W tym samym edytorze możesz też zmienić nazwę listy.

![Edycja listy Reading queue ze wszystkimi pięcioma widocznymi opcjami kolejności zakładek](/blog/nori-0-2-9/list-bookmark-order.webp "Wybierz kolejność zakładek dla listy Reading queue.")

To wydanie poprawia także przewijanie w szufladzie **Wszystkie zakładki** na iOS oraz usuwa błąd synchronizacji. Szczegóły znajdziesz w [pełnych informacjach o wydaniu](https://github.com/nonbili/Nori/releases/tag/v0.2.9).

[Zainstaluj lub zaktualizuj Nori](/pl/nori/install/) albo zapoznaj się z [dokumentacją Nori](/pl/nori/).
