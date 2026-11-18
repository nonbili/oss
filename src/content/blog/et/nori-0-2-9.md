---
title: "Nori 0.2.9: Säilö sotsiaalmeedia postitusi, jaga pildikaarte, sorteeri oma nimekirju"
description: Hoia sotsiaalmeedia postitustest loetav koopia võrguühenduseta lugemiseks, muuda järjehoidjad pildikaartideks ja vali igale nimekirjale sobiv sortimisjärjestus.
date: 2026-11-18
product: nori
---

Järjehoidja hoiab alles aadressi. **Nori 0.2.9 mobiiliversiooniga** saad alles hoida ka sotsiaalmeedia postituse loetava koopia. See väljalase võimaldab jagada järjehoidjaid pildikaartidena ja määrata iga nimekirja sortimisviisi.

## Hoia postitusest koopia alles

Kui lisad toetatud sotsiaalmeedia postituse järjehoidjatesse, proovib Nori selle sisu automaatselt võrguühenduseta lugemiseks salvestada. Pärast salvestamist jääb koopia kättesaadavaks ka siis, kui sul pole ühendust või algne postitus kaob.

Toetatud teenuste hulka kuuluvad **X, Instagram, Threads, TikTok, Facebook, Bluesky, Reddit ja Mastodon**. Sõltuvalt sellest, mida teenus võimaldab, sisaldab salvestatud koopia autorit, postituse teksti, manustatud pilte ning tsiteeritud või seotud postitusi. Samuti saad kopeerida postituse teksti.

**Video ja heli salvestatakse eelvaate pisipiltidena, mitte võrguühenduseta esitatavate allalaadimistena.**

Mõned saidid nõuavad sisselogimist või blokeerivad automaatse toomise. Kui postitust ei salvestata, vali **Salvesta postitus lehelt**, logi sisse, kui sait seda palub, ja puuduta **Salvesta**, kui Nori postituse leiab.

Järjehoidja redaktoris näitab **Salvestatud postitus** sinu salvestatud koopia kuupäeva. Uuesti toomiseks kasuta nuppu **Värskenda**; kui sait tagastab vähem sisu, jätab Nori olemasoleva koopia alles.

Automaatne salvestamine on vaikimisi sisse lülitatud. Saad selle välja lülitada menüüs **Seaded → Üldine → Salvesta sotsiaalmeedia postitused võrguühenduseta**. Kui kasutad teenust **Nori Sync**, sünkroonitakse salvestatud postitused ja nende pildid kõigi sinu seadmete vahel.

<div class="screenshot-gallery" style="max-width: 24rem;">
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">Salvestatud Bluesky postitus jääb koos pildiga loetavaks ka siis, kui telefon on lennurežiimis.</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/nori-0-2-9/saved-social-post.png" alt="Nori kuvamas salvestatud Bluesky postitust autori, teksti ja manustatud pildiga, kui lennurežiim on sisse lülitatud" width="1080" height="2400" loading="lazy" />
    </div>
  </figure>
</div>

## Jaga enamat kui lihtsalt linki

Leidsid midagi, mida soovid edasi saata? Ava järjehoidja tegevuste menüü ja vali **Jaga pildina**. Nori muudab veebilehe järjehoidja või salvestatud sotsiaalmeedia postituse pildikaardiks, mida saad enne saatmist eelvaadata.

Vali **hele või tume** taust ning otsusta, kas kaasata järjehoidja **Märkus** ja **Sildid**, kui need on olemas. Märkused on algselt peidetud, nii et saad ise valida, kas jagada enda jaoks kirjutatut.

Puuduta **Jaga**, et saata kaart oma seadme jagamismenüü kaudu, või puuduta allalaadimisnuppu **Salvesta pilt**, et see oma fotokogusse salvestada.

<div class="screenshot-gallery" style="max-width: 24rem;">
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">Vaata kaardi eelvaadet, vali kaasatav sisu ning jaga või salvesta pilt.</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/nori-0-2-9/share-as-image.png" alt="Pildina jagamise eelvaade heleda ja tumeda teemaga, Märkuse ja Siltide juhtelementide, allalaadimisnupu ja Jagamise nupuga" width="1080" height="2400" loading="lazy" />
    </div>
  </figure>
</div>

## Anna igale nimekirjale oma järjekord

Hoia lugemisjärjekorda just sellises järjekorras, nagu soovid seda läbi töötada, pane uued leiud teises nimekirjas ettepoole ja sorteeri viitekogu tähestiku järgi.

Ava **Muuda nimekirja** või loo **Uus nimekiri** ja vali **Järjehoidjate järjekord**:

- **Käsitsi (lohistades järjestamine)** järjekorra jaoks, mille sead ise.
- **Uuemad ees** või **Vanemad ees**, et sortida järjehoidjate lisamise aja järgi.
- **Nimi A–Z** või **Nimi Z–A**, et sortida nime järgi.

Valik kehtib ainult sellele nimekirjale, nii et teised nimekirjad saavad säilitada oma järjekorra. Samas redaktoris saad nimekirja ka ümber nimetada.

<div class="screenshot-gallery" style="max-width: 24rem;">
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">Vali nimekirjale Reading queue järjehoidjate järjekord.</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/nori-0-2-9/list-bookmark-order.png" alt="Nimekirja Reading queue muutmine koos kõigi viie nähtava järjehoidjate järjekorra valikuga" width="1080" height="2400" loading="lazy" />
    </div>
  </figure>
</div>

See väljalase parandab ka kerimist iOS-i sahtlis **Kõik järjehoidjad** ja lahendab ühe sünkroonimisprobleemi. Üksikasjad leiad [täielikest väljalaskemärkmetest](https://github.com/nonbili/Nori/releases/tag/v0.2.9).

[Paigalda või uuenda Nori](/et/nori/install/) või tutvu [Nori dokumentatsiooniga](/et/nori/).
