---
title: Nori
description: Pārskats par Nori un tās grāmatzīmju pārvaldības un palaidēja modeli.
sidebar:
  order: 1
---
<div class="product-overview-header">
  <img class="product-overview-header__logo" src="/app-logos/nori.png" alt="Nori logotips" />
  <p class="product-overview-header__meta">Android, iOS, dators un paplašinājums</p>
</div>

Nori ir atvērtā pirmkoda grāmatzīmju pārvaldnieks un palaidējs, kas izstrādāts ātrai ikdienas piekļuvei mobilajās ierīcēs, galddatoros un tīmekļa pārlūkos.

Tā vietā, lai aprakstu saites dziļos pārlūka mapju kokos vai slēgtās ekosistēmās, Nori sakārto jūsu grāmatzīmes tīros, mērķtiecīgos sarakstos ar tūlītēju palaišanu, meklēšanu, bagātīgiem kartīšu priekšskatījumiem un kopīgošanas izvēlnes integrāciju.

## Galvenās iezīmes

- Vairāki pielāgoti grāmatzīmju saraksti
- Tūlītēja palaišana sistēmas noklusējuma pārlūkā vai natīvās pielāgotās cilnēs
- Kopīgotu URL saglabāšana no jebkuras lietotnes ar saraksta atlasītāju un ātrās saglabāšanas opcijām
- Kompaktais palaidēja režīms un bagātīgais kartīšu priekšskatījuma režīms ar vietņu vāka attēliem
- Ātrā meklēšanas atvilktne ar atslēgvārdu un birku filtrēšanu
- Nesen izmantoto un nesen pievienoto palaišanas vēsture
- Importēšana un eksportēšana, izmantojot standarta HTML grāmatzīmes, vienkāršu tekstu un pilnus JSON dublējumus
- Elastīgs izskats: Gaišais, Tumšais, AMOLED un pielāgotas akcenta krāsas
- Lokāli prioritārs pārlūka paplašinājums pārlūkiem Chrome un Firefox
- Vairākplatformu datora lietotne operētājsistēmām Linux, macOS un Windows
- Izvēles vairāku ierīču sinhronizācija, izmantojot Nori Sync

## Platformas

- **Android**: pieejama pakalpojumā Google Play un tiešos GitHub APK laidienos.
- **iOS**: pieejama veikalā App Store ierīcēm iPhone un iPad.
- **Dators**: atsevišķas natīvās lietotnes operētājsistēmām Linux (AppImage un tarball), macOS (Apple Silicon un Intel) un Windows.
- **Pārlūka paplašinājums**: Manifest V3 paplašinājums pārlūkiem Mozilla Firefox un Google Chrome.

## Pirmā palaišana

Saprātīga sākotnējā iestatīšana ir šāda:

1. Izveidojiet dažus sarakstus savām biežākajām saišu kategorijām (piemēram, `Ikdienai`, `Rīki`, `Lasīšanai`, `Darbs`).
2. Pievienojiet savas galvenās biežāk izmantotās saites vai importējiet esošās grāmatzīmes no pārlūka HTML eksporta.
3. Pārbaudiet grāmatzīmes palaišanu, lai pārliecinātos, ka noklusējuma pārlūks atver saites, kā paredzēts.
4. Mēģiniet kopīgot tīmekļa lapu no mobilā pārlūka uz Nori, izmantojot sistēmas kopīgošanas izvēlni.
5. Pielāgojiet izskata iestatījumus, piemēram, tumšo režīmu vai vēlamo akcenta krāsu.

## Kā tas darbojas

Nori atdala jūsu grāmatzīmju kolekciju no konkrētiem pārlūka dzinējiem:

- Operētājsistēmā Android grāmatzīmes atveras, izmantojot Custom Tabs ar `expo-web-browser`, vai tiek nodotas tieši jūsu noklusējuma pārlūka lietotnei.
- Operētājsistēmā iOS grāmatzīmes atveras, izmantojot natīvo pārlūka lapu vai sistēmas noklusējuma pārlūku.
- Datorā un paplašinājumā grāmatzīmes atveras tieši jūsu aktīvajās pārlūka cilnēs.

Šī pieeja nodrošina, ka vienmēr pārlūkojat ar neskartiem iecienītajiem reklāmu bloķētājiem, pierakstīšanās sesijām un pārlūka profiliem, vienlaikus saglabājot visas saites sakārtotas vienā ātrā, meklējamā palaidējā.

## Vairāk saišu

Pirmkodam, laidieniem un problēmu izsekošanai izmantojiet GitHub repozitoriju:

- [nonbili/Nori](https://github.com/nonbili/Nori)

Turpiniet ar [Instalēšanu](/lv/nori/install/), lai skatītu veikalu nozīmītes, APK, datora lejupielādes un pārlūka paplašinājuma pakotnes.
