---
title: "Nora 0.9.2 : plus de façons de suivre vos flux"
description: Lisez les flux Instagram depuis imginn et les flux X depuis des instances Nitter, zoomez dans les fils et la galerie multimédia, et choisissez où enregistrer les téléchargements sur Android.
sidebar:
  label: Sortie de Nora 0.9.2
  order: 2
---

*Publié le 29 octobre 2026*

Instagram ou X ne se met plus à jour ? **Nora 0.9.2** ajoute des sources alternatives facultatives pour que vos flux restent actifs. Cette version apporte également le zoom dans les fils et la galerie, le contrôle de la vitesse des vidéos et le choix de l'emplacement d'enregistrement des téléchargements sur Android.

Si vous découvrez le lecteur de flux de Nora, commencez par la [présentation de la version 0.9.0](/fr/blog/nora-0-9-0/).

## Lire Instagram depuis imginn et X depuis Nitter

Suivre des profils publics **Instagram** et **X** sans se connecter peut se heurter à des murs de connexion ou à des limites de requêtes. Nora 0.9.2 ajoute deux alternatives facultatives dans les **Paramètres du flux** afin que vos fils restent à jour sans connexion à un compte :

- **Lire Instagram depuis imginn :** choisissez **Lorsque Instagram échoue** pour utiliser imginn en secours, ou **D'abord, puis Instagram** pour interroger imginn en premier. Les deux modes ne fonctionnent que lorsque Nora est ouvert. Si imginn vous demande de confirmer que vous n'êtes pas un robot, Nora vous invite à effectuer la vérification directement dans l'application.
- **Lire X depuis Nitter :** choisissez **Lorsque X échoue** ou **D'abord, puis X** et ajoutez une ou plusieurs adresses d'instances Nitter. Nora essaie vos instances à tour de rôle. Les instances qui nécessitent une vérification du navigateur ne fonctionnent que lorsque Nora est ouvert.

Ces deux options sont désactivées par défaut et peuvent être activées à tout moment dans les **Paramètres du flux**.

<div class="screenshot-gallery">
  <figure class="screenshot-card">
    <div class="screenshot-card__eyebrow">Paramètres du flux</div>
    <h2 class="screenshot-card__title">Sources imginn et Nitter</h2>
    <p class="screenshot-card__body">
      Lisez les profils Instagram depuis imginn et les profils X depuis vos instances Nitter configurées — en tant que source de secours ou source principale.
    </p>
    <div class="screenshot-frame">
      <img src="/blog/nora-0-9-2/feed-settings.png" alt="Paramètres du flux de Nora 0.9.2 affichant les options imginn et Nitter" />
    </div>
  </figure>

  <figure class="screenshot-card">
    <div class="screenshot-card__eyebrow">Médias</div>
    <h2 class="screenshot-card__title">Galerie plein écran et zoom</h2>
    <p class="screenshot-card__body">
      Pincez pour zoomer sur les photos et vidéos dans la galerie plein écran, maintenez le bord de l'écran pour accélérer la lecture ou enregistrez directement les médias.
    </p>
    <div class="screenshot-frame">
      <img src="/blog/nora-0-9-2/media-gallery.png" alt="Écran de la galerie multimédia plein écran de Nora 0.9.2" />
    </div>
  </figure>

  <figure class="screenshot-card">
    <div class="screenshot-card__eyebrow">Profils</div>
    <h2 class="screenshot-card__title">Rouvrir l'onglet dans un profil</h2>
    <p class="screenshot-card__body">
      Basculez n'importe quel onglet mobile ouvert vers un autre profil Nora directement depuis le menu d'en-tête ou le sélecteur d'onglets.
    </p>
    <div class="screenshot-frame">
      <img src="/blog/nora-0-9-2/reopen-in-profile.png" alt="Boîte de dialogue de réouverture d'onglet dans un profil de Nora 0.9.2" />
    </div>
  </figure>
</div>

## Commandes vidéo du flux, zoom et notifications

La consultation des fils chronologiques et des médias dans le flux gagne également en souplesse :

- **Contrôle de la vitesse des vidéos dans la galerie :** les vidéos du flux utilisent désormais vos préférences **Vitesse de lecture vidéo par défaut** et **Appui long sur le bord pour la vitesse 2x**. Maintenez le doigt sur le bord gauche ou droit d'une vidéo en cours de lecture pour passer en vitesse 2x, puis faites glisser horizontalement pour changer de vitesse.
- **Zoom dans les fils et la galerie :** pincez pour zoomer sur mobile — ou maintenez `Ctrl`/`Cmd` et faites défiler sur ordinateur — aussi bien dans les fils chronologiques que dans la galerie photo et vidéo plein écran. Les commandes de lecture et de navigation vidéo restent accessibles pendant le zoom.
- **Ouverture des notifications dans les fils :** toucher une notification de nouvelle publication ouvre désormais directement le fil Nora correspondant.
- **Solution de secours pour les vidéos en échec :** lorsqu'une vidéo ne peut pas être lue dans la galerie plein écran, vous pouvez ouvrir la publication directement sur le site d'origine.

## Téléchargements, profils et améliorations des sites

Cette version comprend également plusieurs améliorations de navigation et de téléchargement sur l'ensemble des plateformes :

- **Choisir où enregistrer les téléchargements sur Android :** activez **Demander où enregistrer chaque téléchargement** dans **Paramètres → Téléchargements** pour choisir le dossier de destination et le nom de chaque fichier. Cette version rend également l'enregistrement des téléchargements plus fiable.
- **Rouvrir dans un profil depuis le menu d'en-tête :** basculez l'onglet mobile actif vers un autre profil Nora directement depuis le menu d'en-tête, en plus de l'appui long sur les onglets dans le sélecteur d'onglets.
- **Correctifs pour TikTok et Instagram :** regardez les vidéos TikTok avec un nouveau bouton plein écran et téléchargez des vidéos de manière plus fiable depuis TikTok et Instagram, y compris sans être connecté à Instagram.
- **Défilement plus fluide et vérifications en arrière-plan :** les pages ne sautent plus lorsque la barre d'outils se masque ou apparaît, et les vérifications de flux en arrière-plan fonctionnent mieux sur Android.

Consultez le [journal des modifications](/fr/nora/changelog/) pour tous les détails de la version.

## Obtenir Nora 0.9.2

[Installez ou mettez à jour Nora](/fr/nora/install/) sur Android, iOS, Linux, macOS ou Windows.

Vous pouvez également explorer la [documentation de Nora](/fr/nora/) ou lire les [notes de version sur GitHub](https://github.com/nonbili/Nora/releases/tag/v0.9.2).
