---
title: Extensão de navegador
description: Usando a extensão de navegador do Nori no Firefox e Chrome.
sidebar:
  order: 5
---

O Nori inclui uma extensão de navegador local (Local-First) para Mozilla Firefox e Google Chrome.

## Principais recursos

- **Experiência mobile espelhada**: O popup da extensão traz as mesmas listas, painel de busca, histórico, gerenciamento de listas e configurações do app móvel.
- **Salvar com um clique**: Salve instantaneamente a aba atual na lista que preferir com captura automática de título.
- **Inicializador rápido**: Busque e abra seus links salvos em novas abas diretamente da barra de ferramentas do seu navegador.
- **Armazenamento local**: Salva favoritos localmente no armazenamento de extensão do navegador, com suporte opcional ao Nori Sync.
- **Foco em privacidade**: Nenhuma atividade de navegação ou conteúdo de páginas é monitorado. O Nori recebe apenas os links que você decide salvar explicitamente.

## Instalando a extensão

Instale o Nori diretamente pelas lojas oficiais de extensões:

- [Firefox Add-ons](https://addons.mozilla.org/addon/nori/)
- [Chrome Web Store](https://chromewebstore.google.com/detail/nori/ojgmnocnegcbhlmfoackgoocnjbfejpg)

## Compilando a partir do código-fonte

A extensão é de código aberto e construída com [WXT](https://wxt.dev/) usando Manifest V3:

```bash
cd extension
bun install
bun run dev          # Modo de desenvolvimento no Chrome
bun run dev:firefox  # Modo de desenvolvimento no Firefox
bun run build:all    # Gerar pacotes zip de produção
```
