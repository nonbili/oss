---
title: Häufig gestellte Fragen (FAQ)
description: Häufige NouTube-Fragen aus GitHub-Issues.
sidebar:
  order: 9
---
Diese Seite fasst wiederkehrende Benutzerfragen aus dem öffentlichen GitHub-Issue-Tracker zusammen.

## Probleme bei der Desktop-Anmeldung

Wenn die Desktop-App keinen sichtbaren `Anmelden`-Button zeigt, versuchen Sie zuerst das Menü `Ihre Daten in YouTube` zu öffnen. Wenn sich die Anmeldeseite öffnet, Sie aber die Fehlermeldung "Browser oder App ist möglicherweise nicht sicher" erhalten, nutzen Sie die Funktion **Cookies injizieren (Inject cookie)**:

1. Verwenden Sie eine Browser-Erweiterung (wie `getcookies.txt`), um Ihre YouTube-Cookies zu exportieren.
2. Importieren Sie die Cookies in NouTube über die Schaltfläche **Cookies injizieren (Inject cookie)**.

Diese Methode umgeht die Sicherheitsprüfung von Google für Browser und ist derzeit die zuverlässigste Lösung für Anmeldeprobleme auf dem Desktop.

Quellen:

- [Issue #142: Can't login to Google on Windows app](https://github.com/nonbili/NouTube/issues/142)

## YouTube Music wird nicht korrekt geladen

Wenn YouTube Music nicht korrekt geladen wird, versuchen Sie, **Desktop-Website (Desktop site)** im Anwendungsmenü zu aktivieren.

Quelle:

- [Issue #150: Noutube Music Error Message, Not Loading.](https://github.com/nonbili/NouTube/issues/150)

## NouTube öffnet eine Warteschlange anstelle der Startseite

Wenn NouTube die Wiedergabe ständig wiederherstellt oder zu einem alten Element anstelle der Startseite zurückkehrt, prüfen Sie, ob das Warteschlangen-Symbol noch aktiv ist. Im Issue-Thread identifizierte der Maintainer eine nicht geleerte Warteschlange als Grund, warum NouTube weiterhin versuchte, die Wiedergabe fortzusetzen.

Quelle:

- [Issue #138: Restoring playback](https://github.com/nonbili/NouTube/issues/138)

## Wo soll ich Bugs melden oder Features anfragen?

Nutzen Sie das GitHub-Repo:

- [nonbili/NouTube Issues](https://github.com/nonbili/NouTube/issues)
