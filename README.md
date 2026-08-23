# 📜 مُهر — ابزار لینک محرمانه
## 🔐 Secret Link Tool

![License](https://img.shields.io/badge/License-MIT-green)
![Language](https://img.shields.io/badge/Language-HTML%2FCSS%2FJS-blue)
![Status](https://img.shields.io/badge/Status-Active-brightgreen)

---

## 🎯 درباره پروژه | About

**مُهر** یک ابزار وب مدرن و ایمن برای ایجاد و اشتراک‌گذاری لینک‌های محرمانه است.

**Mohr** is a modern and secure web tool for creating and sharing confidential links with advanced encryption and one-time access features.

### ✨ ویژگی‌های اصلی | Key Features

- 🔐 **رمزنگاری AES-256** — تمام لینک‌های محرمانه با رمز بندی می‌شوند
  - **AES-256 Encryption** — All secret links are encrypted with strong cryptography
  
- 🔄 **استفادهٔ یک‌بار** — لینک بعد از اولین باز شدن خودکار پاک می‌شود
  - **One-Time Use** — Link automatically expires after first access
  
- 🌐 **پشتیبانی دوزبانه** (فارسی و انگلیسی) + سایر زبان‌ها
  - **Multi-Language Support** (Persian, English, Turkish, Arabic)
  
- 📱 **Responsive Design** — کار می‌کند روی تمام دستگاه‌ها
  - Works perfectly on desktop, tablet, and mobile devices
  
- ☁️ **ذخیره‌سازی ابری و محلی**
  - **Cloud Storage (Claude)** + **Local Fallback (localStorage)**
  
- 🎨 **طراحی شیک و حرفه‌ای**
  - Beautiful wax-seal themed UI with smooth animations
  
- 🔒 **هیچ داده‌ای از طرف سرور ذخیره نمی‌شود**
  - No server-side storage — your data stays private

---

## 🚀 شروع سریع | Quick Start

### روش 1: استفاده مستقیم (بهترین)
1. فایل `index.html` را دانلود کنید
2. آن را در مرورگر باز کنید
3. برای ایجاد لینک محرمانه شروع کنید!

### روش 2: استفاده در Claude
1. کد `index.html` را کپی کنید
2. در Claude یک **Artifact** جدید ایجاد کنید
3. کد را وارد کنید و **Publish** کنید

### روش 3: میزبانی روی وب
```bash
# هر سرور وب ساده‌ای می‌تواند این فایل را serve کند
python -m http.server 8000
# یا
npx http-server
```

---

## 📖 راهنمای استفاده | How to Use

### ساخت لینک محرمانه | Creating a Secret Link

1. **آدرس مقصد را وارد کنید**
   - Enter the destination URL you want to hide

2. **گزینه‌ها را انتخاب کنید:**
   - ✅ استفادهٔ یک‌بار (One-Time Use)
   - ✅ محافظت با رمز (Password Protection)

3. **دکمهٔ "مُهر و موم کن" را بزنید**
   - Click "Seal it"

4. **کد یا لینک را کپی کنید**
   - برای محیط Claude: کد رو بفرستید
   - برای وب: لینک رو بفرستید

### باز کردن لینک محرمانه | Opening a Secret Link

1. **صفحهٔ ابزار رو باز کنید**
2. **دکمهٔ "کد یه لینک رو داری؟" را بزنید**
3. **کد یا لینک رو پیست کنید**
4. **رمز رو وارد کنید (اگر رمزدار بود)**
5. **لینک رو باز کنید**

---

## 🔐 امنیت | Security Details

### رمزنگاری
```javascript
// PBKDF2-SHA256 برای مشتق کردن کلید
// 150,000 iterations برای محافظت در برابر brute-force
// AES-256-GCM برای رمزنگاری و تأیید هویت
```

### نکات مهم ⚠️
- رمز **هرگز** ذخیره نمی‌شود — فقط برای رمزنگاری استفاده می‌شود
- اگر رمز اشتباه وارد شود، رمزگشایی خودکار ناموفق است
- داده‌ها فقط در مرورگر کاربر نگهداری می‌شوند

### محدودیت‌ها
- برای اطلاعات **فوق‌حساس** (رمز‌های بانکی، SSN) توصیه نمی‌شود
- بهترین برای: لینک‌های فناوری، فایل‌ها، و محتوای عمومی حساس

---

## 🎨 طراحی | Design System

### رنگ‌ها | Colors
```css
--ink: #171512              /* پس‌زمینهٔ تیره */
--brass: #c9a15b            /* برنج (رنگ اصلی) */
--wax: #8c2a34              /* موم (دکمه‌ها) */
--parchment: #ece3ce        /* پرژه (متن) */
--danger: #c96b3d           /* قرمز (خطا‌ها) */
--ok: #7f9e6d               /* سبز (لینک صحیح) */
```

### فونت‌ها | Fonts
- **متن اصلی:** Vazirmatn (فارسی)
- **کد:** IBM Plex Mono

---

## 📱 Responsive Breakpoints

| دستگاه | عرض | وضعیت |
|--------|------|--------|
| موبایل | < 420px | ✅ بهینه‌شده |
| تبلت | 420px - 768px | ✅ بهینه‌شده |
| کامپیوتر | > 768px | ✅ بهینه‌شده |

---

## 🛠️ ساختار پروژه | Project Structure

```
index.html              # تمام کد (HTML + CSS + JS)
README.md              # این فایل
```

### سازماندهی کد:
1. **CSS Variables** — رنگ‌ها و طراحی متمرکز
2. **i18n System** — سیستم ترجمهٔ درونی
3. **Core Logic** — منطق رمزنگاری و ذخیره‌سازی
4. **Render Functions** — رندر UI برای هر صفحه

---

## 🌍 پشتیبانی زبان‌ها | Language Support

| زبان | کد | وضعیت | توضیح |
|------|------|--------|---------|
| فارسی | `fa` | ✅ کامل | زبان پیش‌فرض |
| English | `en` | ✅ کامل | رابط انگلیسی |
| Turkish | `tr` | ⏳ در حال آمادگی | - |
| العربية | `ar` | ⏳ در حال آمادگی | - |

---

## 🐛 مسائل و حل‌ها | Troubleshooting

### مشکل: "Saving failed"
**حل:** اگر در Claude از artifact استفاده می‌کنید، آن را Publish کنید

### مشکل: رمز کار نمی‌کند
**حل:** مرورگر باید Web Crypto API را پشتیبانی کنند (Modern browsers)

### مشکل: لینک در دستگاه دیگری کار نمی‌کند
**حل:** اگر فایل را دانلود کردید، لینک فقط روی همین دستگاه/مرورگر کار می‌کند

---

## 📋 نقشهٔ راه | Roadmap

- [x] رمزنگاری AES-256
- [x] استفادهٔ یک‌بار
- [x] دوزبانه (فارسی/انگلیسی)
- [ ] سایر زبان‌ها (ترکی، عربی)
- [ ] QR Code generation
- [ ] محدودیت زمانی (expiration)
- [ ] شمارندهٔ دسترسی
- [ ] انتخاب نسخهٔ رنگی (Light/Dark/Custom)
- [ ] صادرات/وارد کردن تنظیمات

---

## 👥 سازندگان | Credits

- **🎨 Offers Pishnahadat** — طراح و سازنده اصلی
  - 📧 [Offerspishnahadat.feedback@gmail.com](mailto:Offerspishnahadat.feedback@gmail.com)
  - 🎬 [YouTube: @offers_pishnahadat](https://www.youtube.com/@offers_pishnahadat)
  - 🌐 [zaya.io/offers_pishnahadat](https://zaya.io/offers_pishnahadat)

- **🤖 Claude (Anthropic)** — کمک در طراحی و توسعهٔ کد
  - AI Assistant

---

## 📜 مجوز | License

این پروژه تحت مجوز **MIT** منتشر شده است.

```
MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, and/or publish the Software...
```

---

## 💬 بازخورد و پیشنهادات | Feedback

اگر مشکلی پیدا کردید یا ایده‌ای دارید:
- 📧 ایمیل بفرستید: [Offerspishnahadat.feedback@gmail.com](mailto:Offerspishnahadat.feedback@gmail.com)
- 🎬 یوتیوب کامنت بگذارید: [@offers_pishnahadat](https://www.youtube.com/@offers_pishnahadat)

---

## 🔄 نسخهٔ پروژه | Version History

| نسخه | تاریخ | تغییرات |
|------|---------|----------|
| 1.0 | 2024 | رونمایی اولیه |
| 1.1 | ⏳ | افزودن زبان‌های جدید + QR Code |
| 1.2 | ⏳ | محدودیت زمانی و شمارندهٔ دسترسی |

---

## 📞 تماس | Contact

```
Offers Pishnahadat
📧 Offerspishnahadat.feedback@gmail.com
🎬 https://www.youtube.com/@offers_pishnahadat
🌐 https://zaya.io/offers_pishnahadat
```

---

**ساخته شده با ❤️ در ایران | Made with ❤️ in Iran**
