---
title: FAQ
description: Common NouTube questions pulled from GitHub issues.
sidebar:
  order: 9
---
This page summarizes recurring user questions from the public GitHub issue tracker.

## Sign-in problems

Google often rejects sign-in from apps that embed a web page, so signing in inside NouTube can fail on both Android and desktop, usually with a "This browser or app may not be secure" error. On desktop, if there is no visible `Sign in` button, try opening the `Your data in YouTube` menu first.

If you cannot sign in, use the **Inject cookie** feature instead:

1. On a computer, sign in to YouTube in Chrome or another Chromium-based browser, then export your YouTube cookies with a browser extension (like `getcookies.txt`).
2. On Android, copy the exported file to your device.
3. In NouTube, open **Settings > Tools > Inject cookie**, import the file (or paste its contents), and save.

This bypasses Google's secure browser check and is currently the most reliable fix for sign-in problems on both Android and desktop.

Sources:

- [Issue #142: Can't login to Google on Windows app](https://github.com/nonbili/NouTube/issues/142)

## Why is the latest update not available on F-Droid yet?

The release schedule on F-Droid is not controlled by the NouTube maintainers. F-Droid builds and publishes updates independently in batches, which typically takes several days after a new version is released on GitHub.

If you want the latest version immediately, you can download the APK from the [GitHub Releases](https://github.com/nonbili/NouTube/releases) page. However, please note that GitHub releases use a different signing key than F-Droid, so you must uninstall the F-Droid version first before installing the APK from GitHub.

Sources:

- [Issue #16: Update request](https://github.com/nonbili/NouTube/issues/16)
- [Issue #14: Bug: rotate to landscape resets app to home page](https://github.com/nonbili/NouTube/issues/14)

## YouTube Music is not loading correctly

If YouTube Music is not loading correctly, try toggling **Desktop site** in the application menu.

Source:

- [Issue #150: Noutube Music Error Message, Not Loading.](https://github.com/nonbili/NouTube/issues/150)

## NouTube reopens a queue instead of the home page

If NouTube keeps restoring playback or opens back into an old item instead of the homepage, check whether the queue icon is still active. In the issue thread, the maintainer identified an uncleared queue as the reason NouTube kept trying to resume playback.

Source:

- [Issue #138: Restoring playback](https://github.com/nonbili/NouTube/issues/138)

## Where should I report bugs or ask for features?

Use the GitHub repo:

- [nonbili/NouTube issues](https://github.com/nonbili/NouTube/issues)
