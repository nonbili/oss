---
title: "Nora 0.9.7: Choose Your Download Folder and Customize the Menu"
description: Pick where downloads go on Android, hide actions you rarely use in the three-dot menu, and get fixes for WhatsApp Web, Facebook Marketplace, and tab navigation.
date: 2026-11-19
product: nora
---

With **Nora 0.9.7 for mobile**, you can send Android downloads to a folder you choose and trim the browser’s three-dot menu to the actions you use. This release also opens WhatsApp Web and Facebook Marketplace in desktop mode automatically.

## Choose Where Downloads Are Saved

On Android, open **Settings → Preferences → Downloads → Save downloads to** to set where browser downloads go.

- **Downloads** uses Android’s standard Downloads folder.
- **Ask every time** lets you pick a destination for each download.
- **Choose folder…** saves future downloads to the folder you select.

If you choose a folder, Nora also uses it for media you save from the feed on Android 10 and later. This release fixes downloads from `data:` links, which some sites use for files they generate in the browser.

<div class="screenshot-gallery" style="max-width: 24rem;">
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">Nora Downloads is selected as the destination for future downloads.</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/nora-0-9-7/download-destination.webp" alt="Android download settings with Nora Downloads selected and the Downloads, Ask every time, and Choose folder options visible" width="1080" height="2220" loading="lazy" />
    </div>
  </figure>
</div>

## Customize the Three-Dot Menu

Open **Settings → Appearance → Toolbar → Customize three-dot menu** and switch off actions you rarely use. For example, keep **Find in page** and **Share**, and hide **Desktop site** if you rarely switch layouts. The actions you keep appear when they’re available on the current tab.

**Settings** stays in the menu, and **Restore menu defaults** clears your changes in one tap.

<div class="screenshot-gallery">
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">Keep Find in page on and switch Desktop site off.</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/nora-0-9-7/customize-three-dot-menu.webp" alt="Expanded Customize three-dot menu settings with Find in page on and Desktop site off" width="1080" height="2220" loading="lazy" />
    </div>
  </figure>
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">The browser menu keeps Find in page, Share, and Settings.</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/nora-0-9-7/customized-three-dot-menu.webp" alt="Customized browser menu showing Find in page, Share, and Settings, with Desktop site hidden" width="1080" height="2220" loading="lazy" />
    </div>
  </figure>
</div>

## WhatsApp Web and Facebook Marketplace Open in Desktop Mode

In **WhatsApp Web**, the on-screen keyboard can now open without closing a picker. **Facebook Marketplace** uses the desktop site so you can message sellers from a listing.

## Browsing and Feed Fixes

- Facebook ad blocking now catches sponsored posts even when their labels appear late. Long-pressing a Facebook reaction button keeps the browser’s context menu out of the way.
- The Reddit game filter keeps regular posts visible.
- The tab switcher opens with your active tab in view. On a new tab, a typed address opens on the first **Go** tap, and opening an incoming link preserves your other tabs.
- Pull-to-refresh stays out of the way when you gesture inside a media viewer.

See the [release notes on GitHub](https://github.com/nonbili/Nora/releases/tag/v0.9.7) for the complete list of changes.

## Get Nora

[Install or update Nora](/nora/install/), or explore the [Nora documentation](/nora/) to learn more.
