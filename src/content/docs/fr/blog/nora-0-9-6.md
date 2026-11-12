---
title: "Nora 0.9.6 : blocage des publicités dans les raccourcis d'écran d'accueil Android"
description: Utilisez le blocage des publicités et les menus de liens et d'images dans les raccourcis d'écran d'accueil Android, avec des correctifs pour la sélection de texte du flux, l'animation d'en-tête et les superpositions d'onglets.
sidebar:
  label: Sortie de Nora 0.9.6
  order: 2
---

*Publié le 12 novembre 2026*

**Nora 0.9.6 pour mobile** apporte le blocage des publicités ainsi que les menus de liens et d'images aux sites web ouverts depuis les raccourcis de l'écran d'accueil Android. Le lecteur de flux bénéficie également de correctifs pour la sélection de texte, le défilement et le changement d'onglets.

## Vos paramètres de blocage des publicités dans les raccourcis d'écran d'accueil

Sur **Android**, les sites enregistrés avec l'action **Ajouter à l'écran d'accueil** de Nora s'ouvrent dans une fenêtre indépendante. Ces fenêtres appliquent désormais les paramètres de blocage des publicités de Nora, qu'il s'agisse du blocage réseau ou des règles masquant les éléments publicitaires sur la page.

Pour essayer cette fonctionnalité, ouvrez un site dans Nora, choisissez **Ajouter à l'écran d'accueil** dans le menu de la page, puis lancez le raccourci depuis votre lanceur d'applications. Vos règles de blocage configurées y seront appliquées.

## Appui long sur les liens et les images

Les raccourcis de l'écran d'accueil Android intègrent désormais des menus contextuels :

- **Appui long sur un lien** pour copier son adresse ou l'ouvrir dans un nouvel onglet Nora.
- **Appui long sur une image** pour l'enregistrer, copier son adresse ou l'ouvrir dans un nouvel onglet Nora.

Vous pouvez poursuivre votre lecture dans la fenêtre autonome et transmettre un lien à Nora chaque fois que vous souhaitez le consulter dans un onglet dédié.

<div class="screenshot-gallery" style="max-width: 24rem;">
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">Un appui long sur une image dans un raccourci d'écran d'accueil Android ouvre les actions d'image de Nora.</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/nora-0-9-6/shortcut-image-menu.png" alt="Raccourci Android autonome de Nora affichant les actions Enregistrer l'image, Ouvrir l'image dans un nouvel onglet et Copier le lien de l'image" width="1080" height="2220" loading="lazy" />
    </div>
  </figure>
</div>

## Lecture plus fluide dans le flux

Cette mise à jour résout également trois problèmes d'interaction dans le lecteur de flux intégré de Nora :

- **Sélection de texte :** La sélection de texte dans les descriptions de publication est bien plus stable.
- **Animation de l'en-tête :** L'en-tête du flux s'anime de manière fluide lors de son repliement et de son déploiement.
- **Superpositions lors du changement d'onglets :** Les superpositions du flux restent rattachées à l'onglet qui les a ouvertes, évitant d'apparaître au-dessus d'un autre onglet.

Vous découvrez le lecteur de flux ? L'[introduction à Nora 0.9.0](/fr/blog/nora-0-9-0/) détaille le fonctionnement des sources, des fils et de la grille multimédia.

Consultez les [notes de version sur GitHub](https://github.com/nonbili/Nora/releases/tag/v0.9.6) pour la liste complète des modifications.

## Obtenir Nora

[Installez ou mettez à jour Nora](/fr/nora/install/), ou explorez la [documentation de Nora](/fr/nora/) pour en savoir plus.
