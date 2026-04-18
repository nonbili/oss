---
title: Customization
description: Custom CSS and behavior notes for NouTube.
---
NouTube supports custom CSS for the embedded YouTube and YouTube Music pages.

## What Custom CSS Is Good For

- Hiding elements you do not care about
- Tightening page density
- Adjusting spacing or typography
- Working around site UI choices that get in your way

## Recommended Approach

Keep changes narrow and easy to remove.

- Start with one or two targeted rules
- Prefer stable selectors where possible
- Re-test after upstream site layout changes

Because NouTube wraps live web properties, custom CSS can break when YouTube changes its markup.

## Before You Customize

Make sure the default app behavior already works for:

- Playback
- Navigation
- Feeds
- Downloads

Once the baseline is stable, layer on CSS changes gradually.
