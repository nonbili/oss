---
title: Domande frequenti (FAQ)
description: Domande comuni su Nora tratte dai problemi su GitHub.
---
Questa pagina riassume le domande ricorrenti degli utenti tratte dal tracker pubblico dei problemi di GitHub.

## Nora può aprire i link di Instagram o Facebook direttamente da altre app?

Sì, questo è previsto che funzioni. Lo sviluppatore ha affermato che potrebbe essere necessario:

- abilitare il comportamento `Apri per impostazione predefinita` di Android per Nora
- disinstallare o disabilitare l'app ufficiale se continua a rivendicare gli stessi link
- aggiornare a una versione più recente di Nora se i deep link aprono l'app ma non il post richiesto

Fonte:

- [Problema n. 51: Supporto per l'apertura di link in Nora](https://github.com/nonbili/Nora/issues/51)

## Instagram non si apre all'interno di Nora

Un problema attualmente aperto mostra che alcuni utenti riscontrano ancora una pagina di errore di Instagram anche dopo aver provato il ricaricamento, la modalità sito desktop e la cancellazione dei dati della webview. Ciò significa che non esiste ancora una correzione confermata. Se questo accade sul tuo dispositivo:

- prova a ricaricare
- prova la modalità sito desktop
- cancella i dati della webview di Nora
- se continua a fallire, controlla GitHub per aggiornamenti o aggiungi i dettagli del tuo dispositivo al problema

Fonte:

- [Problema n. 147: Problema durante il tentativo di aprire Instagram](https://github.com/nonbili/Nora/issues/147)

## I media continuano a suonare dopo che ho lasciato l'app

Questo è stato segnalato per l'audio di Instagram che continua in background senza controlli utili. Lo sviluppatore ha risposto che sarebbe stato risolto nella prossima versione, quindi la prima cosa da fare è aggiornare Nora alla versione più recente disponibile sul tuo store o canale di rilascio.

Fonte:

- [Problema n. 119: puoi farlo smettere di suonare in background? pls](https://github.com/nonbili/Nora/issues/119)

## Posso scaricare immagini o video?

Sì, almeno una parte di questo è già supportata:

- premi a lungo un'immagine per mostrare il menu di download
- i download di Reel di Facebook e Instagram erano già supportati quando è stato discusso il problema
- il supporto per il download dei video di X è stato aggiunto successivamente

Fonte:

- [Problema n. 153: download](https://github.com/nonbili/Nora/issues/153)

## Perché l'accesso a X fallisce?

La discussione del problema suggerisce che l'accesso normale con email/password fosse previsto che funzionasse, mentre l'accesso basato su Google in una webview necessitava di ulteriore lavoro. Lo sviluppatore ha successivamente affermato che è stato aggiunto un menu `Inject cookie` nella `v0.1.5` come soluzione temporanea per gli utenti interessati.

Fonte:

- [Problema n. 1: Impossibile accedere a X](https://github.com/nonbili/Nora/issues/1)

## Posso usare le estensioni del mio browser come uBlock Origin o Dark Reader all'interno di Nora?

Non allo stesso modo di un profilo browser completo. Nella discussione sulla richiesta di funzionalità, lo sviluppatore ha indirizzato gli utenti al supporto CSS personalizzato di Nora per le modifiche all'interfaccia invece di promettere il supporto per le estensioni browser integrate.

Fonte:

- [Problema n. 96: Aprire i social nella webview fornita dal browser](https://github.com/nonbili/Nora/issues/96)

## Dove devo segnalare i bug o richiedere funzionalità?

Usa la repo GitHub:

- [Problemi nonbili/Nora](https://github.com/nonbili/Nora/issues)
