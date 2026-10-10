---
title: Foire aux questions (FAQ)
description: Questions courantes sur NouTube extraites des tickets GitHub.
sidebar:
  order: 9
---
Cette page résume les questions récurrentes des utilisateurs provenant du suivi public des tickets GitHub.

## Problèmes de connexion

Google refuse souvent la connexion depuis les applications qui intègrent une page web. La connexion dans NouTube peut donc échouer aussi bien sur Android que sur ordinateur, généralement avec l'erreur « Ce navigateur ou cette application ne sont peut-être pas sécurisés ». Sur ordinateur, si aucun bouton `Se connecter` n'est visible, essayez d'abord d'ouvrir le menu `Vos données dans YouTube`.

Si vous ne parvenez pas à vous connecter, utilisez plutôt la fonctionnalité **Inject cookie** :

1. Sur un ordinateur, connectez-vous à YouTube dans Chrome ou un autre navigateur basé sur Chromium, puis exportez vos cookies YouTube avec une extension de navigateur (comme `getcookies.txt`).
2. Sur Android, copiez le fichier exporté sur votre appareil.
3. Dans NouTube, ouvrez **Settings > Tools > Inject cookie**, importez le fichier (ou collez son contenu), puis enregistrez.

Cette méthode contourne la vérification de navigateur sécurisé de Google et constitue actuellement la solution la plus fiable aux problèmes de connexion, sur Android comme sur ordinateur.

Sources :

- [Issue #142: Can't login to Google on Windows app](https://github.com/nonbili/NouTube/issues/142)

## Pourquoi la dernière mise à jour n'est-elle pas encore disponible sur F-Droid ?

Le calendrier de publication sur F-Droid n'est pas géré par les mainteneurs de NouTube. F-Droid compile et publie les mises à jour de manière indépendante par lots, ce qui prend généralement plusieurs jours après la sortie d'une nouvelle version sur GitHub.

Si vous souhaitez obtenir la dernière version immédiatement, vous pouvez télécharger l'APK depuis la page [GitHub Releases](https://github.com/nonbili/NouTube/releases). Veuillez toutefois noter que les versions GitHub utilisent une clé de signature différente de celle de F-Droid ; vous devez donc d'abord désinstaller la version F-Droid avant d'installer l'APK depuis GitHub.

Sources :

- [Issue #16: Update request](https://github.com/nonbili/NouTube/issues/16)
- [Issue #14: Bug: rotate to landscape resets app to home page](https://github.com/nonbili/NouTube/issues/14)

## YouTube Music ne se charge pas correctement

Si YouTube Music ne se charge pas correctement, essayez d'activer **Version pour ordinateur (Desktop site)** dans le menu de l'application.

Source :

- [Issue #150: Noutube Music Error Message, Not Loading.](https://github.com/nonbili/NouTube/issues/150)

## NouTube rouvre une file d'attente au lieu de la page d'accueil

Si NouTube continue de restaurer la lecture ou s'ouvre sur un ancien élément au lieu de la page d'accueil, vérifiez si l'icône de la file d'attente est toujours active. Dans le fil de discussion, le mainteneur a identifié une file d'attente non effacée comme la raison pour laquelle NouTube continuait d'essayer de reprendre la lecture.

Source :

- [Issue #138: Restoring playback](https://github.com/nonbili/NouTube/issues/138)

## Où dois-je signaler les bogues ou demander des fonctionnalités ?

Utilisez le dépôt GitHub :

- [Tickets nonbili/NouTube](https://github.com/nonbili/NouTube/issues)
