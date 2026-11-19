---
title: "Nora 0.9.7: Download-Ordner wählen und Menü anpassen"
description: Lege fest, wo Downloads auf Android gespeichert werden, blende selten genutzte Aktionen im Drei-Punkte-Menü aus und erhalte Korrekturen für WhatsApp Web, Facebook Marketplace und die Tab-Navigation.
date: 2026-11-19
product: nora
---

Mit **Nora 0.9.7 für Mobilgeräte** kannst du Android-Downloads in einen selbst gewählten Ordner speichern und das Drei-Punkte-Menü des Browsers auf die Aktionen reduzieren, die du wirklich nutzt. Außerdem öffnet dieses Release WhatsApp Web und Facebook Marketplace automatisch im Desktop-Modus.

## Speicherort für Downloads wählen

Öffne unter Android **Einstellungen → Präferenzen → Downloads → Downloads speichern in**, um festzulegen, wo Browser-Downloads abgelegt werden.

- **Downloads** verwendet den Standard-Download-Ordner von Android.
- **Jedes Mal fragen** lässt dich für jeden Download einen Zielort auswählen.
- **Ordner wählen…** speichert zukünftige Downloads in dem von dir ausgewählten Ordner.

Wenn du einen Ordner wählst, nutzt Nora diesen ab Android 10 auch für Medien, die du aus dem Feed speicherst. Dieses Release behebt außerdem Downloads über `data:`-Links, die manche Websites für im Browser generierte Dateien verwenden.

<div class="screenshot-gallery" style="max-width: 24rem;">
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">Nora Downloads ist als Ziel für zukünftige Downloads ausgewählt.</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/nora-0-9-7/download-destination.webp" alt="Android-Download-Einstellungen mit ausgewähltem Nora Downloads und den sichtbaren Optionen Downloads, Jedes Mal fragen und Ordner wählen" width="1080" height="2220" loading="lazy" />
    </div>
  </figure>
</div>

## Das Drei-Punkte-Menü anpassen

Öffne **Einstellungen → Erscheinungsbild → Symbolleiste → Drei-Punkte-Menü anpassen** und deaktiviere Aktionen, die du selten verwendest. Behalte zum Beispiel **Auf Seite suchen** und **Teilen** bei und blende **Desktopwebsite** aus, wenn du selten zwischen Layouts wechselst. Die beibehaltenen Aktionen erscheinen, sobald sie im aktuellen Tab verfügbar sind.

**Einstellungen** bleibt im Menü erhalten, und **Menüstandards wiederherstellen** setzt deine Änderungen mit einem Tippen zurück.

<div class="screenshot-gallery">
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">Lasse „Auf Seite suchen“ aktiviert und schalte „Desktopwebsite“ aus.</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/nora-0-9-7/customize-three-dot-menu.webp" alt="Erweiterte Einstellungen zum Anpassen des Drei-Punkte-Menüs mit aktiviertem Auf Seite suchen und deaktiviertem Desktopwebsite" width="1080" height="2220" loading="lazy" />
    </div>
  </figure>
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">Das Browser-Menü behält „Auf Seite suchen“, „Teilen“ und „Einstellungen“.</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/nora-0-9-7/customized-three-dot-menu.webp" alt="Angepasstes Browser-Menü mit Auf Seite suchen, Teilen und Einstellungen sowie ausgeblendeter Desktopwebsite" width="1080" height="2220" loading="lazy" />
    </div>
  </figure>
</div>

## WhatsApp Web und Facebook Marketplace öffnen im Desktop-Modus

In **WhatsApp Web** lässt sich die Bildschirmtastatur jetzt öffnen, ohne dass eine Auswahlansicht geschlossen wird. **Facebook Marketplace** nutzt die Desktop-Website, damit du Verkäufer direkt aus einem Angebot heraus anschreiben kannst.

## Korrekturen für Browsing und Feed

- Der Facebook-Werbeblocker erkennt gesponserte Beiträge jetzt auch dann, wenn deren Kennzeichnung verzögert erscheint. Beim langen Drücken auf einen Facebook-Reaktionsbutton bleibt das Kontextmenü des Browsers aus dem Weg.
- Der Reddit-Spielefilter lässt reguläre Beiträge sichtbar.
- Der Tab-Umschalter öffnet so, dass dein aktiver Tab im Blickfeld liegt. In einem neuen Tab wird eine eingegebene Adresse beim ersten Tippen auf **Los** geöffnet, und beim Öffnen eines eingehenden Links bleiben deine anderen Tabs erhalten.
- Pull-to-Refresh greift nicht dazwischen, wenn du innerhalb eines Medienbetrachters Gesten ausführst.

Die vollständige Liste der Änderungen findest du in den [Release Notes auf GitHub](https://github.com/nonbili/Nora/releases/tag/v0.9.7).

## Nora herunterladen

[Installiere oder aktualisiere Nora](/de/nora/install/) oder sieh dir die [Nora-Dokumentation](/de/nora/) an, um mehr zu erfahren.
