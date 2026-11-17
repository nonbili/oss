---
title: "Nora 0.9.2: Mais formas de seguir os seus feeds"
description: Leia feeds do Instagram a partir do imginn e feeds do X a partir de instâncias Nitter, amplie linhas cronológicas e conteúdos da galeria e escolha onde guardar transferências no Android.
date: 2026-10-29
product: nora
---

O Instagram ou o X deixaram de atualizar? O **Nora 0.9.2** adiciona fontes alternativas opcionais para ajudar a manter os seus feeds em movimento. Também traz ampliação de linhas cronológicas e da galeria, controlos de velocidade de vídeo e a escolha de onde guardar transferências no Android.

Se é novo no leitor de feeds do Nora, comece pela [introdução ao 0.9.0](/pt/blog/nora-0-9-0/).

## Ler o Instagram a partir do imginn e o X a partir do Nitter

Seguir perfis públicos do **Instagram** e do **X** sem iniciar sessão pode esbarrar em barreiras de início de sessão ou limites de pedidos. O Nora 0.9.2 adiciona duas alternativas opcionais nas **Definições do feed** para que as suas linhas cronológicas possam manter-se atualizadas sem iniciar sessão numa conta:

- **Ler o Instagram a partir do imginn:** Escolha **Quando o Instagram falhar** para utilizar o imginn como alternativa de recurso, ou **Primeiro, depois Instagram** para verificar primeiro o imginn. Ambos os modos funcionam apenas enquanto o Nora estiver aberto. Se o imginn pedir para confirmar que não é um robô, o Nora pede-lhe para concluir a verificação na aplicação.
- **Ler o X a partir do Nitter:** Escolha **Quando o X falhar** ou **Primeiro, depois X** e adicione um ou mais endereços de instâncias Nitter. O Nora tenta as suas instâncias por ordem. As instâncias que exigem uma verificação do navegador funcionam apenas enquanto o Nora estiver aberto.

Ambas as opções estão desativadas por predefinição e podem ser ativadas a qualquer momento nas **Definições do feed**.

<div class="screenshot-gallery">
  <figure class="screenshot-card">
    <div class="screenshot-card__eyebrow">Definições do feed</div>
    <h2 class="screenshot-card__title">Fontes imginn e Nitter</h2>
    <p class="screenshot-card__body">
      Leia perfis do Instagram a partir do imginn e perfis do X a partir das suas instâncias Nitter configuradas — como recurso ou fonte principal.
    </p>
    <div class="screenshot-frame">
      <img src="/blog/nora-0-9-2/feed-settings.webp" alt="Definições do feed do Nora 0.9.2 a mostrar opções do imginn e Nitter" />
    </div>
  </figure>

  <figure class="screenshot-card">
    <div class="screenshot-card__eyebrow">Multimédia</div>
    <h2 class="screenshot-card__title">Galeria em ecrã inteiro e ampliação</h2>
    <p class="screenshot-card__body">
      Faça pinça para ampliar fotografias e vídeos na galeria em ecrã inteiro, mantenha premida a margem do ecrã para acelerar a reprodução ou guarde conteúdos diretamente.
    </p>
    <div class="screenshot-frame">
      <img src="/blog/nora-0-9-2/media-gallery.webp" alt="Ecrã da galeria multimédia em ecrã inteiro do Nora 0.9.2" />
    </div>
  </figure>

  <figure class="screenshot-card">
    <div class="screenshot-card__eyebrow">Perfis</div>
    <h2 class="screenshot-card__title">Reabrir separador no perfil</h2>
    <p class="screenshot-card__body">
      Mude qualquer separador móvel aberto para outro perfil do Nora diretamente a partir do menu do cabeçalho ou do seletor de separadores.
    </p>
    <div class="screenshot-frame">
      <img src="/blog/nora-0-9-2/reopen-in-profile.webp" alt="Caixa de diálogo reabrir separador no perfil do Nora 0.9.2" />
    </div>
  </figure>
</div>

## Controlos de vídeo no feed, ampliação e notificações

Pôr as linhas cronológicas e os conteúdos multimédia em dia no feed também está mais flexível:

- **Controlos de velocidade de vídeo na galeria:** Os vídeos do feed utilizam agora as suas preferências **Velocidade de reprodução de vídeo predefinida** e **Pressão longa na margem para velocidade 2x**. Toque e mantenha premida a margem esquerda ou direita de um vídeo em reprodução para passar para a velocidade 2x e deslize horizontalmente para mudar de velocidade.
- **Ampliação na linha cronológica e na galeria:** Faça pinça para ampliar no telemóvel — ou mantenha premido `Ctrl`/`Cmd` e desloque no computador — tanto nas linhas cronológicas do feed como na galeria de fotografias e vídeos em ecrã inteiro. Os controlos de reprodução e procura de vídeo permanecem acessíveis enquanto estiver ampliado.
- **Abrir notificações nas linhas cronológicas:** Tocar numa notificação de nova publicação abre agora diretamente a linha cronológica correspondente do Nora.
- **Alternativa para vídeos com falha:** Quando não for possível reproduzir um vídeo na galeria em ecrã inteiro, pode abrir a publicação diretamente no site original.

## Transferências, perfis e melhorias de sites

Este lançamento inclui também várias melhorias de navegação e transferência entre plataformas:

- **Escolher onde guardar transferências no Android:** Ative **Perguntar onde guardar cada transferência** em **Definições → Transferências** para escolher a pasta de destino e o nome do ficheiro para cada ficheiro. Este lançamento torna também a gravação de transferências mais fiável.
- **Reabrir no perfil a partir do menu do cabeçalho:** Mude o separador móvel ativo para outro perfil do Nora diretamente a partir do menu do cabeçalho, além de poder manter premidos os separadores no seletor de separadores.
- **Correções no TikTok e Instagram:** Veja vídeos do TikTok com um novo botão de ecrã inteiro e transfira vídeos de forma mais fiável a partir do TikTok e do Instagram, incluindo com sessão terminada no Instagram.
- **Deslocamento mais suave e verificações em segundo plano:** As páginas já não saltam quando a barra de ferramentas se oculta ou aparece, e as verificações do feed em segundo plano funcionam melhor no Android.

Consulte o [registo de alterações](/pt/nora/changelog/) para obter os detalhes completos do lançamento.

## Obter o Nora 0.9.2

[Instale ou atualize o Nora](/pt/nora/install/) no Android, iOS, Linux, macOS ou Windows.

Também pode explorar a [documentação do Nora](/pt/nora/) ou ler as [notas de lançamento no GitHub](https://github.com/nonbili/Nora/releases/tag/v0.9.2).
