---
title: Extension de navigateur
description: Utiliser l'extension de navigateur Nori sur Firefox et Chrome.
sidebar:
  order: 5
---

Nori propose une extension de navigateur locale (Local-First) pour Mozilla Firefox et Google Chrome.

## Fonctionnalités clés

- **Expérience mobile fidèle** : La fenêtre contextuelle de l'extension offre les mêmes listes, tiroir de recherche, historique, gestion des listes et paramètres que l'application mobile.
- **Ajout en un clic** : Enregistrez instantanément l'onglet actif dans la liste de votre choix avec récupération automatique du titre.
- **Lanceur rapide** : Recherchez et ouvrez vos favoris dans de nouveaux onglets directement depuis la barre d'outils du navigateur.
- **Stockage local** : Enregistre les favoris localement dans l'espace de stockage de l'extension avec prise en charge facultative de Nori Sync.
- **Respect de la vie privée** : Aucune activité de navigation ni aucun contenu de page n'est suivi. Nori ne reçoit que les liens que vous choisissez d'enregistrer.

## Installer l'extension

Installez Nori directement depuis les magasins d'extensions officiels :

- [Modules Firefox](https://addons.mozilla.org/addon/nori/)
- [Chrome Web Store](https://chromewebstore.google.com/detail/nori/ojgmnocnegcbhlmfoackgoocnjbfejpg)

## Compiler depuis les sources

L'extension est open-source et développée avec [WXT](https://wxt.dev/) selon la norme Manifest V3 :

```bash
cd extension
bun install
bun run dev          # Mode développement Chrome
bun run dev:firefox  # Mode développement Firefox
bun run build:all    # Création des paquets zip de production
```
