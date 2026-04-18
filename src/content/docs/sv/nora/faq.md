---
title: Vanliga frågor (FAQ)
description: Vanliga frågor om Nora hämtade från GitHub-ärenden.
sidebar:
  order: 9
---
Denna sida sammanfattar återkommande användarfrågor från det offentliga GitHub-ärendesystemet.

## Kan Nora öppna Instagram- eller Facebook-länkar direkt från andra appar?

Ja, det är tanken. Utvecklaren sa att du kan behöva:

- aktivera Androids `Öppna som standard`-beteende för Nora
- avinstallera eller inaktivera den officiella appen om den fortsätter att ta över samma länkar
- uppdatera till en nyare Nora-release om deep links öppnar appen men inte det begärda inlägget

Källa:

- [Ärende #51: Support opening links in Nora](https://github.com/nonbili/Nora/issues/51)

## Instagram går inte att öppna inuti Nora

Ett pågående öppet ärende visar att vissa användare fortfarande möts av en Instagram-felisida även efter att ha försökt ladda om, använda skrivbordsläge och rensa webview-data. Det betyder att det inte finns någon bekräftad lösning än. Om detta händer på din enhet:

- försök ladda om
- försök använda skrivbordsläge
- rensa Noras webview-data
- om det fortfarande misslyckas, kontrollera GitHub för uppdateringar eller lägg till dina enhetsuppgifter i ärendet

Källa:

- [Ärende #147: Issue when trying to open Instagram](https://github.com/nonbili/Nora/issues/147)

## Media fortsätter spelas efter att jag lämnat appen

Detta rapporterades för Instagram-ljud som fortsatte i bakgrunden utan användbara kontroller. Utvecklaren svarade att det skulle åtgärdas i nästa release, så det första du bör göra är att uppdatera Nora till den senaste versionen som finns tillgänglig i din butik eller releasekanal.

Källa:

- [Ärende #119: can you make it stop playing in background ? pls](https://github.com/nonbili/Nora/issues/119)

## Kan jag ladda ner bilder eller videor?

Ja, åtminstone en del av detta stöds redan:

- tryck länge på en bild för att visa nedladdningsmenyn
- nedladdning av Facebook- och Instagram Reels stöddes redan när ärendet diskuterades
- stöd för videonedladdning från X lades till efteråt

Källa:

- [Ärende #153: download](https://github.com/nonbili/Nora/issues/153)

## Varför misslyckas inloggning på X?

Diskussionen i ärendet tyder på att vanlig inloggning med e-post/lösenord förväntades fungera, medan Google-baserad inloggning i en webview behövde extra arbete. Utvecklaren sa senare att en `Inject cookie`-meny lades till i `v0.1.5` som en tillfällig lösning för drabbade användare.

Källa:

- [Ärende #1: Unable to sign in to X](https://github.com/nonbili/Nora/issues/1)

## Kan jag använda min webbläsares tillägg som uBlock Origin eller Dark Reader inuti Nora?

Inte på samma sätt som i en fullständig webbläsarprofil. I diskussionen om funktionsförfrågan hänvisade utvecklaren användare till Noras eget stöd för anpassad CSS för UI-ändringar istället för att lova stöd för inbyggda webbläsartillägg.

Källa:

- [Ärende #96: Open the socials in the webview provided by browser](https://github.com/nonbili/Nora/issues/96)

## Var ska jag rapportera buggar eller föreslå funktioner?

Använd GitHub-repot:

- [nonbili/Nora issues](https://github.com/nonbili/Nora/issues)
