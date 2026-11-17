---
title: "Nora 0.9.4: Liên kết X gọn gàng hơn và tải xuống ổn định hơn"
description: Xóa mã theo dõi chia sẻ khỏi liên kết bài viết X, sửa lỗi tải video bị kẹt ở Parsing, đồng thời giữ nguyên tên tệp và nút điều khiển toàn màn hình TikTok.
date: 2026-11-03
product: nora
---

Một liên kết bài viết được sao chép nên dễ dàng chia sẻ, và quá trình tải video phải vượt qua được bước **Parsing**. **Nora 0.9.4 cho di động** giải quyết cả hai vấn đề này với một loạt bản sửa lỗi cho việc chia sẻ liên kết, lưu tệp và xem video TikTok.

## Chia sẻ liên kết X không kèm mã thừa

Nora giờ đây tự động xóa các tham số chia sẻ của X như `s` và `t` khi bạn sao chép hoặc chia sẻ liên kết bài viết. Ví dụ:

```text
Trước: https://x.com/nonbili/status/1234567890?s=20&t=example
Sau:   https://x.com/nonbili/status/1234567890
```

Địa chỉ bài viết vẫn giữ nguyên; các mã chia sẻ thừa được loại bỏ. Việc dọn dẹp này chỉ áp dụng cho URL bài viết X và Twitter, vì vậy các tham số có cùng tên ngắn trên các trang không liên quan sẽ được giữ nguyên.

## Vượt qua bước “Parsing” khi lưu video

Một số lượt tải video có thể bị kẹt ở giai đoạn **Parsing** trước khi quá trình tải xuống bắt đầu. Bản phát hành này khắc phục lỗi đó để các lượt tải bị ảnh hưởng có thể tiếp tục.

Các tệp do trang web tạo thông qua URL `blob:` cũng giữ nguyên tên tệp dự kiến khi có sẵn. Điều đó giúp bạn dễ nhận biết các tệp đã lưu hơn về sau.

## Khôi phục nút điều khiển toàn màn hình TikTok

Nút điều khiển toàn màn hình TikTok của Nora có thể không xuất hiện khi tập lệnh trang chạy trước khi phần thân trang sẵn sàng. Các nút điều khiển giờ đây xử lý được thứ tự tải đó, giúp nút toàn màn hình xuất hiện như mong đợi.

Xem [ghi chú phát hành trên GitHub](https://github.com/nonbili/Nora/releases/tag/v0.9.4) để biết danh sách đầy đủ các thay đổi.

## Tải Nora

[Cài đặt hoặc cập nhật Nora](/vi/nora/install/), hoặc khám phá [tài liệu Nora](/vi/nora/) để tìm hiểu thêm.
