---
title: Tiện ích mở rộng trình duyệt
description: Sử dụng tiện ích mở rộng trình duyệt NouTube trên Firefox và Chrome.
sidebar:
  order: 6
---

NouTube bao gồm tiện ích mở rộng trình duyệt cho Mozilla Firefox và Google Chrome, mang trải nghiệm duyệt gọn gàng hơn, phát lại nâng cao, bảng tin cá nhân hóa, dấu trang và các công cụ tùy chỉnh của NouTube trực tiếp lên trình duyệt máy tính của bạn.

## Cài đặt tiện ích mở rộng

Cài đặt NouTube trực tiếp từ các cửa hàng tiện ích mở rộng chính thức:

- [Firefox Add-ons](https://addons.mozilla.org/addon/noutube/)
- [Chrome Web Store](https://chromewebstore.google.com/detail/noutube/cpmippodfdmialcoaegbbmhpdamodoif)

## Biên dịch từ mã nguồn

Tiện ích mở rộng là mã nguồn mở, dùng chung mã với ứng dụng NouTube và được xây dựng bằng [WXT](https://wxt.dev/) sử dụng Manifest V3:

```bash
bun link
bun install
cd extension
bun run dev          # Chế độ phát triển Chrome
bun run dev:firefox  # Chế độ phát triển Firefox
bun run build:all    # Xây dựng các gói phát hành chính thức
```
