---
title: FAQ
description: Perguntas comuns do NouTube extraídas das issues do GitHub.
---
Esta página resume as perguntas recorrentes dos usuários do rastreador de problemas público do GitHub.

## O botão de login na versão desktop sumiu ou o login parece travado

Se o aplicativo desktop não mostrar um botão `Sign in` visível, tente abrir o menu `Your data in YouTube` primeiro. Na discussão da issue, esse caminho permitiu que os usuários afetados chegassem ao fluxo de login, e o mantenedor disse mais tarde que o botão visível deve estar de volta na `v0.1.6`.

Fontes:

- [Issue #46: desktop version never logs in always error](https://github.com/nonbili/NouTube/issues/46)

## O login no desktop ainda falha mesmo quando a página de login abre

Houve relatos de que algumas configurações de desktop ainda falham no login do Google mesmo após limpar os dados. A discussão da issue não terminou com uma correção universal confirmada, então a orientação prática é:

- atualize para a versão mais recente do desktop
- limpe os dados do webview/perfil do app se você já tentou fazer o login
- se ainda falhar, relate seu SO, formato do pacote e capturas de tela no GitHub

Fonte:

- [Issue #103: Unable to login from desktop client](https://github.com/nonbili/NouTube/issues/103)

## O YouTube Music não está carregando corretamente

Um caminho de solução de problemas documentado foi:

1. Certifique-se de que o `NouTube` seja o aplicativo padrão para `music.youtube.com`.
2. Se o aplicativo oficial do YouTube Music estiver instalado, remova primeiro o tratamento de link padrão dele.
3. Se o problema continuar, tente um user agent personalizado em `Configurações > Ferramentas > User agent personalizado`.

Esta orientação vem diretamente do mantenedor no tópico da issue. É uma solução alternativa, não uma correção garantida para todos os dispositivos.

Fonte:

- [Issue #150: Noutube Music Error Message, Not Loading.](https://github.com/nonbili/NouTube/issues/150)

## Alguns anúncios ainda estão passando

Houve um relato de anúncios curtos do YouTube Premium aparecendo antes dos vídeos. O mantenedor indicou aos usuários a `v0.4.9`, o que implica que as correções de bloqueio de anúncios foram enviadas em versões posteriores. Se você vir anúncios:

- atualize para a versão mais recente do F-Droid ou GitHub
- se o problema persistir, abra uma nova issue com a versão do app e uma captura de tela

Fonte:

- [Issue #117: Ad not blocked](https://github.com/nonbili/NouTube/issues/117)

## O NouTube abre uma fila em vez da página inicial

Se o NouTube continuar restaurando a reprodução ou abrir em um item antigo em vez da página inicial, verifique se o ícone da fila ainda está ativo. Na discussão da issue, o mantenedor identificou uma fila não limpa como a razão pela qual o NouTube continuava tentando retomar a reprodução.

Fonte:

- [Issue #138: Restoring playback](https://github.com/nonbili/NouTube/issues/138)

## Onde devo relatar bugs ou pedir recursos?

Use o repositório do GitHub:

- [nonbili/NouTube issues](https://github.com/nonbili/NouTube/issues)
