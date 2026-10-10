---
title: Nori
description: Panoramica di Nori e del suo modello di gestione e avvio dei segnalibri.
sidebar:
  order: 1
---
<div class="product-overview-header">
  <img class="product-overview-header__logo" src="/app-logos/nori.png" alt="Nori logo" />
  <p class="product-overview-header__meta">Android, iOS, desktop ed estensione</p>
</div>

Nori è un gestore e avviatore di segnalibri open-source progettato per un accesso quotidiano rapido su dispositivi mobili, computer desktop e browser web.

Invece di nascondere i link in strutture complesse di cartelle del browser o in ecosistemi chiusi, Nori organizza i tuoi segnalibri in liste chiare e mirate con apertura immediata, ricerca, schede di anteprima ricche di dettagli e integrazione con il menu di condivisione di sistema.

## Caratteristiche principali

- Liste di segnalibri personalizzate multiple
- Apertura immediata nel browser predefinito di sistema o in schede personalizzate native (Custom Tabs)
- Salva gli URL condivisi da qualsiasi app con selezione della lista e opzioni di salvataggio rapido
- Modalità avviatore compatta e modalità anteprima a schede con immagini di copertina dei siti web
- Pannello di ricerca rapida con filtro per parole chiave e tag
- Cronologia dei link usati di recente e aggiunti di recente
- Importazione ed esportazione tramite file HTML standard di segnalibri, testo semplice e backup completi in JSON
- Aspetto flessibile: Chiaro, Scuro, AMOLED e colori d'accento personalizzati
- Estensione per browser locale (Local-First) per Chrome e Firefox
- App desktop multipiattaforma per Linux, macOS e Windows
- Sincronizzazione multidispositivo opzionale tramite Nori Sync

## Piattaforme

- **Android**: Disponibile su Google Play e tramite download diretto degli APK da GitHub.
- **iOS**: Disponibile su App Store per iPhone e iPad.
- **Desktop**: Applicazioni native autonome per Linux (AppImage e tarball), macOS (Apple Silicon e Intel) e Windows.
- **Estensione browser**: Estensione Manifest V3 per Mozilla Firefox e Google Chrome.

## Primo avvio

Una configurazione iniziale consigliata:

1. Crea alcune liste per le tue categorie abituali (es. `Giornaliero`, `Strumenti`, `Lettura`, `Lavoro`).
2. Aggiungi i tuoi link preferiti o importa i segnalibri esistenti dal file HTML esportato dal tuo browser.
3. Prova ad aprire un segnalibro per verificare che il browser predefinito gestisca i link come previsto.
4. Condividi una pagina web dal browser del tuo dispositivo mobile verso Nori usando il menu di condivisione di sistema.
5. Personalizza le impostazioni dell'aspetto, come la modalità scura o il tuo colore d'accento preferito.

## Come funziona

Nori separa la tua raccolta di segnalibri dai motori specifici dei singoli browser:

- Su Android, i segnalibri si aprono tramite Custom Tabs con `expo-web-browser` o passano direttamente alla tua app browser predefinita.
- Su iOS, i segnalibri si aprono tramite Safari View Controller nativo o nel browser predefinito di sistema.
- Su desktop ed estensione, i segnalibri si aprono direttamente nelle schede attive del tuo browser.

Questo approccio ti garantisce di navigare sempre con i tuoi ad blocker, sessioni aperte e profili di navigazione abituali, mantenendo tutti i tuoi link organizzati in un unico avviatore veloce e consultabile.

## Altri link

Per il codice sorgente, i rilasci e il tracciamento dei problemi, visita il repository GitHub:

- [nonbili/Nori](https://github.com/nonbili/Nori)

Continua con la pagina [Installazione](/it/nori/install/) per i badge degli store, gli APK, i download desktop e i pacchetti di estensione.
