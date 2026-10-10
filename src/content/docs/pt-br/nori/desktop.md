---
title: Desktop
description: Usando o Nori no Linux, macOS e Windows.
sidebar:
  order: 4
---

O Nori oferece um aplicativo de desktop dedicado para Linux, macOS e Windows.

## O que a versão desktop oferece

A versão para computador leva o inicializador de favoritos do Nori para o seu desktop como um assistente rápido e adaptado ao teclado:

- **Inicializador autônomo**: Mantenha seus links organizados em uma janela própria sem poluir a barra de abas do navegador.
- **Arquitetura focada no local**: Construído com [Wails v3](https://v3.wails.io/) e Go, combinando o gerenciamento nativo de janelas do sistema operacional com uma interface web moderna.
- **Abertura no navegador do sistema**: Clicar em links abre as páginas diretamente no navegador padrão do seu computador.
- **Integração com sincronização**: Conecte sua conta do Nori Sync para compartilhar favoritos facilmente entre desktop, celular e extensão.

## Pacotes por plataforma

- **Linux**: Distribuído em pacotes portáteis AppImage e arquivos `.tar.gz` para `amd64`.
- **macOS**: Compatibilidade universal com Apple Silicon (`arm64`) e Intel (`amd64`), distribuído em instaladores `.dmg` e pacotes `.app.zip`.
- **Windows**: Distribuído em instaladores executáveis (`.exe`) e arquivos portáteis `.zip`.

## Requisitos de sistema para Linux

O AppImage para Linux utiliza o motor WebKit do sistema. Certifique-se de que o GTK 3 e o `webkit2gtk-4.1` estejam instalados no seu sistema:

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

## Versões

Para baixar os lançamentos mais recentes de desktop e consultar as notas de versão, visite a página de [Releases do Nori no GitHub](https://github.com/nonbili/Nori/releases).
