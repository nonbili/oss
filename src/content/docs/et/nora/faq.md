---
title: KKK
description: Levinumad küsimused Nora kohta GitHubi probleemidest.
sidebar:
  order: 9
---
See leht võtab kokku korduvad kasutajate küsimused avalikust GitHubi vigade jälgijast.

## Kas Nora saab avada Instagrami või Facebooki linke otse teistest rakendustest?

Jah, see on mõeldud töötama. Hooldaja märkis, et sul võib olla vaja:

- lubada Androidis Nora jaoks vaikimisi avamise (`Open by default`) käitumine
- desinstallida või keelata ametlik rakendus, kui see jätkuvalt samu linke endale haarab
- uuendada uuemale Nora väljalaskele, kui süvalingid avavad rakenduse, kuid mitte soovitud postitust

Allikas:

- [Issue #51: Support opening links in Nora](https://github.com/nonbili/Nora/issues/51)

## Instagram ei avane Noras

Praegu avatud probleem näitab, et mõned kasutajad jõuavad endiselt Instagrami vealehele isegi pärast uuesti laadimist, töölauasaidi režiimi proovimist ja WebView andmete tühjendamist. See tähendab, et kinnitatud parandust veel pole. Kui see juhtub sinu seadmes:

- proovi uuesti laadida
- proovi töölauasaidi režiimi
- tühjenda Nora WebView andmed
- kui see ikka ebaõnnestub, vaata GitHubist uuendusi või lisa oma seadme andmed probleemi juurde

Allikas:

- [Issue #147: Issue when trying to open Instagram](https://github.com/nonbili/Nora/issues/147)

## Meedia jätkab mängimist pärast rakendusest lahkumist

Sellest teatati Instagrami heli puhul, mis jätkas taustal mängimist ilma kasulike juhtnuppudeta. Hooldaja vastas, et see parandatakse järgmises väljalaskes, seega esimene asi on uuendada Nora uusimale versioonile, mis on saadaval sinu poes või väljalaskekanalis.

Allikas:

- [Issue #119: can you make it stop playing in background ? pls](https://github.com/nonbili/Nora/issues/119)

## Kas ma saan pilte või videoid alla laadida?

Jah, vähemalt osa sellest on juba toetatud:

- vajuta pildile pikalt, et kuvada allalaadimismenüü
- Facebooki ja Instagrami Reelside allalaadimised olid juba toetatud, kui probleemi arutati
- X-i videote allalaadimise tugi lisati hiljem

Allikas:

- [Issue #153: download](https://github.com/nonbili/Nora/issues/153)

## Miks X-i sisselogimine ebaõnnestub?

Probleemi arutelu viitab sellele, et tavaline e-posti/parooliga sisselogimine pidi töötama, samas kui Google'i-põhine sisselogimine WebView's vajas lisatööd. Hooldaja ütles hiljem, et versioonis `v0.1.5` lisati mõjutatud kasutajatele lahendusena menüü `Inject cookie`.

Allikas:

- [Issue #1: Unable to sign in to X](https://github.com/nonbili/Nora/issues/1)

## Kas ma saan Noras kasutada oma brauseri laiendusi, nagu uBlock Origin või Dark Reader?

Mitte samal viisil nagu täisbrauseri profiilis. Funktsioonisoovi arutelus suunas hooldaja kasutajad kasutajaliidese muudatuste jaoks Nora enda kohandatud CSS-i toe poole, selle asemel et lubada manustatud brauserilaienduste tuge.

Allikas:

- [Issue #96: Open the socials in the webview provided by browser](https://github.com/nonbili/Nora/issues/96)

## Kuhu peaksin vigadest teatama või funktsioone küsima?

Kasuta GitHubi hoidlat:

- [nonbili/Nora issues](https://github.com/nonbili/Nora/issues)
