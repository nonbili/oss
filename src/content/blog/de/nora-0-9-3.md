---
title: "Nora 0.9.3: Downloads schneller öffnen, flüssiger surfen"
description: Abgeschlossene Downloads direkt aus der Benachrichtigung öffnen, durch Karussells auf Android wischen und Hintergrundaktivität sowie Speichernutzung reduzieren.
date: 2026-10-31
product: nora
---

**Nora 0.9.3 für Mobilgeräte** erleichtert den Zugriff auf gespeicherte Dateien durch eine direkte Verknüpfung in der Download-Bestätigung. Zudem werden Karussell-Wischgesten unter Android korrigiert und Hintergrundaufgaben reduziert, wenn Seiten nicht mehr genutzt werden.

## Direkt zum Download gelangen

Unter **Android** enthalten Download-Bestätigungen jetzt eine **Öffnen**-Schaltfläche, um die gespeicherte Datei direkt in einer kompatiblen App zu öffnen. Beim Speichern eines einzelnen Fotos oder Videos aus dem Feed steht diese Aktion ebenfalls zur Verfügung.

Speichern Sie die Datei und nutzen Sie anschließend die Schaltfläche in der Bestätigungsmeldung, um direkt darauf zuzugreifen – ohne langes Suchen im Downloads-Ordner.

## Durch Karussells auf Android wischen

Beim seitlichen Wischen durch die Fotos einer Seite konnte versehentlich das Herunterziehen zum Aktualisieren (Pull-to-Refresh) ausgelöst werden. Nora unterscheidet nun präzise zwischen horizontalem Wischen und vertikalem Ziehen, sodass Sie durch ein Karussell blättern können, ohne die Seite neu zu laden.

## Weniger Hintergrundarbeit, bessere Bereinigung geschlossener Tabs

Unter Android pausiert Nora die WebView-Timer, während die App im Hintergrund läuft, was unnötigen CPU- und Akkuverbrauch verringert. Aktualisierungen des Feed-Videofortschritts werden ebenfalls nur noch ausgeführt, solange die Zoom-Bedienelemente aktiv sind.

Geschlossene Tabs und geschlossene Popups geben ihre WebViews unter Android jetzt zuverlässiger frei, und auch unter iOS werden geschlossene Tabs ordnungsgemäß bereinigt. Dieses Update behebt zudem ein Problem unter Android, bei dem das Öffnen eines Links in einem neuen Tab zu einer leeren Seite führen konnte.

Die vollständige Liste der Änderungen finden Sie in den [Release Notes auf GitHub](https://github.com/nonbili/Nora/releases/tag/v0.9.3).

## Nora herunterladen

[Installieren oder aktualisieren Sie Nora](/de/nora/install/) oder erkunden Sie die [Nora-Dokumentation](/de/nora/), um mehr zu erfahren.
