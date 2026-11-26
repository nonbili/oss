---
title: "Nori 0.2.9: Social-Media-Beiträge behalten, Bildkarten teilen, Listen sortieren"
description: Behalten Sie eine lesbare Kopie von Social-Media-Beiträgen für das Offline-Lesen, verwandeln Sie Lesezeichen in Bildkarten und wählen Sie für jede Liste eine eigene Sortierreihenfolge.
date: 2026-11-18
product: nori
---

Ein Lesezeichen speichert die Adresse. Mit **Nori 0.2.9 für Mobilgeräte** können Sie auch eine lesbare Kopie eines Social-Media-Beitrags behalten. Außerdem lassen sich Lesezeichen in dieser Version als Bildkarten teilen und Listen individuell sortieren.

## Eine Kopie des Beitrags behalten

Wenn Sie ein Lesezeichen für einen unterstützten Social-Media-Beitrag setzen, versucht Nori automatisch, dessen Inhalt für das Offline-Lesen zu speichern. Einmal gespeichert, bleibt die Kopie verfügbar, wenn Sie keine Verbindung haben oder der ursprüngliche Beitrag verschwindet.

Unterstützte Dienste sind **X, Instagram, Threads, TikTok, Facebook, Bluesky, Reddit und Mastodon**. Je nachdem, was der Dienst bereitstellt, umfasst die gespeicherte Kopie den Autor, den Beitragstext, angehängte Bilder sowie zitierte oder zugehörige Beiträge. Sie können den Beitragstext auch kopieren.

**Video und Audio werden als Vorschaubilder gespeichert, nicht als offline abspielbare Downloads.**

Einige Websites erfordern eine Anmeldung oder blockieren das automatische Abrufen. Wenn ein Beitrag nicht gespeichert wird, wählen Sie **Beitrag von Seite speichern**, melden Sie sich bei Bedarf an und tippen Sie auf **Speichern**, sobald Nori den Beitrag gefunden hat.

Im Lesezeichen-Editor zeigt **Gespeicherter Beitrag** das Datum Ihrer gespeicherten Kopie an. Verwenden Sie **Aktualisieren**, um ihn erneut abzurufen; liefert die Website weniger Inhalt zurück, behält Nori die vorhandene Kopie.

Das automatische Speichern ist standardmäßig aktiviert. Sie können es unter **Einstellungen → Allgemein → Social-Media-Beiträge offline speichern** deaktivieren. Wenn Sie **Nori Sync** verwenden, werden gespeicherte Beiträge und ihre Bilder geräteübergreifend synchronisiert.

![Nori zeigt einen gespeicherten Bluesky-Beitrag mit Autor, Text und angehängtem Bild bei aktiviertem Flugmodus](/blog/nori-0-2-9/saved-social-post.webp "Ein gespeicherter Bluesky-Beitrag bleibt samt Bild lesbar, während sich das Smartphone im Flugmodus befindet.")

## Mehr als nur einen Link teilen

Etwas gefunden, das Sie weitergeben möchten? Öffnen Sie das Aktionsmenü eines Lesezeichens und wählen Sie **Als Bild teilen**. Nori verwandelt ein Webseiten-Lesezeichen oder einen gespeicherten Social-Media-Beitrag in eine Bildkarte, die Sie vor dem Senden in der Vorschau ansehen können.

Wählen Sie einen **hellen oder dunklen** Hintergrund und entscheiden Sie, ob **Notiz** und **Tags** des Lesezeichens – sofern vorhanden – einbezogen werden sollen. Notizen sind zunächst ausgeblendet, sodass Sie selbst bestimmen können, ob Sie Ihre persönlichen Notizen teilen möchten.

Tippen Sie auf **Teilen**, um die Karte über das Teilen-Menü Ihres Geräts zu versenden, oder tippen Sie auf die Download-Schaltfläche für **Bild speichern**, um sie in Ihrer Fotomediathek abzulegen.

![Vorschau von Als Bild teilen mit hellem und dunklem Design, Steuerelementen für Notiz und Tags sowie Download- und Teilen-Schaltfläche](/blog/nori-0-2-9/share-as-image.webp "Sehen Sie sich die Karte in der Vorschau an, wählen Sie aus, was enthalten sein soll, und teilen oder speichern Sie das Bild.")

## Jeder Liste ihre eigene Reihenfolge geben

Behalten Sie eine Leseliste in der gewünschten Bearbeitungsreihenfolge, stellen Sie neue Funde in einer anderen Liste nach oben und sortieren Sie eine Referenzsammlung alphabetisch.

Öffnen Sie **Liste bearbeiten** oder erstellen Sie eine **Neue Liste** und wählen Sie **Lesezeichen-Reihenfolge**:

- **Manuell (zum Neuordnen ziehen)** für eine selbst festgelegte Reihenfolge.
- **Neueste zuerst** oder **Älteste zuerst**, um nach dem Zeitpunkt des Hinzufügens zu sortieren.
- **Name A–Z** oder **Name Z–A**, um nach Namen zu sortieren.

Die Auswahl gilt jeweils für diese Liste, sodass Ihre anderen Listen ihre eigene Reihenfolge behalten können. Im selben Editor können Sie die Liste auch umbenennen.

![Liste bearbeiten für Reading queue mit allen fünf sichtbaren Optionen für die Lesezeichen-Reihenfolge](/blog/nori-0-2-9/list-bookmark-order.webp "Wählen Sie eine Lesezeichen-Reihenfolge für die Liste Reading queue.")

Diese Version verbessert außerdem das Scrollen in der Seitenleiste **Alle Lesezeichen** unter iOS und behebt ein Synchronisationsproblem. Einzelheiten finden Sie in den [vollständigen Versionshinweisen](https://github.com/nonbili/Nori/releases/tag/v0.2.9).

[Nori installieren oder aktualisieren](/de/nori/install/) oder die [Nori-Dokumentation](/de/nori/) entdecken.
