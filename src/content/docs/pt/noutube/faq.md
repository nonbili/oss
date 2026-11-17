---
title: FAQ
description: Perguntas comuns sobre o NouTube recolhidas a partir de problemas no GitHub.
sidebar:
  order: 9
---
Esta página resume perguntas recorrentes dos utilizadores no sistema público de acompanhamento de problemas do GitHub.

## Problemas ao iniciar sessão

A Google rejeita frequentemente o início de sessão a partir de aplicações que incorporam uma página web, pelo que iniciar sessão dentro do NouTube pode falhar tanto no Android como no computador, normalmente com o erro "This browser or app may not be secure". No computador, se não existir um botão `Iniciar sessão` visível, experimente abrir primeiro o menu `Os seus dados no YouTube`.

Se não conseguir iniciar sessão, utilize em alternativa a funcionalidade **Inject cookie**:

1. Num computador, inicie sessão no YouTube no Chrome ou noutro navegador baseado em Chromium e exporte os seus cookies do YouTube com uma extensão de navegador (como `getcookies.txt`).
2. No Android, copie o ficheiro exportado para o seu dispositivo.
3. No NouTube, abra **Definições > Ferramentas > Inject cookie**, importe o ficheiro (ou cole o respetivo conteúdo) e guarde.

Isto contorna a verificação de navegador seguro da Google e é atualmente a solução mais fiável para problemas de início de sessão tanto no Android como no computador.

Fontes:

- [Issue #142: Can't login to Google on Windows app](https://github.com/nonbili/NouTube/issues/142)

## Porque é que a atualização mais recente ainda não está disponível no F-Droid?

O calendário de lançamentos no F-Droid não é controlado pelos responsáveis pela manutenção do NouTube. O F-Droid compila e publica atualizações de forma independente em lotes, o que demora normalmente vários dias após o lançamento de uma nova versão no GitHub.

Se pretender a versão mais recente de imediato, pode transferir o APK a partir da página de [Lançamentos no GitHub](https://github.com/nonbili/NouTube/releases). No entanto, tenha em atenção que os lançamentos do GitHub utilizam uma chave de assinatura diferente da do F-Droid, pelo que tem de desinstalar primeiro a versão do F-Droid antes de instalar o APK do GitHub.

Fontes:

- [Issue #16: Update request](https://github.com/nonbili/NouTube/issues/16)
- [Issue #14: Bug: rotate to landscape resets app to home page](https://github.com/nonbili/NouTube/issues/14)

## O YouTube Music não está a carregar corretamente

Se o YouTube Music não estiver a carregar corretamente, experimente ativar **Site para computador** no menu da aplicação.

Fonte:

- [Issue #150: Noutube Music Error Message, Not Loading.](https://github.com/nonbili/NouTube/issues/150)

## O NouTube reabre uma fila em vez da página inicial

Se o NouTube continuar a restaurar a reprodução ou abrir novamente um item antigo em vez da página inicial, verifique se o ícone da fila ainda está ativo. Na discussão do problema, o responsável pela manutenção identificou uma fila não limpa como o motivo pelo qual o NouTube continuava a tentar retomar a reprodução.

Fonte:

- [Issue #138: Restoring playback](https://github.com/nonbili/NouTube/issues/138)

## Onde devo comunicar erros ou pedir funcionalidades?

Utilize o repositório no GitHub:

- [Problemas de nonbili/NouTube](https://github.com/nonbili/NouTube/issues)
