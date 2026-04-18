---
title: Perguntas Frequentes (FAQ)
description: Perguntas comuns sobre o Nora retiradas de issues do GitHub.
---
Esta página resume perguntas recorrentes de usuários do rastreador público de problemas do GitHub.

## O Nora pode abrir links do Instagram ou Facebook diretamente de outros apps?

Sim, isso foi projetado para funcionar. O mantenedor disse que você pode precisar:

- ativar o comportamento `Abrir por padrão` do Android para o Nora
- desinstalar ou desativar o app oficial se ele continuar reivindicando os mesmos links
- atualizar para uma versão mais recente do Nora se os links diretos (deep links) abrirem o app, mas não a postagem solicitada

Fonte:

- [Issue #51: Support opening links in Nora](https://github.com/nonbili/Nora/issues/51)

## O Instagram falha ao abrir dentro do Nora

Um problema aberto atual mostra que alguns usuários ainda encontram uma página de erro do Instagram mesmo após tentar recarregar, modo site para desktop e limpar os dados do webview. Isso significa que ainda não há uma correção confirmada. Se isso acontecer no seu dispositivo:

- tente recarregar
- tente o modo site para desktop
- limpe os dados de webview do Nora
- se ainda falhar, verifique o GitHub em busca de atualizações ou adicione os detalhes do seu dispositivo ao problema

Fonte:

- [Issue #147: Issue when trying to open Instagram](https://github.com/nonbili/Nora/issues/147)

## A mídia continua tocando depois que eu saio do app

Isso foi relatado para o áudio do Instagram continuando em segundo plano sem controles úteis. O mantenedor respondeu que isso seria corrigido no próximo lançamento, então a primeira coisa a fazer é atualizar o Nora para a versão mais recente disponível na sua loja ou canal de lançamento.

Fonte:

- [Issue #119: can you make it stop playing in background ? pls](https://github.com/nonbili/Nora/issues/119)

## Posso baixar imagens ou vídeos?

Sim, pelo menos parte disso já é suportada:

- pressione e segure uma imagem para mostrar o menu de download
- os downloads de Reels do Facebook e Instagram já eram suportados quando o problema foi discutido
- o suporte para download de vídeo do X foi adicionado posteriormente

Fonte:

- [Issue #153: download](https://github.com/nonbili/Nora/issues/153)

## Por que o login no X falha?

A discussão do problema sugere que o login normal com e-mail/senha deveria funcionar, enquanto o login baseado no Google em um webview exigia trabalho extra. O mantenedor disse posteriormente que um menu `Injetar cookie` foi adicionado na `v0.1.5` como uma solução alternativa para os usuários afetados.

Fonte:

- [Issue #1: Unable to sign in to X](https://github.com/nonbili/Nora/issues/1)

## Posso usar extensões do meu navegador como uBlock Origin ou Dark Reader dentro do Nora?

Não da mesma forma que em um perfil de navegador completo. Na discussão da solicitação de recurso, o mantenedor direcionou os usuários ao suporte de CSS personalizado do próprio Nora para alterações de UI, em vez de prometer suporte a extensões de navegador incorporadas.

Fonte:

- [Issue #96: Open the socials in the webview provided by browser](https://github.com/nonbili/Nora/issues/96)

## Onde devo relatar bugs ou solicitar recursos?

Use o repositório do GitHub:

- [Issues do nonbili/Nora](https://github.com/nonbili/Nora/issues)
