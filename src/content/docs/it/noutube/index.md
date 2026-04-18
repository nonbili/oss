---
title: NouTube
description: Panoramica di NouTube e di cosa è stato costruito per fare.
---
<div class="product-overview-header">
  <img class="product-overview-header__logo" src="/app-logos/noutube.png" alt="NouTube logo" />
  <p class="product-overview-header__meta">Android e desktop</p>
</div>

NouTube è un'app per Android e desktop per YouTube e YouTube Music.

Avvolge le web app mobili di YouTube e YouTube Music e aggiunge comportamenti nativi, tra cui il blocco della pubblicità, hook per il controllo della riproduzione, supporto per i download, feed RSS e gestione della libreria ottimizzata per l'offline.

## Punti salienti

- Nessuna pubblicità
- Riproduzione in background
- Supporto video e musica in un'unica app
- Gestione della libreria e della cronologia senza effettuare l'accesso
- Download dei video
- Lettore di feed RSS per i canali YouTube
- Supporto per la live chat
- Supporto CSS personalizzato

## Piattaforme

- Android
- Desktop

La build desktop segue lo stesso modello di prodotto dell'app mobile, con installer nativi per schermi più grandi.

## Primo Avvio

Dopo l'installazione, una prima configurazione pratica si presenta così:

1. Apri YouTube o YouTube Music all'interno dell'app.
2. Controlla il comportamento della riproduzione, specialmente la riproduzione in background se questo è il tuo caso d'uso principale.
3. Configura la tua libreria, cronologia, feed e preferenze di download.
4. Aggiungi CSS personalizzato solo dopo aver confermato che l'esperienza predefinita funziona per te.

## Link Supportati

NouTube è configurato per gestire questi host:

- `youtube.com`
- `www.youtube.com`
- `m.youtube.com`
- `music.youtube.com`
- `youtu.be`

Se il tuo dispositivo chiede quale app debba aprire un link supportato, scegli `NouTube`.

## Come Funziona

NouTube avvolge le web app invece di ricostruire YouTube da zero. In pratica ciò significa:

- Mantieni il flusso e il layout del sito ufficiale
- L'app aggiunge il blocco della pubblicità e hook di riproduzione nativi
- La riproduzione in background e l'integrazione con il dispositivo funzionano meglio che usando il sito in un normale browser

## Altri Link

Per i rilasci, il tracciamento dei problemi e gli aggiornamenti del progetto, utilizza la repo GitHub:

- [nonbili/NouTube](https://github.com/nonbili/NouTube)

Continua con [Installa](/it/noutube/install/) per i download e i link dei pacchetti.
