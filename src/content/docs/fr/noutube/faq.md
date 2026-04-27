---
title: Foire aux questions (FAQ)
description: Questions courantes sur NouTube extraites des tickets GitHub.
sidebar:
  order: 9
---
Cette page résume les questions récurrentes des utilisateurs provenant du suivi public des tickets GitHub.

## Problèmes de connexion sur bureau

Si l'application de bureau n'affiche pas de bouton `Se connecter` visible, essayez d'abord d'ouvrir le menu `Vos données dans YouTube`. Si la page de connexion s'ouvre mais que vous recevez une erreur "le navigateur ou l'application n'est peut-être pas sécurisé", utilisez la fonction **Injecter un cookie (Inject cookie)** :

1. Utilisez une extension de navigateur (comme `getcookies.txt`) pour exporter vos cookies YouTube.
2. Importez les cookies dans NouTube en utilisant le bouton **Injecter un cookie (Inject cookie)**.

Cette méthode contourne la vérification du navigateur sécurisé de Google et constitue actuellement le correctif le plus fiable pour les problèmes de connexion sur bureau.

Sources :

- [Issue #142: Can't login to Google on Windows app](https://github.com/nonbili/NouTube/issues/142)

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
