---
title: Nori
description: Visão geral do Nori e do seu modelo de gestão e lançamento de marcadores.
sidebar:
  order: 1
---
<div class="product-overview-header">
  <img class="product-overview-header__logo" src="/app-logos/nori.png" alt="Logótipo do Nori" />
  <p class="product-overview-header__meta">Android, iOS, computador e extensão</p>
</div>

O Nori é um gestor e iniciador de marcadores de código aberto concebido para acesso diário rápido em dispositivos móveis, computadores e navegadores web.

Em vez de enterrar ligações em árvores profundas de pastas do navegador ou ecossistemas fechados, o Nori organiza os seus marcadores em listas limpas e focadas, com abertura instantânea, pesquisa, pré-visualizações em cartões completos e integração com a folha de partilha.

## Destaques

- Múltiplas listas de marcadores personalizadas
- Abertura instantânea no navegador predefinido do sistema ou separadores personalizados nativos
- Guardar URLs partilhados a partir de qualquer aplicação com seletor de listas e opções de gravação rápida
- Modo de iniciador compacto e modo de cartões de pré-visualização completos com imagens de capa dos sites
- Gaveta de pesquisa rápida com filtragem por palavra-chave e etiqueta
- Histórico de lançamentos recentemente utilizados e recentemente adicionados
- Importação e exportação através de marcadores HTML padrão, texto simples e cópias de segurança JSON completas
- Aspeto flexível: Claro, Escuro, AMOLED e cores de destaque personalizadas
- Extensão de navegador local-first para Chrome e Firefox
- Aplicação de computador multiplataforma para Linux, macOS e Windows
- Sincronização opcional entre vários dispositivos através do Nori Sync

## Plataformas

- **Android**: Disponível no Google Play e lançamentos diretos de APK no GitHub.
- **iOS**: Disponível na App Store para iPhone e iPad.
- **Computador**: Aplicações nativas autónomas para Linux (AppImage e tarball), macOS (Apple Silicon e Intel) e Windows.
- **Extensão de navegador**: Extensão Manifest V3 para Mozilla Firefox e Google Chrome.

## Primeira utilização

Uma configuração inicial sensata é:

1. Crie algumas listas para as suas categorias de ligações habituais (por exemplo, `Diário`, `Ferramentas`, `Leitura`, `Trabalho`).
2. Adicione as suas ligações principais ou importe marcadores existentes a partir da exportação HTML do seu navegador.
3. Teste abrir um marcador para confirmar que o seu navegador predefinido abre as ligações como esperado.
4. Experimente partilhar uma página web do seu navegador móvel para o Nori utilizando o menu de partilha do sistema.
5. Personalize as definições de aspeto, como o modo escuro ou a sua cor de destaque preferida.

## Como funciona

O Nori dissocia a sua coleção de marcadores de motores de navegador específicos:

- No Android, os marcadores abrem através de Custom Tabs via `expo-web-browser` ou passam diretamente para a sua aplicação de navegador predefinida.
- No iOS, os marcadores abrem através da folha nativa do navegador ou do navegador predefinido do sistema.
- No computador e na extensão, os marcadores abrem diretamente nos separadores ativos do seu navegador.

Esta abordagem garante que navega sempre com os seus bloqueadores de anúncios, sessões iniciadas e perfis de navegador preferidos intactos, mantendo todas as suas ligações organizadas num iniciador rápido e pesquisável.

## Mais ligações

Para código-fonte, lançamentos e acompanhamento de problemas, utilize o repositório no GitHub:

- [nonbili/Nori](https://github.com/nonbili/Nori)

Continue com [Instalar](/pt/nori/install/) para emblemas das lojas, APKs, transferências para computador e pacotes da extensão de navegador.
