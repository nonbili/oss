---
title: "Nora 0.9.6: Werbeblocker in Android-Startbildschirm-Verknüpfungen"
description: Werbeblocker sowie Link- und Bildmenüs in Android-Startbildschirm-Verknüpfungen nutzen – mit Korrekturen für Textauswahl, Kopfzeilen-Animation und Tab-Overlays im Feed.
sidebar:
  label: Nora 0.9.6 Veröffentlichung
  order: 2
---

*Veröffentlicht am 12. November 2026*

**Nora 0.9.6 für Mobilgeräte** bringt Werbeblocker sowie Kontextmenüs für Links und Bilder auf Webseiten, die Sie über Android-Startbildschirm-Verknüpfungen öffnen. Zudem behebt der integrierte Feed-Reader Fehler bei der Textauswahl, beim Scrollen und beim Tab-Wechsel.

## Werbeblocker-Einstellungen in Startbildschirm-Verknüpfungen

Unter **Android** öffnen sich Webseiten, die über Noras Aktion **Zum Startbildschirm hinzufügen** gespeichert wurden, in einem eigenständigen Fenster. Diese Fenster nutzen ab sofort die Werbeblocker-Einstellungen von Nora – einschließlich der Netzwerkblockierung und Regeln zum Ausblenden von Werbeelementen auf der Seite.

Um dies auszuprobieren, öffnen Sie eine Seite in Nora, wählen Sie im Seitenmenü **Zum Startbildschirm hinzufügen** und starten Sie die Verknüpfung anschließend von Ihrem Startbildschirm. Ihre konfigurierten Blockierregeln greifen auch dort.

## Links und Bilder gedrückt halten

Android-Startbildschirm-Verknüpfungen bieten nun praktische Kontextmenüs:

- **Link gedrückt halten**, um die Adresse zu kopieren oder in einem neuen Nora-Tab zu öffnen.
- **Bild gedrückt halten**, um es zu speichern, die Adresse zu kopieren oder in einem neuen Nora-Tab zu öffnen.

So können Sie im eigenständigen Fenster weiterlesen und Links bequem an Nora senden, wenn Sie diese in einem separaten Tab vertiefen möchten.

<div class="screenshot-gallery" style="max-width: 24rem;">
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">Langes Drücken auf ein Bild in einer Android-Startbildschirm-Verknüpfung öffnet die Bildaktionen von Nora.</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/nora-0-9-6/shortcut-image-menu.webp" alt="Noras eigenständige Android-Verknüpfung mit den Aktionen Bild speichern, Bild in neuem Tab öffnen und Bildlink kopieren" width="1080" height="2220" loading="lazy" />
    </div>
  </figure>
</div>

## Flüssigeres Lesen im Feed

Dieses Release behebt zudem drei Interaktionsprobleme im integrierten Feed-Reader von Nora:

- **Textauswahl:** Das Markieren von Text in Beitragsbeschreibungen funktioniert jetzt wesentlich zuverlässiger.
- **Kopfzeilen-Animation:** Die Feed-Kopfzeile animiert nun korrekt beim Ein- und Ausklappen.
- **Overlays beim Tab-Wechsel:** Feed-Overlays bleiben strikt dem Tab zugeordnet, der sie geöffnet hat, und überlagern keine anderen Tabs mehr.

Neu beim Feed-Reader? Die [Einführung zu Nora 0.9.0](/de/blog/nora-0-9-0/) erläutert Quellen, Timelines und das Medienraster.

Die vollständige Liste der Änderungen finden Sie in den [Release Notes auf GitHub](https://github.com/nonbili/Nora/releases/tag/v0.9.6).

## Nora herunterladen

[Installieren oder aktualisieren Sie Nora](/de/nora/install/) oder erkunden Sie die [Nora-Dokumentation](/de/nora/), um mehr zu erfahren.
