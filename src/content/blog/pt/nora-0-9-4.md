---
title: "Nora 0.9.4: Ligações do X mais limpas e transferências mais fiáveis"
description: Remova os tokens de partilha das ligações de publicações do X, corrija transferências de vídeo bloqueadas em A analisar e mantenha os nomes dos ficheiros e os controlos de ecrã inteiro do TikTok a funcionar.
date: 2026-11-03
product: nora
---

Uma ligação de publicação copiada deve ser fácil de partilhar e uma transferência de vídeo deve passar da fase **A analisar**. O **Nora 0.9.4 para telemóvel** resolve ambos os aspetos, com um pequeno conjunto de correções para partilhar ligações, guardar ficheiros e ver vídeos do TikTok.

## Partilhar ligações do X sem os tokens extra

O Nora remove agora parâmetros de partilha do X como `s` e `t` quando copia ou partilha a ligação de uma publicação. Por exemplo:

```text
Antes:  https://x.com/nonbili/status/1234567890?s=20&t=example
Depois: https://x.com/nonbili/status/1234567890
```

O endereço da publicação mantém-se intacto; os tokens de partilha extra são removidos. Esta limpeza aplica-se aos URLs de publicações do X e do Twitter, pelo que parâmetros com os mesmos nomes curtos em páginas não relacionadas não são afetados.

## Passar da fase “A analisar” ao guardar vídeos

Algumas transferências de vídeo podiam ficar bloqueadas na fase **A analisar** antes de a transferência começar. Este lançamento corrige essa falha para que as transferências afetadas possam prosseguir.

Os ficheiros gerados por uma página web através de um URL `blob:` também mantêm os respetivos nomes de ficheiro pretendidos quando disponíveis. Isto torna os ficheiros guardados mais fáceis de reconhecer mais tarde.

## Restaurar os controlos de ecrã inteiro do TikTok

Os controlos de ecrã inteiro do TikTok do Nora podiam falhar ao aparecer quando o script da página era executado antes de o corpo da página estar pronto. Os controlos lidam agora com essa ordem de carregamento, para que o botão de ecrã inteiro possa aparecer como esperado.

Consulte as [notas de lançamento no GitHub](https://github.com/nonbili/Nora/releases/tag/v0.9.4) para obter a lista completa de alterações.

## Obter o Nora

[Instale ou atualize o Nora](/pt/nora/install/), ou explore a [documentação do Nora](/pt/nora/) para saber mais.
