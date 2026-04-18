---
title: Supported Services
description: Social networks Nora is designed to work with.
sidebar:
  order: 4
---
Nora is aimed at browser-based use of mainstream social network services.

## Documented Targets

- Bluesky
- Facebook
- Instagram
- LinkedIn
- Reddit
- Threads
- TikTok
- Tumblr
- VK
- X

## Deep Link Targets

The current app configuration explicitly handles these hosts:

- `bsky.app`
- `www.facebook.com`
- `m.facebook.com`
- `www.linkedin.com`
- `www.instagram.com`
- `www.reddit.com`
- `www.threads.com`
- `www.tiktok.com`
- `www.tumblr.com`
- `m.vk.com`
- `x.com`

## Service-Specific Behavior

Some services have extra Nora-specific handling for login flows, playback, downloads, or layout adjustments. At the moment, that is documented for:

- Instagram
- X

That does not mean the other services are unsupported. It means many services work through Nora's shared browser features, while a smaller set gets additional site-specific treatment.
