---
title: FAQ
description: Domande comuni su NouTube tratte dai problemi su GitHub.
---
Questa pagina riassume le domande ricorrenti degli utenti tratte dal tracker pubblico dei problemi di GitHub.

## Il pulsante di accesso desktop manca o il login sembra bloccato

Se l'app desktop non mostra un pulsante `Accedi` visibile, prova prima ad aprire il menu `I tuoi dati su YouTube`. Nella discussione del problema, quel percorso ha permesso agli utenti interessati di raggiungere il flusso di accesso, e lo sviluppatore ha successivamente affermato che il pulsante visibile dovrebbe tornare nella `v0.1.6`.

Fonti:

- [Problema n. 46: la versione desktop non esegue mai il login, sempre errore](https://github.com/nonbili/NouTube/issues/46)

## Il login desktop fallisce ancora anche quando si apre la pagina di accesso

Ci sono state segnalazioni che alcune configurazioni desktop falliscono ancora il login Google anche dopo aver cancellato i dati. Il thread del problema non si è concluso con una soluzione universale confermata, quindi la guida pratica è:

- aggiorna all'ultimo rilascio desktop
- cancella i dati della webview/profilo dell'app se hai già provato ad accedere
- se fallisce ancora, segnala il tuo sistema operativo, il formato del pacchetto e gli screenshot su GitHub

Fonte:

- [Problema n. 103: Impossibile accedere dal client desktop](https://github.com/nonbili/NouTube/issues/103)

## YouTube Music non si carica correttamente

Un percorso di risoluzione dei problemi documentato è stato:

1. Assicurati che `NouTube` sia l'app predefinita per `music.youtube.com`.
2. Se l'app ufficiale di YouTube Music è installata, rimuovi prima la sua gestione dei link predefinita.
3. Se il problema persiste, prova un user agent personalizzato da `Impostazioni > Strumenti > User agent personalizzato`.

Questa guida proviene direttamente dallo sviluppatore nel thread del problema. È una soluzione temporanea, non una correzione garantita per ogni dispositivo.

Fonte:

- [Problema n. 150: Messaggio di errore NouTube Music, non si carica.](https://github.com/nonbili/NouTube/issues/150)

## Alcuni annunci riescono ancora a passare

È stata segnalata la comparsa di brevi annunci YouTube Premium prima dei video. Lo sviluppatore ha indirizzato gli utenti alla `v0.4.9`, che implica che le correzioni per il blocco degli annunci sono state distribuite nei rilasci successivi. Se vedi annunci:

- aggiorna all'ultimo rilascio da F-Droid o GitHub
- se il problema persiste, apri un nuovo problema con la versione dell'app e uno screenshot

Fonte:

- [Problema n. 117: Annuncio non bloccato](https://github.com/nonbili/NouTube/issues/117)

## NouTube riapre una coda invece della home page

Se NouTube continua a ripristinare la riproduzione o si riapre su un vecchio elemento invece della home page, controlla se l'icona della coda è ancora attiva. Nel thread del problema, lo sviluppatore ha identificato una coda non svuotata come motivo per cui NouTube continuava a cercare di riprendere la riproduzione.

Fonte:

- [Problema n. 138: Ripristino della riproduzione](https://github.com/nonbili/NouTube/issues/138)

## Dove devo segnalare i bug o richiedere funzionalità?

Usa la repo GitHub:

- [Problemi nonbili/NouTube](https://github.com/nonbili/NouTube/issues)
