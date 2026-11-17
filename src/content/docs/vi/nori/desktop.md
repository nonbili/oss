---
title: Máy tính
description: Sử dụng Nori trên Linux, macOS và Windows.
sidebar:
  order: 4
---

Nori cung cấp ứng dụng máy tính chuyên dụng cho Linux, macOS và Windows.

## Những gì phiên bản máy tính bổ sung

Phiên bản máy tính mang trình khởi chạy dấu trang ngăn nắp của Nori lên máy tính của bạn như một công cụ đồng hành nhanh chóng, thân thiện với bàn phím:

- **Trình khởi chạy độc lập**: Giữ các liên kết của bạn ngăn nắp trong một cửa sổ riêng biệt mà không làm rối thanh thẻ trình duyệt.
- **Kiến trúc ưu tiên cục bộ**: Được xây dựng bằng [Wails v3](https://v3.wails.io/) và Go, kết hợp cửa sổ hệ điều hành gốc với các thành phần giao diện web hiện đại.
- **Mở bằng trình duyệt hệ thống**: Nhấp vào liên kết sẽ mở trực tiếp trong trình duyệt mặc định trên máy tính của bạn.
- **Tích hợp đồng bộ hóa**: Kết nối tài khoản Nori Sync để chia sẻ dấu trang liền mạch giữa máy tính, di động và tiện ích mở rộng trình duyệt.

## Gói theo nền tảng

- **Linux**: Phân phối dưới dạng gói AppImage di động và `.tar.gz` cho `amd64`.
- **macOS**: Hỗ trợ phổ quát cho Apple Silicon (`arm64`) và Intel (`amd64`), phân phối dưới dạng trình cài đặt `.dmg` và gói `.app.zip`.
- **Windows**: Phân phối dưới dạng trình cài đặt (`.exe`) và tệp nén di động `.zip`.

## Yêu cầu hệ thống Linux

Linux AppImage sử dụng công cụ WebKit của hệ thống. Hãy đảm bảo hệ thống của bạn đã cài đặt GTK 3 và `webkit2gtk-4.1`:

- **Debian / Ubuntu**:
  ```bash
  sudo apt install libwebkit2gtk-4.1-0 libgtk-3-0 libfuse2
  ```
- **Fedora**:
  ```bash
  sudo dnf install webkit2gtk4.1 gtk3
  ```
- **Arch Linux**:
  ```bash
  sudo pacman -S webkit2gtk-4.1 gtk3
  ```

## Bản phát hành

Để tải bản cài đặt máy tính và xem ghi chú phát hành mới nhất, hãy truy cập trang [Nori GitHub Releases](https://github.com/nonbili/Nori/releases).
