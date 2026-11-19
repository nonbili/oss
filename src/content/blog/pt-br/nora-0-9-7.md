---
title: "Nora 0.9.7: Escolha sua pasta de downloads e personalize o menu"
description: Escolha onde os downloads são salvos no Android, oculte ações que você raramente usa no menu de três pontos e receba correções para WhatsApp Web, Facebook Marketplace e navegação por abas.
date: 2026-11-19
product: nora
---

Com o **Nora 0.9.7 para dispositivos móveis**, você pode enviar os downloads do Android para uma pasta de sua escolha e enxugar o menu de três pontos do navegador para manter apenas as ações que você usa. Esta versão também abre o WhatsApp Web e o Facebook Marketplace automaticamente no modo desktop.

## Escolha onde os downloads são salvos

No Android, abra **Configurações → Preferências → Downloads → Salvar downloads em** para definir onde os downloads do navegador serão salvos.

- **Downloads** usa a pasta padrão de Downloads do Android.
- **Perguntar sempre** permite escolher um destino para cada download.
- **Escolher pasta…** salva os próximos downloads na pasta que você selecionar.

Se você escolher uma pasta, o Nora também a usará para as mídias salvas do feed no Android 10 e superior. Esta versão também corrige downloads de links `data:`, que alguns sites usam para arquivos gerados no navegador.

<div class="screenshot-gallery" style="max-width: 24rem;">
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">Nora Downloads está selecionado como o destino para futuros downloads.</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/nora-0-9-7/download-destination.webp" alt="Configurações de download do Android com Nora Downloads selecionado e as opções Downloads, Perguntar sempre e Escolher pasta visíveis" width="1080" height="2220" loading="lazy" />
    </div>
  </figure>
</div>

## Personalize o menu de três pontos

Abra **Configurações → Aparência → Barra de ferramentas → Personalizar menu de três pontos** e desative as ações que você raramente usa. Por exemplo, mantenha **Encontrar na página** e **Compartilhar**, e oculte **Site para computador** se você raramente alterna o layout. As ações mantidas aparecem quando estão disponíveis na aba atual.

**Configurações** permanece no menu, e **Restaurar padrões do menu** limpa suas alterações com um toque.

<div class="screenshot-gallery">
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">Mantenha Encontrar na página ativado e desative Site para computador.</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/nora-0-9-7/customize-three-dot-menu.webp" alt="Configurações expandidas de Personalizar menu de três pontos com Encontrar na página ativado e Site para computador desativado" width="1080" height="2220" loading="lazy" />
    </div>
  </figure>
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">O menu do navegador mantém Encontrar na página, Compartilhar e Configurações.</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/nora-0-9-7/customized-three-dot-menu.webp" alt="Menu personalizado do navegador exibindo Encontrar na página, Compartilhar e Configurações, com Site para computador oculto" width="1080" height="2220" loading="lazy" />
    </div>
  </figure>
</div>

## WhatsApp Web e Facebook Marketplace abrem no modo desktop

No **WhatsApp Web**, o teclado na tela agora pode abrir sem fechar um seletor. O **Facebook Marketplace** usa o site para computador para que você possa enviar mensagens aos vendedores a partir de um anúncio.

## Correções de navegação e feed

- O bloqueio de anúncios do Facebook agora captura publicações patrocinadas mesmo quando seus rótulos aparecem com atraso. Manter pressionado um botão de reação do Facebook não deixa mais o menu de contexto do navegador atrapalhar.
- O filtro de jogos do Reddit mantém as publicações normais visíveis.
- O alternador de abas abre com a sua aba ativa visível. Em uma nova aba, um endereço digitado abre no primeiro toque em **Ir**, e abrir um link recebido preserva suas outras abas.
- Puxar para atualizar não atrapalha quando você faz gestos dentro de um visualizador de mídia.

Confira as [notas de lançamento no GitHub](https://github.com/nonbili/Nora/releases/tag/v0.9.7) para ver a lista completa de alterações.

## Baixe o Nora

[Instale ou atualize o Nora](/pt-br/nora/install/) ou explore a [documentação do Nora](/pt-br/nora/) para saber mais.
