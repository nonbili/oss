---
title: "Nora 0.9.4 : liens X plus propres et téléchargements plus fiables"
description: Supprimez les jetons de partage des liens de posts X, débloquez les téléchargements vidéo bloqués sur Analyse et conservez les noms de fichiers et les commandes plein écran TikTok.
date: 2026-11-03
product: nora
---

Un lien copié vers un post doit être facile à partager, et le téléchargement d'une vidéo doit franchir sans encombre l'étape d'**Analyse**. **Nora 0.9.4 pour mobile** répond à ces deux attentes grâce à un ensemble ciblé de correctifs pour le partage de liens, l'enregistrement de fichiers et la lecture de vidéos TikTok.

## Partager des liens X sans jetons superflus

Nora supprime désormais les paramètres de partage de X tels que `s` et `t` lorsque vous copiez ou partagez le lien d'un post. Par exemple :

```text
Before: https://x.com/nonbili/status/1234567890?s=20&t=example
After:  https://x.com/nonbili/status/1234567890
```

L'adresse du post reste intacte ; seuls les jetons de suivi de partage sont retirés. Ce nettoyage s'applique uniquement aux URL de posts X et Twitter, préservant ainsi d'éventuels paramètres courts identiques sur d'autres sites web.

## Dépasser l'étape « Analyse » lors de l'enregistrement de vidéos

Certains téléchargements de vidéos pouvaient rester bloqués à l'étape d'**Analyse** (Parsing) avant même de commencer. Cette version corrige cette défaillance afin que les téléchargements concernés puissent se dérouler normalement.

Les fichiers créés par une page web via une URL `blob:` conservent également leur nom de fichier d'origine lorsque celui-ci est disponible. Cela facilite grandement l'identification ultérieure des fichiers enregistrés.

## Rétablir les commandes plein écran de TikTok

Les commandes plein écran de Nora pour TikTok pouvaient ne pas apparaître lorsque le script de la page s'exécutait avant que le corps du document soit entièrement prêt. Les commandes prennent désormais en compte cet ordre de chargement, ce qui garantit l'affichage normal du bouton plein écran.

Consultez les [notes de version sur GitHub](https://github.com/nonbili/Nora/releases/tag/v0.9.4) pour la liste complète des modifications.

## Obtenir Nora

[Installez ou mettez à jour Nora](/fr/nora/install/), ou explorez la [documentation de Nora](/fr/nora/) pour en savoir plus.
