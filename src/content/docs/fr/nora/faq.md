---
title: FAQ
description: Questions courantes sur Nora extraites des tickets GitHub.
---
Cette page résume les questions récurrentes des utilisateurs provenant du suivi public des tickets GitHub.

## Nora peut-il ouvrir directement des liens Instagram ou Facebook depuis d'autres applications ?

Oui, c'est prévu pour fonctionner. Le mainteneur a indiqué que vous pourriez avoir besoin de :

- activer le comportement `Ouvrir par défaut` d'Android pour Nora
- désinstaller ou désactiver l'application officielle si elle continue de revendiquer les mêmes liens
- mettre à jour Nora vers une version plus récente si les liens profonds ouvrent l'application mais pas la publication demandée

Source :

- [Issue #51: Support opening links in Nora](https://github.com/nonbili/Nora/issues/51)

## Instagram ne s'ouvre pas dans Nora

Un ticket actuellement ouvert montre que certains utilisateurs rencontrent toujours une page d'erreur Instagram même après avoir essayé de recharger, d'utiliser le mode site de bureau et d'effacer les données du webview. Cela signifie qu'il n'y a pas encore de correctif confirmé. Si cela se produit sur votre appareil :

- essayez de recharger
- essayez le mode site de bureau
- effacez les données webview de Nora
- si cela échoue toujours, vérifiez les mises à jour sur GitHub ou ajoutez les détails de votre appareil au ticket

Source :

- [Issue #147: Issue when trying to open Instagram](https://github.com/nonbili/Nora/issues/147)

## Les médias continuent de jouer après avoir quitté l'application

Cela a été signalé pour l'audio d'Instagram qui continue en arrière-plan sans contrôles utiles. Le mainteneur a répondu que cela serait corrigé dans la prochaine version, donc la première chose à faire est de mettre à jour Nora vers la version la plus récente disponible sur votre store ou canal de diffusion.

Source :

- [Issue #119: can you make it stop playing in background ? pls](https://github.com/nonbili/Nora/issues/119)

## Puis-je télécharger des images ou des vidéos ?

Oui, au moins une partie de cela est déjà prise en charge :

- appuyez longuement sur une image pour afficher le menu de téléchargement
- les téléchargements de Reels Facebook et Instagram étaient déjà pris en charge lors de la discussion du ticket
- la prise en charge du téléchargement de vidéos X a été ajoutée par la suite

Source :

- [Issue #153: download](https://github.com/nonbili/Nora/issues/153)

## Pourquoi la connexion à X échoue-t-elle ?

La discussion du ticket suggère que la connexion normale par e-mail/mot de passe devrait fonctionner, tandis que la connexion via Google dans un webview nécessitait un travail supplémentaire. Le mainteneur a déclaré plus tard qu'un menu `Inject cookie` avait été ajouté dans la `v0.1.5` comme solution de contournement pour les utilisateurs concernés.

Source :

- [Issue #1: Unable to sign in to X](https://github.com/nonbili/Nora/issues/1)

## Puis-je utiliser les extensions de mon navigateur comme uBlock Origin ou Dark Reader dans Nora ?

Pas de la même manière que dans un profil de navigateur complet. Dans la discussion sur la demande de fonctionnalité, le mainteneur a orienté les utilisateurs vers la propre prise en charge du CSS personnalisé de Nora pour les modifications d'interface plutôt que de promettre la prise en charge des extensions de navigateur intégrées.

Source :

- [Issue #96: Open the socials in the webview provided by browser](https://github.com/nonbili/Nora/issues/96)

## Où dois-je signaler les bogues ou demander des fonctionnalités ?

Utilisez le dépôt GitHub :

- [Tickets nonbili/Nora](https://github.com/nonbili/Nora/issues)
