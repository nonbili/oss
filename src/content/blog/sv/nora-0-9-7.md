---
title: "Nora 0.9.7: Välj nedladdningsmapp och anpassa menyn"
description: Välj var nedladdningar sparas på Android, dölj åtgärder du sällan använder i trepunktsmenyn och få buggfixar för WhatsApp Web, Facebook Marketplace och fliknavigering.
date: 2026-11-19
product: nora
---

Med **Nora 0.9.7 för mobil** kan du skicka Android-nedladdningar till en mapp du själv väljer och banta webbläsarens trepunktsmeny till de åtgärder du använder. Den här versionen öppnar även WhatsApp Web och Facebook Marketplace i datorläge automatiskt.

## Välj var nedladdningar sparas

På Android öppnar du **Inställningar → Inställningar → Nedladdningar → Spara nedladdningar till** för att ställa in var webbläsarens nedladdningar hamnar.

- **Nedladdningar** använder Androids standardmapp Downloads.
- **Fråga varje gång** låter dig välja plats för varje nedladdning.
- **Välj mapp…** sparar framtida nedladdningar i den mapp du väljer.

Om du väljer en mapp använder Nora den även för media som du sparar från flödet på Android 10 och senare. Den här versionen åtgärdar också nedladdningar från `data:`-länkar, som vissa webbplatser använder för filer som genereras i webbläsaren.

![Androids nedladdningsinställningar med Nora Downloads vald och alternativen Nedladdningar, Fråga varje gång och Välj mapp synliga](/blog/nora-0-9-7/download-destination.webp "Nora Downloads är vald som plats för framtida nedladdningar.")

## Anpassa trepunktsmenyn

Öppna **Inställningar → Utseende → Verktygsfält → Anpassa trepunktsmenyn** och stäng av åtgärder som du sällan använder. Behåll till exempel **Sök på sidan** och **Dela**, och dölj **Datoranpassad webbplats** om du sällan byter layout. Åtgärderna du behåller visas när de är tillgängliga på den aktuella fliken.

**Inställningar** finns kvar i menyn, och **Återställ menystandard** rensar dina ändringar med ett tryck.

![Expanderade inställningar för Anpassa trepunktsmenyn med Sök på sidan på och Datoranpassad webbplats av](/blog/nora-0-9-7/customize-three-dot-menu.webp "Låt Sök på sidan vara på och stäng av Datoranpassad webbplats.")
![Anpassad webbläsarmeny som visar Sök på sidan, Dela och Inställningar, med Datoranpassad webbplats dold](/blog/nora-0-9-7/customized-three-dot-menu.webp "Webbläsarmenyn behåller Sök på sidan, Dela och Inställningar.")

## WhatsApp Web och Facebook Marketplace öppnas i datorläge

I **WhatsApp Web** kan skärmtangentbordet nu öppnas utan att stänga en väljare. **Facebook Marketplace** använder datorwebbplatsen så att du kan skicka meddelanden till säljare direkt från en annons.

## Fixar för surfning och flöde

- Facebooks annonsblockering fångar nu sponsrade inlägg även när deras etiketter dyker upp sent. Ett långt tryck på en reaktionsknapp på Facebook håller webbläsarens snabbmeny ur vägen.
- Reddits spelfilter låter vanliga inlägg förbli synliga.
- Flikväxlaren öppnas med din aktiva flik i sikte. På en ny flik öppnas en inskriven adress vid första trycket på **Gå**, och när en inkommande länk öppnas behålls dina andra flikar.
- Dra för att uppdatera håller sig ur vägen när du gör gester i en mediavisare.

Se [versionskommentarerna på GitHub](https://github.com/nonbili/Nora/releases/tag/v0.9.7) för den fullständiga listan över ändringar.

## Skaffa Nora

[Installera eller uppdatera Nora](/sv/nora/install/), eller utforska [Nora-dokumentationen](/sv/nora/) för att lära dig mer.
