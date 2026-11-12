---
title: "Nora 0.9.3: Apri i download più velocemente, naviga con maggiore fluidità"
description: Apri i download completati direttamente dalle notifiche, scorri i caroselli su Android e riduci le attività in background e l'uso della memoria.
date: 2026-10-31
product: nora
---

**Nora 0.9.3 per dispositivi mobili** semplifica l'accesso ai file salvati grazie a una scorciatoia posizionata direttamente nella conferma di download. Risolve inoltre i problemi relativi ai gesti nei caroselli su Android e riduce le operazioni in background quando le pagine non sono più consultate.

## Vai direttamente al tuo download

Su **Android**, le conferme di download includono ora un pulsante **Apri** per visualizzare il file salvato in un'app compatibile. Questa opzione è disponibile anche quando si salva una singola foto o un video dal feed.

Salva il file e tocca il pulsante nel messaggio di conferma per accedervi all'istante, senza doverlo cercare nella cartella Download.

## Scorri i caroselli su Android

Scorrere lateralmente le foto di una pagina poteva inavvertitamente attivare il gesto di trascinamento per ricaricare (pull-to-refresh). Ora Nora distingue con precisione gli scorrimenti orizzontali dai trascinamenti verticali, consentendo di sfogliare i caroselli senza ricaricare la pagina.

## Meno attività in background, migliore pulizia delle schede

Su Android, Nora sospende i timer delle WebView quando l'app è in background, limitando il consumo non necessario di CPU e batteria. Gli aggiornamenti dell'avanzamento dei video nel feed vengono eseguiti solo quando i controlli di zoom ne hanno effettivo bisogno.

Le schede chiuse e i popup rimossi rilasciano ora le proprie WebView in modo più affidabile su Android, e su iOS le schede chiuse vengono liberate correttamente. Questo aggiornamento corregge inoltre un problema su Android per cui l'apertura di un link in una nuova scheda poteva mostrare una schermata bianca.

Consulta le [note di rilascio su GitHub](https://github.com/nonbili/Nora/releases/tag/v0.9.3) per l'elenco completo delle modifiche.

## Scarica Nora

[Installa o aggiorna Nora](/it/nora/install/) o consulta la [documentazione di Nora](/it/nora/) per saperne di più.
