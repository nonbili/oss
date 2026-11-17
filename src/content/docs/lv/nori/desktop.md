---
title: Dators
description: Nori lietošana operētājsistēmās Linux, macOS un Windows.
sidebar:
  order: 4
---

Nori piedāvā īpašu datora lietotni operētājsistēmām Linux, macOS un Windows.

## Ko pievieno datora versija

Datora versija pārnes Nori sakārtoto grāmatzīmju palaidēju uz jūsu datoru kā ātru, tastatūrai draudzīgu palīgu:

- **Atsevišķs palaidējs**: turiet savas saites sakārtotas neatkarīgā logā, neaizblīvējot pārlūka ciļņu joslas.
- **Lokāli prioritāra arhitektūra**: būvēta ar [Wails v3](https://v3.wails.io/) un Go, apvienojot natīvu OS logu pārvaldību ar modernām tīmekļa saskarnes komponentēm.
- **Palaišana sistēmas pārlūkā**: noklikšķinot uz saitēm, tās tiek atvērtas tieši jūsu noklusējuma datora pārlūkā.
- **Sinhronizācijas integrācija**: pievienojiet savu Nori Sync kontu, lai nemanāmi koplietotu grāmatzīmes starp datoru, mobilo ierīci un pārlūka paplašinājumu.

## Platformas pakotnes

- **Linux**: izplatīta kā pārnēsājama AppImage un `.tar.gz` pakotnes `amd64` arhitektūrai.
- **macOS**: universāls atbalsts Apple Silicon (`arm64`) un Intel (`amd64`), izplatīta kā `.dmg` instalētāji un `.app.zip` pakotnes.
- **Windows**: izplatīta kā iestatīšanas instalētāji (`.exe`) un pārnēsājami `.zip` arhīvi.

## Linux sistēmas prasības

Linux AppImage izmanto sistēmas WebKit dzinēju. Pārliecinieties, ka jūsu sistēmā ir instalēti GTK 3 un `webkit2gtk-4.1`:

- **Debian / Ubuntu**:
  ```bash
  sudo apt install libwebkit2gtk-4.1-0 libgtk-3-0 libfuse2
  ```
- **Fedora**:
  ```bash
  sudo dnf install webkit2gtk4.1 gtk3
  ```
- **Arch Linux**:
  ```bash
  sudo pacman -S webkit2gtk-4.1 gtk3
  ```

## Laidieni

Jaunākās datora versijas lejupielādes un laidienu piezīmes skatiet [Nori GitHub laidienu](https://github.com/nonbili/Nori/releases) lapā.
