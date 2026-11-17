---
title: امتداد المتصفح
description: استخدام امتداد المتصفح NouTube على Firefox و Chrome.
sidebar:
  order: 6
---

يتضمن NouTube امتداد متصفح لمتصفحي Mozilla Firefox و Google Chrome يجلب تجربة التصفح الأنظف من NouTube، والتشغيل المحسّن، والخلاصات المخصصة، والإشارات المرجعية، وأدوات التخصيص مباشرة إلى متصفح سطح المكتب لديك.

## تثبيت الامتداد

قم بتثبيت NouTube مباشرة من متاجر الامتدادات الرسمية:

- [Firefox Add-ons](https://addons.mozilla.org/addon/noutube/)
- [Chrome Web Store](https://chromewebstore.google.com/detail/noutube/cpmippodfdmialcoaegbbmhpdamodoif)

## البناء من الكود المصدري

الامتداد مفتوح المصدر، ويشارك الكود مع تطبيق NouTube، ومبني باستخدام [WXT](https://wxt.dev/) ومعيار Manifest V3:

```bash
bun link
bun install
cd extension
bun run dev          # وضع التطوير لمتصفح Chrome
bun run dev:firefox  # وضع التطوير لمتصفح Firefox
bun run build:all    # بناء حزم الإنتاج
```
