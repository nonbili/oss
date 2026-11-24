---
title: "NouTube 0.7.11 ajoute une barre d’outils Android personnalisable et le téléchargement de vidéos sur iOS"
description: Placez vos actions préférées dans la barre d’outils Android, balayez pour passer en plein écran, masquez les commentaires YouTube et enregistrez des vidéos sur iPhone et iPad.
date: 2026-11-24
product: noutube
---

NouTube 0.7.11 vous permet de placer des actions comme **Partager** et **Ouvrir l’URL** directement dans la barre d’outils Android. Sur iPhone et iPad, vous pouvez désormais télécharger les vidéos compatibles depuis **Outils**, et les vidéos démarrent plus vite. Cette mise à jour mobile ajoute aussi des gestes de balayage pour le plein écran et un réglage pour masquer les commentaires YouTube.

## Placez vos actions les plus utilisées dans la barre d’outils Android

Ouvrez **Paramètres → Apparence → Boutons de la barre d’outils**. Utilisez les interrupteurs pour choisir les boutons affichés, puis faites glisser les poignées pour définir leur ordre. Par exemple, activez **Partager** et **Ouvrir l’URL** et faites-les glisser en haut de la liste pour garder ces deux actions à portée de main pendant que vous regardez une vidéo.

Vous pouvez aussi ajouter **Outils**, **Site pour ordinateur**, **Paramètres** ou le sélecteur **YouTube / YouTube Music** à la barre d’outils. La même liste permet de réorganiser les boutons existants comme **Bibliothèque**, **Flux des chaînes** et **Historique**.

<div class="screenshot-gallery">
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">Activez Partager et Ouvrir l’URL et faites-les glisser en haut de la liste.</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/noutube-0-7-11/android-toolbar-settings.webp" alt="Réglages Apparence sur Android avec Partager et Ouvrir l’URL activés dans les deux premières lignes et des poignées de déplacement à droite" width="1080" height="2220" loading="lazy" />
    </div>
  </figure>
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">Partager et Ouvrir l’URL sont maintenant les deux premiers boutons de la barre d’outils de la page de lecture.</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/noutube-0-7-11/android-toolbar-result.webp" alt="Barre d’outils NouTube au-dessus de la page de lecture de Big Buck Bunny, avec l’icône Partager et l’icône de lien Ouvrir l’URL tout à gauche" width="1080" height="2220" loading="lazy" />
    </div>
  </figure>
</div>

## Téléchargez des vidéos sur iPhone et iPad

Pour une vidéo que vous avez le droit d’enregistrer, ouvrez **Outils** et touchez **Télécharger la vidéo**. NouTube télécharge un MP4 compatible lorsqu’il en existe un. Une fois le téléchargement terminé, touchez **Exporter** pour enregistrer ou partager le fichier.

<div class="screenshot-gallery">
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">Outils remplit automatiquement l’URL de la vidéo en cours.</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/noutube-0-7-11/ios-download-tools.webp" alt="Panneau de téléchargement sur iPhone avec l’URL de la vidéo remplie, une note sur la disponibilité du MP4 et le bouton Télécharger la vidéo" width="1206" height="2622" loading="lazy" />
    </div>
  </figure>
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">Exporter apparaît dans l’historique des téléchargements quand le fichier est prêt.</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/noutube-0-7-11/ios-download-export.webp" alt="Entrée de l’historique des téléchargements sur iPhone avec une coche verte, l’état Téléchargement complet et un bouton Exporter" width="1206" height="2622" loading="lazy" />
    </div>
  </figure>
</div>

*Big Buck Bunny* © 2008 Blender Foundation / [www.bigbuckbunny.org](https://peach.blender.org/about/). [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/).

Le démarrage plus rapide des vidéos introduit sur Android dans la 0.7.10 s’applique désormais aussi à iOS. Sur iPad, les commandes de lecture de YouTube restent disponibles en plein écran.

## Balayez pour le plein écran ou masquez les commentaires

Sur mobile, balayez vers le haut sur le lecteur YouTube pour passer en plein écran, et vers le bas pour revenir à la page de lecture. Commencez le geste sur la vidéo elle-même afin de pouvoir continuer à utiliser les commandes de lecture et la barre de progression comme d’habitude.

Pour supprimer la section des commentaires des pages de lecture YouTube, ouvrez **Paramètres → Préférences → Sans distraction** et activez **Masquer les commentaires**.

<div class="screenshot-gallery" style="max-width: 24rem;">
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">Masquer les commentaires se trouve en bas des réglages Sans distraction.</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/noutube-0-7-11/hide-comments-setting.webp" alt="Écran Préférences sur Android avec l’interrupteur Masquer les commentaires activé en bas de la section Sans distraction" width="1080" height="2220" loading="lazy" />
    </div>
  </figure>
</div>

## Autres corrections

- Les téléchargements audio Opus utilisent désormais l’extension `.opus`. NouTube corrige un problème de démarrage de yt-dlp dans les versions de production Android et gère plus fiablement les échecs de téléchargement et de lecture.
- La page de lecture YouTube pour ordinateur s’adapte maintenant aux écrans Android étroits. Les aperçus du flux n’apparaissent plus dans l’historique de visionnage sur Android, et **Suivant** dans les commandes système de YouTube Music ne modifie plus la file d’attente propre à NouTube.
- Cette version met à jour les traductions italienne, polonaise, portugaise du Brésil, russe et ukrainienne.

[Voir la version sur GitHub](https://github.com/nonbili/NouTube/releases/tag/v0.7.11).

## Obtenir NouTube

[Installez ou mettez à jour NouTube](/fr/noutube/install/), ou parcourez la [documentation de NouTube](/fr/noutube/).
