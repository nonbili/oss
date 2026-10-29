---
title: "Nora 0.9.2: Mais formas de acompanhar seus feeds"
description: Leia feeds do Instagram pelo imginn e feeds do X por instâncias do Nitter, dê zoom nas linhas do tempo e mídias da galeria e escolha onde salvar downloads no Android.
sidebar:
  label: Lançamento do Nora 0.9.2
  order: 2
---

*Publicado em 29 de outubro de 2026*

O Instagram ou o X parou de atualizar? O **Nora 0.9.2** adiciona fontes alternativas opcionais para ajudar a manter seus feeds em movimento. Ele também traz zoom na linha do tempo e na galeria, controles de velocidade de vídeo e a opção de escolher onde salvar downloads no Android.

Se você está conhecendo agora o leitor de feeds do Nora, comece pela [introdução da versão 0.9.0](/pt-br/blog/nora-0-9-0/).

## Leia o Instagram pelo imginn e o X pelo Nitter

Seguir perfis públicos do **Instagram** e do **X** sem fazer login pode esbarrar em bloqueios de login ou limites de requisições. O Nora 0.9.2 adiciona duas alternativas opcionais nas **Configurações do feed** para que suas linhas do tempo continuem atualizadas sem precisar entrar em uma conta:

- **Ler Instagram pelo imginn:** Escolha **Quando o Instagram falhar** para usar o imginn como alternativa de reserva, ou **Primeiro, depois Instagram** para consultar o imginn primeiro. Ambos os modos funcionam apenas enquanto o Nora está aberto. Se o imginn pedir para confirmar que você não é um robô, o Nora solicitará que você conclua a verificação dentro do aplicativo.
- **Ler X pelo Nitter:** Escolha **Quando o X falhar** ou **Primeiro, depois X** e adicione um ou mais endereços de instâncias do Nitter. O Nora tenta suas instâncias em sequência. Instâncias que exigem verificação do navegador funcionam apenas enquanto o Nora está aberto.

Ambas as opções vêm desativadas por padrão e podem ser ativadas a qualquer momento nas **Configurações do feed**.

<div class="screenshot-gallery">
  <figure class="screenshot-card">
    <div class="screenshot-card__eyebrow">Configurações do feed</div>
    <h2 class="screenshot-card__title">Fontes imginn e Nitter</h2>
    <p class="screenshot-card__body">
      Leia perfis do Instagram pelo imginn e perfis do X pelas suas instâncias configuradas do Nitter — como reserva ou fonte principal.
    </p>
    <div class="screenshot-frame">
      <img src="/blog/nora-0-9-2/feed-settings.png" alt="Configurações do feed do Nora 0.9.2 mostrando as opções imginn e Nitter" />
    </div>
  </figure>

  <figure class="screenshot-card">
    <div class="screenshot-card__eyebrow">Mídia</div>
    <h2 class="screenshot-card__title">Galeria em tela cheia e zoom</h2>
    <p class="screenshot-card__body">
      Faça o gesto de pinça para ampliar fotos e vídeos na galeria em tela cheia, segure a borda da tela para acelerar a reprodução ou salve a mídia diretamente.
    </p>
    <div class="screenshot-frame">
      <img src="/blog/nora-0-9-2/media-gallery.png" alt="Tela da galeria de mídia em tela cheia do Nora 0.9.2" />
    </div>
  </figure>

  <figure class="screenshot-card">
    <div class="screenshot-card__eyebrow">Perfis</div>
    <h2 class="screenshot-card__title">Reabrir aba em outro perfil</h2>
    <p class="screenshot-card__body">
      Mude qualquer aba móvel aberta para outro perfil do Nora diretamente pelo menu do cabeçalho ou pelo alternador de abas.
    </p>
    <div class="screenshot-frame">
      <img src="/blog/nora-0-9-2/reopen-in-profile.png" alt="Diálogo para reabrir aba em outro perfil no Nora 0.9.2" />
    </div>
  </figure>
</div>

## Controles de vídeo do feed, zoom e notificações

Acompanhar as linhas do tempo e mídias no feed também ficou mais flexível:

- **Controles de velocidade de vídeo na galeria:** Os vídeos do feed agora usam suas preferências de **Velocidade padrão de reprodução de vídeo** e **Pressionar e segurar a borda para velocidade 2x**. Toque e segure a borda esquerda ou direita de um vídeo em reprodução para pular para a velocidade 2x e deslize horizontalmente para alternar entre velocidades.
- **Zoom na linha do tempo e na galeria:** Faça o gesto de pinça para ampliar no celular — ou segure `Ctrl`/`Cmd` e role no desktop — tanto nas linhas do tempo do feed quanto na galeria de fotos e vídeos em tela cheia. Os controles de reprodução e busca do vídeo continuam acessíveis durante o zoom.
- **Abrir notificações nas linhas do tempo:** Tocar em uma notificação de nova publicação agora abre diretamente a linha do tempo correspondente no Nora.
- **Alternativa para vídeos com falha:** Quando um vídeo não puder ser reproduzido na galeria em tela cheia, você pode abrir a publicação diretamente no site original.

## Downloads, perfis e melhorias em sites

Esta versão também inclui várias melhorias de navegação e download em todas as plataformas:

- **Escolha onde salvar downloads no Android:** Ative **Perguntar onde salvar cada download** em **Configurações → Downloads** para escolher a pasta de destino e o nome de cada arquivo. Esta versão também torna o salvamento de downloads mais confiável.
- **Reabrir em outro perfil pelo menu do cabeçalho:** Mude a aba móvel ativa para outro perfil do Nora diretamente pelo menu do cabeçalho, além de pressionar e segurar abas no alternador de abas.
- **Correções para TikTok e Instagram:** Assista a vídeos do TikTok com um novo botão de tela cheia e baixe vídeos com mais confiabilidade do TikTok e do Instagram, inclusive quando estiver desconectado do Instagram.
- **Rolagem mais suave e verificações em segundo plano:** As páginas não dão mais saltos quando a barra de ferramentas se oculta ou aparece, e as verificações de feed em segundo plano funcionam melhor no Android.

Consulte o [histórico de alterações](/pt-br/nora/changelog/) para todos os detalhes do lançamento.

## Obtenha o Nora 0.9.2

[Instale ou atualize o Nora](/pt-br/nora/install/) no Android, iOS, Linux, macOS ou Windows.

Você também pode explorar a [documentação do Nora](/pt-br/nora/) ou ler as [notas de lançamento no GitHub](https://github.com/nonbili/Nora/releases/tag/v0.9.2).
