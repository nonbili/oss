---
title: "Nora 0.9.4: Renare X-länkar och mer pålitliga nedladdningar"
description: Ta bort delningstokens från X-inläggslänkar, åtgärda videonedladdningar som fastnat vid tolkning och behåll filnamn och fullskärmskontroller på TikTok.
date: 2026-11-03
product: nora
---

En kopierad inläggslänk ska vara enkel att dela, och en videonedladdning ska passera förbi **Parsing**. **Nora 0.9.4 för mobilen** åtgärdar båda delarna med en rad förbättringar för att dela länkar, spara filer och titta på TikTok-videor.

## Dela X-länkar utan extra tokens

Nora tar nu bort delningsparametrar på X som `s` och `t` när du kopierar eller delar en inläggslänk. Till exempel:

```text
Before: https://x.com/nonbili/status/1234567890?s=20&t=example
After:  https://x.com/nonbili/status/1234567890
```

Inläggets adress förblir intakt; de extra spårningstokens tas bort. Denna rensning gäller inläggs-URL:er från X och Twitter, så parametrar med samma korta namn på orelaterade webbplatser lämnas orörda.

## Kom förbi ”Parsing” när du sparar videor

Vissa videonedladdningar kunde tidigare fastna i steget **Parsing** innan nedladdningen ens påbörjades. Den här utgåvan åtgärdar problemet så att berörda nedladdningar kan fortsätta som förväntat.

Filer som genereras av en webbsida via en `blob:`-URL behåller nu också sina avsedda filnamn när sådana finns tillgängliga. Det gör sparade filer betydligt lättare att känna igen senare.

## Återställ fullskärmskontroller för TikTok

Noras fullskärmskontroller för TikTok kunde utebli när webbsidans skript kördes innan sidans innehåll var helt klart. Kontrollerna hanterar nu laddningsordningen korrekt, vilket gör att fullskärmsknappen visas som väntat.

Se [versionsanteckningarna på GitHub](https://github.com/nonbili/Nora/releases/tag/v0.9.4) för en fullständig lista över ändringar.

## Hämta Nora

[Installera eller uppdatera Nora](/sv/nora/install/), eller utforska [Nora-dokumentationen](/sv/nora/) för att läsa mer.
