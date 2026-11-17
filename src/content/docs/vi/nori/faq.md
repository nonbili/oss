---
title: Câu hỏi thường gặp
description: Các câu hỏi thường gặp về Nori.
sidebar:
  order: 9
---

## Làm thế nào để lưu liên kết vào Nori từ trình duyệt di động?

Sử dụng menu chia sẻ chuẩn của hệ thống:

1. Trong trình duyệt của bạn (Chrome, Firefox, Safari, Brave, v.v.), nhấn **Share**.
2. Chọn **Nori** từ danh sách ứng dụng.
3. Chọn danh sách đích nơi bạn muốn lưu liên kết, hoặc bật **Quick save shared links** trong cài đặt để lưu trực tiếp vào một danh sách chỉ định mà không cần hỏi lại.

## Tôi có thể mở dấu trang trực tiếp trong ứng dụng trình duyệt thay vì thẻ trong ứng dụng không?

Có. Vào **Settings → General** và bật **Open links in default browser**. Khi bật, việc nhấn vào bất kỳ dấu trang nào sẽ chuyển ngay URL sang ứng dụng trình duyệt mặc định trên điện thoại của bạn.

## Làm thế nào để nhập dấu trang từ trình duyệt máy tính?

Xuất các dấu trang hiện có của bạn ra tệp HTML:

- **Chrome / Brave / Edge**: Mở Trình quản lý dấu trang (`Ctrl+Shift+O` hoặc `Cmd+Option+B`) → nhấp menu `⋮` → chọn **Export bookmarks**.
- **Firefox**: Mở Thư viện (`Ctrl+Shift+O` hoặc `Cmd+Shift+O`) → **Import and Backup** → **Export Bookmarks to HTML…**.
- **Safari**: File → **Export Bookmarks…**.

Sau đó trong Nori, vào **Settings → Bookmarks → Import bookmarks**, chọn tệp `.html`, và Nori sẽ nhập toàn bộ liên kết cùng thư mục vào các danh sách tương ứng.

## Tôi có thể sao lưu và khôi phục dấu trang của mình không?

Có. Trong **Settings → Bookmarks**:

- **Export backup**: Lưu một tệp sao lưu JSON hoàn chỉnh chứa tất cả danh sách, dấu trang, thẻ và cài đặt.
- **Restore backup**: Khôi phục từ một tệp sao lưu Nori hiện có.
- **Export HTML / Plain text**: Tạo tệp HTML tương thích với trình duyệt hoặc danh sách văn bản dễ đọc.

## Đồng bộ hóa đa thiết bị hoạt động như thế nào?

Nori Sync kết nối ứng dụng di động, ứng dụng máy tính và tiện ích mở rộng trình duyệt của bạn:

- Dấu trang vẫn được lưu bộ nhớ đệm cục bộ trên từng thiết bị để hoạt động ngoại tuyến hoàn toàn.
- Khi có kết nối, các thay đổi sẽ đồng bộ liền mạch trên tất cả các ứng dụng đang hoạt động.

## Tiện ích mở rộng trình duyệt có theo dõi hoạt động duyệt web của tôi không?

Không. Nori không theo dõi lịch sử duyệt web hoặc đọc nội dung trang web của bạn. Tiện ích mở rộng chỉ nhận URL khi bạn mở cửa sổ bật lên và nhấp để lưu thẻ hiện tại.

## Tôi có thể báo cáo lỗi hoặc đề xuất tính năng ở đâu?

Mọi hoạt động phát triển và theo dõi lỗi đều được lưu trữ trên GitHub:

- [nonbili/Nori Issues](https://github.com/nonbili/Nori/issues)
