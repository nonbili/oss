---
title: Extensão de navegador
description: Utilizar a extensão de navegador NouTube no Firefox e no Chrome.
sidebar:
  order: 6
---

O NouTube inclui uma extensão de navegador para Mozilla Firefox e Google Chrome que traz a navegação mais limpa, reprodução melhorada, feeds personalizados, marcadores e ferramentas de personalização do NouTube diretamente para o seu navegador de computador.

## Instalar a extensão

Instale o NouTube diretamente a partir das lojas oficiais de extensões:

- [Extras do Firefox](https://addons.mozilla.org/addon/noutube/)
- [Chrome Web Store](https://chromewebstore.google.com/detail/noutube/cpmippodfdmialcoaegbbmhpdamodoif)

## Compilar a partir do código-fonte

A extensão é de código aberto, partilha código com a aplicação NouTube e é construída com [WXT](https://wxt.dev/) utilizando Manifest V3:

```bash
bun link
bun install
cd extension
bun run dev          # Modo de desenvolvimento para Chrome
bun run dev:firefox  # Modo de desenvolvimento para Firefox
bun run build:all    # Compilar pacotes de produção
```
