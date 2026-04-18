---
title: Personalizzazione
description: CSS personalizzato e note sul comportamento per NouTube.
sidebar:
  order: 8
---
NouTube supporta CSS personalizzato per le pagine incorporate di YouTube e YouTube Music.

## A Cosa Serve il CSS Personalizzato

- Nascondere elementi che non ti interessano
- Aumentare la densità della pagina
- Regolare la spaziatura o la tipografia
- Aggirare le scelte dell'interfaccia utente del sito che ti ostacolano

## Approccio Consigliato

Mantieni le modifiche limitate e facili da rimuovere.

- Inizia con una o due regole mirate
- Preferisci selettori stabili ove possibile
- Riesegui i test dopo le modifiche al layout del sito a monte

Poiché NouTube avvolge proprietà web live, il CSS personalizzato può rompersi quando YouTube cambia il suo markup.

## Prima di Personalizzare

Assicurati che il comportamento predefinito dell'app funzioni già per:

- Riproduzione
- Navigazione
- Feed
- Download

Una volta che la base è stabile, stratifica gradualmente le modifiche CSS.
