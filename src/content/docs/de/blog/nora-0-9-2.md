---
title: "Nora 0.9.2: Mehr Möglichkeiten, Ihren Feeds zu folgen"
description: Lesen Sie Instagram-Feeds über imginn und X-Feeds über Nitter-Instanzen, zoomen Sie in Timelines und Galeriemedien und wählen Sie unter Android aus, wo Downloads gespeichert werden.
sidebar:
  label: Nora 0.9.2 Veröffentlichung
  order: 2
---

*Veröffentlicht am 29. Oktober 2026*

Instagram oder X aktualisiert nicht mehr? **Nora 0.9.2** ergänzt optionale alternative Quellen, damit Ihre Feeds in Bewegung bleiben. Außerdem bringt das Update eine Zoomfunktion für Timelines und Galerie, Geschwindigkeitsregler für Videos sowie die Möglichkeit, unter Android den Speicherort für Downloads selbst zu wählen.

Wenn Sie Noras Feed-Reader noch nicht kennen, beginnen Sie mit der [Einführung zu Version 0.9.0](/de/blog/nora-0-9-0/).

## Instagram über imginn und X über Nitter lesen

Beim Folgen öffentlicher Profile auf **Instagram** und **X** ohne Anmeldung kann es zu Login-Sperren oder Ratenbegrenzungen kommen. Nora 0.9.2 fügt in den **Feed-Einstellungen** zwei optionale Alternativen hinzu, damit Ihre Timelines auch ohne Kontoanmeldung aktuell bleiben:

- **Instagram über imginn lesen:** Wählen Sie **Wenn Instagram fehlschlägt**, um imginn als Ausweichlösung zu nutzen, oder **Zuerst, dann Instagram**, um zuerst imginn abzufragen. Beide Modi funktionieren nur, solange Nora geöffnet ist. Falls imginn eine Bestätigung verlangt, dass Sie kein Roboter sind, fordert Nora Sie auf, die Prüfung direkt in der App abzuschließen.
- **X über Nitter lesen:** Wählen Sie **Wenn X fehlschlägt** oder **Zuerst, dann X** und fügen Sie eine oder mehrere Nitter-Instanzadressen hinzu. Nora probiert Ihre Instanzen der Reihe nach durch. Instanzen, die eine Browserprüfung erfordern, funktionieren nur, solange Nora geöffnet ist.

Beide Optionen sind standardmäßig deaktiviert und können jederzeit in den **Feed-Einstellungen** aktiviert werden.

<div class="screenshot-gallery">
  <figure class="screenshot-card">
    <div class="screenshot-card__eyebrow">Feed-Einstellungen</div>
    <h2 class="screenshot-card__title">imginn- & Nitter-Quellen</h2>
    <p class="screenshot-card__body">
      Lesen Sie Instagram-Profile über imginn und X-Profile über Ihre konfigurierten Nitter-Instanzen – als Ausweichlösung oder als primäre Quelle.
    </p>
    <div class="screenshot-frame">
      <img src="/blog/nora-0-9-2/feed-settings.png" alt="Nora 0.9.2 Feed-Einstellungen mit imginn- und Nitter-Optionen" />
    </div>
  </figure>

  <figure class="screenshot-card">
    <div class="screenshot-card__eyebrow">Medien</div>
    <h2 class="screenshot-card__title">Vollbild-Galerie & Zoom</h2>
    <p class="screenshot-card__body">
      Zoomen Sie mit zwei Fingern in Fotos und Videos in der Vollbild-Galerie hinein, halten Sie den Bildschirmrand gedrückt, um die Wiedergabe zu beschleunigen, oder speichern Sie Medien direkt.
    </p>
    <div class="screenshot-frame">
      <img src="/blog/nora-0-9-2/media-gallery.png" alt="Nora 0.9.2 Vollbild-Mediengalerie-Bildschirm" />
    </div>
  </figure>

  <figure class="screenshot-card">
    <div class="screenshot-card__eyebrow">Profile</div>
    <h2 class="screenshot-card__title">Tab in Profil erneut öffnen</h2>
    <p class="screenshot-card__body">
      Wechseln Sie jeden geöffneten mobilen Tab direkt über das Kopfzeilenmenü oder die Tab-Übersicht in ein anderes Nora-Profil.
    </p>
    <div class="screenshot-frame">
      <img src="/blog/nora-0-9-2/reopen-in-profile.png" alt="Nora 0.9.2 Dialog zum erneuten Öffnen eines Tabs in einem Profil" />
    </div>
  </figure>
</div>

## Feed-Videosteuerung, Zoom und Benachrichtigungen

Auch das Durchsehen von Timelines und Medien im Feed ist jetzt noch flexibler:

- **Videogeschwindigkeit in der Galerie steuern:** Feed-Videos übernehmen ab sofort Ihre Einstellungen für **Standard-Videowiedergabegeschwindigkeit** und **Rand gedrückt halten für 2x Geschwindigkeit**. Halten Sie den linken oder rechten Rand eines laufenden Videos gedrückt, um auf 2-fache Geschwindigkeit zu springen, und streichen Sie anschließend horizontal, um die Geschwindigkeit zu wechseln.
- **Timeline- und Galerie-Zoom:** Zoomen Sie auf Mobilgeräten mit zwei Fingern – oder halten Sie auf dem Desktop `Strg`/`Cmd` gedrückt und scrollen Sie – sowohl in Feed-Timelines als auch in der Vollbild-Foto- und Videogalerie. Die Steuerelemente für Wiedergabe und Spulen bleiben auch im gezoomten Zustand erreichbar.
- **Benachrichtigungen in Timelines öffnen:** Wenn Sie auf eine Benachrichtigung über neue Beiträge tippen, wird nun direkt die entsprechende Nora-Timeline geöffnet.
- **Ausweichmöglichkeit für fehlgeschlagene Videos:** Wenn ein Video in der Vollbild-Galerie nicht abgespielt werden kann, lässt sich der Beitrag direkt auf der Originalseite öffnen.

## Downloads, Profile und Website-Verbesserungen

Dieses Release enthält außerdem mehrere Verbesserungen beim Surfen und Herunterladen auf allen Plattformen:

- **Speicherort für Downloads unter Android wählen:** Aktivieren Sie unter **Einstellungen → Downloads** die Option **Bei jedem Download nach dem Speicherort fragen**, um für jede Datei den Zielordner und den Dateinamen festzulegen. Zudem sorgt dieses Update für ein zuverlässigeres Speichern von Downloads.
- **Aus dem Kopfzeilenmenü in anderem Profil öffnen:** Wechseln Sie den aktiven mobilen Tab zusätzlich zum langen Drücken in der Tab-Übersicht auch direkt über das Kopfzeilenmenü in ein anderes Nora-Profil.
- **Korrekturen für TikTok und Instagram:** Sehen Sie sich TikTok-Videos über eine neue Vollbild-Schaltfläche an und laden Sie Videos zuverlässiger von TikTok und Instagram herunter – auch wenn Sie bei Instagram abgemeldet sind.
- **Flüssigeres Scrollen und Hintergrundprüfungen:** Seiten springen nicht mehr, wenn die Symbolleiste ein- oder ausgeblendet wird, und Hintergrundprüfungen für Feeds laufen unter Android zuverlässiger.

Alle Einzelheiten zum Release finden Sie im [Änderungsprotokoll](/de/nora/changelog/).

## Nora 0.9.2 herunterladen

[Installieren oder aktualisieren Sie Nora](/de/nora/install/) unter Android, iOS, Linux, macOS oder Windows.

Sie können auch die [Nora-Dokumentation](/de/nora/) erkunden oder die [Release Notes auf GitHub](https://github.com/nonbili/Nora/releases/tag/v0.9.2) lesen.
