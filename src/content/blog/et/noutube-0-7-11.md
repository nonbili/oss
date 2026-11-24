---
title: "NouTube 0.7.11 toob kohandatava Androidi tööriistariba ja videote allalaadimise iOS-is"
description: Pane oma lemmiktoimingud Androidi tööriistaribale, pühi täisekraanile, peida YouTube'i kommentaarid ja salvesta videoid iPhone'is ja iPadis.
date: 2026-11-24
product: noutube
---

NouTube 0.7.11 võimaldab panna toiminguid, nagu **Jaga** ja **Ava URL**, otse Androidi tööriistaribale. iPhone'is ja iPadis saad nüüd ühilduvaid videoid alla laadida menüüst **Tööriistad** ning videod käivituvad kiiremini. Mobiiliuuendus lisab ka täisekraani pühkimisžestid ja seade YouTube'i kommentaaride peitmiseks.

## Pane enimkasutatud toimingud Androidi tööriistaribale

Ava **Seaded → Välimus → Tööriistariba nupud**. Vali lülititega, millised nupud kuvatakse, ja lohista seejärel pidemeid, et määrata nende järjekord. Näiteks lülita sisse **Jaga** ja **Ava URL** ning lohista need loendi algusesse, et mõlemad toimingud oleksid video vaatamise ajal käepärast.

Tööriistaribale saad lisada ka **Tööriistad**, **Arvutisaidi**, **Seaded** või lüliti **YouTube / YouTube Music**. Samas loendis saad ümber järjestada olemasolevaid nuppe, nagu **Kogu**, **Kanalite voog** ja **Ajalugu**.

<div class="screenshot-gallery">
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">Lülita sisse Jaga ja Ava URL ning lohista need loendi algusesse.</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/noutube-0-7-11/android-toolbar-settings.webp" alt="Androidi välimuse seaded, kus Jaga ja Ava URL on kahes esimeses reas sisse lülitatud ja paremal on lohistamispidemed" width="1080" height="2220" loading="lazy" />
    </div>
  </figure>
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">Jaga ja Ava URL on nüüd vaatamislehe tööriistariba kaks esimest nuppu.</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/noutube-0-7-11/android-toolbar-result.webp" alt="NouTube'i tööriistariba Big Buck Bunny vaatamislehe kohal, vasakus servas Jaga ikoon ja Ava URL lingiikoon" width="1080" height="2220" loading="lazy" />
    </div>
  </figure>
</div>

## Laadi videoid alla iPhone'is ja iPadis

Video puhul, mida sul on luba salvestada, ava **Tööriistad** ja puuduta **Laadi video alla**. NouTube laadib alla ühilduva MP4-faili, kui see on saadaval. Kui allalaadimine on lõppenud, puuduta **Ekspordi**, et fail salvestada või jagada.

<div class="screenshot-gallery">
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">Tööriistad täidavad praeguse video URL-i automaatselt.</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/noutube-0-7-11/ios-download-tools.webp" alt="iPhone'i allalaadimispaneel täidetud video URL-i, MP4 saadavuse märkuse ja nupuga Laadi video alla" width="1206" height="2622" loading="lazy" />
    </div>
  </figure>
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">Kui fail on valmis, ilmub allalaadimiste ajalukku nupp Ekspordi.</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/noutube-0-7-11/ios-download-export.webp" alt="iPhone'i allalaadimiste ajaloo kirje rohelise linnukese, olekuga Allalaadimine lõpetatud ja nupuga Ekspordi" width="1206" height="2622" loading="lazy" />
    </div>
  </figure>
</div>

*Big Buck Bunny* © 2008 Blender Foundation / [www.bigbuckbunny.org](https://peach.blender.org/about/). [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/).

Kiirem video käivitumine, mis tuli Androidile versioonis 0.7.10, kehtib nüüd ka iOS-is. iPadis jäävad YouTube'i taasesituse juhtnupud täisekraanil kättesaadavaks.

## Pühi täisekraanile või peida kommentaarid

Mobiilis pühi YouTube'i pleieril üles, et minna täisekraanile, ja alla, et naasta vaatamislehele. Alusta pühkimist video enda pealt, et saaksid taasesituse juhtnuppe ja edenemisriba endiselt tavapäraselt kasutada.

Kommentaaride jaotise eemaldamiseks YouTube'i vaatamislehtedelt ava **Seaded → Eelistused → Segajateta** ja lülita sisse **Peida kommentaarid**.

<div class="screenshot-gallery" style="max-width: 24rem;">
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">Peida kommentaarid asub Segajateta seadete allosas.</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/noutube-0-7-11/hide-comments-setting.webp" alt="Androidi eelistuste kuva, kus lüliti Peida kommentaarid on Segajateta jaotise allosas sisse lülitatud" width="1080" height="2220" loading="lazy" />
    </div>
  </figure>
</div>

## Muud parandused

- Opus-heli allalaadimised kasutavad nüüd laiendit `.opus`. NouTube parandab yt-dlp käivitusprobleemi Androidi väljalaskeversioonides ning käsitleb allalaadimis- ja taasesitustõrkeid usaldusväärsemalt.
- YouTube'i arvuti vaatamisleht mahub nüüd kitsastele Androidi ekraanidele. Androidis ei jõua voo eelvaated enam vaatamisajalukku ning süsteemi YouTube Musicu juhtnuppude **Järgmine** ei muuda enam NouTube'i enda järjekorda.
- See väljalase uuendab itaalia, poola, Brasiilia portugali, vene ja ukraina keele tõlkeid.

[Vaata väljalaset GitHubis](https://github.com/nonbili/NouTube/releases/tag/v0.7.11).

## Hangi NouTube

[Paigalda või uuenda NouTube](/et/noutube/install/) või sirvi [NouTube'i dokumentatsiooni](/et/noutube/).
