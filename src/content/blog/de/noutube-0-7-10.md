---
title: "NouTube 0.7.10: Schnellerer Videostart, eigene Download-Ordner und Community-Beiträge"
description: Weniger Wartezeit bis zum Videostart, wähle den Speicherort für Downloads unter Android und hole Community-Beiträge gespeicherter Kanäle in deinen Feed.
date: 2026-11-16
product: noutube
---

**NouTube 0.7.10 für Android** verkürzt die Wartezeit, bevor ein Video zu spielen beginnt. Dieser Beitrag deckt auch die Neuerungen aus **0.7.9** ab: die Wahl eines Download-Ordners unter Android und das Lesen von Community-Beiträgen deiner gespeicherten Kanäle im Feedreader.

## Weniger Warten vor der Wiedergabe

NouTube verarbeitet Antworten von Videoseiten nun bereits während sie eintreffen, sodass die Wiedergabe beginnen kann, ohne auf die vollständige Antwort zu warten. Bei **aktiviertem Werbeblocker** wird die Wiedergabe zudem ohne Pre-Roll-Werbung angefordert, was eine weitere Ursache für Startverzögerungen reduziert.

Verwandte Verbesserungen auf dem **Desktop** lassen die Videoseite ebenfalls schneller laden. Für diese Änderungen muss keine neue Einstellung aktiviert werden.

## Download-Ordner unter Android wählen

Möchtest du heruntergeladene Videos in einem eigenen Ordner aufbewahren? Unter **Android** kannst du jetzt auswählen, wo sie gespeichert werden.

Tippe im Download-Dialog unter **Ordner** auf **Durchsuchen** und wähle anschließend einen Ordner in der Android-Ordnerauswahl aus. Um zum Standardspeicherort zurückzukehren, tippe auf **Ordner „Downloads“ verwenden**.

<div class="screenshot-gallery" style="max-width: 24rem;">
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">Speichere Videos in einem eigenen Ordner oder wechsle zurück zu „Downloads“.</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/noutube-0-7-10/download-folder.webp" alt="NouTubes Android-Download-Dialog mit Download/NouTube als ausgewähltem Ordner, Durchsuchen und Ordner „Downloads“ verwenden" width="1080" height="2400" loading="lazy" />
    </div>
  </figure>
</div>

## Community-Beiträge im Feedreader

Deine gespeicherten Kanäle teilen möglicherweise Neuigkeiten zwischen Video-Uploads. Der **Kanal-Feed** kann nun auch deren Community-Beiträge zusammen mit Videos anzeigen, sodass du beides an einem Ort lesen kannst.

Um es auszuprobieren, öffne **Einstellungen → Erscheinungsbild** und aktiviere **Community-Beiträge im Feed** direkt unter **Kanal-Feed**. Die Option ist **standardmäßig deaktiviert**: Das Einbeziehen von Beiträgen erfordert das Abrufen des Tabs „Beiträge“ jedes gespeicherten Kanals, was beim Aktualisieren des Feeds mehr Daten verbraucht.

<div class="screenshot-gallery">
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">Aktiviere Community-Beiträge in den Erscheinungsbild-Einstellungen.</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/noutube-0-7-10/community-posts-setting.webp" alt="NouTubes Erscheinungsbild-Einstellungen unter Android mit aktiviertem Kanal-Feed und Community-Beiträgen im Feed" width="1080" height="2400" loading="lazy" />
    </div>
  </figure>
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">Community-Beiträge erscheinen neben Videos deiner gespeicherten Kanäle.</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/noutube-0-7-10/community-post-in-feed.webp" alt="NouTubes Feed zeigt Community-Beiträge von Veritasium mit Text und Bild neben Video-Uploads" width="1080" height="2400" loading="lazy" />
    </div>
  </figure>
</div>

## Kleinere Korrekturen

Die Updates machen auch einige alltägliche Interaktionen flüssiger:

- **Android-Querformat-Layout:** App-Ansichten und Übersetzungskarten bleiben frei von der System-Navigationsleiste.
- **Android-Linkmenüs:** Kontextmenüs beim langen Drücken auf Videolinks zeigen die richtigen Videotitel und Aktionssymbole.
- **Desktop-Lesezeichen:** Das Markieren eines Videos mit einem Stern über sein Vorschaubild speichert den richtigen Titel.

Außerdem wurden Übersetzungen für Polnisch, Französisch, Galicisch, Italienisch, Portugiesisch (Brasilien) und Russisch aktualisiert.

Die vollständige Liste der Änderungen findest du in den [Versionshinweisen auf GitHub](https://github.com/nonbili/NouTube/releases/tag/v0.7.10).

## NouTube herunterladen

[NouTube installieren oder aktualisieren](/de/noutube/install/) oder die [NouTube-Dokumentation](/de/noutube/) erkunden, um mehr zu erfahren.
