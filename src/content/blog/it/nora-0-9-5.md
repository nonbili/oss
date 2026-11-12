---
title: "Nora 0.9.5: Accesso tramite proxy e un'esperienza più tranquilla su X"
description: Accedi ai proxy su Android e iOS 17 o versioni successive, scegli cosa nascondere su X, imposta la ricerca predefinita su Recenti e mantieni visibili i normali post di Facebook.
date: 2026-11-06
product: nora
---

**Nora 0.9.5 per dispositivi mobili** introduce i campi per nome utente e password dei proxy su dispositivi mobili e offre maggiore controllo su cosa visualizzare su X. Migliora inoltre il filtro per gli annunci di Facebook e l'importazione dei cookie del browser.

## Accedi al tuo proxy su mobile

Apri **Impostazioni → Navigazione → Proxy** per selezionare HTTP o SOCKS, inserire host e porta e specificare le tue credenziali di accesso. I proxy autenticati sono supportati su **Android** e **iOS 17 o versioni successive**, sia per la navigazione web che per le richieste del feed.

Le credenziali rimangono archiviate localmente sul dispositivo e sono escluse da backup e sincronizzazione. Su iOS 16, il supporto proxy rimane limitato alle richieste feed tramite proxy HTTP senza autenticazione.

## Scegli cosa nascondere su X

In **Impostazioni → Servizi → X**, puoi ora scegliere di nascondere:

- **Interfaccia Grok**, per rimuovere i componenti visivi di Grok.
- **Suggerimenti**, inclusi «Chi seguire», tendenze e «Scopri di più».
- **Conteggi di interazione**, per una timeline con meno numeri in cerca di attenzione.

Questi controlli sono del tutto facoltativi. La stessa sezione offre l'opzione **Ricerca predefinita su Recenti**, così che le ricerche mostrino subito i post recenti anziché i contenuti in evidenza. Puoi comunque passare da una scheda all'altra su X ogni volta che desideri una vista diversa.

<div class="screenshot-gallery" style="max-width: 24rem;">
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">Controlli di X in Nora su Android: scegli quali elementi nascondere e se aprire le ricerche nei post Recenti.</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/nora-0-9-5/x-settings.webp" alt="Impostazioni di X in Nora su smartphone Pixel con controlli opzionali per Grok, suggerimenti, conteggio interazioni e ricerca Recenti" width="1080" height="2220" loading="lazy" />
    </div>
  </figure>
</div>

## Mantieni visibili i normali post di Facebook

Il filtro per gli annunci di Facebook verifica ora direttamente l'etichetta di contenuto sponsorizzato. I post ordinari che contengono parole come «Ad» o «広告» hanno molte meno probabilità di venire nascosti per sbaglio.

## Importazione dei cookie più affidabile

L'importazione dei cookie dal browser conserva ora i nomi che iniziano con `__Host-` e `__Secure-`. Mantenere inalterati tali prefissi consente ai siti web di riconoscere correttamente la sessione importata.

Consulta le [note di rilascio su GitHub](https://github.com/nonbili/Nora/releases/tag/v0.9.5) per l'elenco completo delle modifiche.

## Scarica Nora

[Installa o aggiorna Nora](/it/nora/install/) o consulta la [documentazione di Nora](/it/nora/) per saperne di più.
