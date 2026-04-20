---
title: FAQ
description: Common NouTube questions pulled from GitHub issues.
sidebar:
  order: 9
---
This page summarizes recurring user questions from the public GitHub issue tracker.

## Desktop sign-in/login problems

If the desktop app does not show a visible `Sign in` button, try opening the `Your data in YouTube` menu first. If the sign-in page opens but you receive a "browser or app may not be secure" error, use the **Inject cookie** feature:

1. Use a browser extension (like `getcookies.txt`) to export your YouTube cookies.
2. Import the cookies into NouTube using the **Inject cookie** button.

This method bypasses Google's secure browser check and is currently the most reliable fix for desktop login issues.

Sources:

- [Issue #142: Can't login to Google on Windows app](https://github.com/nonbili/NouTube/issues/142)

## YouTube Music is not loading correctly

If YouTube Music is not loading correctly, try toggling **Desktop site** in the application menu (available since `v0.5.1`).

Other troubleshooting steps:

1. Make sure `NouTube` is the default app for `music.youtube.com`.
2. If the official YouTube Music app is installed, remove its default link handling first.
3. If the problem continues, try a custom user agent from `Settings > Tools > Custom user agent`.

Source:

- [Issue #150: Noutube Music Error Message, Not Loading.](https://github.com/nonbili/NouTube/issues/150)

## NouTube reopens a queue instead of the home page

If NouTube keeps restoring playback or opens back into an old item instead of the homepage, check whether the queue icon is still active. In the issue thread, the maintainer identified an uncleared queue as the reason NouTube kept trying to resume playback.

Source:

- [Issue #138: Restoring playback](https://github.com/nonbili/NouTube/issues/138)

## Where should I report bugs or ask for features?

Use the GitHub repo:

- [nonbili/NouTube issues](https://github.com/nonbili/NouTube/issues)
