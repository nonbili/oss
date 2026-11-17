---
title: Extensão de navegador
description: Usando a extensão de navegador do NouTube no Firefox e Chrome.
sidebar:
  order: 6
---

O NouTube inclui uma extensão de navegador para Mozilla Firefox e Google Chrome que leva a navegação mais limpa, a reprodução aprimorada, os feeds personalizados, os favoritos e as ferramentas de customização do NouTube diretamente para o seu navegador no desktop.

## Instalando a extensão

Instale o NouTube diretamente pelas lojas oficiais de extensões:

- [Firefox Add-ons](https://addons.mozilla.org/addon/noutube/)
- [Chrome Web Store](https://chromewebstore.google.com/detail/noutube/cpmippodfdmialcoaegbbmhpdamodoif)

## Compilando a partir do código-fonte

A extensão é de código aberto, compartilha código com o aplicativo NouTube e é construída com [WXT](https://wxt.dev/) usando Manifest V3:

```bash
bun link
bun install
cd extension
bun run dev          # Modo de desenvolvimento no Chrome
bun run dev:firefox  # Modo de desenvolvimento no Firefox
bun run build:all    # Gerar pacotes de produção
```
