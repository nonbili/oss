---
title: Nori
description: Visão geral do Nori e de seu modelo de gerenciamento e inicialização de favoritos.
sidebar:
  order: 1
---
<div class="product-overview-header">
  <img class="product-overview-header__logo" src="/app-logos/nori.png" alt="Logo do Nori" />
  <p class="product-overview-header__meta">Android, iOS, desktop e extensão</p>
</div>

O Nori é um gerenciador e inicializador de favoritos de código aberto projetado para acesso rápido no dia a dia em dispositivos móveis, computadores e navegadores web.

Em vez de esconder seus links em estruturas profundas de pastas do navegador ou em ecossistemas fechados, o Nori organiza seus favoritos em listas limpas e focadas, com inicialização instantânea, busca, cartões visuais de prévia e integração com o menu de compartilhamento do sistema.

## Destaques

- Múltiplas listas personalizadas de favoritos
- Abertura instantânea no navegador padrão do sistema ou em Custom Tabs nativas
- Salva URLs compartilhadas de qualquer aplicativo com seletor de lista e opções de salvamento rápido
- Modo inicializador compacto e modo de prévia com cartões ricos contendo imagens de capa dos sites
- Painel de busca rápida com filtragem por palavras-chave e tags
- Histórico de itens usados recentemente e adicionados recentemente
- Importação e exportação via arquivos HTML padrão de favoritos, texto simples e backups completos em JSON
- Aparência flexível: Claro, Escuro, AMOLED e cores de destaque personalizadas
- Extensão de navegador local (Local-First) para Chrome e Firefox
- Aplicativo de desktop multiplataforma para Linux, macOS e Windows
- Sincronização multidispositivo opcional via Nori Sync

## Plataformas

- **Android**: Disponível no Google Play e via download direto de APKs no GitHub.
- **iOS**: Disponível na App Store para iPhone e iPad.
- **Desktop**: Aplicativos nativos independentes para Linux (AppImage e tarball), macOS (Apple Silicon e Intel) e Windows.
- **Extensão de navegador**: Extensão Manifest V3 para Mozilla Firefox e Google Chrome.

## Primeira execução

Uma configuração inicial recomendada:

1. Crie algumas listas para suas categorias habituais (por exemplo: `Diário`, `Ferramentas`, `Leitura`, `Trabalho`).
2. Adicione seus links principais ou importe seus favoritos existentes a partir da exportação HTML do seu navegador.
3. Teste a abertura de um favorito para confirmar que seu navegador padrão abre os links como esperado.
4. Compartilhe uma página web do seu navegador móvel para o Nori usando o menu de compartilhamento do sistema.
5. Personalize as configurações de aparência, como o modo escuro ou sua cor de destaque favorita.

## Como funciona

O Nori desvincula sua coleção de favoritos dos motores de navegadores específicos:

- No Android, os favoritos abrem via Custom Tabs com `expo-web-browser` ou são repassados diretamente para o app de navegador padrão.
- No iOS, os favoritos abrem através da folha de navegador nativa (Safari View Controller) ou no navegador padrão do sistema.
- No desktop e na extensão, os favoritos abrem diretamente nas abas ativas do seu navegador.

Essa abordagem garante que você continue navegando com seus bloqueadores de anúncios, logins e perfis habituais, mantendo todos os seus links organizados em um inicializador rápido e fácil de pesquisar.

## Mais links

Para código-fonte, versões e rastreamento de problemas, use o repositório no GitHub:

- [nonbili/Nori](https://github.com/nonbili/Nori)

Continue com [Instalação](/pt-br/nori/install/) para ver selos das lojas, APKs, downloads para desktop e pacotes da extensão.
