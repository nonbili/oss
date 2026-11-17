---
title: Töölaud
description: Nori kasutamine Linuxis, macOS-is ja Windowsis.
sidebar:
  order: 4
---

Nori pakub spetsiaalset töölauarakendust Linuxile, macOS-ile ja Windowsile.

## Mida töölaud lisab

Töölauaversioon toob Nori korrastatud järjehoidjate käivitaja sinu arvutisse kiire ja klaviatuurisõbraliku kaaslasena:

- **Eraldiseisev käivitaja**: hoia oma lingid korrastatuna sõltumatus aknas ilma brauseri vahekaartide riba risustamata.
- **Kohalik-esimesena arhitektuur**: ehitatud [Wails v3](https://v3.wails.io/) ja Go abil, ühendades natiivse operatsioonisüsteemi aknahalduse moodsate veebi kasutajaliidese komponentidega.
- **Süsteemibrauseris avamine**: linkidele klõpsamine avab need otse sinu vaikimisi töölauabrauseris.
- **Sünkroonimise integratsioon**: ühenda oma Nori Synci konto, et jagada järjehoidjaid sujuvalt töölaua, mobiili ja brauserilaienduse vahel.

## Platvormi paketid

- **Linux**: levitatakse teisaldatava AppImage'i ja `.tar.gz` pakettidena `amd64` jaoks.
- **macOS**: universaalne tugi Apple Siliconile (`arm64`) ja Intelile (`amd64`), levitatakse `.dmg` paigaldajate ja `.app.zip` kogumitena.
- **Windows**: levitatakse paigaldajatena (`.exe`) ja teisaldatavate `.zip` arhiividena.

## Linuxi süsteeminõuded

Linuxi AppImage kasutab süsteemi WebKiti mootorit. Veendu, et sinu süsteemi on paigaldatud GTK 3 ja `webkit2gtk-4.1`:

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

## Väljalasked

Uusimate töölauaversiooni allalaadimiste ja väljalaskemärkmete jaoks külasta [Nori GitHubi väljalasete](https://github.com/nonbili/Nori/releases) lehte.
