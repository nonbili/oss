---
title: Επέκταση Προγράμματος Περιήγησης
description: Χρήση της επέκτασης περιήγησης NouTube σε Firefox και Chrome.
sidebar:
  order: 6
---

Το NouTube περιλαμβάνει μια επέκταση προγράμματος περιήγησης για Mozilla Firefox και Google Chrome που φέρνει την πιο καθαρή περιήγηση, τη βελτιωμένη αναπαραγωγή, τις εξατομικευμένες ροές (feeds), τους σελιδοδείκτες και τα εργαλεία προσαρμογής του NouTube απευθείας στο πρόγραμμα περιήγησης του υπολογιστή σας.

## Εγκατάσταση της Επέκτασης

Εγκαταστήστε το NouTube απευθείας από τα επίσημα καταστήματα επεκτάσεων:

- [Firefox Add-ons](https://addons.mozilla.org/addon/noutube/)
- [Chrome Web Store](https://chromewebstore.google.com/detail/noutube/cpmippodfdmialcoaegbbmhpdamodoif)

## Μεταγλώττιση από τον Πηγαίο Κώδικα

Η επέκταση είναι ανοιχτού κώδικα, μοιράζεται κώδικα με την εφαρμογή NouTube και έχει δημιουργηθεί με το [WXT](https://wxt.dev/) χρησιμοποιώντας το Manifest V3:

```bash
bun link
bun install
cd extension
bun run dev          # Λειτουργία ανάπτυξης Chrome
bun run dev:firefox  # Λειτουργία ανάπτυξης Firefox
bun run build:all    # Δημιουργία πακέτων παραγωγής
```
