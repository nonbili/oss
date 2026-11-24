---
title: "NouTube 0.7.11 traz barra de ferramentas personalizável no Android e downloads de vídeo no iOS"
description: Coloque suas ações favoritas na barra de ferramentas do Android, deslize para entrar em tela cheia, oculte os comentários do YouTube e salve vídeos no iPhone e no iPad.
date: 2026-11-24
product: noutube
---

O NouTube 0.7.11 permite colocar ações como **Compartilhar** e **Abrir URL** diretamente na barra de ferramentas do Android. No iPhone e no iPad, agora você pode baixar vídeos compatíveis pelas **Ferramentas**, e os vídeos começam mais rápido. A atualização para dispositivos móveis também adiciona gestos de deslizar para a tela cheia e uma configuração para ocultar os comentários do YouTube.

## Coloque suas ações mais usadas na barra de ferramentas do Android

Abra **Configurações → Aparência → Botões da barra de ferramentas**. Use as chaves para escolher quais botões aparecem e arraste as alças para definir a ordem. Por exemplo, ative **Compartilhar** e **Abrir URL** e arraste-os para o topo da lista para ter as duas ações sempre à mão enquanto assiste a um vídeo.

Você também pode adicionar **Ferramentas**, **Site para computador**, **Configurações** ou o seletor **YouTube / YouTube Music** à barra de ferramentas. A mesma lista permite reorganizar botões existentes como **Biblioteca**, **Feed de canais** e **Histórico**.

<div class="screenshot-gallery">
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">Ative Compartilhar e Abrir URL e arraste-os para o topo da lista.</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/noutube-0-7-11/android-toolbar-settings.webp" alt="Configurações de Aparência no Android com Compartilhar e Abrir URL ativados nas duas primeiras linhas e alças de arrastar à direita" width="1080" height="2220" loading="lazy" />
    </div>
  </figure>
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">Compartilhar e Abrir URL agora são os dois primeiros botões da barra de ferramentas da página de reprodução.</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/noutube-0-7-11/android-toolbar-result.webp" alt="Barra de ferramentas do NouTube acima da página de reprodução de Big Buck Bunny, com o ícone de Compartilhar e o ícone de link de Abrir URL na extrema esquerda" width="1080" height="2220" loading="lazy" />
    </div>
  </figure>
</div>

## Baixe vídeos no iPhone e no iPad

Em um vídeo que você tem permissão para salvar, abra **Ferramentas** e toque em **Baixar vídeo**. O NouTube baixa um MP4 compatível quando houver um disponível. Quando o download terminar, toque em **Exportar** para salvar ou compartilhar o arquivo.

<div class="screenshot-gallery">
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">As Ferramentas preenchem a URL do vídeo atual.</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/noutube-0-7-11/ios-download-tools.webp" alt="Painel de download no iPhone com a URL do vídeo preenchida, uma observação sobre a disponibilidade do MP4 e o botão Baixar vídeo" width="1206" height="2622" loading="lazy" />
    </div>
  </figure>
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">Exportar aparece no Histórico de downloads quando o arquivo está pronto.</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/noutube-0-7-11/ios-download-export.webp" alt="Item do Histórico de downloads no iPhone com uma marca de verificação verde, o status Download concluído e um botão Exportar" width="1206" height="2622" loading="lazy" />
    </div>
  </figure>
</div>

*Big Buck Bunny* © 2008 Blender Foundation / [www.bigbuckbunny.org](https://peach.blender.org/about/). [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/).

O início de vídeo mais rápido introduzido no Android na versão 0.7.10 agora também vale para o iOS. No iPad, os controles de reprodução do YouTube continuam disponíveis em tela cheia.

## Deslize para tela cheia ou oculte os comentários

No celular, deslize para cima no player do YouTube para entrar em tela cheia e para baixo para voltar à página de reprodução. Comece o gesto sobre o próprio vídeo para continuar usando os controles de reprodução e a barra de progresso normalmente.

Para remover a seção de comentários das páginas de reprodução do YouTube, abra **Configurações → Preferências → Sem distrações** e ative **Ocultar comentários**.

<div class="screenshot-gallery" style="max-width: 24rem;">
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">Ocultar comentários fica no final das configurações Sem distrações.</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/noutube-0-7-11/hide-comments-setting.webp" alt="Tela de Preferências no Android com a chave Ocultar comentários ativada no final da seção Sem distrações" width="1080" height="2220" loading="lazy" />
    </div>
  </figure>
</div>

## Outras correções

- Downloads de áudio Opus agora usam a extensão `.opus`. O NouTube corrige um problema de inicialização do yt-dlp nas versões de lançamento do Android e lida com falhas de download e reprodução de forma mais confiável.
- A página de reprodução do YouTube para computador agora se ajusta a telas estreitas do Android. As prévias do feed não entram mais no histórico de exibição no Android, e **Próximo** nos controles do YouTube Music do sistema não mexe mais na fila do próprio NouTube.
- Esta versão atualiza as traduções para italiano, polonês, português do Brasil, russo e ucraniano.

[Veja a versão no GitHub](https://github.com/nonbili/NouTube/releases/tag/v0.7.11).

## Obtenha o NouTube

[Instale ou atualize o NouTube](/pt-br/noutube/install/), ou confira a [documentação do NouTube](/pt-br/noutube/).
