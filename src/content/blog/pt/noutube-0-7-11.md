---
title: "NouTube 0.7.11 traz barra de ferramentas personalizável no Android e transferências de vídeo no iOS"
description: Coloque as suas ações favoritas na barra de ferramentas do Android, deslize para entrar em ecrã inteiro, oculte os comentários do YouTube e guarde vídeos no iPhone e no iPad.
date: 2026-11-24
product: noutube
---

O NouTube 0.7.11 permite colocar ações como **Partilhar** e **Abrir URL** diretamente na barra de ferramentas do Android. No iPhone e no iPad, já pode descarregar vídeos compatíveis a partir de **Ferramentas**, e os vídeos começam mais depressa. A atualização para dispositivos móveis acrescenta ainda gestos de deslizar para o ecrã inteiro e uma definição para ocultar os comentários do YouTube.

## Coloque as ações que mais usa na barra de ferramentas do Android

Abra **Definições → Aparência → Botões da barra de ferramentas**. Use os interruptores para escolher que botões aparecem e arraste as pegas para definir a ordem. Por exemplo, ative **Partilhar** e **Abrir URL** e arraste-os para o topo da lista para ter as duas ações sempre à mão enquanto vê um vídeo.

Também pode adicionar **Ferramentas**, **Site para computador**, **Definições** ou o seletor **YouTube / YouTube Music** à barra de ferramentas. A mesma lista permite reordenar botões existentes como **Biblioteca**, **Feed de canais** e **Histórico**.

<div class="screenshot-gallery">
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">Ative Partilhar e Abrir URL e arraste-os para o topo da lista.</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/noutube-0-7-11/android-toolbar-settings.webp" alt="Definições de Aparência no Android com Partilhar e Abrir URL ativados nas duas primeiras linhas e pegas de arrastar à direita" width="1080" height="2220" loading="lazy" />
    </div>
  </figure>
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">Partilhar e Abrir URL são agora os dois primeiros botões da barra de ferramentas da página de reprodução.</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/noutube-0-7-11/android-toolbar-result.webp" alt="Barra de ferramentas do NouTube acima da página de reprodução de Big Buck Bunny, com o ícone Partilhar e o ícone de ligação Abrir URL na extremidade esquerda" width="1080" height="2220" loading="lazy" />
    </div>
  </figure>
</div>

## Descarregue vídeos no iPhone e no iPad

Num vídeo que tenha permissão para guardar, abra **Ferramentas** e toque em **Descarregar vídeo**. O NouTube descarrega um MP4 compatível quando existe um disponível. Quando a transferência terminar, toque em **Exportar** para guardar ou partilhar o ficheiro.

<div class="screenshot-gallery">
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">Ferramentas preenche o URL do vídeo atual.</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/noutube-0-7-11/ios-download-tools.webp" alt="Painel de transferência no iPhone com o URL do vídeo preenchido, uma nota sobre a disponibilidade de MP4 e o botão Descarregar vídeo" width="1206" height="2622" loading="lazy" />
    </div>
  </figure>
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">Exportar aparece no Histórico de descargas quando o ficheiro está pronto.</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/noutube-0-7-11/ios-download-export.webp" alt="Entrada do Histórico de descargas no iPhone com um visto verde, o estado Descarga concluída e um botão Exportar" width="1206" height="2622" loading="lazy" />
    </div>
  </figure>
</div>

*Big Buck Bunny* © 2008 Blender Foundation / [www.bigbuckbunny.org](https://peach.blender.org/about/). [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/).

O arranque mais rápido de vídeos introduzido no Android na versão 0.7.10 aplica-se agora também ao iOS. No iPad, os controlos de reprodução do YouTube continuam disponíveis em ecrã inteiro.

## Deslize para ecrã inteiro ou oculte os comentários

Em dispositivos móveis, deslize para cima no leitor do YouTube para entrar em ecrã inteiro e para baixo para voltar à página de reprodução. Comece o gesto sobre o próprio vídeo para continuar a usar os controlos de reprodução e a barra de progresso como habitualmente.

Para remover a secção de comentários das páginas de reprodução do YouTube, abra **Definições → Preferências → Sem distrações** e ative **Ocultar comentários**.

<div class="screenshot-gallery" style="max-width: 24rem;">
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">Ocultar comentários está no fim das definições Sem distrações.</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/noutube-0-7-11/hide-comments-setting.webp" alt="Ecrã de Preferências no Android com o interruptor Ocultar comentários ativado no fim da secção Sem distrações" width="1080" height="2220" loading="lazy" />
    </div>
  </figure>
</div>

## Outras correções

- As transferências de áudio Opus usam agora a extensão `.opus`. O NouTube corrige um problema de arranque do yt-dlp nas versões de lançamento para Android e lida de forma mais fiável com falhas de transferência e reprodução.
- A página de reprodução do YouTube para computador adapta-se agora a ecrãs Android estreitos. No Android, as pré-visualizações do feed deixam de entrar no histórico de visualizações, e **Próximo** nos controlos de sistema do YouTube Music já não altera a fila do próprio NouTube.
- Esta versão atualiza as traduções para italiano, polaco, português do Brasil, russo e ucraniano.

[Ver a versão no GitHub](https://github.com/nonbili/NouTube/releases/tag/v0.7.11).

## Obter o NouTube

[Instale ou atualize o NouTube](/pt/noutube/install/), ou consulte a [documentação do NouTube](/pt/noutube/).
