---
title: FAQ
description: Häufige Nora-Fragen aus GitHub-Issues.
---
Diese Seite fasst wiederkehrende Benutzerfragen aus dem öffentlichen GitHub-Issue-Tracker zusammen.

## Kann Nora Instagram- oder Facebook-Links direkt aus anderen Apps öffnen?

Ja, das ist beabsichtigt. Der Maintainer sagte, dass Sie eventuell Folgendes tun müssen:

- Das Android-Verhalten `Standardmäßig öffnen` für Nora aktivieren
- Die offizielle App deinstallieren oder deaktivieren, wenn sie weiterhin dieselben Links beansprucht
- Auf ein neueres Nora-Release aktualisieren, wenn Deep Links zwar die App, aber nicht den angeforderten Beitrag öffnen

Quelle:

- [Issue #51: Support opening links in Nora](https://github.com/nonbili/Nora/issues/51)

## Instagram lässt sich in Nora nicht öffnen

Ein aktuelles offenes Issue zeigt, dass einige Benutzer immer noch auf eine Instagram-Fehlerseite stoßen, selbst nach Versuchen wie Neuladen, Desktop-Site-Modus und Löschen der Webview-Daten. Das bedeutet, dass es noch keine bestätigte Lösung gibt. Wenn dies auf Ihrem Gerät passiert:

- Versuchen Sie ein Neuladen
- Versuchen Sie den Desktop-Site-Modus
- Löschen Sie Noras Webview-Daten
- Wenn es weiterhin fehlschlägt, prüfen Sie GitHub auf Updates oder fügen Sie Ihre Gerätedetails zum Issue hinzu

Quelle:

- [Issue #147: Issue when trying to open Instagram](https://github.com/nonbili/Nora/issues/147)

## Medien werden weiter abgespielt, nachdem ich die App verlassen habe

Dies wurde für Instagram-Audio berichtet, das ohne nützliche Steuerelemente im Hintergrund weiterläuft. Der Maintainer antwortete, dass dies im nächsten Release behoben wird. Das Erste, was Sie tun sollten, ist Nora auf die neueste Version zu aktualisieren, die in Ihrem Store oder Release-Kanal verfügbar ist.

Quelle:

- [Issue #119: can you make it stop playing in background ? pls](https://github.com/nonbili/Nora/issues/119)

## Kann ich Bilder oder Videos herunterladen?

Ja, zumindest ein Teil davon wird bereits unterstützt:

- Drücken Sie lange auf ein Bild, um das Download-Menü anzuzeigen
- Facebook- und Instagram-Reel-Downloads wurden bereits unterstützt, als das Issue besprochen wurde
- X-Video-Download-Unterstützung wurde danach hinzugefügt

Quelle:

- [Issue #153: download](https://github.com/nonbili/Nora/issues/153)

## Warum schlägt der X-Login fehl?

Die Issue-Diskussion deutet darauf hin, dass ein normaler Login mit E-Mail/Passwort funktionieren sollte, während ein Google-basierter Login in einer Webview zusätzliche Arbeit erforderte. Der Maintainer sagte später, dass in `v0.1.5` ein Menü `Inject cookie` als Workaround für betroffene Benutzer hinzugefügt wurde.

Quelle:

- [Issue #1: Unable to sign in to X](https://github.com/nonbili/Nora/issues/1)

## Kann ich meine Browser-Erweiterungen wie uBlock Origin oder Dark Reader in Nora verwenden?

Nicht auf die gleiche Weise wie in einem vollständigen Browserprofil. In der Diskussion über die Feature-Anfrage verwies der Maintainer die Benutzer auf Noras eigene CSS-Unterstützung für UI-Änderungen, anstatt die Unterstützung eingebetteter Browser-Erweiterungen zu versprechen.

Quelle:

- [Issue #96: Open the socials in the webview provided by browser](https://github.com/nonbili/Nora/issues/96)

## Wo soll ich Bugs melden oder Features anfragen?

Nutzen Sie das GitHub-Repo:

- [nonbili/Nora Issues](https://github.com/nonbili/Nora/issues)
