---
title: "Nora 0.9.5: Proxy-Anmeldung und ein ruhigeres X"
description: Anmeldung an Proxys unter Android und iOS 17 oder neuer, Elemente auf X gezielt ausblenden, Standardsuche auf „Neueste“ setzen und normale Facebook-Beiträge sichtbar halten.
date: 2026-11-06
product: nora
---

**Nora 0.9.5 für Mobilgeräte** ergänzt Felder für Proxy-Benutzername und -Passwort auf mobilen Geräten und bietet mehr Kontrolle darüber, was auf X angezeigt wird. Zudem verbessert das Update die Facebook-Werbefilterung und den Import von Browser-Cookies.

## Auf Mobilgeräten am Proxy anmelden

Öffnen Sie **Einstellungen → Browsen → Proxy**, um HTTP oder SOCKS zu wählen, Host und Port einzugeben und Ihre Anmeldedaten zu hinterlegen. Authentifizierte Proxys werden unter **Android** sowie **iOS 17 oder neuer** sowohl für das Surfen im Web als auch für Feed-Abfragen unterstützt.

Die Anmeldedaten verbleiben lokal auf dem Gerät und sind von Backups und Synchronisierungen ausgeschlossen. Unter iOS 16 bleibt die Proxy-Unterstützung auf unauthentifizierte HTTP-Proxys für Feeds beschränkt.

## Auswählen, was auf X ausgeblendet werden soll

Unter **Einstellungen → Dienste → X** können Sie nun festlegen, welche Elemente verborgen werden:

- **Grok-Benutzeroberfläche**, um Grok-Oberflächenelemente zu entfernen.
- **Empfehlungen**, einschließlich „Wem folgen?“, Trends und „Mehr entdecken“.
- **Interaktionszahlen**, für eine Timeline mit weniger ablenkenden Zahlen.

Diese Optionen sind rein optional. Im selben Einstellungsbereich können Sie zudem **Standardsuche auf „Neueste“** aktivieren, damit Suchanfragen direkt aktuelle Beiträge statt der Top-Ergebnisse anzeigen. Sie können die Such-Tabs auf X weiterhin jederzeit wechseln.

<div class="screenshot-gallery" style="max-width: 24rem;">
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">X-Steuerung in Nora unter Android: Wählen Sie, welche Oberflächenelemente verborgen werden und ob Suchen mit „Neueste“ starten.</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/nora-0-9-5/x-settings.png" alt="Nora X-Einstellungen auf einem Pixel-Smartphone mit Optionen für Grok, Empfehlungen, Interaktionszahlen und Neueste-Suche" width="1080" height="2220" loading="lazy" />
    </div>
  </figure>
</div>

## Normale Facebook-Beiträge sichtbar halten

Die Werbefilterung für Facebook überprüft nun gezielt das Gesponsert-Label selbst. Reguläre Beiträge, die lediglich Wörter wie „Ad“ oder „広告“ enthalten, werden dadurch seltener fälschlicherweise ausgeblendet.

## Zuverlässigerer Cookie-Import

Beim Import von Browser-Cookies bleiben Namen, die mit `__Host-` und `__Secure-` beginnen, nun vollständig erhalten. Durch die Beibehaltung dieser Präfixe können Webseiten die importierte Sitzung fehlerfrei wiedererkennen.

Die vollständige Liste der Änderungen finden Sie in den [Release Notes auf GitHub](https://github.com/nonbili/Nora/releases/tag/v0.9.5).

## Nora herunterladen

[Installieren oder aktualisieren Sie Nora](/de/nora/install/) oder erkunden Sie die [Nora-Dokumentation](/de/nora/), um mehr zu erfahren.
