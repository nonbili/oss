---
title: "NouTube 0.7.11 aggiunge una barra degli strumenti Android personalizzabile e il download dei video su iOS"
description: Metti le tue azioni preferite nella barra degli strumenti di Android, scorri per passare a schermo intero, nascondi i commenti di YouTube e salva i video su iPhone e iPad.
date: 2026-11-24
product: noutube
---

NouTube 0.7.11 ti permette di mettere azioni come **Condividi** e **Apri URL** direttamente nella barra degli strumenti di Android. Su iPhone e iPad ora puoi scaricare i video compatibili da **Strumenti**, e i video partono più velocemente. L’aggiornamento mobile aggiunge anche i gesti di scorrimento per lo schermo intero e un’impostazione per nascondere i commenti di YouTube.

## Metti le azioni che usi di più nella barra degli strumenti di Android

Apri **Impostazioni → Aspetto → Pulsanti della barra degli strumenti**. Usa gli interruttori per scegliere quali pulsanti mostrare, poi trascina le maniglie per stabilirne l’ordine. Per esempio, attiva **Condividi** e **Apri URL** e trascinali in cima all’elenco per avere entrambe le azioni a portata di mano mentre guardi un video.

Puoi anche aggiungere alla barra degli strumenti **Strumenti**, **Sito desktop**, **Impostazioni** o il selettore **YouTube / YouTube Music**. Nello stesso elenco puoi riordinare i pulsanti esistenti come **Libreria**, **Feed dei canali** e **Cronologia**.

<div class="screenshot-gallery">
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">Attiva Condividi e Apri URL e trascinali in cima all’elenco.</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/noutube-0-7-11/android-toolbar-settings.webp" alt="Impostazioni Aspetto su Android con Condividi e Apri URL attivati nelle prime due righe e maniglie di trascinamento a destra" width="1080" height="2220" loading="lazy" />
    </div>
  </figure>
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">Condividi e Apri URL sono ora i primi due pulsanti della barra degli strumenti nella pagina di riproduzione.</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/noutube-0-7-11/android-toolbar-result.webp" alt="Barra degli strumenti di NouTube sopra la pagina di riproduzione di Big Buck Bunny, con l’icona Condividi e l’icona di collegamento Apri URL all’estrema sinistra" width="1080" height="2220" loading="lazy" />
    </div>
  </figure>
</div>

## Scarica i video su iPhone e iPad

Per un video che hai il permesso di salvare, apri **Strumenti** e tocca **Download video**. NouTube scarica un MP4 compatibile quando è disponibile. Al termine del download, tocca **Esporta** per salvare o condividere il file.

<div class="screenshot-gallery">
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">Strumenti compila automaticamente l’URL del video corrente.</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/noutube-0-7-11/ios-download-tools.webp" alt="Pannello di download su iPhone con l’URL del video compilato, una nota sulla disponibilità dell’MP4 e il pulsante Download video" width="1206" height="2622" loading="lazy" />
    </div>
  </figure>
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">Esporta compare nella Cronologia download quando il file è pronto.</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/noutube-0-7-11/ios-download-export.webp" alt="Voce della Cronologia download su iPhone con un segno di spunta verde, lo stato Download completato e un pulsante Esporta" width="1206" height="2622" loading="lazy" />
    </div>
  </figure>
</div>

*Big Buck Bunny* © 2008 Blender Foundation / [www.bigbuckbunny.org](https://peach.blender.org/about/). [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/).

L’avvio più rapido dei video introdotto su Android nella 0.7.10 ora vale anche per iOS. Su iPad, i controlli di riproduzione di YouTube restano disponibili a schermo intero.

## Scorri per lo schermo intero o nascondi i commenti

Su dispositivi mobili, scorri verso l’alto sul player di YouTube per passare a schermo intero e verso il basso per tornare alla pagina di riproduzione. Inizia il gesto sul video stesso, così puoi continuare a usare i controlli di riproduzione e la barra di avanzamento come sempre.

Per rimuovere la sezione dei commenti dalle pagine di riproduzione di YouTube, apri **Impostazioni → Preferenze → Senza distrazioni** e attiva **Nascondi commenti**.

<div class="screenshot-gallery" style="max-width: 24rem;">
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">Nascondi commenti si trova in fondo alle impostazioni Senza distrazioni.</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/noutube-0-7-11/hide-comments-setting.webp" alt="Schermata Preferenze su Android con l’interruttore Nascondi commenti attivo in fondo alla sezione Senza distrazioni" width="1080" height="2220" loading="lazy" />
    </div>
  </figure>
</div>

## Altre correzioni

- I download audio Opus ora usano l’estensione `.opus`. NouTube corregge un problema di avvio di yt-dlp nelle build di rilascio per Android e gestisce in modo più affidabile gli errori di download e riproduzione.
- La pagina di riproduzione desktop di YouTube ora si adatta agli schermi Android stretti. Su Android le anteprime del feed non finiscono più nella cronologia delle visualizzazioni, e **Successivo** nei controlli di sistema di YouTube Music non tocca più la coda di NouTube.
- Questa versione aggiorna le traduzioni in italiano, polacco, portoghese brasiliano, russo e ucraino.

[Vedi la versione su GitHub](https://github.com/nonbili/NouTube/releases/tag/v0.7.11).

## Ottieni NouTube

[Installa o aggiorna NouTube](/it/noutube/install/), oppure consulta la [documentazione di NouTube](/it/noutube/).
