---
title: "Nora 0.9.2: Alternative Feed Sources, Timeline Zoom, and Download Controls"
description: Read Instagram feeds from imginn and X feeds from Nitter instances, zoom into timelines and gallery media, and choose where to save downloads on Android.
sidebar:
  label: Nora 0.9.2 Release
  order: 2
---

*Published on October 29, 2026*

**Nora 0.9.2** builds on the [0.9.0 social feed reader](/blog/nora-0-9-0/) with opt-in alternative sources for Instagram and X feeds, zoom gestures and video speed controls in the feed, and configurable download destinations on Android.

## Read Instagram from imginn and X from Nitter

Following public **Instagram** and **X** profiles without signing in can run into login walls or rate limits. Nora 0.9.2 adds two opt-in alternatives in **Feed Settings** so your timelines can stay updated without logging in to an account:

- **Read Instagram from imginn:** Choose **When Instagram fails** to use imginn as a fallback, or **First, then Instagram** to check imginn first while Nora is open. If imginn asks for a quick check to confirm you are not a robot, Nora prompts you to complete it in-app so your Instagram sources can continue updating.
- **Read X from Nitter:** Choose **When X fails** or **First, then X** and add one or more Nitter instance addresses (such as `nitter.example.com`). Nora tries your instances in turn — reading RSS feeds, profile pages, or using an in-app webview when an instance runs a browser check while Nora is open — and temporarily skips instances that fail so feed checks don't stall.

Both options are off by default and can be enabled anytime in **Feed Settings**.

<div class="screenshot-gallery">
  <figure class="screenshot-card">
    <div class="screenshot-card__eyebrow">Feed Settings</div>
    <h2 class="screenshot-card__title">imginn & Nitter Sources</h2>
    <p class="screenshot-card__body">
      Read Instagram profiles from imginn and X profiles from your configured Nitter instances — as a fallback or primary source.
    </p>
    <div class="screenshot-frame">
      <img src="/blog/nora-0-9-2/feed-settings.png" alt="Nora 0.9.2 feed settings showing imginn and Nitter options" />
    </div>
  </figure>

  <figure class="screenshot-card">
    <div class="screenshot-card__eyebrow">Media</div>
    <h2 class="screenshot-card__title">Full-Screen Gallery & Zoom</h2>
    <p class="screenshot-card__body">
      Pinch to zoom into photos and videos in the full-screen gallery, hold the screen edge to speed up playback, or save media directly.
    </p>
    <div class="screenshot-frame">
      <img src="/blog/nora-0-9-2/media-gallery.png" alt="Nora 0.9.2 full-screen media gallery screen" />
    </div>
  </figure>

  <figure class="screenshot-card">
    <div class="screenshot-card__eyebrow">Profiles</div>
    <h2 class="screenshot-card__title">Reopen Tab in Profile</h2>
    <p class="screenshot-card__body">
      Switch any open mobile tab into another Nora profile directly from the header menu or tab switcher.
    </p>
    <div class="screenshot-frame">
      <img src="/blog/nora-0-9-2/reopen-in-profile.png" alt="Nora 0.9.2 reopen tab in profile dialog" />
    </div>
  </figure>
</div>

## Feed Video Controls, Zoom, and Notifications

Catching up on timelines and media in the feed is also more flexible:

- **Video speed controls in the gallery:** Feed videos now use your **Default video playback speed** and **Long-press edge for 2x speed** preferences. Touch and hold the left or right edge of a playing video to jump to 2x speed, then slide horizontally to switch speeds.
- **Timeline and gallery zoom:** Pinch to zoom on mobile — or hold `Ctrl`/`Cmd` and scroll on desktop — in both feed timelines and the full-screen photo and video gallery. Video playback and seek controls stay accessible while zoomed in.
- **Open notifications in timelines:** Tapping a new-post notification now opens directly into the corresponding Nora timeline.
- **Fallback for failed videos:** When a video cannot be played in the full-screen gallery, you can open the post directly on the original site.

## Downloads, Profiles, and Site Improvements

This release also includes several browsing and download improvements across platforms:

- **Choose where to save downloads on Android:** Turn on **Ask where to save each download** under **Settings → Downloads** to pick the destination folder and filename for each file, with improved fallback to extension MIME types when content detection fails.
- **Reopen in profile from the header menu:** Switch the active mobile tab into another Nora profile directly from the header menu, in addition to long-pressing tabs in the tab switcher.
- **TikTok and Instagram fixes:** Added a fullscreen button on TikTok videos, enabled a desktop user agent across all `tiktok.com` hosts, and fixed video downloads on TikTok and logged-out Instagram.
- **Smoother scrolling and background checks:** Fixed WebView scroll jumping when hiding or showing the toolbar, and improved background feed checks on Android.

See the [changelog](/nora/changelog/) for the full release details.

## Get Nora 0.9.2

[Install or update Nora](/nora/install/) on Android, iOS, Linux, macOS, or Windows.

You can also explore the [Nora documentation](/nora/) or read the [release notes on GitHub](https://github.com/nonbili/Nora/releases/tag/v0.9.2).
