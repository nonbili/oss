---
title: NouTube
description: Tổng quan về NouTube và mục đích xây dựng ứng dụng.
sidebar:
  order: 1
---
<div class="product-overview-header">
  <img class="product-overview-header__logo" src="/app-logos/noutube.png" alt="Logo NouTube" />
  <p class="product-overview-header__meta">Android, iOS, máy tính và tiện ích mở rộng</p>
</div>

NouTube là ứng dụng trên Android, iOS, máy tính và tiện ích mở rộng trình duyệt dành cho YouTube và YouTube Music.

Ứng dụng bọc các ứng dụng web di động của YouTube và YouTube Music, đồng thời xếp lớp các hành vi gốc lên trên, bao gồm chặn quảng cáo, hook điều khiển phát lại, hỗ trợ tải xuống, bảng tin RSS và quản lý thư viện thân thiện ngoại tuyến.

## Điểm nổi bật

- Không quảng cáo
- Phát nền
- Hỗ trợ video và nhạc trong cùng một ứng dụng
- Quản lý thư viện và lịch sử mà không cần đăng nhập
- Tải xuống video
- Trình đọc bảng tin RSS cho các kênh YouTube
- Hỗ trợ trò chuyện trực tiếp
- Hỗ trợ CSS tùy chỉnh

## Nền tảng

- **Android**: Có sẵn trên F-Droid và các bản phát hành APK trực tiếp trên GitHub.
- **iOS**: Có sẵn qua bản beta TestFlight.
- **Máy tính**: Trình cài đặt gốc cho Linux, macOS và Windows.
- **Tiện ích mở rộng trình duyệt**: Tiện ích mở rộng Manifest V3 cho Mozilla Firefox và Google Chrome.

Bản dựng cho máy tính tuân theo cùng mô hình sản phẩm như ứng dụng di động, với trình cài đặt gốc cho màn hình lớn hơn.

## Lần chạy đầu tiên

Sau khi cài đặt, thiết lập ban đầu thực tế sẽ như sau:

1. Mở YouTube hoặc YouTube Music bên trong ứng dụng.
2. Kiểm tra hành vi phát lại, đặc biệt là phát nền nếu đó là nhu cầu chính của bạn.
3. Cấu hình tùy chọn thư viện, lịch sử, bảng tin và tải xuống của bạn.
4. Chỉ thêm CSS tùy chỉnh sau khi xác nhận trải nghiệm mặc định hoạt động tốt với bạn.

## Liên kết được hỗ trợ

NouTube được cấu hình để xử lý các tên miền sau:

- `youtube.com`
- `www.youtube.com`
- `m.youtube.com`
- `music.youtube.com`
- `youtu.be`

Nếu thiết bị hỏi ứng dụng nào sẽ mở liên kết được hỗ trợ, hãy chọn `NouTube`.

## Cách hoạt động

NouTube bọc các ứng dụng web thay vì xây dựng lại YouTube từ đầu. Trên thực tế điều đó có nghĩa là:

- Bạn giữ nguyên luồng và bố cục trang web chính thức
- Ứng dụng bổ sung chặn quảng cáo và các hook phát lại gốc
- Phát nền và tích hợp thiết bị hoạt động tốt hơn so với việc dùng trang web trong trình duyệt thông thường

## Liên kết thêm

Để xem các bản phát hành, theo dõi lỗi và cập nhật dự án, hãy dùng kho GitHub:

- [nonbili/NouTube](https://github.com/nonbili/NouTube)

Tiếp tục với [Cài đặt](/vi/noutube/install/) để xem liên kết tải xuống và gói cài đặt.
