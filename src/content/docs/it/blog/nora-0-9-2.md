---
title: "Nora 0.9.2: Più modi per seguire i tuoi feed"
description: Leggi i feed di Instagram da imginn e i feed di X dalle istanze Nitter, ingrandisci timeline e contenuti della galleria e scegli dove salvare i download su Android.
sidebar:
  label: Rilascio di Nora 0.9.2
  order: 2
---

*Pubblicato il 29 ottobre 2026*

Instagram o X hanno smesso di aggiornarsi? **Nora 0.9.2** aggiunge fonti alternative opzionali per mantenere sempre attivi i tuoi feed. Introduce inoltre lo zoom nelle timeline e nella galleria, i controlli per la velocità dei video e la possibilità di scegliere dove salvare i download su Android.

Se non conosci ancora il lettore di feed di Nora, inizia con la [presentazione della versione 0.9.0](/it/blog/nora-0-9-0/).

## Leggi Instagram da imginn e X da Nitter

Seguire profili pubblici di **Instagram** e **X** senza effettuare l'accesso può scontrarsi con blocchi di login o limiti di richieste. Nora 0.9.2 aggiunge due alternative opzionali nelle **Impostazioni del feed** affinché le tue timeline restino aggiornate senza accedere a un account:

- **Leggi Instagram da imginn:** Scegli **Quando Instagram fallisce** per usare imginn come soluzione di riserva, oppure **Prima, poi Instagram** per controllare prima imginn. Entrambe le modalità funzionano solo mentre Nora è aperto. Se imginn ti chiede di confermare che non sei un robot, Nora ti invita a completare la verifica direttamente nell'app.
- **Leggi X da Nitter:** Scegli **Quando X fallisce** o **Prima, poi X** e aggiungi uno o più indirizzi di istanze Nitter. Nora prova le tue istanze a turno. Le istanze che richiedono una verifica del browser funzionano solo mentre Nora è aperto.

Entrambe le opzioni sono disattivate per impostazione predefinita e possono essere attivate in qualsiasi momento nelle **Impostazioni del feed**.

<div class="screenshot-gallery">
  <figure class="screenshot-card">
    <div class="screenshot-card__eyebrow">Impostazioni del feed</div>
    <h2 class="screenshot-card__title">Fonti imginn e Nitter</h2>
    <p class="screenshot-card__body">
      Leggi i profili Instagram da imginn e i profili X dalle istanze Nitter configurate, come fonte di riserva o principale.
    </p>
    <div class="screenshot-frame">
      <img src="/blog/nora-0-9-2/feed-settings.png" alt="Impostazioni del feed di Nora 0.9.2 con le opzioni imginn e Nitter" />
    </div>
  </figure>

  <figure class="screenshot-card">
    <div class="screenshot-card__eyebrow">Media</div>
    <h2 class="screenshot-card__title">Galleria a schermo intero e zoom</h2>
    <p class="screenshot-card__body">
      Pizzica per ingrandire foto e video nella galleria a schermo intero, tieni premuto il bordo dello schermo per velocizzare la riproduzione o salva direttamente i media.
    </p>
    <div class="screenshot-frame">
      <img src="/blog/nora-0-9-2/media-gallery.png" alt="Schermata della galleria multimediale a schermo intero di Nora 0.9.2" />
    </div>
  </figure>

  <figure class="screenshot-card">
    <div class="screenshot-card__eyebrow">Profili</div>
    <h2 class="screenshot-card__title">Riapri scheda nel profilo</h2>
    <p class="screenshot-card__body">
      Sposta qualsiasi scheda mobile aperta in un altro profilo Nora direttamente dal menu dell'intestazione o dal selettore delle schede.
    </p>
    <div class="screenshot-frame">
      <img src="/blog/nora-0-9-2/reopen-in-profile.png" alt="Finestra di dialogo riapri scheda nel profilo di Nora 0.9.2" />
    </div>
  </figure>
</div>

## Controlli video del feed, zoom e notifiche

Anche consultare le timeline e i contenuti multimediali nel feed è ora più flessibile:

- **Controlli della velocità video nella galleria:** I video del feed ora utilizzano le tue preferenze **Velocità di riproduzione video predefinita** e **Tieni premuto il bordo per velocità 2x**. Tocca e tieni premuto il bordo sinistro o destro di un video in riproduzione per passare alla velocità 2x, quindi scorri orizzontalmente per cambiare velocità.
- **Zoom nelle timeline e nella galleria:** Pizzica con due dita su dispositivi mobili — oppure tieni premuto `Ctrl`/`Cmd` e scorri su desktop — sia nelle timeline del feed sia nella galleria di foto e video a schermo intero. I controlli di riproduzione e avanzamento del video restano accessibili anche durante lo zoom.
- **Apertura delle notifiche nelle timeline:** Toccare una notifica di nuovo post ora apre direttamente la timeline corrispondente di Nora.
- **Alternativa per i video non riproducibili:** Quando un video non può essere riprodotto nella galleria a schermo intero, puoi aprire il post direttamente sul sito originale.

## Download, profili e miglioramenti per i siti

Questo rilascio include anche diversi miglioramenti per la navigazione e i download su tutte le piattaforme:

- **Scegli dove salvare i download su Android:** Attiva **Chiedi dove salvare ogni download** in **Impostazioni → Download** per scegliere la cartella di destinazione e il nome file per ogni download. Questo aggiornamento rende inoltre più affidabile il salvataggio dei file scaricati.
- **Riapri nel profilo dal menu dell'intestazione:** Passa la scheda mobile attiva a un altro profilo Nora direttamente dal menu dell'intestazione, oltre che tenendo premuta la scheda nel selettore di schede.
- **Correzioni per TikTok e Instagram:** Guarda i video di TikTok con un nuovo pulsante a schermo intero e scarica video in modo più affidabile da TikTok e Instagram, anche senza aver effettuato l'accesso a Instagram.
- **Scorrimento più fluido e controlli in background:** Le pagine non saltano più quando la barra degli strumenti scompare o riappare, e i controlli dei feed in background funzionano meglio su Android.

Consulta il [changelog](/it/nora/changelog/) per tutti i dettagli del rilascio.

## Scarica Nora 0.9.2

[Installa o aggiorna Nora](/it/nora/install/) su Android, iOS, Linux, macOS o Windows.

Puoi anche consultare la [documentazione di Nora](/it/nora/) o leggere le [note di rilascio su GitHub](https://github.com/nonbili/Nora/releases/tag/v0.9.2).
