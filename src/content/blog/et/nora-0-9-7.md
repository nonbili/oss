---
title: "Nora 0.9.7: vali oma allalaadimiste kaust ja kohanda menüüd"
description: Vali Androidis allalaadimiste sihtkoht, peida kolme punktiga menüüst harva kasutatavad toimingud ning saa parandused WhatsApp Webi, Facebook Marketplace'i ja vahekaartidel liikumise jaoks.
date: 2026-11-19
product: nora
---

**Mobiilse Nora 0.9.7** abil saad suunata Androidi allalaadimised enda valitud kausta ja jätta brauseri kolme punktiga menüüsse ainult need toimingud, mida sa tegelikult kasutad. See väljalase avab ka WhatsApp Webi ja Facebook Marketplace'i automaatselt töölauarežiimis.

## Vali, kuhu allalaadimised salvestatakse

Ava Androidis **Seaded → Eelistused → Allalaadimised → Salvesta allalaadimised asukohta**, et määrata, kuhu brauseri allalaadimised salvestatakse.

- **Allalaadimised** kasutab Androidi tavapärast Allalaadimiste kausta.
- **Küsi iga kord** laseb sul iga allalaadimise jaoks sihtkoha valida.
- **Vali kaust…** salvestab tulevased allalaadimised sinu valitud kausta.

Kui valid kausta, kasutab Nora seda Android 10 ja uuemates versioonides ka voost salvestatud meedia jaoks. See väljalase parandab ka allalaadimised `data:`-linkidelt, mida mõned saidid kasutavad brauseris loodud failide jaoks.

<div class="screenshot-gallery" style="max-width: 24rem;">
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">Nora Downloads on valitud tulevaste allalaadimiste sihtkohaks.</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/nora-0-9-7/download-destination.png" alt="Androidi allalaadimiste seaded, kus on valitud Nora Downloads ning nähtavad valikud Allalaadimised, Küsi iga kord ja Vali kaust" width="1080" height="2220" loading="lazy" />
    </div>
  </figure>
</div>

## Kohanda kolme punktiga menüüd

Ava **Seaded → Välimus → Tööriistariba → Kohanda kolme punktiga menüüd** ja lülita välja toimingud, mida sa harva kasutad. Näiteks jäta alles **Otsi lehelt** ja **Jaga** ning peida **Töölauasait**, kui sa paigutust harva vahetad. Alles jäetud toimingud ilmuvad siis, kui need on praegusel vahekaardil saadaval.

**Seaded** jääb menüüsse alles ja **Taasta menüü vaikesätted** tühistab sinu muudatused ühe puudutusega.

<div class="screenshot-gallery">
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">Jäta „Otsi lehelt“ sisselülitatuks ja lülita „Töölauasait“ välja.</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/nora-0-9-7/customize-three-dot-menu.png" alt="Laiendatud kolme punktiga menüü kohandamise seaded, kus Otsi lehelt on sees ja Töölauasait väljas" width="1080" height="2220" loading="lazy" />
    </div>
  </figure>
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">Brauseri menüü jätab alles valikud Otsi lehelt, Jaga ja Seaded.</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/nora-0-9-7/customized-three-dot-menu.png" alt="Kohandatud brauserimenüü, kus on nähtavad Otsi lehelt, Jaga ja Seaded ning Töölauasait on peidetud" width="1080" height="2220" loading="lazy" />
    </div>
  </figure>
</div>

## WhatsApp Web ja Facebook Marketplace avanevad töölauarežiimis

Rakenduses **WhatsApp Web** saab nüüd ekraaniklaviatuuri avada ilma valijat sulgemata. **Facebook Marketplace** kasutab töölauasaiti, et saaksid kuulutuse juurest müüjatele sõnumi saata.

## Sirvimise ja voo parandused

- Facebooki reklaamiblokeerija püüab nüüd sponsoreeritud postitused kinni ka siis, kui nende sildid ilmuvad hilinemisega. Facebooki reaktsiooninupu pikk vajutus hoiab brauseri kontekstimenüü eest ära.
- Redditi mängufilter jätab tavalised postitused nähtavaks.
- Vahekaartide vahetaja avaneb nii, et sinu aktiivne vahekaart on nähtaval. Uuel vahekaardil avaneb sisestatud aadress juba esimesel **Mine** puudutusel ning saabuva lingi avamine jätab su teised vahekaardid alles.
- Tõmba värskendamiseks ei sega enam, kui teed meediavaaturis žeste.

Täieliku muudatuste loendi leiad [väljalaskemärkmetest GitHubis](https://github.com/nonbili/Nora/releases/tag/v0.9.7).

## Hangi Nora

[Paigalda või uuenda Nora](/et/nora/install/) või tutvu [Nora dokumentatsiooniga](/et/nora/), et rohkem teada saada.
