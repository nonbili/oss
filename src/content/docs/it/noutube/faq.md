---
title: Domande frequenti (FAQ)
description: Domande comuni su NouTube tratte dai problemi su GitHub.
sidebar:
  order: 9
---
Questa pagina riassume le domande ricorrenti degli utenti tratte dal tracker pubblico dei problemi di GitHub.

## Problemi di accesso

Google rifiuta spesso l'accesso dalle app che incorporano una pagina web, quindi l'accesso all'interno di NouTube può non riuscire sia su Android sia su desktop, di solito con l'errore "Questo browser o questa app potrebbero non essere sicuri". Su desktop, se non è visibile un pulsante `Accedi`, prova prima ad aprire il menu `I tuoi dati su YouTube`.

Se non riesci ad accedere, usa invece la funzione **Inject cookie**:

1. Su un computer, accedi a YouTube con Chrome o un altro browser basato su Chromium, quindi esporta i tuoi cookie di YouTube con un'estensione del browser (come `getcookies.txt`).
2. Su Android, copia il file esportato sul tuo dispositivo.
3. In NouTube, apri **Settings > Tools > Inject cookie**, importa il file (o incollane il contenuto) e salva.

Questo metodo aggira il controllo del browser sicuro di Google ed è attualmente la soluzione più affidabile per i problemi di accesso, sia su Android sia su desktop.

Fonti:

- [Issue #142: Can't login to Google on Windows app](https://github.com/nonbili/NouTube/issues/142)

## YouTube Music non si carica correttamente

Se YouTube Music non si carica correttamente, prova ad attivare **Sito desktop (Desktop site)** nel menu dell'applicazione.

Fonte:

- [Issue #150: Noutube Music Error Message, Not Loading.](https://github.com/nonbili/NouTube/issues/150)

## NouTube riapre una coda invece della home page

Se NouTube continua a ripristinare la riproduzione o si riapre su un vecchio elemento invece della home page, controlla se l'icona della coda è ancora attiva. Nel thread del problema, lo sviluppatore ha identificato una coda non svuotata come motivo per cui NouTube continuava a cercare di riprendere la riproduzione.

Fonte:

- [Issue #138: Restoring playback](https://github.com/nonbili/NouTube/issues/138)

## Dove devo segnalare i bug o richiedere funzionalità?

Usa la repo GitHub:

- [Problemi nonbili/NouTube](https://github.com/nonbili/NouTube/issues)
