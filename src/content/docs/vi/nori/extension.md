---
title: Tiện ích mở rộng trình duyệt
description: Sử dụng tiện ích mở rộng trình duyệt Nori trên Firefox và Chrome.
sidebar:
  order: 5
---

Nori bao gồm tiện ích mở rộng trình duyệt ưu tiên cục bộ cho Mozilla Firefox và Google Chrome.

## Tính năng chính

- **Trải nghiệm đồng nhất với di động**: Cửa sổ bật lên của tiện ích mở rộng cung cấp cùng danh sách, ngăn tìm kiếm, lịch sử, quản lý danh sách và cài đặt như ứng dụng di động.
- **Lưu dấu trang một chạm**: Lưu ngay thẻ hiện tại vào danh sách bạn chọn kèm tự động lấy tiêu đề.
- **Trình khởi chạy nhanh**: Tìm kiếm và mở các liên kết đã lưu vào thẻ mới trực tiếp từ thanh công cụ trình duyệt.
- **Lưu trữ cục bộ**: Lưu dấu trang cục bộ trong bộ nhớ tiện ích mở rộng của trình duyệt với hỗ trợ Nori Sync tùy chọn.
- **Tập trung vào quyền riêng tư**: Không theo dõi hoạt động duyệt web hay nội dung trang. Nori chỉ nhận các liên kết bạn chủ động lưu.

## Cài đặt tiện ích mở rộng

Cài đặt Nori trực tiếp từ các cửa hàng tiện ích mở rộng chính thức:

- [Firefox Add-ons](https://addons.mozilla.org/addon/nori/)
- [Chrome Web Store](https://chromewebstore.google.com/detail/nori/ojgmnocnegcbhlmfoackgoocnjbfejpg)

## Biên dịch từ mã nguồn

Tiện ích mở rộng là mã nguồn mở và được xây dựng bằng [WXT](https://wxt.dev/) sử dụng Manifest V3:

```bash
cd extension
bun install
bun run dev          # Chế độ phát triển Chrome
bun run dev:firefox  # Chế độ phát triển Firefox
bun run build:all    # Đóng gói zip bản chính thức
```
