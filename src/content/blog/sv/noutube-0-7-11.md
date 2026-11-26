---
title: "NouTube 0.7.11 ger ett anpassningsbart Android-verktygsfält och videonedladdning på iOS"
description: Lägg dina favoritåtgärder i Android-verktygsfältet, svep för helskärm, dölj YouTube-kommentarer och spara videor på iPhone och iPad.
date: 2026-11-24
product: noutube
---

Med NouTube 0.7.11 kan du lägga åtgärder som **Dela** och **Öppna URL** direkt i Android-verktygsfältet. På iPhone och iPad kan du nu ladda ned kompatibla videor från **Verktyg**, och videor startar snabbare. Mobiluppdateringen lägger också till svepgester för helskärm och en inställning för att dölja YouTube-kommentarer.

## Lägg dina mest använda åtgärder i Android-verktygsfältet

Öppna **Inställningar → Utseende → Verktygsfältsknappar**. Välj med reglagen vilka knappar som ska visas och dra sedan i handtagen för att bestämma ordningen. Slå till exempel på **Dela** och **Öppna URL** och dra dem högst upp i listan, så har du båda åtgärderna nära till hands medan du tittar på en video.

Du kan också lägga till **Verktyg**, **Datorversion**, **Inställningar** eller växlaren **YouTube / YouTube Music** i verktygsfältet. I samma lista kan du ändra ordningen på befintliga knappar som **Bibliotek**, **Kanalflöde** och **Historik**.

![Utseendeinställningar på Android med Dela och Öppna URL påslagna på de två första raderna och draghandtag till höger](/blog/noutube-0-7-11/android-toolbar-settings.webp "Slå på Dela och Öppna URL och dra dem högst upp i listan.")
![NouTubes verktygsfält ovanför uppspelningssidan för Big Buck Bunny, med Dela-ikonen och länkikonen för Öppna URL längst till vänster](/blog/noutube-0-7-11/android-toolbar-result.webp "Dela och Öppna URL är nu de två första knapparna i verktygsfältet på uppspelningssidan.")

## Ladda ned videor på iPhone och iPad

För en video som du har tillåtelse att spara öppnar du **Verktyg** och trycker på **Ladda ned video**. NouTube laddar ned en kompatibel MP4 när en sådan finns. När nedladdningen är klar trycker du på **Exportera** för att spara eller dela filen.

![Nedladdningspanel på iPhone med videons URL ifylld, en notering om MP4-tillgänglighet och knappen Ladda ned video](/blog/noutube-0-7-11/ios-download-tools.webp "Verktyg fyller i den aktuella videons URL.")
![Post i nedladdningshistoriken på iPhone med en grön bock, statusen Nedladdning klar och en Exportera-knapp](/blog/noutube-0-7-11/ios-download-export.webp "Exportera visas i nedladdningshistoriken när filen är klar.")

*Big Buck Bunny* © 2008 Blender Foundation / [www.bigbuckbunny.org](https://peach.blender.org/about/). [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/).

Den snabbare videostarten som kom till Android i 0.7.10 gäller nu även iOS. På iPad är YouTubes uppspelningskontroller fortfarande tillgängliga i helskärm.

## Svep för helskärm eller dölj kommentarer

På mobilen sveper du uppåt på YouTube-spelaren för att gå till helskärm och nedåt för att återgå till uppspelningssidan. Börja svepet på själva videon så att du fortfarande kan använda uppspelningskontrollerna och förloppsfältet som vanligt.

För att ta bort kommentarsavsnittet från YouTubes uppspelningssidor öppnar du **Inställningar → Preferenser → Distraktionsfritt** och slår på **Dölj kommentarer**.

![Android-skärmen Preferenser där reglaget Dölj kommentarer är påslaget längst ned i avsnittet Distraktionsfritt](/blog/noutube-0-7-11/hide-comments-setting.webp "Dölj kommentarer finns längst ned i inställningarna för Distraktionsfritt.")

## Övriga korrigeringar

- Opus-ljudnedladdningar använder nu filändelsen `.opus`. NouTube åtgärdar ett startproblem för yt-dlp i Android-releaseversioner och hanterar misslyckade nedladdningar och uppspelningar mer tillförlitligt.
- YouTubes uppspelningssida för datorer passar nu på smala Android-skärmar. Förhandsvisningar i flödet hamnar inte längre i visningshistoriken på Android, och **Nästa** i systemets YouTube Music-kontroller lämnar NouTubes egen kö orörd.
- Den här versionen uppdaterar översättningarna till italienska, polska, brasiliansk portugisiska, ryska och ukrainska.

[Se versionen på GitHub](https://github.com/nonbili/NouTube/releases/tag/v0.7.11).

## Skaffa NouTube

[Installera eller uppdatera NouTube](/sv/noutube/install/), eller bläddra i [NouTubes dokumentation](/sv/noutube/).
