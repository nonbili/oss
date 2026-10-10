---
title: Nori
description: Przegląd Nori oraz modelu zarządzania zakładkami i programu uruchamiającego.
sidebar:
  order: 1
---
<div class="product-overview-header">
  <img class="product-overview-header__logo" src="/app-logos/nori.png" alt="Logo Nori" />
  <p class="product-overview-header__meta">Android, iOS, desktop i rozszerzenie</p>
</div>

Nori to menedżer i program uruchamiający zakładki open-source, zaprojektowany z myślą o szybkim codziennym dostępie do linków na urządzeniach mobilnych, komputerach stacjonarnych i w przeglądarkach internetowych.

Zamiast ukrywać linki w głębokich drzewach folderów przeglądarki lub zamkniętych ekosystemach, Nori organizuje zakładki w przejrzyste, spersonalizowane listy z natychmiastowym otwieraniem, wyszukiwaniem, bogatymi kartami podglądu i integracją z systemowym menu udostępniania.

## Najważniejsze funkcje

- Wiele własnych list zakładek
- Błyskawiczne otwieranie w domyślnej przeglądarce systemowej lub wbudowanych kartach
- Zapisywanie udostępnionych adresów URL z dowolnej aplikacji z wyborem listy lub szybkim zapisem
- Tryb kompaktowego programu uruchamiającego oraz tryb kart podglądu z grafikami stron
- Szybki panel wyszukiwania z filtrowaniem według słów kluczowych i tagów
- Historia otwierania: ostatnio używane i ostatnio dodane linki
- Import i eksport za pomocą standardowych plików HTML, zwykłego tekstu oraz pełnych kopii zapasowych JSON
- Elastyczny wygląd: motywy Jasny, Ciemny, AMOLED oraz wybór koloru akcentu
- Działające lokalnie rozszerzenie dla Chrome i Firefox
- Wieloplatformowa aplikacja desktopowa dla systemów Linux, macOS i Windows
- Opcjonalna synchronizacja między urządzeniami za pośrednictwem Nori Sync

## Platformy

- **Android**: Dostępne w Google Play oraz bezpośrednio jako pliki APK w wydaniach na GitHubie.
- **iOS**: Dostępne w App Store dla iPhone'a i iPada.
- **Desktop**: Samodzielne aplikacje natywne dla systemów Linux (AppImage i archiwum tar), macOS (Apple Silicon i Intel) oraz Windows.
- **Rozszerzenie przeglądarki**: Rozszerzenie Manifest V3 dla Mozilla Firefox i Google Chrome.

## Pierwsze uruchomienie

Zalecana początkowa konfiguracja:

1. Utwórz kilka list dla najczęstszych kategorii linków (np. `Codzienne`, `Narzędzia`, `Do przeczytania`, `Praca`).
2. Dodaj swoje podstawowe linki lub zaimportuj istniejące zakładki z pliku HTML wyeksportowanego z przeglądarki.
3. Przetestuj otwarcie zakładki, aby upewnić się, że domyślna przeglądarka poprawnie otwiera linki.
4. Spróbuj udostępnić stronę internetową z przeglądarki mobilnej do Nori za pomocą systemowego menu udostępniania.
5. Dostosuj ustawienia wyglądu, np. tryb ciemny lub preferowany kolor akcentu.

## Jak to działa

Nori oddziela kolekcję zakładek od konkretnych silników przeglądarek:

- Na Androidzie zakładki otwierają się za pośrednictwem kart niestandardowych (Custom Tabs) przez `expo-web-browser` lub bezpośrednio w domyślnej aplikacji przeglądarki.
- Na iOS zakładki otwierają się w natywnym oknie przeglądarki lub w domyślnej przeglądarce systemowej.
- Na desktopie i w rozszerzeniu linki otwierają się bezpośrednio w aktywnych kartach przeglądarki.

Takie podejście sprawia, że zawsze przeglądasz sieć z zachowaniem swoich blokerów reklam, zalogowanych kont i profili przeglądarki, mając jednocześnie wszystkie linki uporządkowane w jednym, szybkim launcherze.

## Dodatkowe linki

Kod źródłowy, wydania i śledzenie problemów znajdują się w repozytorium na GitHubie:

- [nonbili/Nori](https://github.com/nonbili/Nori)

Przejdź do sekcji [Instalacja](/pl/nori/install/), aby znaleźć linki do sklepów, pliki APK, instalatory desktopowe i pakiety rozszerzeń przeglądarki.
