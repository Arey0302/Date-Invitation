# Date Invitation

Date Invitation là một dự án web giúp bạn tạo lời mời hẹn hò dễ thương, cho phép chọn thời gian, món ăn yêu thích và gửi thông báo qua email.

## Tính năng chính
- Chọn ngày và giờ hẹn
- Chọn món ăn yêu thích
- Đánh giá mức độ hạnh phúc
- Gửi thông tin lựa chọn đến email admin

## Công nghệ sử dụng
- **Frontend:** React + Vite
- **Backend:** Node.js + Express
- **Gửi email:** Nodemailer (qua Gmail)

## Cấu trúc thư mục
```
Date-Invitation/
├── server.cjs           # Backend Node.js/Express
├── src/                 # Frontend React/Vite
├── public/              # Tài nguyên tĩnh cho frontend
├── styles/              # CSS
├── .env                 # Biến môi trường (không up lên git)
├── package.json         # Quản lý dependencies
├── README.md            # Giới thiệu dự án
...
```

## Hướng dẫn deploy
- Deploy lên Vercel, Netlify... (thư mục `src/` và `public/`)
- Sửa URL API trong frontend để trỏ về backend đã deploy.

## Lưu ý
- Không up file `.env` chứa thông tin nhạy cảm lên GitHub.
- Đảm bảo backend bật CORS nếu frontend và backend khác domain.

Chúc bạn có những buổi hẹn hò vui vẻ! ❤️

