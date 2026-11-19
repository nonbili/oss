---
title: "Nora 0.9.7: Scegli la cartella di download e personalizza il menu"
description: Scegli dove salvare i download su Android, nascondi le azioni usate raramente nel menu a tre punti e ottieni correzioni per WhatsApp Web, Facebook Marketplace e navigazione tra le schede.
date: 2026-11-19
product: nora
---

Con **Nora 0.9.7 per dispositivi mobili**, puoi inviare i download di Android a una cartella a tua scelta e ridurre il menu a tre punti del browser alle sole azioni che usi. Questa versione apre inoltre automaticamente WhatsApp Web e Facebook Marketplace in modalità desktop.

## Scegli dove salvare i download

Su Android, apri **Impostazioni → Preferenze → Download → Salva download in** per impostare la destinazione dei download del browser.

- **Download** utilizza la cartella Download predefinita di Android.
- **Chiedi ogni volta** ti consente di scegliere una destinazione per ogni download.
- **Scegli cartella…** salva i download futuri nella cartella selezionata.

Se scegli una cartella, Nora la utilizza anche per i contenuti multimediali salvati dal feed su Android 10 e versioni successive. Questa versione corregge inoltre i download dai link `data:`, utilizzati da alcuni siti per i file generati nel browser.

<div class="screenshot-gallery" style="max-width: 24rem;">
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">Nora Downloads è selezionata come destinazione per i download futuri.</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/nora-0-9-7/download-destination.png" alt="Impostazioni di download di Android con Nora Downloads selezionata e le opzioni Download, Chiedi ogni volta e Scegli cartella visibili" width="1080" height="2220" loading="lazy" />
    </div>
  </figure>
</div>

## Personalizza il menu a tre punti

Apri **Impostazioni → Aspetto → Barra degli strumenti → Personalizza menu a tre punti** e disattiva le azioni che usi raramente. Ad esempio, mantieni **Trova nella pagina** e **Condividi** e nascondi **Sito desktop** se cambi raramente layout. Le azioni mantenute compaiono quando sono disponibili nella scheda corrente.

**Impostazioni** rimane nel menu e **Ripristina menu predefinito** annulla le modifiche con un tocco.

<div class="screenshot-gallery">
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">Mantieni attivo Trova nella pagina e disattiva Sito desktop.</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/nora-0-9-7/customize-three-dot-menu.png" alt="Impostazioni espanse di Personalizza menu a tre punti con Trova nella pagina attivo e Sito desktop disattivato" width="1080" height="2220" loading="lazy" />
    </div>
  </figure>
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">Il menu del browser mantiene Trova nella pagina, Condividi e Impostazioni.</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/nora-0-9-7/customized-three-dot-menu.png" alt="Menu personalizzato del browser che mostra Trova nella pagina, Condividi e Impostazioni, con Sito desktop nascosto" width="1080" height="2220" loading="lazy" />
    </div>
  </figure>
</div>

## WhatsApp Web e Facebook Marketplace si aprono in modalità desktop

In **WhatsApp Web**, la tastiera su schermo ora può aprirsi senza chiudere il selettore. **Facebook Marketplace** utilizza il sito desktop così puoi inviare messaggi ai venditori direttamente da un annuncio.

## Correzioni a navigazione e feed

- Il blocco degli annunci di Facebook ora intercetta i post sponsorizzati anche quando le etichette compaiono in ritardo. La pressione prolungata su un pulsante di reazione di Facebook non fa più comparire il menu contestuale del browser.
- Il filtro dei giochi di Reddit mantiene visibili i post normali.
- Il selettore delle schede si apre mostrando la scheda attiva. In una nuova scheda, un indirizzo digitato si apre al primo tocco su **Vai** e l’apertura di un link in entrata conserva le altre schede.
- Il gesto di trascinamento per aggiornare non interferisce quando esegui gesti all’interno di un visualizzatore multimediale.

Consulta le [note di rilascio su GitHub](https://github.com/nonbili/Nora/releases/tag/v0.9.7) per l’elenco completo delle modifiche.

## Ottieni Nora

[Installa o aggiorna Nora](/it/nora/install/), oppure esplora la [documentazione di Nora](/it/nora/) per saperne di più.
