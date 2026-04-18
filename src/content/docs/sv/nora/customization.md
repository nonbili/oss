---
title: Anpassning
description: CSS och webbläsarjusteringar i Nora.
sidebar:
  order: 8
---
Nora stöder anpassad CSS så att du kan omforma webbplatserna den bäddar in.

## Vanliga Användningsområden

- Dölj distraherande UI
- Förbättra densiteten för tidslinjetunga layouter
- Ta bort tjänstespecifika delar som du aldrig använder
- Gör desktop-layouter med flera kolumner lättare att läsa av

## Håll Förändringar Underhållsbara

Eftersom Nora beror på de externa tjänsternas live-webbplatser kan deras kod ändras utan varning.

Använd ett konservativt tillvägagångssätt:

- Föredra små, riktade regler
- Testa igen efter att en tjänst har gjorts om
- Undvik breda ändringar såvida du inte har kontroll över konsekvenserna

## Koppla CSS Till Profiler

Om du använder separata profiler för olika tjänster eller roller, se till att CSS-justeringarna stämmer överens med dessa profiler så att beteendet förblir förutsägbart.
