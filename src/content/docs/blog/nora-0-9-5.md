---
title: "Nora 0.9.5: Proxy Sign-In and a Quieter X"
description: Sign in to proxies on Android and iOS 17 or later, choose what to hide on X, default searches to Latest, and keep ordinary Facebook posts visible.
sidebar:
  label: Nora 0.9.5 Release
  order: 3
---

*Published on November 6, 2026*

**Nora 0.9.5 for mobile** adds proxy username and password fields on mobile and more control over what appears on X. It also improves Facebook ad filtering and browser cookie imports.

## Sign In to Your Proxy on Mobile

Open **Settings → Browsing → Proxy** to choose HTTP or SOCKS, enter the host and port, and supply your username and password. Authenticated proxies are supported on **Android** and **iOS 17 or later**, for both browsing and feed requests.

Credentials stay on the device and are excluded from backups and sync. On iOS 16, proxy support remains limited to unauthenticated HTTP proxy requests for feeds.

## Choose What to Hide on X

Under **Settings → Services → X**, you can now choose to hide:

- **Grok UI**, to remove Grok interface elements.
- **Recommendations**, including Who to follow, trends, and Discover more.
- **Engagement counts**, for a timeline with fewer numbers competing for attention.

These controls are optional. The same settings section also offers **Default search to Latest**, so searches open with recent posts instead of Top results. You can still switch search tabs on X when you want a different view.

<div class="screenshot-gallery" style="max-width: 24rem;">
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">X controls in Nora on Android: choose which interface elements to hide and whether searches open in Latest.</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/nora-0-9-5/x-settings.png" alt="Nora’s X settings on a Pixel phone, showing optional Grok, recommendations, engagement count, and Latest search controls" width="1080" height="2220" loading="lazy" />
    </div>
  </figure>
</div>

## Keep Ordinary Facebook Posts Visible

Facebook ad filtering now checks the sponsored label itself. Ordinary posts that happen to mention “Ad” or “広告” are less likely to be hidden by mistake.

## More Reliable Cookie Imports

Importing browser cookies now preserves names beginning with `__Host-` and `__Secure-`. Keeping those prefixes intact helps sites recognize the imported session correctly.

See the [release notes on GitHub](https://github.com/nonbili/Nora/releases/tag/v0.9.5) for the complete list of changes.

## Get Nora

[Install or update Nora](/nora/install/), or explore the [Nora documentation](/nora/) to learn more.
