---
title: Personalizzazione
description: Regolazioni CSS e di navigazione in Nora.
sidebar:
  order: 8
---
Nora supporta CSS personalizzato in modo da poter rimodellare i siti web dei servizi che incorpora.

## Usi Comuni

- Nascondere elementi dell'interfaccia distraenti
- Migliorare la densità per layout ricchi di timeline
- Rimuovere il chrome specifico del servizio che non usi mai
- Rendere le configurazioni multi-colonna desktop più facili da scansionare

## Mantieni le Modifiche Manutenibili

Poiché Nora dipende dai siti web live dei servizi esterni, il markup a monte può cambiare senza preavviso.

Utilizza un approccio conservativo:

- Preferisci regole piccole e mirate
- Riesegui i test dopo i redesign del servizio
- Evita sovrascritture ampie a meno di non controllarne le ricadute

## Associa il CSS ai Profili

Se utilizzi profili separati per diversi servizi o ruoli, mantieni le regolazioni CSS allineate con tali profili in modo che il comportamento rimanga prevedibile.
