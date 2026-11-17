---
title: FAQ
description: Perguntas comuns sobre o Nora recolhidas a partir de problemas no GitHub.
sidebar:
  order: 9
---
Esta página resume perguntas recorrentes dos utilizadores no sistema público de acompanhamento de problemas do GitHub.

## O Nora consegue abrir ligações do Instagram ou Facebook diretamente a partir de outras aplicações?

Sim, isso foi concebido para funcionar. O responsável pela manutenção referiu que poderá ter de:

- ativar o comportamento `Abrir por predefinição` do Android para o Nora
- desinstalar ou desativar a aplicação oficial se esta continuar a reclamar as mesmas ligações
- atualizar para uma versão mais recente do Nora se as ligações diretas abrirem a aplicação mas não a publicação solicitada

Fonte:

- [Issue #51: Support opening links in Nora](https://github.com/nonbili/Nora/issues/51)

## O Instagram falha ao abrir dentro do Nora

Um problema atualmente aberto mostra que alguns utilizadores ainda encontram uma página de erro do Instagram mesmo após tentarem recarregar, ativar o modo de site para computador e limpar os dados da webview. Isso significa que ainda não existe uma correção confirmada. Se isto acontecer no seu dispositivo:

- tente recarregar
- tente o modo de site para computador
- limpe os dados da webview do Nora
- se continuar a falhar, verifique o GitHub para atualizações ou adicione os detalhes do seu dispositivo ao problema

Fonte:

- [Issue #147: Issue when trying to open Instagram](https://github.com/nonbili/Nora/issues/147)

## Os conteúdos multimédia continuam a reproduzir depois de sair da aplicação

Isto foi comunicado para o áudio do Instagram que continuava em segundo plano sem controlos úteis. O responsável pela manutenção respondeu que seria corrigido no lançamento seguinte, pelo que a primeira coisa a fazer é atualizar o Nora para a versão mais recente disponível na sua loja ou canal de lançamento.

Fonte:

- [Issue #119: can you make it stop playing in background ? pls](https://github.com/nonbili/Nora/issues/119)

## Posso transferir imagens ou vídeos?

Sim, pelo menos parte disto já é suportada:

- prima longamente uma imagem para mostrar o menu de transferência
- as transferências de Reels do Facebook e do Instagram já eram suportadas quando o problema foi discutido
- o suporte de transferência de vídeo do X foi adicionado posteriormente

Fonte:

- [Issue #153: download](https://github.com/nonbili/Nora/issues/153)

## Porque falha o início de sessão no X?

A discussão do problema sugere que o início de sessão normal com e-mail/palavra-passe deveria funcionar, enquanto o início de sessão baseado no Google numa webview precisava de trabalho adicional. O responsável pela manutenção referiu mais tarde que um menu `Inject cookie` foi adicionado na versão `v0.1.5` como solução alternativa para os utilizadores afetados.

Fonte:

- [Issue #1: Unable to sign in to X](https://github.com/nonbili/Nora/issues/1)

## Posso utilizar as extensões do meu navegador, como o uBlock Origin ou o Dark Reader, dentro do Nora?

Não da mesma forma que num perfil de navegador completo. Na discussão do pedido de funcionalidade, o responsável pela manutenção indicou aos utilizadores o suporte de CSS personalizado do próprio Nora para alterações de interface em vez de prometer suporte incorporado para extensões de navegador.

Fonte:

- [Issue #96: Open the socials in the webview provided by browser](https://github.com/nonbili/Nora/issues/96)

## Onde devo comunicar erros ou pedir funcionalidades?

Utilize o repositório no GitHub:

- [Problemas de nonbili/Nora](https://github.com/nonbili/Nora/issues)
