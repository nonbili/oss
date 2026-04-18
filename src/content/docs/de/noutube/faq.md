---
title: FAQ
description: Häufige NouTube-Fragen aus GitHub-Issues.
---
Diese Seite fasst wiederkehrende Benutzerfragen aus dem öffentlichen GitHub-Issue-Tracker zusammen.

## Der Desktop-Anmelde-Button fehlt oder der Login scheint festzustecken

Wenn die Desktop-App keinen sichtbaren `Anmelden`-Button zeigt, versuchen Sie zuerst das Menü `Ihre Daten in YouTube` zu öffnen. In der Issue-Diskussion konnten betroffene Benutzer über diesen Pfad den Anmelde-Flow erreichen. Der Maintainer sagte später, dass der sichtbare Button in `v0.1.6` wieder da sein sollte.

Quellen:

- [Issue #46: desktop version never logs in always error](https://github.com/nonbili/NouTube/issues/46)

## Der Desktop-Login schlägt immer noch fehl, selbst wenn sich die Anmeldeseite öffnet

Es gab Berichte, dass einige Desktop-Setups beim Google-Login immer noch fehlschlagen, selbst nach dem Löschen der Daten. Der Issue-Thread endete nicht mit einem bestätigten universellen Fix, daher lautet die praktische Anleitung:

- Auf das neueste Desktop-Release aktualisieren
- Webview-/Profildaten der App löschen, wenn Sie bereits einen Login versucht haben
- Wenn es weiterhin fehlschlägt, melden Sie Ihr Betriebssystem, Paketformat und Screenshots auf GitHub

Quelle:

- [Issue #103: Unable to login from desktop client](https://github.com/nonbili/NouTube/issues/103)

## YouTube Music wird nicht korrekt geladen

Ein dokumentierter Pfad zur Fehlerbehebung war:

1. Sicherstellen, dass `NouTube` die Standard-App für `music.youtube.com` ist.
2. Falls die offizielle YouTube Music-App installiert ist, zuerst deren Standard-Link-Handling entfernen.
3. Wenn das Problem weiterhin besteht, versuchen Sie einen benutzerdefinierten User-Agent unter `Einstellungen > Tools > Benutzerdefinierter User-Agent`.

Diese Anleitung stammt direkt vom Maintainer aus dem Issue-Thread. Es ist ein Workaround, keine garantierte Lösung für jedes Gerät.

Quelle:

- [Issue #150: Noutube Music Error Message, Not Loading.](https://github.com/nonbili/NouTube/issues/150)

## Einige Werbeanzeigen werden immer noch angezeigt

Es gab einen Bericht über kurze YouTube Premium-Anzeigen, die vor Videos erschienen. Der Maintainer verwies die Benutzer auf `v0.4.9`, was bedeutet, dass Fixes für das Blockieren von Werbung in späteren Releases ausgeliefert wurden. Wenn Sie Werbung sehen:

- Auf das neueste Release von F-Droid oder GitHub aktualisieren
- Wenn das Problem weiterhin besteht, ein neues Issue mit App-Version und einem Screenshot eröffnen

Quelle:

- [Issue #117: Ad not blocked](https://github.com/nonbili/NouTube/issues/117)

## NouTube öffnet eine Warteschlange anstelle der Startseite

Wenn NouTube die Wiedergabe ständig wiederherstellt oder zu einem alten Element anstelle der Startseite zurückkehrt, prüfen Sie, ob das Warteschlangen-Symbol noch aktiv ist. Im Issue-Thread identifizierte der Maintainer eine nicht geleerte Warteschlange als Grund, warum NouTube weiterhin versuchte, die Wiedergabe fortzusetzen.

Quelle:

- [Issue #138: Restoring playback](https://github.com/nonbili/NouTube/issues/138)

## Wo soll ich Bugs melden oder Features anfragen?

Nutzen Sie das GitHub-Repo:

- [nonbili/NouTube Issues](https://github.com/nonbili/NouTube/issues)
