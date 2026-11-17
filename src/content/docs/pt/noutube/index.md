---
title: NouTube
description: Visão geral do NouTube e daquilo para que foi construído.
sidebar:
  order: 1
---
<div class="product-overview-header">
  <img class="product-overview-header__logo" src="/app-logos/noutube.png" alt="Logótipo do NouTube" />
  <p class="product-overview-header__meta">Android, iOS, computador e extensão</p>
</div>

O NouTube é uma aplicação para Android, iOS, computador e extensão de navegador para o YouTube e YouTube Music.

Envolve as aplicações web móveis do YouTube e YouTube Music e adiciona comportamento nativo por cima, incluindo bloqueio de anúncios, ganchos de controlo de reprodução, suporte a transferências, feeds RSS e gestão de biblioteca amigável para uso offline.

## Destaques

- Sem anúncios
- Reprodução em segundo plano
- Suporte para vídeo e música numa única aplicação
- Gestão de biblioteca e histórico sem iniciar sessão
- Transferências de vídeo
- Leitor de feeds RSS para canais do YouTube
- Suporte para chat em direto
- Suporte para CSS personalizado

## Plataformas

- **Android**: Disponível no F-Droid e em lançamentos diretos de APK no GitHub.
- **iOS**: Disponível através da versão beta no TestFlight.
- **Computador**: Instaladores nativos para Linux, macOS e Windows.
- **Extensão de navegador**: Extensão Manifest V3 para Mozilla Firefox e Google Chrome.

A compilação para computador segue o mesmo modelo de produto que a aplicação móvel, com instaladores nativos para ecrãs maiores.

## Primeira utilização

Após instalar, uma configuração inicial prática tem este aspeto:

1. Abra o YouTube ou o YouTube Music dentro da aplicação.
2. Verifique o comportamento de reprodução, especialmente a reprodução em segundo plano se esse for o seu caso de utilização principal.
3. Configure as suas preferências de biblioteca, histórico, feeds e transferências.
4. Adicione CSS personalizado apenas após confirmar que a experiência predefinida funciona para si.

## Ligações suportadas

O NouTube está configurado para tratar estes anfitriões:

- `youtube.com`
- `www.youtube.com`
- `m.youtube.com`
- `music.youtube.com`
- `youtu.be`

Se o seu dispositivo perguntar qual a aplicação que deve abrir uma ligação suportada, escolha `NouTube`.

## Como funciona

O NouTube envolve as aplicações web em vez de reconstruir o YouTube de raiz. Na prática isso significa:

- Mantém o fluxo e a disposição oficiais do site
- A aplicação adiciona bloqueio de anúncios e ganchos de reprodução nativos
- A reprodução em segundo plano e a integração com o dispositivo funcionam melhor do que utilizar o site num navegador normal

## Mais ligações

Para lançamentos, acompanhamento de problemas e atualizações do projeto, utilize o repositório no GitHub:

- [nonbili/NouTube](https://github.com/nonbili/NouTube)

Continue com [Instalar](/pt/noutube/install/) para transferências e ligações de pacotes.
