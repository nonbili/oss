---
title: "Nori 0.2.9: Salve posts sociais, compartilhe cartões de imagem, ordene suas listas"
description: Guarde uma cópia legível de posts sociais para leitura offline, transforme favoritos em cartões de imagem e escolha uma ordem diferente para cada lista.
date: 2026-11-18
product: nori
---

Um favorito guarda o endereço. Com o **Nori 0.2.9 para dispositivos móveis**, você também pode guardar uma cópia legível de um post social. Esta versão também permite compartilhar favoritos como cartões de imagem e escolher como cada lista é ordenada.

## Guarde uma cópia do post

Quando você salva um post social compatível nos favoritos, o Nori tenta salvar automaticamente o conteúdo dele para leitura offline. Depois de salva, a cópia continua disponível quando você estiver sem conexão ou se o post original desaparecer.

Os serviços compatíveis incluem **X, Instagram, Threads, TikTok, Facebook, Bluesky, Reddit e Mastodon**. Dependendo do que o serviço disponibiliza, a cópia salva inclui o autor, o texto do post, as imagens anexadas e os posts citados ou relacionados. Você também pode copiar o texto do post.

**Vídeos e áudios são salvos como miniaturas de pré-visualização, não como downloads reproduzíveis offline.**

Alguns sites exigem login ou bloqueiam a busca automática. Se um post não for salvo, escolha **Salvar post da página**, faça login se o site pedir e toque em **Salvar** assim que o Nori encontrar o post.

No editor de favoritos, **Post salvo** mostra a data da sua cópia salva. Use **Atualizar** para buscá-lo novamente; se o site retornar menos conteúdo, o Nori mantém a cópia existente.

O salvamento automático fica ativado por padrão. Você pode desativá-lo em **Configurações → Geral → Salvar posts sociais offline**. Se você usa o **Nori Sync**, os posts salvos e suas imagens são sincronizados entre os seus dispositivos.

<div class="screenshot-gallery" style="max-width: 24rem;">
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">Um post salvo do Bluesky continua legível com sua imagem enquanto o celular está no modo avião.</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/nori-0-2-9/saved-social-post.png" alt="Nori exibindo um post salvo do Bluesky com autor, texto e imagem anexada, com o modo avião ativado" width="1080" height="2400" loading="lazy" />
    </div>
  </figure>
</div>

## Compartilhe mais do que um link

Encontrou algo que quer repassar? Abra o menu de ações de um favorito e escolha **Compartilhar como imagem**. O Nori transforma um favorito de página web ou um post social salvo em um cartão de imagem que você pode visualizar antes de enviar.

Escolha um fundo **claro ou escuro** e decida se quer incluir a **Nota** e as **Tags** do favorito, quando presentes. As notas começam ocultas, para que você possa escolher se compartilha o que escreveu para si mesmo.

Toque em **Compartilhar** para enviar o cartão pela folha de compartilhamento do seu dispositivo, ou toque no botão de download para **Salvar imagem** na sua biblioteca de fotos.

<div class="screenshot-gallery" style="max-width: 24rem;">
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">Visualize o cartão, escolha o que incluir e depois compartilhe ou salve a imagem.</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/nori-0-2-9/share-as-image.png" alt="Pré-visualização de Compartilhar como imagem com temas claro e escuro, controles de Nota e Tags, botão de download e botão Compartilhar" width="1080" height="2400" loading="lazy" />
    </div>
  </figure>
</div>

## Dê a cada lista a sua própria ordem

Mantenha uma fila de leitura na ordem em que deseja lê-la, coloque as novidades primeiro em outra lista e ordene alfabeticamente uma coleção de referência.

Abra **Editar lista**, ou crie uma **Nova lista**, e escolha **Ordem dos favoritos**:

- **Manual (arrastar para reordenar)** para uma ordem organizada por você.
- **Mais recentes primeiro** ou **Mais antigos primeiro** para ordenar por quando os favoritos foram adicionados.
- **Nome A–Z** ou **Nome Z–A** para ordenar por nome.

A escolha pertence àquela lista, para que suas outras listas possam manter sua própria ordem. Você também pode renomear a lista no mesmo editor.

<div class="screenshot-gallery" style="max-width: 24rem;">
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">Escolha uma ordem dos favoritos para a lista Reading queue.</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/nori-0-2-9/list-bookmark-order.png" alt="Editar lista para Reading queue com todas as cinco opções de Ordem dos favoritos visíveis" width="1080" height="2400" loading="lazy" />
    </div>
  </figure>
</div>

Esta versão também melhora a rolagem na gaveta **Todos os favoritos** no iOS e corrige um problema de sincronização. Veja as [notas de lançamento completas](https://github.com/nonbili/Nori/releases/tag/v0.2.9) para mais detalhes.

[Instale ou atualize o Nori](/pt-br/nori/install/), ou explore a [documentação do Nori](/pt-br/nori/).
