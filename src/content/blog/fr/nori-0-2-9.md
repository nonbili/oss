---
title: "Nori 0.2.9 : Conservez les publications sociales, partagez des cartes image, triez vos listes"
description: Conservez une copie lisible des publications sociales pour une lecture hors ligne, transformez vos favoris en cartes image et choisissez un ordre de tri différent pour chaque liste.
date: 2026-11-18
product: nori
---

Un favori conserve l'adresse. Avec **Nori 0.2.9 pour mobile**, vous pouvez aussi garder une copie lisible d'une publication sociale. Cette version vous permet également de partager des favoris sous forme de cartes image et de choisir comment chaque liste est triée.

## Conserver une copie de la publication

Lorsque vous ajoutez une publication sociale prise en charge aux favoris, Nori tente automatiquement d'en enregistrer le contenu pour une lecture hors ligne. Une fois enregistrée, la copie reste accessible sans connexion ou si la publication d'origine disparaît.

Les services pris en charge incluent **X, Instagram, Threads, TikTok, Facebook, Bluesky, Reddit et Mastodon**. Selon ce que propose le service, la copie enregistrée inclut l'auteur, le texte de la publication, les images jointes ainsi que les publications citées ou associées. Vous pouvez aussi copier le texte de la publication.

**Les vidéos et l'audio sont enregistrés sous forme de miniatures d'aperçu, et non en tant que téléchargements lisibles hors ligne.**

Certains sites exigent une connexion ou bloquent la récupération automatique. Si une publication ne s'enregistre pas, choisissez **Enregistrer la publication depuis la page**, connectez-vous si le site le demande, puis touchez **Enregistrer** dès que Nori détecte la publication.

Dans l'éditeur de favoris, **Publication enregistrée** affiche la date de votre copie enregistrée. Utilisez **Actualiser** pour la récupérer de nouveau ; si le site renvoie moins de contenu, Nori conserve la copie existante.

L'enregistrement automatique est activé par défaut. Vous pouvez le désactiver dans **Paramètres → Général → Enregistrer les publications sociales hors ligne**. Si vous utilisez **Nori Sync**, les publications enregistrées et leurs images sont synchronisées sur tous vos appareils.

<div class="screenshot-gallery" style="max-width: 24rem;">
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">Une publication Bluesky enregistrée reste lisible avec son image lorsque le téléphone est en mode avion.</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/nori-0-2-9/saved-social-post.webp" alt="Nori affichant une publication Bluesky enregistrée avec l'auteur, le texte et l'image jointe, avec le mode avion activé" width="1080" height="2400" loading="lazy" />
    </div>
  </figure>
</div>

## Partager bien plus qu'un lien

Vous avez trouvé quelque chose à transmettre ? Ouvrez le menu d'actions d'un favori et choisissez **Partager en image**. Nori transforme un favori de page web ou une publication sociale enregistrée en une carte image que vous pouvez prévisualiser avant l'envoi.

Choisissez un arrière-plan **clair ou sombre** et décidez d'inclure ou non la **Note** et les **Étiquettes** du favori, lorsqu'elles sont présentes. Les notes sont masquées par défaut afin que vous puissiez choisir de partager ou non ce que vous avez écrit pour vous-même.

Touchez **Partager** pour envoyer la carte via la feuille de partage de votre appareil, ou touchez le bouton de téléchargement pour **Enregistrer l'image** dans votre photothèque.

<div class="screenshot-gallery" style="max-width: 24rem;">
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">Prévisualisez la carte, choisissez quoi inclure, puis partagez ou enregistrez l'image.</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/nori-0-2-9/share-as-image.webp" alt="Aperçu de Partager en image avec thèmes clair et sombre, contrôles Note et Étiquettes, bouton de téléchargement et bouton Partager" width="1080" height="2400" loading="lazy" />
    </div>
  </figure>
</div>

## Donner à chaque liste son propre ordre

Gardez une file de lecture dans l'ordre où vous souhaitez la parcourir, placez les dernières trouvailles en premier dans une autre liste et triez une collection de référence par ordre alphabétique.

Ouvrez **Modifier la liste**, ou créez une **Nouvelle liste**, puis choisissez **Ordre des favoris** :

- **Manuel (glisser pour réorganiser)** pour un ordre que vous organisez vous-même.
- **Plus récents d'abord** ou **Plus anciens d'abord** pour trier selon la date d'ajout des favoris.
- **Nom A–Z** ou **Nom Z–A** pour trier par nom.

Ce choix s'applique uniquement à cette liste, de sorte que vos autres listes conservent leur propre ordre. Vous pouvez aussi renommer la liste dans le même éditeur.

<div class="screenshot-gallery" style="max-width: 24rem;">
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">Choisissez un ordre des favoris pour la liste Reading queue.</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/nori-0-2-9/list-bookmark-order.webp" alt="Modifier la liste pour Reading queue avec les cinq options d'ordre des favoris visibles" width="1080" height="2400" loading="lazy" />
    </div>
  </figure>
</div>

Cette version améliore également le défilement dans le tiroir **Tous les favoris** sur iOS et corrige un problème de synchronisation. Consultez les [notes de version complètes](https://github.com/nonbili/Nori/releases/tag/v0.2.9) pour plus de détails.

[Installer ou mettre à jour Nori](/fr/nori/install/), ou explorer la [documentation de Nori](/fr/nori/).
