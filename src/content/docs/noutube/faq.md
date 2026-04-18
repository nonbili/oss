---
title: FAQ
description: Common NouTube questions pulled from GitHub issues.
sidebar:
  order: 9
---
This page summarizes recurring user questions from the public GitHub issue tracker.

## Desktop sign-in button is missing or login seems stuck

If the desktop app does not show a visible `Sign in` button, try opening the `Your data in YouTube` menu first. In the issue discussion, that path let affected users reach the sign-in flow, and the maintainer later said the visible button should be back in `v0.1.6`.

Sources:

- [Issue #46: desktop version never logs in always error](https://github.com/nonbili/NouTube/issues/46)

## Desktop login still fails even when the sign-in page opens

There have been reports that some desktop setups still fail Google login even after clearing data. The issue thread did not end with a confirmed universal fix, so the practical guidance is:

- update to the latest desktop release
- clear the app's webview/profile data if you already tried logging in
- if it still fails, report your OS, package format, and screenshots in GitHub

Source:

- [Issue #103: Unable to login from desktop client](https://github.com/nonbili/NouTube/issues/103)

## YouTube Music is not loading correctly

One documented troubleshooting path was:

1. Make sure `NouTube` is the default app for `music.youtube.com`.
2. If the official YouTube Music app is installed, remove its default link handling first.
3. If the problem continues, try a custom user agent from `Settings > Tools > Custom user agent`.

This guidance comes directly from the maintainer in the issue thread. It is a workaround, not a guaranteed fix for every device.

Source:

- [Issue #150: Noutube Music Error Message, Not Loading.](https://github.com/nonbili/NouTube/issues/150)

## Some ads are still getting through

There was a report of short YouTube Premium ads appearing before videos. The maintainer pointed users to `v0.4.9`, which implies ad blocking fixes shipped in later releases. If you see ads:

- update to the latest release from F-Droid or GitHub
- if the problem persists, open a new issue with app version and a screenshot

Source:

- [Issue #117: Ad not blocked](https://github.com/nonbili/NouTube/issues/117)

## NouTube reopens a queue instead of the home page

If NouTube keeps restoring playback or opens back into an old item instead of the homepage, check whether the queue icon is still active. In the issue thread, the maintainer identified an uncleared queue as the reason NouTube kept trying to resume playback.

Source:

- [Issue #138: Restoring playback](https://github.com/nonbili/NouTube/issues/138)

## Where should I report bugs or ask for features?

Use the GitHub repo:

- [nonbili/NouTube issues](https://github.com/nonbili/NouTube/issues)
