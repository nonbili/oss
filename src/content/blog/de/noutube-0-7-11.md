---
title: "NouTube 0.7.11 bringt eine anpassbare Android-Werkzeugleiste und Video-Downloads unter iOS"
description: Lege deine Lieblingsaktionen in die Android-Werkzeugleiste, wische für den Vollbildmodus, blende YouTube-Kommentare aus und speichere Videos auf iPhone und iPad.
date: 2026-11-24
product: noutube
---

Mit NouTube 0.7.11 kannst du Aktionen wie **Teilen** und **URL öffnen** direkt in die Android-Werkzeugleiste legen. Auf iPhone und iPad kannst du kompatible Videos jetzt über **Werkzeuge** herunterladen, und Videos starten schneller. Das Mobil-Update bringt außerdem Wischgesten für den Vollbildmodus und eine Einstellung zum Ausblenden von YouTube-Kommentaren.

## Deine meistgenutzten Aktionen in der Android-Werkzeugleiste

Öffne **Einstellungen → Aussehen → Werkzeugleistenschaltflächen**. Wähle mit den Schaltern aus, welche Schaltflächen erscheinen, und ziehe dann an den Griffen, um ihre Reihenfolge festzulegen. Aktiviere zum Beispiel **Teilen** und **URL öffnen** und ziehe beide an den Anfang der Liste, damit du sie beim Ansehen eines Videos immer griffbereit hast.

Du kannst auch **Werkzeuge**, **Desktop-Website**, **Einstellungen** oder den Umschalter **YouTube / YouTube Music** zur Werkzeugleiste hinzufügen. In derselben Liste lassen sich vorhandene Schaltflächen wie **Bibliothek**, **Kanal-Feed** und **Verlauf** neu anordnen.

![Android-Einstellungen für das Aussehen mit aktiviertem Teilen und URL öffnen in den ersten beiden Zeilen und Ziehgriffen rechts](/blog/noutube-0-7-11/android-toolbar-settings.webp "Aktiviere Teilen und URL öffnen und ziehe sie an den Anfang der Liste.")
![NouTube-Werkzeugleiste über der Wiedergabeseite von Big Buck Bunny, mit dem Teilen-Symbol und dem Link-Symbol für URL öffnen ganz links](/blog/noutube-0-7-11/android-toolbar-result.webp "Teilen und URL öffnen sind jetzt die ersten beiden Schaltflächen der Werkzeugleiste auf der Wiedergabeseite.")

## Videos auf iPhone und iPad herunterladen

Öffne bei einem Video, das du speichern darfst, **Werkzeuge** und tippe auf **Video herunterladen**. NouTube lädt eine kompatible MP4-Datei herunter, sofern eine verfügbar ist. Wenn der Download abgeschlossen ist, tippe auf **Exportieren**, um die Datei zu speichern oder zu teilen.

![iPhone-Downloadbereich mit eingetragener Video-URL, einem Hinweis zur MP4-Verfügbarkeit und der Schaltfläche Video herunterladen](/blog/noutube-0-7-11/ios-download-tools.webp "Werkzeuge trägt die URL des aktuellen Videos automatisch ein.")
![Eintrag im Download-Verlauf auf dem iPhone mit grünem Häkchen, dem Status Herunterladen abgeschlossen und einer Exportieren-Schaltfläche](/blog/noutube-0-7-11/ios-download-export.webp "Exportieren erscheint im Download-Verlauf, sobald die Datei bereit ist.")

*Big Buck Bunny* © 2008 Blender Foundation / [www.bigbuckbunny.org](https://peach.blender.org/about/). [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/).

Der schnellere Videostart, der in 0.7.10 für Android eingeführt wurde, gilt jetzt auch für iOS. Auf dem iPad bleiben die Wiedergabesteuerelemente von YouTube im Vollbildmodus verfügbar.

## Wischen für Vollbild oder Kommentare ausblenden

Wische auf Mobilgeräten auf dem YouTube-Player nach oben, um in den Vollbildmodus zu wechseln, und nach unten, um zur Wiedergabeseite zurückzukehren. Beginne die Wischgeste auf dem Video selbst, damit du die Wiedergabesteuerung und die Fortschrittsleiste weiterhin wie gewohnt nutzen kannst.

Um den Kommentarbereich von YouTube-Wiedergabeseiten zu entfernen, öffne **Einstellungen → Voreinstellungen → Ablenkungsfrei** und aktiviere **Kommentare ausblenden**.

![Android-Bildschirm Voreinstellungen mit aktiviertem Schalter Kommentare ausblenden ganz unten im Abschnitt Ablenkungsfrei](/blog/noutube-0-7-11/hide-comments-setting.webp "Kommentare ausblenden befindet sich ganz unten in den Ablenkungsfrei-Einstellungen.")

## Weitere Korrekturen

- Opus-Audiodownloads verwenden jetzt die Endung `.opus`. NouTube behebt ein Startproblem von yt-dlp in Android-Release-Builds und geht zuverlässiger mit fehlgeschlagenen Downloads und Wiedergaben um.
- Die Desktop-Wiedergabeseite von YouTube passt jetzt auf schmale Android-Bildschirme. Feed-Vorschauen landen unter Android nicht mehr im Wiedergabeverlauf, und **Weiter** in den YouTube-Music-Systemsteuerelementen lässt NouTubes eigene Warteschlange unberührt.
- Diese Version aktualisiert die italienische, polnische, brasilianisch-portugiesische, russische und ukrainische Übersetzung.

[Release auf GitHub ansehen](https://github.com/nonbili/NouTube/releases/tag/v0.7.11).

## NouTube herunterladen

[Installiere oder aktualisiere NouTube](/de/noutube/install/) oder stöbere in der [NouTube-Dokumentation](/de/noutube/).
