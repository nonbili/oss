---
title: Computador
description: Utilizar o Nori no Linux, macOS e Windows.
sidebar:
  order: 4
---

O Nori disponibiliza uma aplicação dedicada para computador no Linux, macOS e Windows.

## O que a versão para computador adiciona

A versão para computador traz o iniciador de marcadores organizado do Nori para o seu computador como um companheiro rápido e amigável para o teclado:

- **Iniciador autónomo**: Mantenha as suas ligações organizadas numa janela independente sem encher as barras de separadores do navegador.
- **Arquitetura local-first**: Construído com [Wails v3](https://v3.wails.io/) e Go, combinando janelas nativas do sistema operativo com componentes de interface web modernos.
- **Abertura no navegador do sistema**: Clicar nas ligações abre-as diretamente no seu navegador predefinido para computador.
- **Integração de sincronização**: Ligue a sua conta Nori Sync para partilhar marcadores perfeitamente entre o computador, o telemóvel e a extensão de navegador.

## Pacotes da plataforma

- **Linux**: Distribuído como AppImage portátil e pacotes `.tar.gz` para `amd64`.
- **macOS**: Suporte universal para Apple Silicon (`arm64`) e Intel (`amd64`), distribuído como instaladores `.dmg` e pacotes `.app.zip`.
- **Windows**: Distribuído como instaladores (`.exe`) e arquivos `.zip` portáteis.

## Requisitos de sistema no Linux

O AppImage para Linux utiliza o motor WebKit do sistema. Certifique-se de que o seu sistema tem o GTK 3 e o `webkit2gtk-4.1` instalados:

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

## Lançamentos

Para as transferências e notas de lançamento mais recentes para computador, visite a página [Lançamentos do Nori no GitHub](https://github.com/nonbili/Nori/releases).
