---
title: "Nora 0.9.0: Built-In Social Feed Reader, Custom Timelines, and Media Gallery"
description: Nora 0.9.0 introduces a built-in feed reader for social accounts, custom timelines, a photo and video grid, OPML import/export, tab reordering, and find in page.
sidebar:
  label: Nora 0.9.0 Release
  order: 2
---

*Published on October 22, 2026*

**Nora 0.9.0** is now available on Android, iOS, and Desktop. This release introduces one of the biggest additions to Nora yet: a **built-in social feed reader** that lets you follow accounts and communities across major social networks in clean, chronological timelines—often without even logging in.

Alongside the new feed experience, 0.9.0 brings a dedicated **media grid and gallery**, **OPML import and export**, **drag-and-drop tab reordering**, **find in page**, and smarter cross-device sync.

---

## Follow Social Accounts in Your Own Timelines

Algorithmic home feeds, sign-in walls, and scattered accounts make it harder than it should be to simply keep up with the people and communities you care about.

With Nora 0.9.0, you can open a supported profile or community in any tab and select **Watch** from the menu—or paste profile links in bulk—to follow its latest posts inside Nora's native **Feed**:

- **X (Twitter)** profiles
- **Instagram** profiles
- **Threads** profiles
- **Bluesky** profiles
- **Mastodon** profiles across any server
- **TikTok** profiles
- **Reddit** subreddits and user profiles (even as Reddit phases out RSS)
- **Facebook** pages, profiles, and groups

### Custom Timelines & Filtering

Rather than dumping everything into a single stream, you can organize your watched sources into **custom timelines** with custom emoji icons:

- Every timeline gets its own feed tab (marked with an RSS indicator badge) and can be **pinned directly to the New Tab page** for one-tap access.
- Tap any post's avatar or author name—or use the filterable source picker at the top of the feed—to focus on a single source.
- Quoted posts, repost attributions, and shared link cards render cleanly inline, and tapping a post opens the original page inside Nora whenever you want to read replies or interact.

<div class="screenshot-gallery">
  <figure class="screenshot-card">
    <div class="screenshot-card__eyebrow">Feed</div>
    <h2 class="screenshot-card__title">Custom Timelines</h2>
    <p class="screenshot-card__body">
      Read chronological updates from watched social accounts across Bluesky, Reddit, Mastodon, and more.
    </p>
    <div class="screenshot-frame">
      <img src="/blog/nora-0-9-0/feed-timeline.png" alt="Nora 0.9.0 feed timeline screen" />
    </div>
  </figure>

  <figure class="screenshot-card">
    <div class="screenshot-card__eyebrow">Media</div>
    <h2 class="screenshot-card__title">Photo & Video Grid</h2>
    <p class="screenshot-card__body">
      Switch any timeline to show only photos and videos in a visual grid, then swipe through them in the full-screen gallery.
    </p>
    <div class="screenshot-frame">
      <img src="/blog/nora-0-9-0/media-grid.png" alt="Nora 0.9.0 photo and video grid screen" />
    </div>
  </figure>

  <figure class="screenshot-card">
    <div class="screenshot-card__eyebrow">Sources</div>
    <h2 class="screenshot-card__title">Add & Manage Sources</h2>
    <p class="screenshot-card__body">
      Paste profile links in bulk, import OPML files, or filter and sort your watched sources from a dedicated screen.
    </p>
    <div class="screenshot-frame">
      <img src="/blog/nora-0-9-0/manage-sources.png" alt="Nora 0.9.0 manage feed sources screen" />
    </div>
  </figure>
</div>

---

## Photo & Video Grid, Gallery, and Local Media Storage

When you are following photographers, artists, or video creators, text posts aren't always what you're looking for.

- **Media-Only Grid View**: Toggle any timeline (or the entire feed from the header) to **Only photos and videos** to browse visual updates in a responsive grid.
- **Full-Screen Gallery**: Tap any image or video to open the gallery with swipe navigation across posts, pinch-to-zoom gestures, playback controls, and one-tap download to your device's `Downloads` folder.
- **Local Caching & Storage Controls**: Feed posts are stored locally in SQLite (100 posts per source by default, configurable in settings). You can set a cap on local media storage, clear cached media at any time, and restrict media prefetching to Wi-Fi only.

---

## Privacy-First Account Controls & Notifications

Because Nora already isolates accounts into separate browser profiles, the feed reader gives you full control over how sources are checked:

- **No Login Required by Default**: Many sources can be checked without signing in at all.
- **Per-Site Profile Selection**: When a site requires an account or provides more reliable updates when signed in, you can choose exactly which Nora profile's login to use for each social network—or turn account-authenticated checks off completely. Nora sends only the cookies belonging to your chosen profile.
- **Hierarchical Notifications & Check Intervals**: Configure check intervals and post notifications globally for **All sources**, override them per **timeline**, or customize/mute individual **sources**. Clicking a feed notification opens the corresponding timeline directly in Nora. On Android, notifications work out of the box in the F-Droid build without proprietary push dependencies.

---

## Dedicated Source Management, OPML, and Cloud Sync

Managing a growing list of followed accounts is straightforward with the new **Manage Sources** screen:

- **Search & Sort**: Filter sources by name, handle, or platform, and sort by name, last post date, date added, or last synced time.
- **OPML & Link List Import/Export**: Paste a list of profile URLs, import a `.txt` list, or import/export standard **OPML** files. When importing OPML, folders are automatically turned into Nora timelines.
- **Backups & Conflict-Safe Sync**: Watched sources and timelines are included in local JSON settings backups as well as Nora's optional cloud sync. Cloud sync now syncs feed sources and timelines per row and merges settings, bookmarks, and user styles modified across multiple devices—while keeping automatic local merge backups you can restore at any time.

---

## Browser & Tab Quality-of-Life Improvements

Beyond the feed reader, Nora 0.9.0 includes several everyday browsing upgrades across mobile and desktop:

- **Drag-and-Drop Tab Reordering**: Touch, hold, and drag tabs in the mobile tab switcher to arrange them in whatever order you prefer.
- **Find in Page**: Search for text on any open web page with live match counts and next/previous navigation.
- **Profile-Aware Tab & Link Handling**: Long-press any tab to reopen it in another profile, and links opened from a tab now stay in the originating tab's profile.
- **Zoom & Accessibility Refinements**: Pinch-to-zoom gestures in the feed and gallery, feed text sizing that respects your default page zoom, and native sheet navigation with larger touch targets on iOS.
- **Anonymous Mode Enhancements**: Instagram profiles opened in the Anonymous profile now load using the desktop site layout so posts and reels keep loading smoothly as you scroll without an account.
- **Desktop Feed Support**: The new feed reader, media caching, and background source fetching are fully supported on Nora Desktop across Linux, macOS, and Windows.

---

## Get Nora 0.9.0

You can download or update to Nora 0.9.0 today:

- **Installation & Downloads**: [Install Nora](/nora/install/) (Google Play, App Store, F-Droid, GitHub APK, and Desktop packages)
- **Documentation**: [Nora Overview](/nora/) & [Changelog](/nora/changelog/)
- **Source Code & Release Notes**: [nonbili/Nora on GitHub](https://github.com/nonbili/Nora/releases/tag/v0.9.0)
