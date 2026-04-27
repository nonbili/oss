---
title: Domande frequenti (FAQ)
description: Domande comuni su NouTube tratte dai problemi su GitHub.
sidebar:
  order: 9
---
Questa pagina riassume le domande ricorrenti degli utenti tratte dal tracker pubblico dei problemi di GitHub.

## Problemi di accesso su desktop

Se l'app desktop non mostra un pulsante `Accedi` visibile, prova prima ad aprire il menu `I tuoi dati su YouTube`. Se la pagina di accesso si apre ma ricevi l'errore "il browser o l'app potrebbero non essere sicuri", utilizza la funzione **Inserisci cookie (Inject cookie)**:

1. Usa un'estensione del browser (come `getcookies.txt`) per esportare i tuoi cookie di YouTube.
2. Importa i cookie in NouTube utilizzando il pulsante **Inserisci cookie (Inject cookie)**.

Questo metodo bypassa il controllo del browser sicuro di Google ed è attualmente la soluzione più affidabile per i problemi di accesso su desktop.

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
