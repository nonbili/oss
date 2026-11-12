---
title: "Nora 0.9.3 : ouvrez vos téléchargements plus rapidement et naviguez plus facilement"
description: Ouvrez les téléchargements terminés depuis leurs notifications, faites défiler les carrousels sur Android et réduisez l'activité en arrière-plan et la mémoire.
sidebar:
  label: Sortie de Nora 0.9.3
  order: 5
---

*Publié le 31 octobre 2026*

**Nora 0.9.3 pour mobile** facilite l'accès aux fichiers enregistrés grâce à un raccourci directement placé dans la confirmation de téléchargement. Cette version corrige également les gestes de carrousel sur Android et réduit le travail effectué par Nora lorsque les pages ne sont plus consultées.

## Accéder directement à votre téléchargement

Sur **Android**, les confirmations de téléchargement incluent désormais un bouton **Ouvrir** permettant d'afficher le fichier enregistré dans une application compatible. L'enregistrement d'une photo ou d'une vidéo individuelle depuis le flux propose également cette action.

Enregistrez le fichier, puis utilisez le bouton du message de confirmation pour y accéder sans avoir à chercher dans vos Téléchargements.

## Faire défiler les carrousels sur Android

Le fait de balayer latéralement les photos d'une page pouvait déclencher par erreur le geste de tirage pour actualiser (pull-to-refresh). Nora distingue désormais précisément les balayages horizontaux des glissements verticaux, ce qui vous permet de parcourir un carrousel sans recharger la page.

## Moins d'activité en arrière-plan, meilleur nettoyage des onglets

Sur Android, Nora suspend les minuteurs WebView lorsque l'application passe en arrière-plan, ce qui limite la consommation inutile du processeur et de la batterie. Les mises à jour de progression des vidéos du flux ne s'exécutent également que lorsque les commandes de zoom en ont besoin.

Les onglets fermés et les fenêtres pop-up fermées libèrent désormais leurs WebViews de façon plus fiable sur Android, et les onglets fermés sont correctement libérés sur iOS. Cette mise à jour corrige également un problème sous Android où l'ouverture d'un lien dans un nouvel onglet pouvait afficher une page blanche.

Consultez les [notes de version sur GitHub](https://github.com/nonbili/Nora/releases/tag/v0.9.3) pour la liste complète des modifications.

## Obtenir Nora

[Installez ou mettez à jour Nora](/fr/nora/install/), ou explorez la [documentation de Nora](/fr/nora/) pour en savoir plus.
