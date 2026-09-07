# 📜 مُهر — ابزار لینک محرمانه
## 🔐 Secret Link Tool

![License](https://img.shields.io/badge/License-MIT-green)
![Language](https://img.shields.io/badge/Language-HTML%2FCSS%2FJS-blue)
![Status](https://img.shields.io/badge/Status-Active-brightgreen)
![Backend](https://img.shields.io/badge/Backend-Cloudflare%20Workers-orange)
![Database](https://img.shields.io/badge/Database-Cloudflare%20D1-orange)

---

## 🎯 درباره پروژه | About

**مُهر** یک ابزار وب مدرن و ایمن برای ایجاد و اشتراک‌گذاری لینک‌های محرمانه است که از **Cloudflare Workers** و **Cloudflare D1** استفاده می‌کند، با رمزنگاری پیشرفتهٔ AES-256 و دسترسی یک‌بار.

**Mohr** is a modern and secure web tool for creating and sharing confidential links, powered by **Cloudflare Workers** and **Cloudflare D1**, with advanced AES-256 encryption and one-time access control.

لینک صفحه برای استفاده:
🌐 https://linkmohr-w6w.vercel.app

مخزن گیت‌هاب:
💻 https://github.com/Alireza123456w6w/link_mohr.w6w

---

### ✨ ویژگی‌های اصلی | Key Features

- 🔐 **رمزنگاری AES-256-GCM** با اشتقاق کلید PBKDF2-SHA256 (۱۰۰,۰۰۰ تکرار)
  - **AES-256-GCM Encryption** with PBKDF2-SHA256 key derivation (100,000 iterations)

- 🔄 **استفادهٔ یک‌بار** — لینک بعد از اولین باز شدن خودکار پاک می‌شود
  - **One-Time Use** — Link automatically deletes itself after first access

- 🔑 **محافظت با رمز** — رمز هرگز ذخیره نمی‌شود، فقط برای رمزگشایی استفاده می‌شود
  - **Password Protection** — Password is never stored, used only for decryption

- 🌐 **پشتیبانی دوزبانه** (فارسی و انگلیسی) + سایر زبان‌ها در راه
  - **Multi-Language Support** (Persian, English; Turkish & Arabic coming soon)

- 📱 **Responsive Design** — کار می‌کند روی تمام دستگاه‌ها
  - Works perfectly on desktop, tablet, and mobile devices

- ☁️ **زیرساخت Cloudflare (Workers + D1)**
  - **Cloudflare Workers** — منطق برنامه و رمزنگاری در edge اجرا می‌شود، سریع و بدون تأخیر
  - **Cloudflare D1** — پایگاه‌دادهٔ SQL سراسری برای ذخیرهٔ متادیتای لینک‌ها
  - **Cross-Device Support** — دسترسی به لینک‌ها از هر مرورگر و دستگاهی

- 🎨 **طراحی شیک و حرفه‌ای** — رابط کاربری با تم «مُهر و موم»، انیمیشن‌های نرم
  - Beautiful wax-seal themed UI with smooth animations

- 🔒 **رمز هرگز ذخیره نمی‌شود**
  - Passwords are only used for encryption, never stored

---

## 🚀 شروع سریع | Quick Start

### روش ۱: استفاده مستقیم (بهترین برای امتحان سریع)
1. صفحهٔ آنلاین را باز کنید: https://linkmohr-w6w.vercel.app
2. برای ایجاد لینک محرمانه شروع کنید!
3. لینک تولید شده را با هرکسی شریک کنید

### روش ۲: راه‌اندازی محلی برای توسعه (Cloudflare Workers)
برای اجرای کامل بک‌اند (Workers + D1) روی سیستم خودتان:

**نیازمندی‌ها | Requirements**
- Node.js (پیشنهاد: نسخهٔ 16 به بالا)
- [wrangler](https://developers.cloudflare.com/workers/wrangler/) (ابزار خط‌فرمان Cloudflare)
- حساب Cloudflare با دسترسی به D1
- متغیرهای محیطی: `CF_ACCOUNT_ID`, `CF_API_TOKEN`, نام binding مربوط به D1

**مراحل | Steps**
1. کلون کردن مخزن:
   ```bash
   git clone https://github.com/Alireza123456w6w/link_mohr.w6w.git
   cd link_mohr.w6w
   ```
2. نصب وابستگی‌ها:
   ```bash
   npm install
   ```
3. اجرای محلی:
   ```bash
   wrangler dev
   ```

نمونهٔ `wrangler.toml` (مقادیر را جایگزین کنید):
```toml
name = "link_mohr"
account_id = "<CF_ACCOUNT_ID>"
workers_dev = true
type = "javascript"

[d1_databases]
bindings = [
  { name = "DB", database_name = "LINK_MOHR_DB" }
]
```

### روش ۳: میزبانی به‌عنوان فرانت‌اند ساده (بدون بک‌اند)
```bash
# هر سرور وب ساده‌ای می‌تواند فایل‌های استاتیک را serve کند
python -m http.server 8000
# یا
npx http-server
```
⚠️ در این حالت، ذخیره‌سازی ابری و اشتراک بین‌دستگاهی کار نمی‌کند؛ فقط برای پیش‌نمایش رابط کاربری مناسب است.

---

## 📖 راهنمای استفاده | How to Use

### ساخت لینک محرمانه | Creating a Secret Link
1. **آدرس مقصد را وارد کنید** — Enter the destination URL you want to hide
2. **گزینه‌ها را انتخاب کنید:**
   - ✅ استفادهٔ یک‌بار (One-Time Use)
   - ✅ محافظت با رمز (Password Protection)
3. **دکمهٔ «مُهر و موم کن» را بزنید** — Click "Seal it"
4. **لینک یا کد تولیدشده را کپی کنید**

### باز کردن لینک محرمانه | Opening a Secret Link
1. صفحهٔ ابزار را باز کنید
2. دکمهٔ «کد یه لینک رو داری؟» را بزنید
3. کد یا لینک را پیست کنید
4. در صورت وجود رمز، آن را وارد کنید
5. لینک را باز کنید

---

## 🏗️ معماری پروژه | Architecture

```
┌─────────────────────────────────────────────┐
│   کاربر A: ایجاد لینک محرمانه               │
│   مرورگر → رمزنگاری (Web Crypto API)         │
│   ➜ Worker  →  D1 (ذخیرهٔ متادیتای رمزشده)   │
└────────────────┬────────────────────────────┘
                   │
            ☁️ Cloudflare Workers + D1
                   │
┌─────────────────▼────────────────────────────┐
│   کاربر B: باز کردن لینک (دستگاه دیگر)       │
│   مرورگر → Worker → D1 → رمزگشایی در مرورگر   │
└───────────────────────────────────────────────┘
```

- **Frontend:** صفحات استاتیک / SPA (`index.html`, `login.html`, `signup.html`, `dashboard.html`)
- **Backend:** Cloudflare Workers (منطق برنامه و رمزنگاری)
- **Database:** Cloudflare D1 (متادیتا و وضعیت لینک‌ها)
- **جریان داده:** Browser → Worker → D1 → Worker → Browser

---

## 🔐 امنیت | Security Details

### رمزنگاری | Encryption
```
// PBKDF2-SHA256 برای مشتق کردن کلید — 100,000 iterations
// AES-256-GCM برای رمزنگاری و تأیید هویت
// Unique salt و IV برای هر لینک
```

### نکات مهم ⚠️
- رمز **هرگز** ذخیره نمی‌شود — فقط برای رمزنگاری/رمزگشایی استفاده می‌شود
- اگر رمز اشتباه وارد شود، رمزگشایی خودکار ناموفق است
- داده‌ها به‌صورت رمزشده در Cloudflare D1 ذخیره می‌شوند
- هیچ log سروری از محتوای لینک‌ها نگهداری نمی‌شود

### محدودیت‌ها | Limitations
- برای اطلاعات **فوق‌حساس** (رمزهای بانکی، کد ملی و مشابه) توصیه نمی‌شود
- بهترین کاربرد: لینک‌های فناوری، فایل‌ها، و محتوای عمومی حساس

---

## ⚙️ پیکربندی Cloudflare | Cloudflare Configuration

### مشخصات پروژه (نمونه)
```
Worker name: link_mohr
D1 Database: LINK_MOHR_DB
Binding: DB
Table: mohr_secrets
```

### نمونهٔ اسکیمای D1 (مثال)
```sql
CREATE TABLE mohr_secrets (
  id TEXT PRIMARY KEY,
  encrypted_data TEXT NOT NULL,
  salt TEXT NOT NULL,
  iv TEXT NOT NULL,
  one_time INTEGER DEFAULT 1,
  created_at INTEGER NOT NULL,
  expires_at INTEGER
);
```

### نحوهٔ تنظیم برای خودتان
1. به [Cloudflare Dashboard](https://dash.cloudflare.com/) بروید و وارد شوید
2. با `wrangler login` حساب خود را متصل کنید
3. یک پایگاه‌دادهٔ D1 بسازید: `wrangler d1 create LINK_MOHR_DB`
4. binding را در `wrangler.toml` مطابق نمونهٔ بالا تنظیم کنید
5. جدول را با `wrangler d1 execute` ایجاد کنید

### 🔁 مهاجرت از دیتابیس قبلی | Database Migration
- از دیتابیس قبلی خروجی (Export) بگیرید (CSV/SQL)
- اسکیمای D1 را طبق نمونهٔ بالا تعریف کنید
- یک اسکریپت مهاجرت (Node.js یا یک Worker موقت) بنویسید تا داده‌ها به D1 وارد شوند
- ابتدا روی محیط staging تست کنید، سپس در production اجرا کنید

---

## 🚀 استقرار | Deploy
```bash
wrangler publish
```

## 🧪 تست و دیباگ | Testing & Debugging
- `npm test` (در صورت وجود)
- استفاده از curl یا Postman برای تست endpointهای محلی
- مشاهدهٔ لاگ‌ها از طریق `console.log` در Worker یا داشبورد Cloudflare Workers

---

## 🎨 طراحی | Design System

### رنگ‌ها | Colors
```css
--ink: #171512              /* پس‌زمینهٔ تیره */
--brass: #c9a15b            /* برنج (رنگ اصلی) */
--wax: #8c2a34               /* موم (دکمه‌ها) */
--parchment: #ece3ce         /* پرگامنت (متن) */
--danger: #c96b3d            /* قرمز (خطاها) */
--ok: #7f9e6d                /* سبز (لینک صحیح) */
```

### فونت‌ها | Fonts
- **متن اصلی:** Vazirmatn (فارسی)
- **کد:** IBM Plex Mono

---

## 📱 Responsive Breakpoints

| دستگاه   | عرض           | وضعیت       |
| -------- | ------------- | ----------- |
| موبایل   | < 420px       | ✅ بهینه‌شده |
| تبلت     | 420px – 768px | ✅ بهینه‌شده |
| کامپیوتر | > 768px       | ✅ بهینه‌شده |

---

## 🛠️ ساختار پروژه | Project Structure

```
index.html         # صفحهٔ اصلی ابزار (ساخت/باز کردن لینک)
login.html         # صفحهٔ ورود کاربر
signup.html        # صفحهٔ ثبت‌نام کاربر
dashboard.html      # پنل کاربری
auth.js             # منطق احراز هویت
README.md           # این فایل
```

### سازماندهی کد | Code Organization
1. **i18n System** — سیستم ترجمهٔ درونی (فارسی/انگلیسی)
2. **Encryption Module** — رمزنگاری AES-256-GCM و PBKDF2
3. **Cloudflare Integration** — اتصال به Workers و D1
4. **Storage Abstraction** — D1 → LocalStorage (fallback آفلاین)
5. **Auth Module** — ورود، ثبت‌نام و پنل کاربری (`auth.js`)
6. **Render Functions** — رندر UI برای هر صفحه

---

## 🌍 پشتیبانی زبان‌ها | Language Support

| زبان    | کد   | وضعیت           | توضیح        |
| ------- | ---- | --------------- | ------------ |
| فارسی   | `fa` | ✅ کامل          | زبان پیش‌فرض |
| English | `en` | ✅ کامل          | رابط انگلیسی |
| Turkish | `tr` | ⏳ در حال آماده‌سازی | -            |
| العربية | `ar` | ⏳ در حال آماده‌سازی | -            |

---

## 🐛 مسائل و راه‌حل‌ها | Troubleshooting

### مشکل: لینک در دستگاه دیگری کار نمی‌کند
**حل:**
- مطمئن شوید Worker و D1 به‌درستی تنظیم و متصل‌اند
- اگر فایل را به‌صورت آفلاین دانلود کرده‌اید (بدون بک‌اند)، لینک فقط روی همان دستگاه/مرورگر کار می‌کند

### مشکل: رمز کار نمی‌کند
**حل:** مرورگر باید از Web Crypto API پشتیبانی کند (مرورگرهای مدرن)

### مشکل: خطای اتصال به D1 یا Worker
**حل:**
- مقادیر `CF_ACCOUNT_ID`، `CF_API_TOKEN` و نام binding مربوط به D1 را در `wrangler.toml` بررسی کنید
- با `wrangler dev` خطاهای لاگ را بررسی کنید

---

## 📋 نقشهٔ راه | Roadmap

- [x] رمزنگاری AES-256-GCM
- [x] استفادهٔ یک‌بار
- [x] دوزبانه (فارسی/انگلیسی)
- [x] مهاجرت زیرساخت از دیتابیس قبلی به Cloudflare D1 + Workers
- [ ] سایر زبان‌ها (ترکی، عربی)
- [ ] QR Code generation
- [ ] محدودیت زمانی (expiration)
- [ ] شمارندهٔ دسترسی
- [ ] انتخاب نسخهٔ رنگی (Light/Dark/Custom)
- [ ] صادرات/وارد کردن تنظیمات
- [ ] API برای توسعه‌دهندگان

---

## 🤝 مشارکت | Contributing
1. مخزن را Fork کنید
2. یک برنچ جدید بسازید: `feature/نام-ویژگی`
3. پیش از ارسال Pull Request، تست‌ها و لینتر را اجرا کنید

---

## 👥 سازندگان | Credits

- **🎨 Offers Pishnahadat** — طراح و سازندهٔ اصلی
  - 📧 Offerspishnahadat.feedback@gmail.com
  - 🎬 [YouTube: @offers_pishnahadat](https://www.youtube.com/@offers_pishnahadat)
  - 🌐 [zaya.io/offers_pishnahadat](https://zaya.io/offers_pishnahadat)

- **🤖 Claude (Anthropic)** — کمک در طراحی، توسعهٔ کد و مهاجرت زیرساخت به Cloudflare D1 + Workers
  - AI Assistant

---

## 📜 مجوز | License

این پروژه تحت مجوز **MIT** منتشر شده است.

```
MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
```

---

## 💬 بازخورد و پیشنهادات | Feedback

- 📧 ایمیل: Offerspishnahadat.feedback@gmail.com
- 🎬 یوتیوب: [@offers_pishnahadat](https://www.youtube.com/@offers_pishnahadat)
- 💬 GitHub Issues برای گزارش باگ

---

## 🔄 نسخهٔ پروژه | Version History

| نسخه  | تاریخ | تغییرات                                                          |
| ----- | ----- | ----------------------------------------------------------------- |
| 1.0.0 | 2026  | رونمایی اولیه                                                     |
| 1.0.1 | 2026  | یکپارچه‌سازی اولیهٔ ذخیره‌سازی ابری + پشتیبانی بین‌دستگاهی           |
| 1.1.0 | 2026  | مهاجرت زیرساخت به Cloudflare Workers + D1؛ افزودن ورود/ثبت‌نام/پنل کاربری |
| ?     | ⏳     | افزودن زبان‌های جدید + QR Code                                     |
| ?     | ⏳     | محدودیت زمانی و شمارندهٔ دسترسی                                    |

---

## 📞 تماس | Contact

```
Offers Pishnahadat
📧 Offerspishnahadat.feedback@gmail.com
🎬 https://www.youtube.com/@offers_pishnahadat
🌐 https://zaya.io/offers_pishnahadat

Alireza — https://github.com/Alireza123456w6w
```

---

**ساخته شده با ❤️ در ایران | Made with ❤️ in Iran**
