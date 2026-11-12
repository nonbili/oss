---
title: "Nora 0.9.4: Link di X più puliti e download più affidabili"
description: Rimuovi i token di condivisione dai link dei post di X, risolvi i download video bloccati su Analisi e mantieni i nomi file e i controlli a schermo intero di TikTok.
date: 2026-11-03
product: nora
---

Un link copiato a un post dovrebbe essere facile da condividere e un download video dovrebbe superare rapidamente la fase di **Analisi**. **Nora 0.9.4 per dispositivi mobili** risponde a entrambe le esigenze con interventi mirati per la condivisione dei link, il salvataggio dei file e la riproduzione dei video su TikTok.

## Condividi i link di X senza token superflui

Nora rimuove ora i parametri di tracciamento della condivisione di X come `s` e `t` quando copi o condividi il link di un post. Ad esempio:

```text
Before: https://x.com/nonbili/status/1234567890?s=20&t=example
After:  https://x.com/nonbili/status/1234567890
```

L'indirizzo del post rimane intatto; vengono rimossi soltanto i token di condivisione aggiuntivi. Questa pulizia si applica solo agli URL dei post di X e Twitter, evitando di alterare eventuali parametri con lo stesso nome su pagine non correlate.

## Supera la fase «Analisi» durante il salvataggio dei video

Alcuni download di video potevano bloccarsi nella fase di **Analisi** (Parsing) prima che il download vero e proprio iniziasse. Questo rilascio corregge tale anomalia permettendo ai download interessati di procedere regolarmente.

I file generati da una pagina web tramite un URL `blob:` conservano inoltre il nome file originale quando disponibile, rendendo i file salvati molto più facili da riconoscere in seguito.

## Ripristina i controlli a schermo intero di TikTok

I controlli per la modalità a schermo intero di TikTok su Nora potevano non comparire se lo script della pagina veniva eseguito prima che il corpo della pagina fosse pronto. I controlli gestiscono ora correttamente quest'ordine di caricamento, garantendo la visualizzazione del pulsante a schermo intero.

Consulta le [note di rilascio su GitHub](https://github.com/nonbili/Nora/releases/tag/v0.9.4) per l'elenco completo delle modifiche.

## Scarica Nora

[Installa o aggiorna Nora](/it/nora/install/) o consulta la [documentazione di Nora](/it/nora/) per saperne di più.
