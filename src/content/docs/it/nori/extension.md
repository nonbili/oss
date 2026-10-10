---
title: Estensione per browser
description: Utilizzo dell'estensione per browser Nori su Firefox e Chrome.
sidebar:
  order: 5
---

Nori include un'estensione per browser locale (Local-First) per Mozilla Firefox e Google Chrome.

## Funzionalità principali

- **Esperienza mobile fedele**: Il popup dell'estensione offre le stesse liste, pannello di ricerca, cronologia, gestione liste e impostazioni dell'app mobile.
- **Salvataggio con un clic**: Aggiungi istantaneamente la scheda attiva alla lista desiderata con recupero automatico del titolo.
- **Avviatore rapido**: Cerca e apri i tuoi segnalibri in nuove schede direttamente dalla barra degli strumenti del browser.
- **Archiviazione locale**: Salva i segnalibri in locale nella memoria dell'estensione del browser, con supporto facoltativo a Nori Sync.
- **Attenzione alla privacy**: Nessuna attività di navigazione o contenuto delle pagine viene tracciato. Nori riceve solo gli URL che decidi esplicitamente di salvare.

## Installazione dell'estensione

Installa Nori direttamente dagli store ufficiali delle estensioni:

- [Firefox Add-ons](https://addons.mozilla.org/addon/nori/)
- [Chrome Web Store](https://chromewebstore.google.com/detail/nori/ojgmnocnegcbhlmfoackgoocnjbfejpg)

## Compilazione dal codice sorgente

L'estensione è open-source ed è sviluppata con [WXT](https://wxt.dev/) utilizzando Manifest V3:

```bash
cd extension
bun install
bun run dev          # Modalità di sviluppo per Chrome
bun run dev:firefox  # Modalità di sviluppo per Firefox
bun run build:all    # Crea i pacchetti zip di produzione
```
