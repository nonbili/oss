---
title: "Nori 0.2.9: Keep Social Posts, Share Image Cards, Sort Your Lists"
description: Keep a readable copy of social posts for offline reading, turn bookmarks into image cards, and choose a different sort order for each list.
date: 2026-11-18
product: nori
---

A bookmark keeps the address. With **Nori 0.2.9 for mobile**, you can keep a readable copy of a social post too. This release also lets you share bookmarks as image cards and choose how each list is sorted.

## Keep a Copy of the Post

When you bookmark a supported social post, Nori automatically tries to save its content for offline reading. Once saved, the copy stays available when you're without a connection or the original post disappears.

Supported services include **X, Instagram, Threads, TikTok, Facebook, Bluesky, Reddit, and Mastodon**. Depending on what the service makes available, the saved copy includes the author, post text, attached images, and quoted or related posts. You can also copy the post text.

**Video and audio are saved as preview thumbnails, not playable offline downloads.**

Some sites require sign-in or block automatic fetching. If a post doesn't save, choose **Save post from page**, sign in if the site asks, and tap **Save** once Nori finds the post.

In the bookmark editor, **Saved post** shows the date of your saved copy. Use **Refresh** to fetch it again; if the site returns less content, Nori keeps the existing copy.

Automatic saving is on by default. You can turn it off under **Settings → General → Save social posts offline**. If you use **Nori Sync**, saved posts and their images sync across your devices.

<div class="screenshot-gallery" style="max-width: 24rem;">
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">A saved Bluesky post stays readable with its image while the phone is in airplane mode.</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/nori-0-2-9/saved-social-post.png" alt="Nori displaying a saved Bluesky post with author, text and attached image, with airplane mode enabled" width="1080" height="2400" loading="lazy" />
    </div>
  </figure>
</div>

## Share More Than a Link

Found something you want to pass along? Open a bookmark's action menu and choose **Share as image**. Nori turns a webpage bookmark or saved social post into an image card you can preview before sending.

Choose a **light or dark** background and decide whether to include the bookmark's **Note** and **Tags**, when present. Notes start hidden, so you can choose whether to share what you wrote for yourself.

Tap **Share** to send the card through your device's share sheet, or tap the download button to **Save image** to your photo library.

<div class="screenshot-gallery" style="max-width: 24rem;">
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">Preview the card, choose what to include, then share or save the image.</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/nori-0-2-9/share-as-image.png" alt="Share as image preview with light and dark themes, Note and Tags controls, download button and Share button" width="1080" height="2400" loading="lazy" />
    </div>
  </figure>
</div>

## Give Each List Its Own Order

Keep a reading queue in the order you want to tackle it, put new finds first in another list, and sort a reference collection alphabetically.

Open **Edit list**, or create a **New list**, and choose **Bookmark order**:

- **Manual (drag to reorder)** for an order you arrange yourself.
- **Newest first** or **Oldest first** to sort by when bookmarks were added.
- **Name A–Z** or **Name Z–A** to sort by name.

The choice belongs to that list, so your other lists can keep their own order. You can rename the list in the same editor.

<div class="screenshot-gallery" style="max-width: 24rem;">
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">Choose a bookmark order for the Reading queue list.</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/nori-0-2-9/list-bookmark-order.png" alt="Edit list for Reading queue with all five Bookmark order options visible" width="1080" height="2400" loading="lazy" />
    </div>
  </figure>
</div>

This release also improves scrolling in the **All Bookmarks** drawer on iOS and fixes a sync issue. See the [full release notes](https://github.com/nonbili/Nori/releases/tag/v0.2.9) for details.

[Install or update Nori](/nori/install/), or explore the [Nori documentation](/nori/).
