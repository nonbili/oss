---
title: Nori
description: Présentation de Nori et de son modèle de gestion et de lancement de favoris.
sidebar:
  order: 1
---
<div class="product-overview-header">
  <img class="product-overview-header__logo" src="/app-logos/nori.png" alt="Logo Nori" />
  <p class="product-overview-header__meta">Android, iOS, bureau et extension</p>
</div>

Nori est un gestionnaire et lanceur de favoris open-source conçu pour un accès quotidien et rapide sur appareils mobiles, ordinateurs de bureau et navigateurs web.

Au lieu d'enfouir vos liens dans des arborescences de dossiers complexes ou des écosystèmes fermés, Nori organise vos favoris dans des listes claires et ciblées avec ouverture instantanée, recherche, cartes d'aperçu visuelles et intégration du menu de partage.

## Points forts

- Plusieurs listes de favoris personnalisées
- Ouverture instantanée dans le navigateur par défaut du système ou dans des onglets personnalisés natifs (Custom Tabs)
- Enregistrement des URL partagées depuis n'importe quelle application avec sélection de liste et options d'enregistrement rapide
- Mode lanceur compact et mode aperçu avec cartes visuelles et images de couverture des sites
- Tiroir de recherche rapide avec filtrage par mot-clé et étiquette
- Historique des lancements récents et des ajouts récents
- Importation et exportation via des fichiers de favoris HTML standard, texte brut et sauvegardes JSON complètes
- Apparence personnalisable : Clair, Sombre, AMOLED et couleurs d'accent personnalisées
- Extension de navigateur locale (Local-First) pour Chrome et Firefox
- Application de bureau multiplateforme pour Linux, macOS et Windows
- Synchronisation multi-appareils facultative via Nori Sync

## Plateformes

- **Android** : Disponible sur Google Play et en téléchargement direct d'APK sur GitHub.
- **iOS** : Disponible sur l'App Store pour iPhone et iPad.
- **Bureau** : Applications natives autonomes pour Linux (AppImage & tarball), macOS (Apple Silicon & Intel) et Windows.
- **Extension de navigateur** : Extension Manifest V3 pour Mozilla Firefox et Google Chrome.

## Première utilisation

Une configuration initiale recommandée :

1. Créez quelques listes pour vos catégories de liens courantes (par ex. `Quotidien`, `Outils`, `Lecture`, `Travail`).
2. Ajoutez vos liens principaux ou importez vos favoris existants depuis l'export HTML de votre navigateur.
3. Testez l'ouverture d'un favori pour vérifier que votre navigateur par défaut ouvre bien les liens.
4. Partagez une page web depuis votre navigateur mobile vers Nori via le menu de partage du système.
5. Personnalisez les paramètres d'apparence, tels que le mode sombre ou votre couleur d'accent préférée.

## Comment ça marche

Nori dissocie votre collection de favoris des moteurs de navigateur spécifiques :

- Sur Android, les favoris s'ouvrent via Custom Tabs avec `expo-web-browser` ou basculent directement vers votre navigateur par défaut.
- Sur iOS, les favoris s'ouvrent via la feuille de navigateur native Safari View Controller ou le navigateur par défaut du système.
- Sur le bureau et l'extension, les favoris s'ouvrent directement dans les onglets de votre navigateur actif.

Cette approche garantit que vous conservez vos bloqueurs de publicités, vos sessions connectées et vos profils de navigation, tout en gardant tous vos liens organisés dans un lanceur rapide et consultable.

## En savoir plus

Pour le code source, les versions et le suivi des problèmes, consultez le dépôt GitHub :

- [nonbili/Nori](https://github.com/nonbili/Nori)

Poursuivez avec [Installation](/fr/nori/install/) pour obtenir les liens vers les stores, les APK, les téléchargements bureau et les paquets d'extension.
