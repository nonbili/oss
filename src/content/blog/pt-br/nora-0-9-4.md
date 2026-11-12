---
title: "Nora 0.9.4: Links do X mais limpos e downloads mais confiáveis"
description: Remova tokens de compartilhamento de links de posts do X, resolva downloads de vídeo travados em Análise e mantenha nomes de arquivos e controles de tela cheia do TikTok.
date: 2026-11-03
product: nora
---

Um link copiado de uma postagem deve ser fácil de compartilhar, e o download de um vídeo deve passar sem empecilhos da etapa de **Análise**. O **Nora 0.9.4 para dispositivos móveis** resolve ambos os pontos com um conjunto de correções para compartilhamento de links, salvamento de arquivos e vídeos do TikTok.

## Compartilhe links do X sem tokens extras

O Nora agora remove parâmetros de compartilhamento do X como `s` e `t` ao copiar ou compartilhar o link de um post. Por exemplo:

```text
Before: https://x.com/nonbili/status/1234567890?s=20&t=example
After:  https://x.com/nonbili/status/1234567890
```

O endereço da publicação permanece intacto; os tokens extras de compartilhamento são excluídos. Essa limpeza se aplica a URLs de posts do X e do Twitter, mantendo intactos parâmetros com nomes curtos semelhantes em outras páginas da web.

## Supere a etapa «Análise» ao salvar vídeos

Alguns downloads de vídeo podiam travar na fase de **Análise** (Parsing) antes mesmo de o download iniciar. Esta atualização corrige essa falha para que os downloads afetados continuem normalmente.

Arquivos gerados por uma página web via URL `blob:` também mantêm seus nomes de arquivo planejados quando disponíveis, facilitando a identificação posterior dos arquivos salvos.

## Restaure os controles de tela cheia do TikTok

Os controles de tela cheia do TikTok no Nora podiam não aparecer se o script da página fosse executado antes de o corpo da página estar pronto. Os controles agora lidam corretamente com essa ordem de carregamento, fazendo com que o botão de tela cheia apareça conforme esperado.

Consulte as [notas de lançamento no GitHub](https://github.com/nonbili/Nora/releases/tag/v0.9.4) para ver a lista completa de alterações.

## Obtenha o Nora

[Instale ou atualize o Nora](/pt-br/nora/install/) ou explore a [documentação do Nora](/pt-br/nora/) para saber mais.
