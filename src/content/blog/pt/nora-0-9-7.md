---
title: "Nora 0.9.7: Escolha a sua pasta de transferências e personalize o menu"
description: Escolha onde são guardadas as transferências no Android, oculte ações que raramente utiliza no menu de três pontos e obtenha correções para o WhatsApp Web, Facebook Marketplace e navegação por separadores.
date: 2026-11-19
product: nora
---

Com o **Nora 0.9.7 para dispositivos móveis**, pode enviar as transferências do Android para uma pasta à sua escolha e reduzir o menu de três pontos do navegador apenas às ações que utiliza. Esta versão também abre o WhatsApp Web e o Facebook Marketplace automaticamente no modo de computador.

## Escolha onde guardar as transferências

No Android, abra **Definições → Preferências → Transferências → Guardar transferências em** para definir onde ficam as transferências do navegador.

- **Transferências** utiliza a pasta padrão de Transferências do Android.
- **Perguntar sempre** permite-lhe escolher um destino para cada transferência.
- **Escolher pasta…** guarda as transferências futuras na pasta que selecionar.

Se escolher uma pasta, o Nora também a utiliza para os ficheiros multimédia guardados a partir do feed no Android 10 e posterior. Esta versão corrige ainda as transferências a partir de ligações `data:`, que alguns sites utilizam para ficheiros gerados no navegador.

<div class="screenshot-gallery" style="max-width: 24rem;">
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">Nora Downloads está selecionada como o destino para futuras transferências.</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/nora-0-9-7/download-destination.webp" alt="Definições de transferência do Android com Nora Downloads selecionada e as opções Transferências, Perguntar sempre e Escolher pasta visíveis" width="1080" height="2220" loading="lazy" />
    </div>
  </figure>
</div>

## Personalize o menu de três pontos

Abra **Definições → Aspeto → Barra de ferramentas → Personalizar menu de três pontos** e desative as ações que raramente utiliza. Por exemplo, mantenha **Procurar na página** e **Partilhar**, e oculte **Site para computador** se raramente alterna o esquema. As ações mantidas aparecem quando estão disponíveis no separador atual.

**Definições** permanece no menu e **Repor predefinições do menu** limpa as suas alterações com um toque.

<div class="screenshot-gallery">
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">Mantenha Procurar na página ativado e desative Site para computador.</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/nora-0-9-7/customize-three-dot-menu.webp" alt="Definições expandidas de Personalizar menu de três pontos com Procurar na página ativado e Site para computador desativado" width="1080" height="2220" loading="lazy" />
    </div>
  </figure>
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">O menu do navegador mantém Procurar na página, Partilhar e Definições.</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/nora-0-9-7/customized-three-dot-menu.webp" alt="Menu personalizado do navegador a mostrar Procurar na página, Partilhar e Definições, com Site para computador oculto" width="1080" height="2220" loading="lazy" />
    </div>
  </figure>
</div>

## WhatsApp Web e Facebook Marketplace abrem no modo de computador

No **WhatsApp Web**, o teclado no ecrã já pode abrir sem fechar o seletor. O **Facebook Marketplace** utiliza o site para computador para que possa enviar mensagens aos vendedores a partir de um anúncio.

## Correções de navegação e feed

- O bloqueio de anúncios do Facebook agora apanha publicações patrocinadas mesmo quando as respetivas etiquetas aparecem tardiamente. Premir longamente um botão de reação do Facebook deixa de mostrar o menu de contexto do navegador por cima.
- O filtro de jogos do Reddit mantém as publicações normais visíveis.
- O alternador de separadores abre com o seu separador ativo visível. Num novo separador, um endereço escrito abre no primeiro toque em **Ir**, e abrir uma ligação recebida preserva os seus outros separadores.
- Puxar para atualizar não interfere quando faz gestos dentro de um visualizador multimédia.

Consulte as [notas de lançamento no GitHub](https://github.com/nonbili/Nora/releases/tag/v0.9.7) para a lista completa de alterações.

## Obtenha o Nora

[Instale ou atualize o Nora](/pt/nora/install/) ou explore a [documentação do Nora](/pt/nora/) para saber mais.
