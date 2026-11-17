---
title: Extensão de navegador
description: Utilizar a extensão de navegador Nori no Firefox e no Chrome.
sidebar:
  order: 5
---

O Nori inclui uma extensão de navegador local-first para Mozilla Firefox e Google Chrome.

## Funcionalidades principais

- **Experiência móvel espelhada**: A janela pop-up da extensão disponibiliza as mesmas listas, gaveta de pesquisa, histórico, gestão de listas e definições que a aplicação móvel.
- **Marcação com um clique**: Guarde instantaneamente o separador atual na lista escolhida com obtenção automática do título.
- **Iniciador rápido**: Pesquise e abra as suas ligações guardadas em novos separadores diretamente a partir da barra de ferramentas do navegador.
- **Armazenamento local**: Guarda os marcadores localmente no armazenamento de extensões do seu navegador com suporte opcional do Nori Sync.
- **Focado na privacidade**: Nenhuma atividade de navegação ou conteúdo de páginas é rastreado. O Nori apenas recebe as ligações que guardar explicitamente.

## Instalar a extensão

Instale o Nori diretamente a partir das lojas oficiais de extensões:

- [Extras do Firefox](https://addons.mozilla.org/addon/nori/)
- [Chrome Web Store](https://chromewebstore.google.com/detail/nori/ojgmnocnegcbhlmfoackgoocnjbfejpg)

## Compilar a partir do código-fonte

A extensão é de código aberto e construída com [WXT](https://wxt.dev/) utilizando Manifest V3:

```bash
cd extension
bun install
bun run dev          # Modo de desenvolvimento para Chrome
bun run dev:firefox  # Modo de desenvolvimento para Firefox
bun run build:all    # Compilar pacotes zip de produção
```
