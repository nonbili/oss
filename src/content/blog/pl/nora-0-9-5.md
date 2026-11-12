---
title: "Nora 0.9.5: Logowanie do proxy i spokojniejszy X"
description: Loguj się do serwerów proxy na Androidzie i iOS 17 lub nowszym, wybieraj elementy do ukrycia na X, domyślnie wyszukuj w Najnowszych i zachowaj widoczność zwykłych postów na Facebooku.
date: 2026-11-06
product: nora
---

**Nora 0.9.5 na urządzenia mobilne** dodaje pola nazwy użytkownika i hasła do serwerów proxy na urządzeniach mobilnych oraz daje większą kontrolę nad tym, co pojawia się na X. Zapewnia także lepsze filtrowanie reklam na Facebooku i import plików cookie z przeglądarki.

## Zaloguj się do swojego proxy na urządzeniach mobilnych

Przejdź do **Ustawienia → Przeglądanie → Proxy**, aby wybrać HTTP lub SOCKS, podać hosta i port oraz wprowadzić nazwę użytkownika i hasło. Uwierzytelniane serwery proxy są obsługiwane na **Androidzie** oraz **iOS 17 lub nowszym**, zarówno podczas przeglądania stron, jak i pobierania danych w kanale.

Dane logowania pozostają na urządzeniu i nie są uwzględniane w kopiach zapasowych ani synchronizacji. W systemie iOS 16 obsługa proxy nadal ogranicza się do nieuwierzytelnionych żądań kanałów przez HTTP.

## Wybierz, co ukryć na X

W menu **Ustawienia → Usługi → X** możesz teraz zdecydować o ukryciu:

- **Interfejsu Grok**, aby usunąć elementy interfejsu Grok.
- **Rekomendacji**, w tym „Kogo obserwować”, trendów i „Odkryj więcej”.
- **Liczników aktywności**, aby uzyskać oś czasu z mniejszą liczbą cyfr rozpraszających uwagę.

Opcje te są całkowicie dobrowolne. W tej samej sekcji dostępna jest także funkcja **Domyślne wyszukiwanie: Najnowsze**, dzięki której wyszukiwanie otwiera się z najnowszymi wpisami zamiast popularnych wyników. W razie potrzeby zawsze możesz przełączać karty wyszukiwania na X.

<div class="screenshot-gallery" style="max-width: 24rem;">
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">Kontrola serwisu X w Norze na Androidzie: wybierz ukrywane elementy interfejsu oraz to, czy wyszukiwanie ma otwierać kartę Najnowsze.</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/nora-0-9-5/x-settings.png" alt="Ustawienia X w Norze na telefonie Pixel z opcjami dla Groka, rekomendacji, liczników aktywności i wyszukiwania Najnowszych" width="1080" height="2220" loading="lazy" />
    </div>
  </figure>
</div>

## Zachowaj widoczność standardowych postów na Facebooku

Filtrowanie reklam na Facebooku sprawdza teraz bezpośrednio samą etykietę materiału sponsorowanego. Zwykłe posty, które przypadkowo zawierają słowa takie jak „Ad” lub „広告”, mają znacznie mniejszą szansę na omyłkowe ukrycie.

## Bardziej niezawodny import plików cookie

Importowanie plików cookie przeglądarki zachowuje teraz nazwy rozpoczynające się od prefiksów `__Host-` i `__Secure-`. Pozostawienie tych prefiksów nienaruszonych pomaga stronom internetowym prawidłowo rozpoznać zaimportowaną sesję.

Zobacz [informacje o wydaniu na GitHubie](https://github.com/nonbili/Nora/releases/tag/v0.9.5), aby zapoznać się z pełną listą zmian.

## Pobierz Norę

[Zainstaluj lub zaktualizuj Norę](/pl/nora/install/) lub zapoznaj się z [dokumentacją Nory](/pl/nora/), aby dowiedzieć się więcej.
