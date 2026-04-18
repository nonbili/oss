---
title: FAQ
description: Common Nora questions pulled from GitHub issues.
sidebar:
  order: 9
---
This page summarizes recurring user questions from the public GitHub issue tracker.

## Can Nora open Instagram or Facebook links directly from other apps?

Yes, that is intended to work. The maintainer said you may need to:

- enable Android's `Open by default` behavior for Nora
- uninstall or disable the official app if it keeps claiming the same links
- update to a newer Nora release if deep links open the app but not the requested post

Source:

- [Issue #51: Support opening links in Nora](https://github.com/nonbili/Nora/issues/51)

## Instagram fails to open inside Nora

A current open issue shows some users still hitting an Instagram error page even after trying reload, desktop site mode, and clearing webview data. That means there is not a confirmed fix yet. If this happens on your device:

- try reload
- try desktop site mode
- clear Nora's webview data
- if it still fails, check GitHub for updates or add your device details to the issue

Source:

- [Issue #147: Issue when trying to open Instagram](https://github.com/nonbili/Nora/issues/147)

## Media keeps playing after I leave the app

This was reported for Instagram audio continuing in the background without useful controls. The maintainer replied that it would be fixed in the next release, so the first thing to do is update Nora to the newest version available on your store or release channel.

Source:

- [Issue #119: can you make it stop playing in background ? pls](https://github.com/nonbili/Nora/issues/119)

## Can I download images or videos?

Yes, at least part of this is already supported:

- long-press an image to show the download menu
- Facebook and Instagram Reel downloads were already supported when the issue was discussed
- X video download support was added afterward

Source:

- [Issue #153: download](https://github.com/nonbili/Nora/issues/153)

## Why does X sign-in fail?

The issue discussion suggests that normal email/password sign-in was expected to work, while Google-based sign-in in a webview needed extra work. The maintainer later said an `Inject cookie` menu was added in `v0.1.5` as a workaround for affected users.

Source:

- [Issue #1: Unable to sign in to X](https://github.com/nonbili/Nora/issues/1)

## Can I use my browser's extensions like uBlock Origin or Dark Reader inside Nora?

Not in the same way as a full browser profile. In the feature request discussion, the maintainer pointed users to Nora's own custom CSS support for UI changes instead of promising embedded browser-extension support.

Source:

- [Issue #96: Open the socials in the webview provided by browser](https://github.com/nonbili/Nora/issues/96)

## Where should I report bugs or ask for features?

Use the GitHub repo:

- [nonbili/Nora issues](https://github.com/nonbili/Nora/issues)
