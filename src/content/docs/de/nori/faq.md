---
title: FAQ
description: Häufig gestellte Fragen zu Nori.
sidebar:
  order: 9
---

## Wie speichere ich Links aus meinem mobilen Browser in Nori?

Nutzen Sie das standardmäßige Freigabemenü des Systems:

1. Tippen Sie in Ihrem Browser (Chrome, Firefox, Safari, Brave usw.) auf **Teilen**.
2. Wählen Sie **Nori** aus der Liste der Apps aus.
3. Wählen Sie die Zielliste aus, in der Sie den Link speichern möchten, oder aktivieren Sie in den Einstellungen **Geteilte Links schnell speichern**, um direkt ohne Auswahldialog in einer festgelegten Liste zu speichern.

## Kann ich Lesezeichen direkt in meiner Browser-App statt in einem In-App-Tab öffnen?

Ja. Gehen Sie zu **Einstellungen → Allgemein** und aktivieren Sie **Links im Standardbrowser öffnen**. Wenn diese Option aktiviert ist, übergibt das Antippen eines Lesezeichens die URL sofort an die Standard-Browser-App Ihres Telefons.

## Wie importiere ich meine Lesezeichen aus Desktop-Browsern?

Exportieren Sie Ihre vorhandenen Lesezeichen in eine HTML-Datei:

- **Chrome / Brave / Edge**: Öffnen Sie den Lesezeichen-Manager (`Strg+Umschalt+O` oder `Cmd+Wahl+B`) → klicken Sie auf das Drei-Punkte-Menü `⋮` → wählen Sie **Lesezeichen exportieren**.
- **Firefox**: Öffnen Sie die Bibliothek (`Strg+Umschalt+O` oder `Cmd+Umschalt+O`) → **Importieren und Sichern** → **Lesezeichen nach HTML exportieren…**.
- **Safari**: Datei → **Lesezeichen exportieren…**.

Gehen Sie dann in Nori zu **Einstellungen → Favoriten → Lesezeichen importieren**, wählen Sie die `.html`-Datei aus, und Nori importiert alle Links und Ordner in entsprechende Listen.

## Kann ich meine Lesezeichen sichern und wiederherstellen?

Ja. Unter **Einstellungen → Favoriten**:

- **Sicherung exportieren**: Speichert eine vollständige JSON-Sicherungsdatei mit allen Listen, Lesezeichen, Tags und Einstellungen.
- **Wiederherstellen**: Stellt Daten aus einer vorhandenen Nori-Sicherungsdatei wieder her.
- **HTML exportieren / Nur-Text exportieren**: Erstellt eine browserkompatible HTML-Datei oder eine lesbare Textliste.

## Wie funktioniert die geräteübergreifende Synchronisation?

Nori Sync verbindet Ihre mobilen Apps, Desktop-Apps und Browser-Erweiterungen:

- Lesezeichen bleiben auf jedem Gerät lokal zwischengespeichert, um eine vollständige Offline-Nutzung zu ermöglichen.
- Sobald eine Verbindung besteht, werden Änderungen nahtlos zwischen allen aktiven Clients synchronisiert.

## Verfolgt die Browser-Erweiterung meine Surfaktivitäten?

Nein. Nori überwacht weder Ihren Browserverlauf noch liest es Inhalte von Webseiten aus. Die Erweiterung erhält nur dann URLs, wenn Sie das Popup öffnen und aktiv anklicken, um den aktuellen Tab als Lesezeichen zu speichern.

## Wo kann ich Fehler melden oder Funktionen anfragen?

Die gesamte Entwicklung und das Issue-Tracking finden auf GitHub statt:

- [nonbili/Nori Issues](https://github.com/nonbili/Nori/issues)
