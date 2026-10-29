---
title: "Nora 0.9.2: Fler sätt att följa dina flöden"
description: Läs Instagram-flöden från imginn och X-flöden från Nitter-instanser, zooma in i tidslinjer och gallerimedia och välj var nedladdningar ska sparas på Android.
sidebar:
  label: Nora 0.9.2-lansering
  order: 2
---

*Publicerad den 29 oktober 2026*

Har Instagram eller X slutat uppdateras? **Nora 0.9.2** lägger till valfria alternativa källor som hjälper till att hålla dina flöden igång. Versionen innehåller även zoom i tidslinjer och galleri, hastighetskontroller för video samt möjlighet att välja var nedladdningar sparas på Android.

Om du inte har provat Noras flödesläsare tidigare kan du börja med [introduktionen till 0.9.0](/sv/blog/nora-0-9-0/).

## Läs Instagram från imginn och X från Nitter

Att följa offentliga **Instagram**- och **X**-profiler utan att logga in kan stöta på inloggningsväggar eller hastighetsbegränsningar. Nora 0.9.2 lägger till två valfria alternativ under **Flödesinställningar** så att dina tidslinjer kan hållas uppdaterade utan att du loggar in på ett konto:

- **Läs Instagram från imginn:** Välj **När Instagram misslyckas** för att använda imginn som reserv, eller **Först, sedan Instagram** för att kontrollera imginn först. Båda lägena fungerar endast medan Nora är öppet. Om imginn ber dig bekräfta att du inte är en robot uppmanar Nora dig att slutföra kontrollen i appen.
- **Läs X från Nitter:** Välj **När X misslyckas** eller **Först, sedan X** och lägg till en eller flera Nitter-instansadresser. Nora provar dina instanser i tur och ordning. Instanser som kräver en webbläsarkontroll fungerar endast medan Nora är öppet.

Båda alternativen är avstängda som standard och kan aktiveras när som helst i **Flödesinställningar**.

<div class="screenshot-gallery">
  <figure class="screenshot-card">
    <div class="screenshot-card__eyebrow">Flödesinställningar</div>
    <h2 class="screenshot-card__title">imginn- och Nitter-källor</h2>
    <p class="screenshot-card__body">
      Läs Instagram-profiler från imginn och X-profiler från dina konfigurerade Nitter-instanser — som reserv eller primär källa.
    </p>
    <div class="screenshot-frame">
      <img src="/blog/nora-0-9-2/feed-settings.png" alt="Flödesinställningar i Nora 0.9.2 som visar alternativen för imginn och Nitter" />
    </div>
  </figure>

  <figure class="screenshot-card">
    <div class="screenshot-card__eyebrow">Media</div>
    <h2 class="screenshot-card__title">Helskärmsgalleri och zoom</h2>
    <p class="screenshot-card__body">
      Nyp för att zooma in på foton och videor i helskärmsgalleriet, håll in skärmkanten för att snabba upp uppspelningen eller spara media direkt.
    </p>
    <div class="screenshot-frame">
      <img src="/blog/nora-0-9-2/media-gallery.png" alt="Skärmdump av helskärmsgalleriet för media i Nora 0.9.2" />
    </div>
  </figure>

  <figure class="screenshot-card">
    <div class="screenshot-card__eyebrow">Profiler</div>
    <h2 class="screenshot-card__title">Öppna flik igen i profil</h2>
    <p class="screenshot-card__body">
      Byt valfri öppen mobilflik till en annan Nora-profil direkt från sidhuvudmenyn eller flikväljaren.
    </p>
    <div class="screenshot-frame">
      <img src="/blog/nora-0-9-2/reopen-in-profile.png" alt="Dialogrutan för att öppna flik i profil i Nora 0.9.2" />
    </div>
  </figure>
</div>

## Videokontroller i flödet, zoom och aviseringar

Det har också blivit smidigare att ta del av tidslinjer och media i flödet:

- **Kontrollera videohastighet i galleriet:** Videor i flödet använder nu dina inställningar för **Standardhastighet för videouppspelning** och **Långtryck på kanten för 2x hastighet**. Håll ned vänster eller höger kant på en video som spelas för att hoppa till 2x hastighet, och dra sedan horisontellt för att byta hastighet.
- **Zoom i tidslinje och galleri:** Nyp för att zooma på mobilen — eller håll ned `Ctrl`/`Cmd` och skrolla på datorn — både i flödestidslinjer och i helskärmsgalleriet för foton och videor. Kontroller för uppspelning och spolning förblir tillgängliga medan du är inzoomad.
- **Öppna aviseringar i tidslinjer:** När du trycker på en avisering om ett nytt inlägg öppnas nu motsvarande Nora-tidslinje direkt.
- **Reservlösning för videor som inte kan spelas:** När en video inte kan spelas upp i helskärmsgalleriet kan du öppna inlägget direkt på originalwebbplatsen.

## Nedladdningar, profiler och webbplatsförbättringar

Den här versionen innehåller även flera förbättringar för surfning och nedladdning på alla plattformar:

- **Välj var nedladdningar ska sparas på Android:** Aktivera **Fråga var varje nedladdning ska sparas** under **Inställningar → Nedladdningar** för att välja målmapp och filnamn för varje fil. Den här versionen gör också sparandet av nedladdningar mer tillförlitligt.
- **Öppna igen i profil från sidhuvudmenyn:** Byt den aktiva mobilfliken till en annan Nora-profil direkt från sidhuvudmenyn, utöver att hålla ned flikar i flikväljaren.
- **Fixar för TikTok och Instagram:** Titta på TikTok-videor med en ny helskärmsknapp och ladda ned videor mer tillförlitligt från TikTok och Instagram, även när du är utloggad från Instagram.
- **Mjukare rullning och bakgrundskontroller:** Sidor hoppar inte längre när verktygsfältet döljs eller visas, och bakgrundskontroller av flöden fungerar bättre på Android.

Se [ändringsloggen](/sv/nora/changelog/) för fullständig information om versionen.

## Hämta Nora 0.9.2

[Installera eller uppdatera Nora](/sv/nora/install/) på Android, iOS, Linux, macOS eller Windows.

Du kan också utforska [Nora-dokumentationen](/sv/nora/) eller läsa [versionsanteckningarna på GitHub](https://github.com/nonbili/Nora/releases/tag/v0.9.2).
