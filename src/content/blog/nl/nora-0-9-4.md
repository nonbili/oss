---
title: "Nora 0.9.4: Schonere X-links en betrouwbaardere downloads"
description: Verwijder deeltokens uit X-berichtlinks, verhelp videodownloads die vastlopen op Parsing en houd bestandsnamen en TikTok-bediening voor volledig scherm werkend.
date: 2026-11-03
product: nora
---

Een gekopieerde berichtlink moet makkelijk te delen zijn, en een videodownload moet voorbij **Parsing** komen. **Nora 0.9.4 voor mobiel** lost beide op, met een kleine reeks fixes voor het delen van links, het opslaan van bestanden en het bekijken van TikTok-video's.

## Deel X-links zonder de extra tokens

Nora verwijdert nu X-deelparameters zoals `s` en `t` wanneer je een berichtlink kopieert of deelt. Bijvoorbeeld:

```text
Before: https://x.com/nonbili/status/1234567890?s=20&t=example
After:  https://x.com/nonbili/status/1234567890
```

Het berichtadres blijft intact; de extra deeltokens worden verwijderd. Deze opschoning geldt voor X- en Twitter-bericht-URL's, zodat parameters met dezelfde korte namen op niet-gerelateerde pagina's met rust worden gelaten.

## Kom voorbij “Parsing” bij het opslaan van video's

Sommige videodownloads konden vastlopen in de fase **Parsing** voordat de download begon. Deze release verhelpt die fout zodat getroffen downloads kunnen doorgaan.

Bestanden die door een webpagina via een `blob:`-URL worden gegenereerd, behouden ook hun bedoelde bestandsnamen wanneer beschikbaar. Dat maakt opgeslagen bestanden later makkelijker te herkennen.

## Herstel TikTok-bediening voor volledig scherm

De TikTok-bediening voor volledig scherm van Nora verscheen soms niet wanneer het paginascript draaide voordat de paginabody gereed was. De bediening gaat nu om met die laadvolgorde, zodat de knop voor volledig scherm zoals verwacht kan verschijnen.

Bekijk de [release-opmerkingen op GitHub](https://github.com/nonbili/Nora/releases/tag/v0.9.4) voor de volledige lijst met wijzigingen.

## Download Nora

[Installeer of update Nora](/nl/nora/install/), of verken de [Nora-documentatie](/nl/nora/) voor meer informatie.
