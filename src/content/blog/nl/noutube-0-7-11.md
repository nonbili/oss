---
title: "NouTube 0.7.11 brengt een aanpasbare Android-werkbalk en videodownloads op iOS"
description: Zet je favoriete acties op de Android-werkbalk, veeg voor volledig scherm, verberg YouTube-reacties en sla video's op op iPhone en iPad.
date: 2026-11-24
product: noutube
---

Met NouTube 0.7.11 kun je acties zoals **Delen** en **URL openen** direct op de Android-werkbalk zetten. Op iPhone en iPad kun je nu compatibele video's downloaden via **Tools**, en video's starten sneller. De mobiele update voegt ook veegbewegingen voor volledig scherm toe en een instelling om YouTube-reacties te verbergen.

## Zet je meestgebruikte acties op de Android-werkbalk

Open **Instellingen → Weergave → Werkbalkknoppen**. Kies met de schakelaars welke knoppen verschijnen en sleep vervolgens aan de grepen om de volgorde te bepalen. Zet bijvoorbeeld **Delen** en **URL openen** aan en sleep ze bovenaan de lijst, zodat je beide acties altijd bij de hand hebt terwijl je een video kijkt.

Je kunt ook **Tools**, **Desktopsite**, **Instellingen** of de schakelaar **YouTube / YouTube Music** aan de werkbalk toevoegen. In dezelfde lijst kun je bestaande knoppen zoals **Bibliotheek**, **Kanalenfeed** en **Geschiedenis** anders ordenen.

<div class="screenshot-gallery">
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">Zet Delen en URL openen aan en sleep ze bovenaan de lijst.</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/noutube-0-7-11/android-toolbar-settings.webp" alt="Android-weergave-instellingen met Delen en URL openen ingeschakeld in de eerste twee rijen en sleepgrepen aan de rechterkant" width="1080" height="2220" loading="lazy" />
    </div>
  </figure>
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">Delen en URL openen zijn nu de eerste twee knoppen op de werkbalk van de afspeelpagina.</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/noutube-0-7-11/android-toolbar-result.webp" alt="NouTube-werkbalk boven de afspeelpagina van Big Buck Bunny, met het pictogram Delen en het linkpictogram URL openen helemaal links" width="1080" height="2220" loading="lazy" />
    </div>
  </figure>
</div>

## Video's downloaden op iPhone en iPad

Open bij een video die je mag opslaan **Tools** en tik op **Video downloaden**. NouTube downloadt een compatibele MP4 als die beschikbaar is. Tik na het downloaden op **Exporteren** om het bestand op te slaan of te delen.

<div class="screenshot-gallery">
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">Tools vult de URL van de huidige video in.</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/noutube-0-7-11/ios-download-tools.webp" alt="Downloadpaneel op iPhone met de ingevulde video-URL, een opmerking over de beschikbaarheid van MP4 en de knop Video downloaden" width="1206" height="2622" loading="lazy" />
    </div>
  </figure>
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">Exporteren verschijnt in de downloadgeschiedenis zodra het bestand klaar is.</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/noutube-0-7-11/ios-download-export.webp" alt="Item in de downloadgeschiedenis op iPhone met een groen vinkje, de status Download voltooid en een knop Exporteren" width="1206" height="2622" loading="lazy" />
    </div>
  </figure>
</div>

*Big Buck Bunny* © 2008 Blender Foundation / [www.bigbuckbunny.org](https://peach.blender.org/about/). [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/).

De snellere videostart die in 0.7.10 op Android werd geïntroduceerd, geldt nu ook voor iOS. Op iPad blijft de afspeelbediening van YouTube beschikbaar in volledig scherm.

## Veeg voor volledig scherm of verberg reacties

Veeg op mobiel omhoog over de YouTube-speler om naar volledig scherm te gaan en omlaag om terug te keren naar de afspeelpagina. Begin de veegbeweging op de video zelf, zodat je de afspeelbediening en de voortgangsbalk gewoon kunt blijven gebruiken.

Om het reactiegedeelte van YouTube-afspeelpagina's te verwijderen, open je **Instellingen → Voorkeuren → Afleidingsvrij** en zet je **Reacties verbergen** aan.

<div class="screenshot-gallery" style="max-width: 24rem;">
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">Reacties verbergen staat onderaan de Afleidingsvrij-instellingen.</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/noutube-0-7-11/hide-comments-setting.webp" alt="Android-scherm Voorkeuren met de schakelaar Reacties verbergen ingeschakeld onderaan het gedeelte Afleidingsvrij" width="1080" height="2220" loading="lazy" />
    </div>
  </figure>
</div>

## Overige verbeteringen

- Opus-audiodownloads gebruiken nu de extensie `.opus`. NouTube verhelpt een opstartprobleem van yt-dlp in Android-releasebuilds en gaat betrouwbaarder om met mislukte downloads en afspeelfouten.
- De desktopafspeelpagina van YouTube past nu op smalle Android-schermen. Feedvoorbeelden komen op Android niet meer in de kijkgeschiedenis terecht, en **Volgende** in de systeembediening van YouTube Music laat de eigen wachtrij van NouTube voortaan met rust.
- Deze release werkt de Italiaanse, Poolse, Braziliaans-Portugese, Russische en Oekraïense vertalingen bij.

[Bekijk de release op GitHub](https://github.com/nonbili/NouTube/releases/tag/v0.7.11).

## NouTube downloaden

[Installeer of update NouTube](/nl/noutube/install/), of blader door de [NouTube-documentatie](/nl/noutube/).
