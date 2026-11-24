---
title: "NouTube 0.7.11 Adds a Custom Android Toolbar and iOS Video Downloads"
description: Put your favorite actions on the Android toolbar, swipe to go fullscreen, hide YouTube comments, and save videos on iPhone and iPad.
date: 2026-11-24
product: noutube
---

NouTube 0.7.11 lets you put actions like **Share** and **Open URL** directly on the Android toolbar. On iPhone and iPad, you can now download compatible videos from **Tools**, and videos start faster. The mobile update also adds fullscreen swipe gestures and a setting to hide YouTube comments.

## Put Your Most-Used Actions on the Android Toolbar

Open **Settings → Appearance → Toolbar buttons**. Use the switches to choose which buttons appear, then drag the handles to set their order. For example, turn on **Share** and **Open URL** and drag them to the top of the list to keep both actions within reach while watching a video.

You can also add **Tools**, **Desktop site**, **Settings**, or the **YouTube / YouTube Music** switcher to the toolbar. The same list lets you reorder existing buttons like **Library**, **Channels feed**, and **History**.

<div class="screenshot-gallery">
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">Turn on Share and Open URL and drag them to the top of the list.</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/noutube-0-7-11/android-toolbar-settings.webp" alt="Android Appearance settings with Share and Open URL switched on in the first two rows and drag handles on the right" width="1080" height="2220" loading="lazy" />
    </div>
  </figure>
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">Share and Open URL are now the first two buttons on the watch page toolbar.</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/noutube-0-7-11/android-toolbar-result.webp" alt="NouTube toolbar above the Big Buck Bunny watch page, with the Share icon and Open URL link icon at the far left" width="1080" height="2220" loading="lazy" />
    </div>
  </figure>
</div>

## Download Videos on iPhone and iPad

For a video you have permission to save, open **Tools** and tap **Download video**. NouTube downloads a compatible MP4 when one is available. When the download finishes, tap **Export** to save or share the file.

<div class="screenshot-gallery">
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">Tools fills in the current video’s URL.</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/noutube-0-7-11/ios-download-tools.webp" alt="iPhone download panel with the video URL filled in, an MP4 availability note, and the Download video button" width="1206" height="2622" loading="lazy" />
    </div>
  </figure>
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">Export appears in Download History when the file is ready.</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/noutube-0-7-11/ios-download-export.webp" alt="iPhone Download History entry with a green checkmark, Download complete status, and an Export button" width="1206" height="2622" loading="lazy" />
    </div>
  </figure>
</div>

*Big Buck Bunny* © 2008 Blender Foundation / [www.bigbuckbunny.org](https://peach.blender.org/about/). [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/).

The faster video startup introduced on Android in 0.7.10 now applies to iOS, too. On iPad, YouTube’s playback controls stay available in fullscreen.

## Swipe for Fullscreen or Hide Comments

On mobile, swipe up on the YouTube player to enter fullscreen and swipe down to return to the watch page. Start the swipe on the video itself so you can still use the playback controls and scrub the progress bar as usual.

To remove the comments section from YouTube watch pages, open **Settings → Preferences → Distraction-free** and turn on **Hide comments**.

<div class="screenshot-gallery" style="max-width: 24rem;">
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">Hide comments is at the bottom of the Distraction-free settings.</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/noutube-0-7-11/hide-comments-setting.webp" alt="Android Preferences screen with the Hide comments switch on at the bottom of the Distraction-free section" width="1080" height="2220" loading="lazy" />
    </div>
  </figure>
</div>

## Other Fixes

- Opus audio downloads now use the `.opus` extension. NouTube fixes a yt-dlp startup issue in Android release builds and handles download and playback failures more reliably.
- YouTube’s desktop watch page now fits narrow Android screens. Feed previews stay out of watch history on Android, and **Next** in the system’s YouTube Music controls leaves NouTube’s own queue alone.
- This release updates the Italian, Polish, Brazilian Portuguese, Russian, and Ukrainian translations.

[See the release on GitHub](https://github.com/nonbili/NouTube/releases/tag/v0.7.11).

## Get NouTube

[Install or update NouTube](/noutube/install/), or browse the [NouTube documentation](/noutube/).
