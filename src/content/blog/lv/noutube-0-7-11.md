---
title: "NouTube 0.7.11 ievieš pielāgojamu Android rīkjoslu un video lejupielādi iOS ierīcēs"
description: Novietojiet iecienītākās darbības Android rīkjoslā, pārvelciet, lai pārietu pilnekrāna režīmā, paslēpiet YouTube komentārus un saglabājiet video iPhone un iPad ierīcēs.
date: 2026-11-24
product: noutube
---

NouTube 0.7.11 ļauj novietot tādas darbības kā **Kopīgot** un **Atvērt URL** tieši Android rīkjoslā. iPhone un iPad ierīcēs tagad varat lejupielādēt saderīgus video no sadaļas **Rīki**, un video sāk atskaņoties ātrāk. Mobilais atjauninājums pievieno arī pārvilkšanas žestus pilnekrāna režīmam un iestatījumu YouTube komentāru paslēpšanai.

## Novietojiet biežāk lietotās darbības Android rīkjoslā

Atveriet **Iestatījumi → Izskats → Rīkjoslas pogas**. Ar slēdžiem izvēlieties, kuras pogas tiek rādītas, un pēc tam velciet turus, lai noteiktu to secību. Piemēram, ieslēdziet **Kopīgot** un **Atvērt URL** un aizvelciet tās uz saraksta augšu, lai abas darbības būtu pa rokai, skatoties video.

Rīkjoslai varat pievienot arī **Rīki**, **Datora versija**, **Iestatījumi** vai pārslēgu **YouTube / YouTube Music**. Tajā pašā sarakstā varat mainīt esošo pogu secību, piemēram, **Bibliotēka**, **Kanālu plūsma** un **Vēsture**.

<div class="screenshot-gallery">
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">Ieslēdziet Kopīgot un Atvērt URL un aizvelciet tās uz saraksta augšu.</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/noutube-0-7-11/android-toolbar-settings.webp" alt="Android izskata iestatījumi, kur pirmajās divās rindās ieslēgts Kopīgot un Atvērt URL, bet labajā pusē redzami vilkšanas turi" width="1080" height="2220" loading="lazy" />
    </div>
  </figure>
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">Kopīgot un Atvērt URL tagad ir pirmās divas pogas skatīšanās lapas rīkjoslā.</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/noutube-0-7-11/android-toolbar-result.webp" alt="NouTube rīkjosla virs Big Buck Bunny skatīšanās lapas ar kopīgošanas ikonu un Atvērt URL saites ikonu pašā kreisajā malā" width="1080" height="2220" loading="lazy" />
    </div>
  </figure>
</div>

## Lejupielādējiet video iPhone un iPad ierīcēs

Video, kuru jums ir atļauts saglabāt, atveriet **Rīki** un pieskarieties **Lejupielādēt video**. NouTube lejupielādē saderīgu MP4 failu, ja tāds ir pieejams. Kad lejupielāde ir pabeigta, pieskarieties **Eksportēt**, lai saglabātu vai kopīgotu failu.

<div class="screenshot-gallery">
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">Rīki automātiski aizpilda pašreizējā video URL.</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/noutube-0-7-11/ios-download-tools.webp" alt="iPhone lejupielādes panelis ar aizpildītu video URL, piezīmi par MP4 pieejamību un pogu Lejupielādēt video" width="1206" height="2622" loading="lazy" />
    </div>
  </figure>
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">Kad fails ir gatavs, lejupielāžu vēsturē parādās poga Eksportēt.</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/noutube-0-7-11/ios-download-export.webp" alt="iPhone lejupielāžu vēstures ieraksts ar zaļu ķeksīti, statusu Lejupielāde pabeigta un pogu Eksportēt" width="1206" height="2622" loading="lazy" />
    </div>
  </figure>
</div>

*Big Buck Bunny* © 2008 Blender Foundation / [www.bigbuckbunny.org](https://peach.blender.org/about/). [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/).

Ātrākā video palaišana, kas Android ierīcēs ieviesta versijā 0.7.10, tagad darbojas arī iOS. iPad ierīcēs YouTube atskaņošanas vadīklas paliek pieejamas pilnekrāna režīmā.

## Pārvelciet pilnekrāna režīmam vai paslēpiet komentārus

Mobilajās ierīcēs pārvelciet uz augšu YouTube atskaņotājā, lai pārietu pilnekrāna režīmā, un uz leju, lai atgrieztos skatīšanās lapā. Sāciet pārvilkšanu uz paša video, lai atskaņošanas vadīklas un progresa joslu joprojām varētu izmantot kā parasti.

Lai noņemtu komentāru sadaļu no YouTube skatīšanās lapām, atveriet **Iestatījumi → Preferences → Bez traucēkļiem** un ieslēdziet **Paslēpt komentārus**.

<div class="screenshot-gallery" style="max-width: 24rem;">
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">Paslēpt komentārus atrodas Bez traucēkļiem iestatījumu apakšā.</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/noutube-0-7-11/hide-comments-setting.webp" alt="Android preferenču ekrāns ar ieslēgtu slēdzi Paslēpt komentārus sadaļas Bez traucēkļiem apakšā" width="1080" height="2220" loading="lazy" />
    </div>
  </figure>
</div>

## Citi labojumi

- Opus audio lejupielādēm tagad tiek izmantots paplašinājums `.opus`. NouTube novērš yt-dlp palaišanas problēmu Android laidiena būvējumos un uzticamāk apstrādā lejupielādes un atskaņošanas kļūmes.
- YouTube datora skatīšanās lapa tagad ietilpst šauros Android ekrānos. Android ierīcēs plūsmas priekšskatījumi vairs nenonāk skatīšanās vēsturē, un **Nākamais** sistēmas YouTube Music vadīklās vairs neietekmē paša NouTube rindu.
- Šajā laidienā atjaunināti tulkojumi itāļu, poļu, Brazīlijas portugāļu, krievu un ukraiņu valodā.

[Skatīt laidienu GitHub](https://github.com/nonbili/NouTube/releases/tag/v0.7.11).

## Iegūstiet NouTube

[Instalējiet vai atjauniniet NouTube](/lv/noutube/install/) vai pārlūkojiet [NouTube dokumentāciju](/lv/noutube/).
