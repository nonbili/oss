---
title: "Nora 0.9.6: Annonsblockering i Android-startskärmsgenvägar"
description: Använd annonsblockering samt länk- och bildmenyer i Android-genvägar på startskärmen, med fixar för textmarkering i flödet, rubrikanimering och fliköverlägg.
sidebar:
  label: Nora 0.9.6-lansering
  order: 2
---

*Publicerad den 12 november 2026*

**Nora 0.9.6 för mobilen** ger annonsblockering samt länk- och bildmenyer till webbplatser du öppnar från Android-startskärmsgenvägar. Den inbyggda flödesläsaren får även fixar för att markera text, rulla och byta flik.

## Dina annonsblockeringsinställningar i startskärmsgenvägar

På **Android** öppnas webbplatser som sparats med Noras åtgärd **Lägg till på startskärmen** i ett fristående fönster. Dessa fönster använder nu Noras inställningar för annonsblockering, inklusive nätverksblockering och regler som döljer annonselement på sidan.

För att prova det öppnar du en webbplats i Nora, väljer **Lägg till på startskärmen** från sidmenyn och startar sedan genvägen från din appstartare. Dina konfigurerade blockeringsregler gäller även där.

## Håll ned på länkar och bilder

Android-startskärmsgenvägar erbjuder nu kontextmenyer:

- **Håll ned på en länk** för att kopiera dess adress eller öppna den i en ny Nora-flik.
- **Håll ned på en bild** för att spara den, kopiera dess adress eller öppna den i en ny Nora-flik.

Du kan fortsätta läsa i det fristående fönstret och skicka en länk till Nora när du vill utforska den i en separat flik.

<div class="screenshot-gallery" style="max-width: 24rem;">
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">Att hålla ned på en bild i en Android-startskärmsgenväg öppnar Noras bildåtgärder.</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/nora-0-9-6/shortcut-image-menu.webp" alt="Noras fristående Android-genväg som visar åtgärderna Spara bild, Öppna bild i ny flik och Kopiera bildlänk" width="1080" height="2220" loading="lazy" />
    </div>
  </figure>
</div>

## Enklare läsning i flödet

Den här utgåvan åtgärdar också tre interaktioner i Noras inbyggda flödesläsare:

- **Textmarkering:** Att markera text i en inläggsbeskrivning fungerar mer tillförlitligt.
- **Rubrikanimering:** Flödesrubriken animeras korrekt när den fälls ihop och expanderar.
- **Överlägg vid flikbyte:** Flödesöverlägg tillhör fliken som öppnade dem, vilket förhindrar att de visas över en annan flik.

Ny i flödesläsaren? [Introduktionen till Nora 0.9.0](/sv/blog/nora-0-9-0/) förklarar källor, tidslinjer och medierastret.

Se [versionsanteckningarna på GitHub](https://github.com/nonbili/Nora/releases/tag/v0.9.6) för en fullständig lista över ändringar.

## Hämta Nora

[Installera eller uppdatera Nora](/sv/nora/install/), eller utforska [Nora-dokumentationen](/sv/nora/) för att läsa mer.
