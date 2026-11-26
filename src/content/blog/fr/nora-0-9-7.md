---
title: "Nora 0.9.7 : choisissez votre dossier de téléchargement et personnalisez le menu"
description: Choisissez où vont les téléchargements sur Android, masquez les actions que vous utilisez rarement dans le menu à trois points et profitez de correctifs pour WhatsApp Web, Facebook Marketplace et la navigation par onglets.
date: 2026-11-19
product: nora
---

Avec **Nora 0.9.7 pour mobile**, vous pouvez envoyer vos téléchargements Android vers le dossier de votre choix et réduire le menu à trois points du navigateur aux actions que vous utilisez vraiment. Cette version ouvre également automatiquement WhatsApp Web et Facebook Marketplace en mode ordinateur.

## Choisir où enregistrer les téléchargements

Sur Android, ouvrez **Paramètres → Préférences → Téléchargements → Enregistrer les téléchargements dans** pour définir l’emplacement des téléchargements du navigateur.

- **Téléchargements** utilise le dossier Téléchargements standard d’Android.
- **Demander à chaque fois** vous permet de choisir une destination pour chaque téléchargement.
- **Choisir un dossier…** enregistre les futurs téléchargements dans le dossier que vous sélectionnez.

Si vous choisissez un dossier, Nora l’utilise aussi pour les médias enregistrés depuis le fil sur Android 10 et versions ultérieures. Cette version corrige également les téléchargements depuis les liens `data:`, utilisés par certains sites pour les fichiers générés dans le navigateur.

![Paramètres de téléchargement Android avec Nora Downloads sélectionné et les options Téléchargements, Demander à chaque fois et Choisir un dossier visibles](/blog/nora-0-9-7/download-destination.webp "Nora Downloads est sélectionné comme destination pour les futurs téléchargements.")

## Personnaliser le menu à trois points

Ouvrez **Paramètres → Apparence → Barre d’outils → Personnaliser le menu à trois points** et désactivez les actions que vous utilisez rarement. Par exemple, gardez **Rechercher dans la page** et **Partager**, et masquez **Version pour ordinateur** si vous changez rarement d’affichage. Les actions conservées apparaissent lorsqu’elles sont disponibles sur l’onglet actif.

**Paramètres** reste dans le menu, et **Rétablir le menu par défaut** annule vos modifications en un clic.

![Paramètres développés de Personnaliser le menu à trois points avec Rechercher dans la page activé et Version pour ordinateur désactivé](/blog/nora-0-9-7/customize-three-dot-menu.webp "Gardez Rechercher dans la page activé et désactivez Version pour ordinateur.")
![Menu personnalisé du navigateur affichant Rechercher dans la page, Partager et Paramètres, avec Version pour ordinateur masqué](/blog/nora-0-9-7/customized-three-dot-menu.webp "Le menu du navigateur conserve Rechercher dans la page, Partager et Paramètres.")

## WhatsApp Web et Facebook Marketplace s’ouvrent en mode ordinateur

Dans **WhatsApp Web**, le clavier à l’écran peut désormais s’ouvrir sans fermer le sélecteur. **Facebook Marketplace** utilise le site pour ordinateur afin que vous puissiez envoyer un message aux vendeurs depuis une annonce.

## Correctifs de navigation et de fil

- Le bloqueur de publicités Facebook intercepte désormais les publications sponsorisées même lorsque leurs libellés apparaissent tardivement. Un appui long sur un bouton de réaction Facebook n’affiche plus le menu contextuel du navigateur.
- Le filtre de jeux Reddit garde les publications normales visibles.
- Le sélecteur d’onglets s’ouvre en affichant votre onglet actif. Dans un nouvel onglet, une adresse saisie s’ouvre dès le premier appui sur **Aller**, et l’ouverture d’un lien entrant préserve vos autres onglets.
- Le geste tirer-pour-actualiser n’interfère plus lorsque vous effectuez des gestes dans une visionneuse multimédia.

Consultez les [notes de version sur GitHub](https://github.com/nonbili/Nora/releases/tag/v0.9.7) pour la liste complète des changements.

## Obtenir Nora

[Installez ou mettez à jour Nora](/fr/nora/install/), ou consultez la [documentation de Nora](/fr/nora/) pour en savoir plus.
