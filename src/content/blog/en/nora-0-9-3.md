---
title: "Nora 0.9.3: Open Downloads Faster, Browse More Smoothly"
description: Open completed downloads from their notifications, swipe through carousels on Android, and reduce background work and memory use.
date: 2026-10-31
product: nora
---

**Nora 0.9.3 for mobile** makes it easier to get to a saved file, with a shortcut right in the download confirmation. It also fixes carousel gestures on Android and reduces the work Nora does when pages are no longer in use.

## Go Straight to Your Download

On **Android**, download confirmations now include an **Open** button to open the saved file in a compatible app. Saving a single photo or video from the feed also offers this action.

Save the file, then use the button in the confirmation message to get to it without searching through Downloads.

## Swipe Through Carousels on Android

Swiping sideways through a page's photos could accidentally start pull-to-refresh. Nora now distinguishes horizontal swipes from vertical drags, so you can move through a carousel without reloading the page.

## Less Background Work, Better Tab Cleanup

On Android, Nora pauses WebView timers while the app is in the background, reducing unnecessary CPU and battery use. Feed video progress updates also run only while the zoom controls need them.

Closed tabs and dismissed popups now release their WebViews more reliably on Android, and closed tabs can be freed correctly on iOS. This release also fixes an Android issue where opening a link in a new tab could leave a blank page.

See the [release notes on GitHub](https://github.com/nonbili/Nora/releases/tag/v0.9.3) for the complete list of changes.

## Get Nora

[Install or update Nora](/nora/install/), or explore the [Nora documentation](/nora/) to learn more.
