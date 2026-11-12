---
title: "Nora 0.9.4: Sauberere X-Links und zuverlässigere Downloads"
description: Teilen-Parameter aus X-Post-Links entfernen, beim Parsing hängengebliebene Video-Downloads beheben sowie Dateinamen und TikTok-Vollbildsteuerung beibehalten.
sidebar:
  label: Nora 0.9.4 Veröffentlichung
  order: 4
---

*Veröffentlicht am 3. November 2026*

Ein kopierter Beitragslink sollte sich unkompliziert teilen lassen, und ein Video-Download sollte die Phase **Parsing** zügig überwinden. **Nora 0.9.4 für Mobilgeräte** widmet sich beidem – mit gezielten Fehlerbehebungen für das Teilen von Links, das Speichern von Dateien und das Ansehen von TikTok-Videos.

## X-Links ohne überflüssige Parameter teilen

Nora entfernt nun beim Kopieren oder Teilen eines Beitragslinks automatisch X-Teilen-Parameter wie `s` und `t`. Zum Beispiel:

```text
Before: https://x.com/nonbili/status/1234567890?s=20&t=example
After:  https://x.com/nonbili/status/1234567890
```

Die Adresse des Beitrags bleibt unverändert; lediglich die überflüssigen Tracking-Tokens werden entfernt. Diese Bereinigung gilt ausschließlich für Beitrags-URLs auf X und Twitter, sodass gleichnamige Kurzparameter auf anderen Webseiten unangetastet bleiben.

## Hänger bei „Parsing“ beim Speichern von Videos behoben

Einige Video-Downloads konnten vor Beginn des eigentlichen Downloads in der Phase **Parsing** steckenbleiben. Dieses Release behebt den Fehler, sodass betroffene Downloads wie gewohnt fortgesetzt werden.

Dateien, die von einer Webseite über eine `blob:`-URL generiert werden, behalten nun zudem ihren vorgesehenen Dateinamen, sofern verfügbar. Dadurch lassen sich gespeicherte Dateien später leichter zuordnen.

## TikTok-Vollbildsteuerung wiederhergestellt

Die Vollbild-Steuerelemente für TikTok in Nora konnten ausbleiben, wenn das Webseiten-Skript ausgeführt wurde, bevor der Seiteninhalt vollständig geladen war. Die Steuerung berücksichtigt diese Ladereihenfolge nun korrekt, sodass die Vollbild-Schaltfläche zuverlässig erscheint.

Die vollständige Liste der Änderungen finden Sie in den [Release Notes auf GitHub](https://github.com/nonbili/Nora/releases/tag/v0.9.4).

## Nora herunterladen

[Installieren oder aktualisieren Sie Nora](/de/nora/install/) oder erkunden Sie die [Nora-Dokumentation](/de/nora/), um mehr zu erfahren.
