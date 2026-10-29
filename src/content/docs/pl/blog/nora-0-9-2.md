---
title: "Nora 0.9.2: Więcej sposobów na śledzenie kanałów"
description: Czytaj kanały Instagrama z imginn oraz kanały X z instancji Nittera, powiększaj osie czasu i multimedia w galerii oraz wybieraj miejsce zapisu pobranych plików na Androidzie.
sidebar:
  label: Wydanie Nora 0.9.2
  order: 2
---

*Opublikowano 29 października 2026 r.*

Instagram lub X przestał się aktualizować? **Nora 0.9.2** dodaje opcjonalne alternatywne źródła, które pomagają utrzymać ciągłość działania kanałów. Wprowadza także powiększanie na osiach czasu i w galerii, sterowanie prędkością odtwarzania wideo oraz możliwość wyboru miejsca zapisywania pobranych plików na Androidzie.

Jeśli dopiero zaczynasz korzystać z czytnika kanałów w Norze, zacznij od [wprowadzenia do wersji 0.9.0](/pl/blog/nora-0-9-0/).

## Czytaj Instagrama z imginn i X z Nittera

Śledzenie publicznych profili na **Instagramie** i **X** bez logowania może napotkać ekrany logowania lub limity zapytań. Nora 0.9.2 dodaje dwie opcjonalne alternatywy w **Ustawieniach kanałów**, dzięki czemu osie czasu mogą być aktualizowane bez logowania się na konto:

- **Czytaj Instagrama z imginn:** Wybierz **Gdy Instagram zawiedzie**, aby używać imginn jako rozwiązania awaryjnego, lub **Najpierw, potem Instagram**, aby najpierw sprawdzać imginn. Oba tryby działają tylko wtedy, gdy Nora jest otwarta. Jeśli imginn poprosi o potwierdzenie, że nie jesteś robotem, Nora wyświetli monit o wykonanie weryfikacji w aplikacji.
- **Czytaj X z Nittera:** Wybierz **Gdy X zawiedzie** lub **Najpierw, potem X** i dodaj jeden lub więcej adresów instancji Nittera. Nora sprawdza instancje po kolei. Instancje wymagające weryfikacji przeglądarki działają tylko wtedy, gdy Nora jest otwarta.

Obie opcje są domyślnie wyłączone i można je w dowolnej chwili włączyć w **Ustawieniach kanałów**.

<div class="screenshot-gallery">
  <figure class="screenshot-card">
    <div class="screenshot-card__eyebrow">Ustawienia kanałów</div>
    <h2 class="screenshot-card__title">Źródła imginn i Nitter</h2>
    <p class="screenshot-card__body">
      Czytaj profile z Instagrama przez imginn oraz profile z X z skonfigurowanych instancji Nittera — jako źródło zapasowe lub główne.
    </p>
    <div class="screenshot-frame">
      <img src="/blog/nora-0-9-2/feed-settings.png" alt="Ustawienia kanałów Nora 0.9.2 pokazujące opcje imginn i Nitter" />
    </div>
  </figure>

  <figure class="screenshot-card">
    <div class="screenshot-card__eyebrow">Multimedia</div>
    <h2 class="screenshot-card__title">Galeria pełnoekranowa i powiększanie</h2>
    <p class="screenshot-card__body">
      Rozsuń palce, aby powiększyć zdjęcia i filmy w galerii pełnoekranowej, przytrzymaj krawędź ekranu, aby przyspieszyć odtwarzanie, lub zapisuj multimedia bezpośrednio.
    </p>
    <div class="screenshot-frame">
      <img src="/blog/nora-0-9-2/media-gallery.png" alt="Ekran pełnoekranowej galerii multimediów w Nora 0.9.2" />
    </div>
  </figure>

  <figure class="screenshot-card">
    <div class="screenshot-card__eyebrow">Profile</div>
    <h2 class="screenshot-card__title">Otwórz kartę ponownie w profilu</h2>
    <p class="screenshot-card__body">
      Przełącz dowolną otwartą kartę mobilną do innego profilu Nora bezpośrednio z menu nagłówka lub przełącznika kart.
    </p>
    <div class="screenshot-frame">
      <img src="/blog/nora-0-9-2/reopen-in-profile.png" alt="Okno dialogowe ponownego otwierania karty w profilu w Nora 0.9.2" />
    </div>
  </figure>
</div>

## Sterowanie wideo w kanałach, powiększanie i powiadomienia

Przeglądanie osi czasu i multimediów w kanałach również stało się wygodniejsze:

- **Sterowanie prędkością wideo w galerii:** Filmy w kanałach korzystają teraz z ustawień **Domyślna prędkość odtwarzania wideo** oraz **Przytrzymaj krawędź dla prędkości 2x**. Dotknij i przytrzymaj lewą lub prawą krawędź odtwarzanego filmu, aby przyspieszyć do 2x, a następnie przesuń palcem poziomo, aby zmienić prędkość.
- **Powiększanie osi czasu i galerii:** Rozsuń palce na urządzeniu mobilnym — lub przytrzymaj `Ctrl`/`Cmd` i przewiń na komputerze — zarówno na osiach czasu kanałów, jak i w pełnoekranowej galerii zdjęć i filmów. Elementy sterujące odtwarzaniem i przewijaniem wideo pozostają dostępne podczas powiększenia.
- **Otwieranie powiadomień na osiach czasu:** Dotknięcie powiadomienia o nowym wpisie otwiera teraz bezpośrednio odpowiednią oś czasu w Norze.
- **Rozwiązanie awaryjne dla niedziałających filmów:** Gdy filmu nie można odtworzyć w pełnoekranowej galerii, możesz otworzyć wpis bezpośrednio w oryginalnej witrynie.

## Pobieranie, profile i ulepszenia obsługi witryn

To wydanie zawiera także szereg ulepszeń przeglądania i pobierania na wszystkich platformach:

- **Wybór miejsca zapisu pobranych plików na Androidzie:** Włącz opcję **Pytaj, gdzie zapisać każdy pobrany plik** w sekcji **Ustawienia → Pobrane**, aby wybrać folder docelowy i nazwę dla każdego pliku. Wydanie to zwiększa również niezawodność zapisywania pobranych plików.
- **Ponowne otwieranie w profilu z menu nagłówka:** Przełącz aktywną kartę mobilną do innego profilu Nora bezpośrednio z menu nagłówka, oprócz przytrzymania karty w przełączniku kart.
- **Poprawki dla TikToka i Instagrama:** Oglądaj filmy na TikToku za pomocą nowego przycisku pełnego ekranu i pobieraj filmy bardziej niezawodnie z TikToka oraz Instagrama, również bez zalogowania na Instagramie.
- **Płynniejsze przewijanie i sprawdzanie w tle:** Strony nie przeskakują już, gdy pasek narzędzi znika lub się pojawia, a sprawdzanie kanałów w tle działa lepiej na Androidzie.

Szczegółowe informacje o wydaniu znajdziesz w [dzienniku zmian](/pl/nora/changelog/).

## Pobierz Norę 0.9.2

[Zainstaluj lub zaktualizuj Norę](/pl/nora/install/) na Androidzie, iOS, Linuksie, macOS lub Windowsie.

Możesz także zapoznać się z [dokumentacją Nory](/pl/nora/) lub przeczytać [informacje o wydaniu na GitHubie](https://github.com/nonbili/Nora/releases/tag/v0.9.2).
