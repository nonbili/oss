---
title: Nori
description: Tổng quan về Nori và mô hình quản lý, khởi chạy dấu trang.
sidebar:
  order: 1
---
<div class="product-overview-header">
  <img class="product-overview-header__logo" src="/app-logos/nori.png" alt="Logo Nori" />
  <p class="product-overview-header__meta">Android, iOS, máy tính và tiện ích mở rộng</p>
</div>

Nori là trình quản lý và khởi chạy dấu trang mã nguồn mở được thiết kế để truy cập nhanh hằng ngày trên thiết bị di động, máy tính để bàn và trình duyệt web.

Thay vì chôn vùi các liên kết bên trong cây thư mục trình duyệt sâu hoặc các hệ sinh thái đóng, Nori sắp xếp dấu trang của bạn thành các danh sách gọn gàng, tập trung với khả năng mở tức thì, tìm kiếm, thẻ xem trước phong phú và tích hợp bảng chia sẻ.

## Điểm nổi bật

- Nhiều danh sách dấu trang tùy chỉnh
- Mở tức thì trong trình duyệt mặc định của hệ thống hoặc thẻ tùy chỉnh gốc
- Lưu URL được chia sẻ từ bất kỳ ứng dụng nào với bộ chọn danh sách và tùy chọn lưu nhanh
- Chế độ khởi chạy nhỏ gọn và chế độ thẻ xem trước phong phú kèm ảnh bìa trang web
- Ngăn tìm kiếm nhanh với lọc theo từ khóa và thẻ
- Lịch sử mở gần đây và thêm gần đây
- Nhập và xuất qua tệp dấu trang HTML chuẩn, văn bản thuần và sao lưu JSON đầy đủ
- Giao diện linh hoạt: Sáng, Tối, AMOLED và màu nhấn tùy chỉnh
- Tiện ích mở rộng trình duyệt ưu tiên cục bộ cho Chrome và Firefox
- Ứng dụng máy tính đa nền tảng cho Linux, macOS và Windows
- Đồng bộ hóa đa thiết bị tùy chọn qua Nori Sync

## Nền tảng

- **Android**: Có sẵn trên Google Play và bản phát hành APK trực tiếp trên GitHub.
- **iOS**: Có sẵn trên App Store cho iPhone và iPad.
- **Máy tính**: Ứng dụng gốc độc lập cho Linux (AppImage & tarball), macOS (Apple Silicon & Intel) và Windows.
- **Tiện ích mở rộng trình duyệt**: Tiện ích Manifest V3 cho Mozilla Firefox và Google Chrome.

## Lần chạy đầu tiên

Cách thiết lập ban đầu hợp lý:

1. Tạo một vài danh sách cho các nhóm liên kết thường dùng của bạn (ví dụ: `Daily`, `Tools`, `Reading`, `Work`).
2. Thêm các liên kết chính hay dùng hoặc nhập dấu trang hiện có từ tệp xuất HTML của trình duyệt.
3. Thử mở một dấu trang để xác nhận trình duyệt mặc định mở liên kết như mong đợi.
4. Thử chia sẻ một trang web từ trình duyệt di động vào Nori bằng menu chia sẻ hệ thống.
5. Tùy chỉnh cài đặt giao diện, chẳng hạn như chế độ tối hoặc màu nhấn ưa thích.

## Cách hoạt động

Nori tách biệt bộ sưu tập dấu trang của bạn khỏi các nhân trình duyệt cụ thể:

- Trên Android, dấu trang mở qua Custom Tabs thông qua `expo-web-browser` hoặc chuyển thẳng sang ứng dụng trình duyệt mặc định của bạn.
- Trên iOS, dấu trang mở qua trang trình duyệt gốc hoặc trình duyệt mặc định của hệ thống.
- Trên máy tính và tiện ích mở rộng, dấu trang mở trực tiếp trong các thẻ trình duyệt đang hoạt động.

Cách tiếp cận này đảm bảo bạn luôn duyệt web với trình chặn quảng cáo, phiên đăng nhập và hồ sơ trình duyệt ưa thích được giữ nguyên, đồng thời giữ mọi liên kết ngăn nắp trong một trình khởi chạy nhanh và dễ tìm kiếm.

## Liên kết thêm

Để xem mã nguồn, các bản phát hành và theo dõi lỗi, hãy dùng kho lưu trữ GitHub:

- [nonbili/Nori](https://github.com/nonbili/Nori)

Tiếp tục với [Cài đặt](/vi/nori/install/) để xem huy hiệu cửa hàng, APK, bản tải máy tính và gói tiện ích mở rộng trình duyệt.
