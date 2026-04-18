---
title: NouTube
description: Overview of NouTube and what it is built to do.
---
NouTube is an Android and desktop app for YouTube and YouTube Music.

It wraps the mobile YouTube and YouTube Music web apps and layers native behavior on top, including ad blocking, playback control hooks, download support, RSS feeds, and offline-friendly library management.

## Highlights

- No ads
- Background playback
- Video and music support in one app
- Library and history management without signing in
- Video downloads
- RSS feed reader for YouTube channels
- Live chat support
- Custom CSS support

## Platforms

- Android
- Desktop

The desktop build follows the same product model as the mobile app, with native installers for larger screens.

## First Run

After install, a practical first setup looks like this:

1. Open YouTube or YouTube Music inside the app.
2. Check playback behavior, especially background playback if that is your main use case.
3. Configure your library, history, feeds, and download preferences.
4. Add custom CSS only after confirming the default experience works for you.

## Supported Links

NouTube is configured to handle these hosts:

- `youtube.com`
- `www.youtube.com`
- `m.youtube.com`
- `music.youtube.com`
- `youtu.be`

If your device asks which app should open a supported link, choose `NouTube`.

## How It Works

NouTube wraps the web apps rather than rebuilding YouTube from scratch. In practice that means:

- You keep the official site flow and layout
- The app adds ad blocking and native playback hooks
- Background playback and device integration work better than using the site in a normal browser

## More Links

For releases, issue tracking, and project updates, use the GitHub repo:

- [nonbili/NouTube](https://github.com/nonbili/NouTube)

Continue with [Install](/noutube/install/) for downloads and package links.
