---
title: Perguntas Frequentes (FAQ)
description: Perguntas comuns do NouTube extraídas das issues do GitHub.
sidebar:
  order: 9
---
Esta página resume as perguntas recorrentes dos usuários do rastreador de problemas público do GitHub.

## Problemas de login na versão desktop

Se o aplicativo desktop não mostrar um botão `Entrar` visível, tente abrir o menu `Seus dados no YouTube` primeiro. Se a página de login abrir, mas você receber um erro de "navegador ou aplicativo pode não ser seguro", use o recurso **Injetar cookie**:

1. Use uma extensão de navegador (como `getcookies.txt`) para exportar seus cookies do YouTube.
2. Importe os cookies para o NouTube usando o botão **Injetar cookie**.

Este método ignora a verificação de navegador seguro do Google e é atualmente a correção mais confiável para problemas de login no desktop.

Fontes:

- [Issue #142: Can't login to Google on Windows app](https://github.com/nonbili/NouTube/issues/142)

## O YouTube Music não está carregando corretamente

Se o YouTube Music não estiver carregando corretamente, tente alternar para **Site para computador** no menu do aplicativo.

Fonte:

- [Issue #150: Noutube Music Error Message, Not Loading.](https://github.com/nonbili/NouTube/issues/150)

## O NouTube abre uma fila em vez da página inicial

Se o NouTube continuar restaurando a reprodução ou abrir em um item antigo em vez da página inicial, verifique se o ícone da fila ainda está ativo. Na discussão da issue, o mantenedor identificou uma fila não limpa como a razão pela qual o NouTube continuava tentando retomar a reprodução.

Fonte:

- [Issue #138: Restoring playback](https://github.com/nonbili/NouTube/issues/138)

## Onde devo relatar bugs ou pedir recursos?

Use o repositório do GitHub:

- [nonbili/NouTube issues](https://github.com/nonbili/NouTube/issues)
