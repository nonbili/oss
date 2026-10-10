---
title: Häufig gestellte Fragen (FAQ)
description: Häufige NouTube-Fragen aus GitHub-Issues.
sidebar:
  order: 9
---
Diese Seite fasst wiederkehrende Benutzerfragen aus dem öffentlichen GitHub-Issue-Tracker zusammen.

## Probleme bei der Anmeldung

Google lehnt Anmeldungen aus Apps, die eine Webseite einbetten, häufig ab. Deshalb kann die Anmeldung in NouTube sowohl unter Android als auch auf dem Desktop fehlschlagen, meist mit der Fehlermeldung „Dieser Browser oder diese App ist möglicherweise nicht sicher“. Wenn die Desktop-App keinen sichtbaren `Anmelden`-Button anzeigt, öffne zuerst das Menü `Meine Daten auf YouTube`.

Wenn die Anmeldung nicht klappt, verwende stattdessen die Funktion **Inject cookie**:

1. Melde dich an einem Computer in Chrome oder einem anderen Chromium-basierten Browser bei YouTube an und exportiere deine YouTube-Cookies mit einer Browser-Erweiterung (z. B. `getcookies.txt`).
2. Unter Android: Kopiere die exportierte Datei auf dein Gerät.
3. Öffne in NouTube **Settings > Tools > Inject cookie**, importiere die Datei (oder füge ihren Inhalt ein) und speichere.

Diese Methode umgeht die Sicherheitsprüfung von Google und ist derzeit die zuverlässigste Lösung für Anmeldeprobleme unter Android und auf dem Desktop.

Quellen:

- [Issue #142: Can't login to Google on Windows app](https://github.com/nonbili/NouTube/issues/142)

## Warum ist das neueste Update auf F-Droid noch nicht verfügbar?

Der Veröffentlichungszeitplan auf F-Droid wird nicht von den NouTube-Maintainern kontrolliert. F-Droid baut und veröffentlicht Updates unabhängig in Batches, was nach einem neuen Release auf GitHub in der Regel einige Tage dauert.

Wenn Sie die neueste Version sofort nutzen möchten, können Sie die APK von der Seite [GitHub Releases](https://github.com/nonbili/NouTube/releases) herunterladen. Beachten Sie jedoch, dass GitHub-Builds einen anderen Signaturschlüssel als F-Droid verwenden, sodass Sie die F-Droid-Version zuerst deinstallieren müssen, bevor Sie die APK von GitHub installieren.

Quellen:

- [Issue #16: Update request](https://github.com/nonbili/NouTube/issues/16)
- [Issue #14: Bug: rotate to landscape resets app to home page](https://github.com/nonbili/NouTube/issues/14)

## YouTube Music wird nicht korrekt geladen

Wenn YouTube Music nicht korrekt geladen wird, versuchen Sie, **Desktop-Website (Desktop site)** im Anwendungsmenü zu aktivieren.

Quelle:

- [Issue #150: Noutube Music Error Message, Not Loading.](https://github.com/nonbili/NouTube/issues/150)

## NouTube öffnet eine Warteschlange anstelle der Startseite

Wenn NouTube die Wiedergabe ständig wiederherstellt oder zu einem alten Element anstelle der Startseite zurückkehrt, prüfen Sie, ob das Warteschlangen-Symbol noch aktiv ist. Im Issue-Thread identifizierte der Maintainer eine nicht geleerte Warteschlange als Grund, warum NouTube weiterhin versuchte, die Wiedergabe fortzusetzen.

Quelle:

- [Issue #138: Restoring playback](https://github.com/nonbili/NouTube/issues/138)

## Wo soll ich Bugs melden oder Features anfragen?

Nutzen Sie die GitHub-Repo:

- [nonbili/NouTube Issues](https://github.com/nonbili/NouTube/issues)
