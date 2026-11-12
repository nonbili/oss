---
title: "Nora 0.9.5: Login em proxy e um X mais tranquilo"
description: Faça login em proxies no Android e no iOS 17 ou posterior, escolha o que ocultar no X, padronize buscas para Mais recentes e mantenha posts comuns do Facebook visíveis.
date: 2026-11-06
product: nora
---

O **Nora 0.9.5 para dispositivos móveis** inclui campos para nome de usuário e senha de proxy no celular e dá mais controle sobre o que é exibido no X. Também aprimora a filtragem de anúncios no Facebook e a importação de cookies do navegador.

## Entre no seu proxy no celular

Abra **Configurações → Navegação → Proxy** para escolher HTTP ou SOCKS, informar o host e a porta e inserir seu usuário e senha. Servidores proxy autenticados são suportados no **Android** e no **iOS 17 ou posterior**, tanto para navegação quanto para requisições de feeds.

As credenciais ficam salvas localmente no dispositivo e não entram em backups ou sincronização. No iOS 16, o suporte a proxy continua limitado a requisições de feed HTTP não autenticadas.

## Escolha o que ocultar no X

Em **Configurações → Serviços → X**, você agora pode optar por ocultar:

- **Interface do Grok**, para remover elementos visuais do Grok.
- **Recomendações**, incluindo «Quem seguir», tópicos em alta e «Descubra mais».
- **Contadores de engajamento**, para uma linha do tempo com menos números disputando atenção.

Essas opções são de uso voluntário. A mesma seção de ajustes oferece a opção **Busca padrão em Mais recentes**, para que as pesquisas abram com publicações recentes em vez de destaques. Você ainda pode trocar de aba de busca no X sempre que desejar outra visualização.

<div class="screenshot-gallery" style="max-width: 24rem;">
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">Controles do X no Nora para Android: escolha quais elementos visuais ocultar e se as buscas devem abrir em Mais recentes.</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/nora-0-9-5/x-settings.png" alt="Ajustes do X no Nora em um Pixel mostrando opções do Grok, recomendações, contadores de engajamento e busca Mais recentes" width="1080" height="2220" loading="lazy" />
    </div>
  </figure>
</div>

## Mantenha posts comuns do Facebook visíveis

A filtragem de publicidade no Facebook agora analisa diretamente a etiqueta de patrocinado. Posts normais que por acaso contêm termos como «Ad» ou «広告» têm muito menos chances de serem ocultados por engano.

## Importação de cookies mais confiável

A importação de cookies do navegador agora preserva nomes iniciados por `__Host-` e `__Secure-`. Manter esses prefixos intactos ajuda as páginas a reconhecerem a sessão importada sem erros.

Consulte as [notas de lançamento no GitHub](https://github.com/nonbili/Nora/releases/tag/v0.9.5) para ver a lista completa de alterações.

## Obtenha o Nora

[Instale ou atualize o Nora](/pt-br/nora/install/) ou explore a [documentação do Nora](/pt-br/nora/) para saber mais.
