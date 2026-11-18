---
title: "Nori 0.2.9: Spara sociala inlägg, dela bildkort, sortera dina listor"
description: Spara en läsbar kopia av sociala inlägg för offlineläsning, gör om bokmärken till bildkort och välj en egen sorteringsordning för varje lista.
date: 2026-11-18
product: nori
---

Ett bokmärke sparar adressen. Med **Nori 0.2.9 för mobil** kan du också spara en läsbar kopia av ett socialt inlägg. Den här versionen låter dig dessutom dela bokmärken som bildkort och välja hur varje lista ska sorteras.

## Spara en kopia av inlägget

När du bokmärker ett socialt inlägg som stöds försöker Nori automatiskt spara innehållet för offlineläsning. När kopian har sparats förblir den tillgänglig även när du saknar uppkoppling eller om det ursprungliga inlägget försvinner.

Tjänster som stöds inkluderar **X, Instagram, Threads, TikTok, Facebook, Bluesky, Reddit och Mastodon**. Beroende på vad tjänsten tillhandahåller innehåller den sparade kopian författaren, inläggstexten, bifogade bilder samt citerade eller relaterade inlägg. Du kan också kopiera inläggstexten.

**Video och ljud sparas som förhandsvisningsminiatyrer, inte som nedladdningar som kan spelas upp offline.**

Vissa webbplatser kräver inloggning eller blockerar automatisk hämtning. Om ett inlägg inte sparas väljer du **Spara inlägg från sida**, loggar in om webbplatsen ber om det och trycker på **Spara** när Nori har hittat inlägget.

I bokmärkesredigeraren visar **Sparat inlägg** datumet för din sparade kopia. Använd **Uppdatera** för att hämta det igen; om webbplatsen returnerar mindre innehåll behåller Nori den befintliga kopian.

Automatisk sparning är aktiverad som standard. Du kan stänga av den under **Inställningar → Allmänt → Spara sociala inlägg offline**. Om du använder **Nori Sync** synkroniseras sparade inlägg och deras bilder mellan dina enheter.

<div class="screenshot-gallery" style="max-width: 24rem;">
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">Ett sparat Bluesky-inlägg förblir läsbart med sin bild medan telefonen är i flygplansläge.</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/nori-0-2-9/saved-social-post.png" alt="Nori som visar ett sparat Bluesky-inlägg med författare, text och bifogad bild, med flygplansläge aktiverat" width="1080" height="2400" loading="lazy" />
    </div>
  </figure>
</div>

## Dela mer än bara en länk

Hittat något du vill skicka vidare? Öppna åtgärdsmenyn för ett bokmärke och välj **Dela som bild**. Nori förvandlar ett webbsidesbokmärke eller ett sparat socialt inlägg till ett bildkort som du kan förhandsgranska innan du skickar.

Välj en **ljus eller mörk** bakgrund och bestäm om bokmärkets **Anteckning** och **Taggar** ska inkluderas när de finns. Anteckningar är dolda från början så att du själv kan välja om du vill dela det du skrev för egen del.

Tryck på **Dela** för att skicka kortet via enhetens delningsmeny, eller tryck på hämtningsknappen för **Spara bild** till ditt bildbibliotek.

<div class="screenshot-gallery" style="max-width: 24rem;">
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">Förhandsgranska kortet, välj vad som ska ingå och dela eller spara sedan bilden.</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/nori-0-2-9/share-as-image.png" alt="Förhandsvisning av Dela som bild med ljust och mörkt tema, reglage för Anteckning och Taggar, hämtningsknapp och Dela-knapp" width="1080" height="2400" loading="lazy" />
    </div>
  </figure>
</div>

## Ge varje lista sin egen ordning

Behåll en läskö i den ordning du vill beta av den, lägg nya fynd överst i en annan lista och sortera en referenssamling alfabetiskt.

Öppna **Redigera lista**, eller skapa en **Ny lista**, och välj **Bokmärkesordning**:

- **Manuell (dra för att ändra ordning)** för en ordning du själv ställer in.
- **Nyaste först** eller **Äldsta först** för att sortera efter när bokmärkena lades till.
- **Namn A–Ö** eller **Namn Ö–A** för att sortera efter namn.

Valet tillhör den listan, så dina övriga listor kan behålla sin egen ordning. Du kan också byta namn på listan i samma redigerare.

<div class="screenshot-gallery" style="max-width: 24rem;">
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">Välj en bokmärkesordning för listan Reading queue.</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/nori-0-2-9/list-bookmark-order.png" alt="Redigera lista för Reading queue med alla fem alternativ för bokmärkesordning synliga" width="1080" height="2400" loading="lazy" />
    </div>
  </figure>
</div>

Den här versionen förbättrar också rullningen i menyn **Alla bokmärken** på iOS och åtgärdar ett synkroniseringsproblem. Se de [fullständiga versionskommentarerna](https://github.com/nonbili/Nori/releases/tag/v0.2.9) för mer information.

[Installera eller uppdatera Nori](/sv/nori/install/) eller utforska [Nori-dokumentationen](/sv/nori/).
