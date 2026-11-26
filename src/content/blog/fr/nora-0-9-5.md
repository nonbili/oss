---
title: "Nora 0.9.5 : connexion proxy et un X plus épuré"
description: Connectez-vous aux proxys sur Android et iOS 17 ou version ultérieure, choisissez ce qu'il faut masquer sur X, ouvrez les recherches sur Récents par défaut et gardez les posts Facebook ordinaires visibles.
date: 2026-11-06
product: nora
---

**Nora 0.9.5 pour mobile** intègre des champs de nom d'utilisateur et de mot de passe pour les proxys sur mobile et offre un meilleur contrôle sur l'affichage de X. Cette version améliore également le filtrage publicitaire sur Facebook et l'importation des cookies de navigation.

## Se connecter à votre proxy sur mobile

Ouvrez **Paramètres → Navigation → Proxy** pour sélectionner HTTP ou SOCKS, renseignez l'hôte et le port, puis saisissez votre nom d'utilisateur et votre mot de passe. Les proxys authentifiés sont pris en charge sur **Android** et **iOS 17 ou version ultérieure**, aussi bien pour la navigation web que pour les requêtes du flux.

Les identifiants restent stockés localement sur l'appareil et sont exclus des sauvegardes et de la synchronisation. Sur iOS 16, la prise en charge des proxys reste limitée aux requêtes de flux HTTP non authentifiées.

## Choisir ce qu'il faut masquer sur X

Dans **Paramètres → Services → X**, vous pouvez désormais choisir de masquer :

- **Interface Grok**, pour retirer les composants graphiques liés à Grok.
- **Recommandations**, incluant « Suggestions », les tendances et « Découvrir plus ».
- **Compteurs d'engagement**, pour un fil débarrassé des chiffres qui sollicitent l'attention.

Ces options sont facultatives. La même section des paramètres propose également l'option **Rechercher par défaut dans Récents**, permettant d'afficher d'emblée les publications récentes plutôt que les résultats Populaires. Vous pouvez toujours changer d'onglet de recherche sur X dès que vous le souhaitez.

![Paramètres X de Nora sur un smartphone Pixel montrant les réglages optionnels pour Grok, recommandations, compteurs d\'engagement et recherche Récente](/blog/nora-0-9-5/x-settings.webp "Contrôles de X dans Nora sur Android : choisissez les éléments d'interface à masquer et si les recherches s'ouvrent dans Récents.")

## Garder les posts Facebook ordinaires visibles

Le filtrage des publicités Facebook analyse désormais directement l'étiquette de contenu sponsorisé. Les publications ordinaires qui mentionnent simplement des mots comme « Ad » ou « 広告 » risquent beaucoup moins d'être masquées par inadvertance.

## Importation de cookies plus fiable

L'importation de cookies de navigateur préserve désormais les noms commençant par `__Host-` et `__Secure-`. Le maintien intact de ces préfixes aide les sites web à reconnaître correctement la session importée.

Consultez les [notes de version sur GitHub](https://github.com/nonbili/Nora/releases/tag/v0.9.5) pour la liste complète des modifications.

## Obtenir Nora

[Installez ou mettez à jour Nora](/fr/nora/install/), ou explorez la [documentation de Nora](/fr/nora/) pour en savoir plus.
