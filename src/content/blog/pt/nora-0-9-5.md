---
title: "Nora 0.9.5: Início de sessão em proxy e um X mais tranquilo"
description: Inicie sessão em proxies no Android e iOS 17 ou posterior, escolha o que ocultar no X, predefina as pesquisas para Mais recentes e mantenha as publicações normais do Facebook visíveis.
date: 2026-11-06
product: nora
---

O **Nora 0.9.5 para telemóvel** adiciona campos de nome de utilizador e palavra-passe de proxy no telemóvel e mais controlo sobre o que aparece no X. Também melhora a filtragem de anúncios do Facebook e as importações de cookies do navegador.

## Iniciar sessão no seu proxy no telemóvel

Abra **Definições → Navegação → Proxy** para escolher HTTP ou SOCKS, introduzir o anfitrião e a porta, e fornecer o seu nome de utilizador e palavra-passe. Proxies autenticados são suportados no **Android** e **iOS 17 ou posterior**, tanto para navegação como para pedidos de feed.

As credenciais permanecem no dispositivo e são excluídas das cópias de segurança e da sincronização. No iOS 16, o suporte de proxy continua limitado a pedidos HTTP não autenticados para feeds.

## Escolher o que ocultar no X

Em **Definições → Serviços → X**, pode agora escolher ocultar:

- **Interface Grok**, para remover os elementos da interface do Grok.
- **Recomendações**, incluindo Quem seguir, tendências e Descobrir mais.
- **Contagens de interação**, para uma linha cronológica com menos números a competir pela atenção.

Estes controlos são opcionais. A mesma secção de definições também disponibiliza **Predefinir pesquisa para Mais recentes**, para que as pesquisas abram com publicações recentes em vez dos resultados Principais. Pode continuar a mudar de separador de pesquisa no X quando quiser uma vista diferente.

<div class="screenshot-gallery" style="max-width: 24rem;">
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">Controlos do X no Nora no Android: escolha que elementos da interface ocultar e se as pesquisas abrem em Mais recentes.</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/nora-0-9-5/x-settings.png" alt="Definições do X no Nora num telemóvel Pixel, a mostrar controlos opcionais para Grok, recomendações, contagem de interações e pesquisa Mais recentes" width="1080" height="2220" loading="lazy" />
    </div>
  </figure>
</div>

## Manter as publicações normais do Facebook visíveis

A filtragem de anúncios do Facebook verifica agora a própria etiqueta de patrocinado. É menos provável que publicações normais que mencionem “Ad” ou “広告” sejam ocultadas por engano.

## Importações de cookies mais fiáveis

A importação de cookies do navegador preserva agora nomes que começam por `__Host-` e `__Secure-`. Manter esses prefixos intactos ajuda os sites a reconhecer corretamente a sessão importada.

Consulte as [notas de lançamento no GitHub](https://github.com/nonbili/Nora/releases/tag/v0.9.5) para obter a lista completa de alterações.

## Obter o Nora

[Instale ou atualize o Nora](/pt/nora/install/), ou explore a [documentação do Nora](/pt/nora/) para saber mais.
