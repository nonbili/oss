---
title: Foire aux questions (FAQ)
description: Questions courantes sur NouTube extraites des tickets GitHub.
---
Cette page résume les questions récurrentes des utilisateurs provenant du suivi public des tickets GitHub.

## Le bouton de connexion sur bureau est manquant ou la connexion semble bloquée

Si l'application de bureau n'affiche pas de bouton `Se connecter` visible, essayez d'abord d'ouvrir le menu `Vos données dans YouTube`. Dans la discussion du ticket, ce chemin a permis aux utilisateurs concernés d'accéder au flux de connexion, et le mainteneur a déclaré plus tard que le bouton visible devrait être de retour dans la `v0.1.6`.

Sources :

- [Issue #46: desktop version never logs in always error](https://github.com/nonbili/NouTube/issues/46)

## La connexion sur bureau échoue toujours même lorsque la page de connexion s'ouvre

Il a été signalé que certaines configurations de bureau échouent toujours à la connexion Google même après avoir effacé les données. Le fil de discussion ne s'est pas terminé par un correctif universel confirmé, les conseils pratiques sont donc les suivants :

- mettre à jour vers la dernière version de bureau
- effacer les données de webview/profil de l'application si vous avez déjà essayé de vous connecter
- si cela échoue toujours, signalez votre système d'exploitation, le format du package et des captures d'écran sur GitHub

Source :

- [Issue #103: Unable to login from desktop client](https://github.com/nonbili/NouTube/issues/103)

## YouTube Music ne se charge pas correctement

Un chemin de dépannage documenté était le suivant :

1. Assurez-vous que `NouTube` est l'application par défaut pour `music.youtube.com`.
2. Si l'application officielle YouTube Music est installée, supprimez d'abord sa gestion des liens par défaut.
3. Si le problème persiste, essayez un user agent personnalisé via `Paramètres > Outils > User agent personnalisé`.

Ce conseil provient directement du mainteneur dans le fil de discussion. C'est une solution de contournement, pas un correctif garanti pour chaque appareil.

Source :

- [Issue #150: Noutube Music Error Message, Not Loading.](https://github.com/nonbili/NouTube/issues/150)

## Certaines publicités passent encore

Il a été signalé que de courtes publicités YouTube Premium apparaissaient avant les vidéos. Le mainteneur a orienté les utilisateurs vers la `v0.4.9`, ce qui implique que des correctifs de blocage publicitaire ont été publiés dans des versions ultérieures. Si vous voyez des publicités :

- mettez à jour vers la dernière version depuis F-Droid ou GitHub
- si le problème persiste, ouvrez un nouveau ticket avec la version de l'application et une capture d'écran

Source :

- [Issue #117: Ad not blocked](https://github.com/nonbili/NouTube/issues/117)

## NouTube rouvre une file d'attente au lieu de la page d'accueil

Si NouTube continue de restaurer la lecture ou s'ouvre sur un ancien élément au lieu de la page d'accueil, vérifiez si l'icône de la file d'attente est toujours active. Dans le fil de discussion, le mainteneur a identifié une file d'attente non effacée comme la raison pour laquelle NouTube continuait d'essayer de reprendre la lecture.

Source :

- [Issue #138: Restoring playback](https://github.com/nonbili/NouTube/issues/138)

## Où dois-je signaler les bogues ou demander des fonctionnalités ?

Utilisez le dépôt GitHub :

- [Tickets nonbili/NouTube](https://github.com/nonbili/NouTube/issues)
