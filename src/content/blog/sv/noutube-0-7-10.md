---
title: "NouTube 0.7.10: Snabbare videostart, anpassade nedladdningsmappar och community-inlägg"
description: Vänta kortare tid på att videor ska starta, välj var nedladdningar sparas på Android och få med community-inlägg från sparade kanaler i ditt flöde.
date: 2026-11-16
product: noutube
---

**NouTube 0.7.10 för Android** minskar väntetiden innan en video börjar spelas upp. Det här inlägget tar även upp nyheterna från **0.7.9**: att välja en nedladdningsmapp på Android och att läsa community-inlägg från dina sparade kanaler i flödesläsaren.

## Mindre väntan före uppspelning

NouTube bearbetar nu svar från videosidan allt eftersom de kommer in, så uppspelningen kan börja utan att vänta på hela svaret. Med **annonsblockering aktiverad** begär appen dessutom uppspelning utan pre-roll-annonser, vilket tar bort ännu en orsak till startfördröjning.

Relaterade förbättringar på **dator** gör att videosidan börjar laddas snabbare där också. Det finns ingen ny inställning som behöver aktiveras för dessa ändringar.

## Välj en nedladdningsmapp på Android

Vill du spara nedladdade videor i en särskild mapp? På **Android** kan du nu välja var de sparas.

Tryck på **Bläddra** under **Mapp** i nedladdningsdialogen och välj sedan en mapp i Androids mappväljare. För att återgå till standardplatsen trycker du på **Använd mappen Hämtade filer**.

![NouTubes nedladdningsdialog på Android som visar Download/NouTube som vald mapp, Bläddra och Använd mappen Hämtade filer](/blog/noutube-0-7-10/download-folder.webp "Spara videor i en särskild mapp eller byt tillbaka till Hämtade filer.")

## Community-inlägg i flödesläsaren

Dina sparade kanaler kan dela uppdateringar mellan videoöverföringar. **Kanalflödet** kan nu inkludera deras community-inlägg tillsammans med videor, så att du kan läsa båda på samma ställe.

För att testa, öppna **Inställningar → Utseende** och slå på **Community-inlägg i flödet**, precis under **Kanalflöde**. Det är **avstängt som standard**: att ta med inlägg innebär att fliken Inlägg för varje sparad kanal kontrolleras, vilket förbrukar mer data när flödet uppdateras.

![NouTubes Utseende-inställningar på Android med Kanalflöde och Community-inlägg i flödet aktiverade](/blog/noutube-0-7-10/community-posts-setting.webp "Aktivera community-inlägg i inställningarna för Utseende.")
![NouTubes flöde som visar community-inlägg från Veritasium med text och en bild tillsammans med uppladdade videor](/blog/noutube-0-7-10/community-post-in-feed.webp "Community-inlägg visas tillsammans med videor från dina sparade kanaler.")

## Mindre fixar

Uppdateringarna gör också några vardagliga interaktioner smidigare:

- **Liggande layout på Android:** Appvyer och översättningskort håller sig fria från systemets navigeringsfält.
- **Länkmenyer på Android:** Långtrycksmenyer för videolänkar visar rätt videotitlar och åtgärdsikoner.
- **Bokmärken på dator:** Att stjärnmarkera en video från dess miniatyrbild sparar rätt titel.

Översättningar har också uppdaterats för polska, franska, galiciska, italienska, portugisiska (Brasilien) och ryska.

Se [versionskommentarerna på GitHub](https://github.com/nonbili/NouTube/releases/tag/v0.7.10) för hela listan över ändringar.

## Hämta NouTube

[Installera eller uppdatera NouTube](/sv/noutube/install/), eller utforska [NouTube-dokumentationen](/sv/noutube/) för att lära dig mer.
