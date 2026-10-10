---
title: Perguntas Frequentes (FAQ)
description: Perguntas comuns do NouTube extraídas das issues do GitHub.
sidebar:
  order: 9
---
Esta página resume as perguntas recorrentes dos usuários do rastreador de problemas público do GitHub.

## Problemas de login

O Google costuma recusar o login em aplicativos que incorporam uma página da web, então entrar na conta dentro do NouTube pode falhar tanto no Android quanto no desktop, geralmente com o erro "Este navegador ou aplicativo pode não ser seguro". No desktop, se não houver um botão `Fazer login` visível, tente abrir primeiro o menu `Seus dados no YouTube`.

Se não conseguir fazer login, use o recurso **Inject cookie**:

1. Em um computador, faça login no YouTube pelo Chrome ou outro navegador baseado em Chromium e exporte seus cookies do YouTube com uma extensão de navegador (como `getcookies.txt`).
2. No Android, copie o arquivo exportado para o seu dispositivo.
3. No NouTube, abra **Settings > Tools > Inject cookie**, importe o arquivo (ou cole o conteúdo dele) e salve.

Esse método contorna a verificação de navegador seguro do Google e é atualmente a solução mais confiável para problemas de login, tanto no Android quanto no desktop.

Fontes:

- [Issue #142: Can't login to Google on Windows app](https://github.com/nonbili/NouTube/issues/142)

## Por que a atualização mais recente ainda não está disponível no F-Droid?

O cronograma de lançamento no F-Droid não é controlado pelos mantenedores do NouTube. O F-Droid compila e publica atualizações de forma independente em lotes, o que normalmente leva alguns dias após o lançamento de uma nova versão no GitHub.

Se você quiser a versão mais recente imediatamente, pode baixar o APK na página de [GitHub Releases](https://github.com/nonbili/NouTube/releases). No entanto, observe que as versões do GitHub usam uma chave de assinatura diferente das do F-Droid, portanto, você precisará desinstalar a versão do F-Droid antes de instalar o APK do GitHub.

Fontes:

- [Issue #16: Update request](https://github.com/nonbili/NouTube/issues/16)
- [Issue #14: Bug: rotate to landscape resets app to home page](https://github.com/nonbili/NouTube/issues/14)

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
