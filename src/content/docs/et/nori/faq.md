---
title: KKK
description: Korduma kippuvad küsimused Nori kohta.
sidebar:
  order: 9
---

## Kuidas salvestada linke Norisse oma mobiilibrauserist?

Kasuta tavalist süsteemi jagamismenüüd:

1. Puuduta oma brauseris (Chrome, Firefox, Safari, Brave jne) nuppu **Share**.
2. Vali rakenduste loendist **Nori**.
3. Vali sihtloend, kuhu soovid lingi salvestada, või luba seadetes **Quick save shared links**, et salvestada otse määratud loendisse ilma küsimata.

## Kas ma saan avada järjehoidjaid otse oma brauserirakenduses, mitte rakendusesiseses vahekaardis?

Jah. Ava **Settings → General** ja lülita sisse **Open links in default browser**. Kui see on lubatud, annab mis tahes järjehoidja puudutamine URL-i kohe üle sinu telefoni vaikebrauseri rakendusele.

## Kuidas importida järjehoidjaid töölauabrauseritest?

Ekspordi oma olemasolevad järjehoidjad HTML-faili:

- **Chrome / Brave / Edge**: ava järjehoidjate haldur (`Ctrl+Shift+O` või `Cmd+Option+B`) → klõpsa menüüd `⋮` → vali **Export bookmarks**.
- **Firefox**: ava teek (`Ctrl+Shift+O` või `Cmd+Shift+O`) → **Import and Backup** → **Export Bookmarks to HTML…**.
- **Safari**: File → **Export Bookmarks…**.

Seejärel ava Noris **Settings → Bookmarks → Import bookmarks**, vali `.html` fail ja Nori impordib kõik lingid ja kaustad vastavatesse loenditesse.

## Kas ma saan oma järjehoidjaid varundada ja taastada?

Jah. Jaotises **Settings → Bookmarks**:

- **Export backup**: salvestab täieliku JSON-varukoopia faili, mis sisaldab kõiki loendeid, järjehoidjaid, silte ja seadeid.
- **Restore backup**: taastab olemasolevast Nori varukoopia failist.
- **Export HTML / Plain text**: loob brauseriga ühilduva HTML-faili või loetava tekstiloendi.

## Kuidas mitme seadme sünkroonimine töötab?

Nori Sync ühendab sinu mobiilirakendused, töölauarakendused ja brauserilaiendused:

- Järjehoidjad jäävad igas seadmes lokaalselt vahemällu täieliku võrguühenduseta funktsionaalsuse jaoks.
- Ühenduse olemasolul sünkroonitakse muudatused sujuvalt kõigi aktiivsete klientide vahel.

## Kas brauserilaiendus jälgib minu sirvimistegevust?

Ei. Nori ei jälgi sinu sirvimisajalugu ega loe veebilehtede sisu. Laiendus saab URL-e ainult siis, kui avad hüpikakna ja klõpsad aktiivse vahekaardi järjehoidjasse lisamiseks.

## Kuhu peaksin teatama vigadest või küsima funktsioone?

Kogu arendus ja vigade jälgimine toimub GitHubis:

- [nonbili/Nori Issues](https://github.com/nonbili/Nori/issues)
