# 📜 مُهر — ابزار لینک محرمانه
## 🔐 Secret Link Tool

![License](https://img.shields.io/badge/License-MIT-green)
![Language](https://img.shields.io/badge/Language-HTML%2FCSS%2FJS-blue)
![Status](https://img.shields.io/badge/Status-Active-brightgreen)
![Backend](https://img.shields.io/badge/Backend-Cloudflare%20Workers-orange)
![Database](https://img.shields.io/badge/Database-Cloudflare%20D1-orange)

---

## 🎯 درباره پروژه | About

**مُهر** یک ابزار وب مدرن و ایمن برای ایجاد و اشتراک‌گذاری لینک‌های محرمانه است که از **Cloudflare Workers** و **Cloudflare D1** پشتیبانی می‌کند. با رمزنگاری **AES-256-GCM** پیشرفته و دسترسی یک‌بار، داده‌های شما کاملاً محرمانه و محفوظ می‌مانند.

**Mohr** is a modern and secure web tool for creating and sharing confidential links, powered by **Cloudflare Workers** and **Cloudflare D1**, with advanced AES-256 encryption and one-time access. Your data stays private and protected.

### 🌐 لینک‌های مهم | Important Links

| لینک | توضیح |
|------|--------|
| 🌐 [Live Demo](https://alireza123456w6w.github.io/link_mohr.w6w) | **استفادهٔ فوری بدون نیاز به نصب** |
| 💻 [Repository](https://github.com/Alireza123456w6w/link_mohr.w6w) | **کد منبع و مستندات** |
| 📖 [Documentation](#table-of-contents) | **راهنمای کامل استفاده** |

---

## 📑 فهرست مطالب | Table of Contents

1. [ویژگی‌های اصلی](#-ویژگی‌های-اصلی--key-features)
2. [شروع سریع](#-شروع-سریع--quick-start)
3. [نحوهٔ استفاده](#-راهنمای-استفاده--how-to-use)
4. [معماری پروژه](#-معماری-پروژه--architecture)
5. [امنیت و رمزنگاری](#-امنیت--security-details)
6. [استقرار و نصب](#-استقرار--deploy)
7. [عیب‌یابی](#-عیب‌یابی--troubleshooting)
8. [نقشهٔ راه](#-نقشهٔ-راه--roadmap)

---

## ✨ ویژگی‌های اصلی | Key Features

| ویژگی | توضیح |
|-------|--------|
| 🔐 **رمزنگاری AES-256-GCM** | اشتقاق کلید PBKDF2-SHA256 (۱۰۰,۰۰۰ تکرار) |
| 🔄 **استفادهٔ یک‌بار** | لینک بعد از اولین باز شدن خودکار پاک می‌شود |
| 🔑 **محافظت با رمز** | رمز هرگز ذخیره نمی‌شود، فقط برای رمزگشایی |
| 🌐 **دوزبانه** | فارسی و انگلیسی (ترکی و عربی در راه) |
| 📱 **Responsive Design** | کار می‌کند روی تمام دستگاه‌ها |
| ☁️ **Cloudflare Infrastructure** | Workers برای منطق برنامه + D1 برای ذخیره‌سازی |
| 🎨 **طراحی شیک** | رابط کاربری با تم «مُهر و موم»، انیمیشن‌های نرم |
| 🔒 **بدون ذخیرهٔ رمز** | فقط برای رمزنگاری استفاده می‌شود |

### 🚀 مقایسهٔ روش‌های استقرار | Deployment Comparison

| روش | سرعت | قابلیت اشتراک | ذخیره‌سازی | توصیهٔ استفاده |
|-----|------|----------|----------|------------|
| **آنلاین مستقیم** | ⚡ فوری | ✅ کامل | ☁️ Cloudflare D1 | **برای کاربران معمولی** |
| **محلی (Wrangler)** | ⚡ سریع | ✅ کامل | ☁️ محلی/Cloudflare | **برای توسعه‌دهندگان** |
| **فرانت‌اند ساده** | ⚡ فوری | ❌ نمی‌شود | 💾 LocalStorage | **فقط پیش‌نمایش رابط** |

---

## 🚀 شروع سریع | Quick Start

### ✅ **بهترین انتخاب: استفادهٔ آنلاین**

```
1️⃣ صفحهٔ زیر را باز کنید:
   👉 https://alireza123456w6w.github.io/link_mohr.w6w

2️⃣ لینک محرمانه بسازید یا باز کنید

3️⃣ آن را با ایمنی اشتراک کنید
```

### 🛠️ **برای توسعه‌دهندگان: استقرار محلی**

**نیازمندی‌ها:**
```bash
✓ Node.js 16+
✓ Cloudflare Account with D1 access
✓ Git
```

**مراحل:**
```bash
# 1️⃣ کلون کردن
git clone https://github.com/Alireza123456w6w/link_mohr.w6w.git
cd link_mohr.w6w

# 2️⃣ نصب وابستگی‌ها
npm install

# 3️⃣ لاگین به Cloudflare
wrangler login

# 4️⃣ اجرای محلی
wrangler dev
```

---

## 📖 راهنمای استفاده | How to Use

### ✏️ **ساخت لینک محرمانه | Creating a Secret Link**

```
┌─────────────────────────────────────────┐
│ 🔗 آدرس مقصد را وارد کنید              │
│    (Enter the URL you want to hide)    │
└─────────────────────────────────────────┘
              ⬇️
┌─────────────────────────────────────────┐
│ ✅ گزینه‌ها را انتخاب کنید:             │
│    ☑️ استفادهٔ یک‌بار                   │
│    ☑️ محافظت با رمز                    │
└─────────────────────────────────────────┘
              ⬇️
┌─────────────────────────────────────────┐
│ 🔐 دکمهٔ "مُهر و موم کن" را بزنید      │
└─────────────────────────────────────────┘
              ⬇️
┌─────────────────────────────────────────┐
│ 📋 لینک یا کد را کپی کنید              │
│ و با نفر مورد نظر به اشتراک بگذارید    │
└─────────────────────────────────────────┘
```

### 🔓 **باز کردن لینک محرمانه | Opening a Secret Link**

```
1️⃣ صفحهٔ ابزار را باز کنید
2️⃣ دکمهٔ "کد یه لینک رو داری؟" را بزنید
3️⃣ کد یا لینک را پیست کنید
4️⃣ رمز را وارد کنید (اگر تنظیم شده بود)
5️⃣ دکمهٔ "باز کن" را بزنید
```

---

## 🏗️ معماری پروژه | Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    🌍 MOHR ARCHITECTURE                │
└─────────────────────────────────────────────────────────┘

    👤 کاربر A: ایجاد لینک
    ├─ مرورگر (Browser)
    │  └─ 🔐 رمزنگاری (Web Crypto API)
    │     └─ AES-256-GCM + PBKDF2-SHA256
    │
    ├─ ☁️ Cloudflare Worker
    │  └─ درخواست دریافت → لاجیک پروسس
    │
    └─ 💾 Cloudflare D1 (Database)
       └─ ذخیرهٔ متادیتای رمزشده

             ↕️ (شبکهٔ امن)

    👤 کاربر B: باز کردن لینک (دستگاه دیگر)
    ├─ ☁️ Cloudflare Worker
    │  └─ درخواست لینک → بازیابی اطلاعات
    │
    ├─ 💾 Cloudflare D1
    │  └─ بازیابی دادهٔ رمزشده
    │
    └─ مرورگر (Browser)
       └─ 🔓 رمزگشایی محلی
          └─ نمایش محتوای اصلی
```

### 📁 **ساختار پروژه | Project Structure**

```
link_mohr.w6w/
├── 📄 index.html              # صفحهٔ اصلی (ساخت/باز کردن لینک)
├── 📄 login.html              # صفحهٔ ورود کاربر
├── 📄 signup.html             # صفحهٔ ثبت‌نام
├── 📄 dashboard.html          # پنل کاربری
├── 📜 auth.js                 # منطق احراز هویت
├── 🔐 encryption.js           # رمزنگاری AES-256-GCM
├── 🌐 i18n.js                 # سیستم بین‌المللی (فارسی/انگلیسی)
├── 🎨 styles.css              # طراحی رابط کاربری
├── 🔧 wrangler.toml           # تنظیمات Cloudflare
└── 📖 README.md               # این فایل
```

---

## 🔐 امنیت | Security Details

### 🔒 **فرایند رمزنگاری | Encryption Process**

```javascript
// 1️⃣ کاربر رمز خود را وارد می‌کند
const password = "my-secure-password"

// 2️⃣ Salt تصادفی ایجاد می‌شود
const salt = crypto.getRandomValues(new Uint8Array(16))

// 3️⃣ کلید مشتق‌شده از رمز (PBKDF2-SHA256)
// 100,000 iterations برای امنیت بیشتر
const key = await PBKDF2(password, salt, 100000)

// 4️⃣ IV تصادفی برای هر رمزنگاری
const iv = crypto.getRandomValues(new Uint8Array(12))

// 5️⃣ رمزنگاری AES-256-GCM
const encrypted = AES_256_GCM(data, key, iv)

// 6️⃣ ذخیرهٔ رمزشده در D1
// فقط salt + iv + encrypted_data ذخیره می‌شود
// رمز اصلی هرگز ذخیره نمی‌شود!
```

### ⚠️ **نکات مهم | Important Notes**

| موضوع | جزئیات |
|-------|--------|
| **رمز** | ❌ هرگز ذخیره نمی‌شود — فقط برای رمزنگاری/رمزگشایی |
| **رمز اشتباه** | ❌ رمزگشایی خودکار ناموفق است |
| **داده‌ها** | ✅ به‌صورت رمزشده در D1 ذخیره می‌شوند |
| **لاگ سرور** | ❌ محتوای لینک‌ها لاگ نمی‌شود |
| **SSL/TLS** | ✅ تمام ارتباطات رمزنگاری‌شده‌اند |

### 🎯 **مورد استفادهٔ توصیه‌شده | Recommended Use Cases**

✅ **مناسب برای:**
- لینک‌های فناوری (GitHub, API endpoints)
- فایل‌های حساس (مستندات، ارائه‌ها)
- محتوای عمومی با دسترسی محدود

❌ **توصیه نمی‌شود برای:**
- رمزهای بانکی یا PIN
- اطلاعات هویتی (شماره‌ شناسنامه، پاسپورت)
- کلیدهای رمزنگاری حساس

---

## ⚙️ تنظیمات Cloudflare | Cloudflare Configuration

### 📋 **نمونهٔ wrangler.toml**

```toml
name = "link_mohr"
account_id = "<YOUR_CLOUDFLARE_ACCOUNT_ID>"
workers_dev = true
type = "javascript"
main = "src/index.js"

[env.production]
routes = [
  { pattern = "mohr.yourdomain.com/*", zone_id = "<YOUR_ZONE_ID>" }
]

[d1_databases]
bindings = [
  { name = "DB", database_name = "LINK_MOHR_DB" }
]

[env.staging]
d1_databases = [
  { name = "DB", database_name = "LINK_MOHR_DB_STAGING" }
]
```

### 💾 **اسکیمای D1 | D1 Database Schema**

```sql
-- جدول اصلی برای ذخیرهٔ لینک‌های محرمانه
CREATE TABLE mohr_secrets (
  id TEXT PRIMARY KEY,                    -- شناسهٔ منحصر‌به‌فرد
  encrypted_data TEXT NOT NULL,           -- محتوای رمزنگاری‌شده
  salt TEXT NOT NULL,                     -- Salt برای PBKDF2
  iv TEXT NOT NULL,                       -- IV برای AES-GCM
  one_time INTEGER DEFAULT 1,             -- استفادهٔ یک‌بار (0/1)
  accessed INTEGER DEFAULT 0,             -- تعداد دسترسی‌ها
  created_at INTEGER NOT NULL,            -- زمان ایجاد (Unix timestamp)
  expires_at INTEGER,                     -- زمان انقضا (اختیاری)
  user_id TEXT                            -- شناسهٔ کاربر (اختیاری)
);

-- جدول کاربران (برای احراز هویت)
CREATE TABLE users (
  id TEXT PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  created_at INTEGER NOT NULL,
  updated_at INTEGER
);

-- جدول تاریخچهٔ دسترسی
CREATE TABLE access_logs (
  id TEXT PRIMARY KEY,
  secret_id TEXT NOT NULL,
  accessed_at INTEGER NOT NULL,
  ip_address TEXT,
  FOREIGN KEY (secret_id) REFERENCES mohr_secrets(id)
);
```

### 🚀 **نحوهٔ تنظیم | Setup Instructions**

```bash
# 1️⃣ لاگین کنید
wrangler login

# 2️⃣ D1 Database ایجاد کنید
wrangler d1 create LINK_MOHR_DB

# 3️⃣ جدول‌ها را ایجاد کنید
wrangler d1 execute LINK_MOHR_DB --file=schema.sql

# 4️⃣ wrangler.toml را تنظیم کنید
nano wrangler.toml

# 5️⃣ محلی تست کنید
wrangler dev

# 6️⃣ منتشر کنید
wrangler publish
```

---

## 🚀 استقرار | Deploy

### 🔹 **استقرار بر روی Cloudflare Workers**

```bash
# آماده‌سازی
npm install
wrangler login

# استقرار در Production
wrangler publish

# نتیجه:
# ✓ Worker منتشر شد
# ✓ D1 Database متصل شد
# ✓ در دسترس: https://link_mohr.<account>.workers.dev
```

### 🔹 **استقرار GitHub Pages (فرانت‌اند)**

```bash
# فایل‌های استاتیک را در gh-pages منتشر کنید
git subtree push --prefix . origin gh-pages

# یا از GitHub Actions استفاده کنید
# (نمونه workflow فایل در .github/workflows/ موجود است)
```

---

## 🧪 تست و دیباگ | Testing & Debugging

### ✅ **تست محلی**

```bash
# اجرای سرور محلی
wrangler dev

# تست API
curl -X POST http://localhost:8787/api/create \
  -H "Content-Type: application/json" \
  -d '{
    "url": "https://example.com",
    "password": "secure",
    "one_time": true
  }'
```

### 🐛 **دیباگ کنید**

```javascript
// در Worker:
console.log("Debug message:", variable)

// مشاهدهٔ لاگ‌ها:
wrangler tail  // نمایش لاگ‌های Real-time
```

---

## 🎨 طراحی و رنگ‌ها | Design System

### 🎭 **پالت رنگی | Color Palette**

```css
/* متغیرهای رنگی */
:root {
  --ink: #171512;              /* پس‌زمینهٔ تیره (دودکش) */
  --brass: #c9a15b;            /* برنج (رنگ اصلی) */
  --wax: #8c2a34;              /* موم (دکمه‌ها و بیرقیت) */
  --parchment: #ece3ce;        /* پرگامنت (متن روشن) */
  --danger: #c96b3d;           /* قرمز (خطاها و هشدارها) */
  --ok: #7f9e6d;               /* سبز (موفقیت) */
  --shadow: rgba(0,0,0,0.5);   /* سایه */
  --gold: #d4af37;             /* طلایی (لهجه) */
}
```

### 🔤 **فونت‌ها | Typography**

| استفاده | فونت | وضعیت |
|--------|------|--------|
| **فارسی** | Vazirmatn | ✅ بهینه‌شده برای فارسی |
| **انگلیسی** | Inter | ✅ خواناتر و مدرن |
| **کد** | IBM Plex Mono | ✅ واضح و قابل‌خواندن |

### 📱 **Breakpoints (بازخوری سازگار)**

```css
/* Mobile First */
@media (max-width: 420px)  { /* موبایل */ }
@media (min-width: 421px)  { /* تبلت */ }
@media (min-width: 769px)  { /* دسکتاپ */ }
```

---

## 🌍 پشتیبانی زبان‌ها | Language Support

```json
{
  "languages": {
    "fa": {
      "name": "فارسی",
      "status": "✅ کامل",
      "default": true
    },
    "en": {
      "name": "English",
      "status": "✅ کامل"
    },
    "tr": {
      "name": "Türkçe",
      "status": "⏳ در حال آماده‌سازی"
    },
    "ar": {
      "name": "العربية",
      "status": "⏳ در حال آماده‌سازی"
    }
  }
}
```

---

## 🐛 عیب‌یابی | Troubleshooting

### ❓ **Q: لینک در دستگاه دیگری کار نمی‌کند**

**A:** 
```
✅ بررسی کنید:
1. Worker و D1 به‌درستی تنظیم و فعال‌اند
2. Binding D1 در wrangler.toml صحیح است
3. اگر فایل آفلاین استفاده می‌کنید، لینک فقط محلی کار می‌کند
```

### ❓ **Q: رمز کار نمی‌کند**

**A:**
```
✅ نکات:
1. بررسی کنید مرورگر از Web Crypto API پشتیبانی می‌کند
2. مرورگرهای مدرن (Chrome, Firefox, Safari) پشتیبانی‌شده‌اند
3. اگر IE استفاده می‌کنید، حتماً آپگریڈ کنید
```

### ❓ **Q: خطای اتصال به D1 یا Worker**

**A:**
```bash
✅ حل کنید:
1. بررسی کنید CF_ACCOUNT_ID و CF_API_TOKEN صحیح هستند
wrangler whoami

2. مقادیر binding را چک کنید
cat wrangler.toml | grep -A5 d1_databases

3. مشاهدهٔ لاگ‌ها:
wrangler tail --format json

4. در صورت نیاز، database را دوباره‌ایجاد کنید
wrangler d1 list
```

---

## 📋 نقشهٔ راه | Roadmap

### ✅ **تکمیل‌شده | Completed**
- [x] 🔐 رمزنگاری AES-256-GCM
- [x] 🔄 استفادهٔ یک‌بار (One-Time Use)
- [x] 🌐 دوزبانه (فارسی/انگلیسی)
- [x] 👤 سیستم ورود/ثبت‌نام (Auth)
- [x] 📊 پنل کاربری (Dashboard)
- [x] ☁️ مهاجرت به Cloudflare Workers + D1

### ⏳ **در حال توسعه | In Progress**
- [ ] 🌍 سایر زبان‌ها (ترکی، عربی)
- [ ] 📱 نسخهٔ موبایل (React Native)
- [ ] 🎨 حالت Dark/Light قابل‌تنظیم

### 🚀 **آینده | Planned**
- [ ] 📱 QR Code Generation
- [ ] ⏱️ محدودیت زمانی (Expiration)
- [ ] 📊 شمارندهٔ دسترسی (Access Counter)
- [ ] 🎨 تم‌های سفارشی (Custom Themes)
- [ ] 📤 صادرات/وارد کردن تنظیمات
- [ ] 🔌 API برای توسعه‌دهندگان
- [ ] 🔔 اطلاع‌رسانی (Email Notifications)

---

## 🤝 مشارکت | Contributing

ما از مشارکت شما استقبال می‌کنیم! 🙏

```bash
# 1️⃣ مخزن را Fork کنید
git clone https://github.com/YOUR_USERNAME/link_mohr.w6w.git
cd link_mohr.w6w

# 2️⃣ یک برنچ جدید بسازید
git checkout -b feature/نام-ویژگی

# 3️⃣ تغییرات را انجام دهید
# ... کدنویسی و تست ...

# 4️⃣ تغییرات را کمیت کنید
git add .
git commit -m "✨ افزودن ویژگی جدید"

# 5️⃣ برنچ را Push کنید
git push origin feature/نام-ویژگی

# 6️⃣ یک Pull Request بسازید
```

### 📋 **خط‌مشی مشارکت**

- 📖 کد را مستند کنید
- ✅ تست‌های موجود را پاس کنید
- 🎨 از استایل کد پروژه پیروی کنید
- 💬 یک توضیح واضح برای PR بنویسید

---

## 👥 سازندگان و اعتبارات | Credits

### 🎨 **Offers Pishnahadat** — طراح و سازندهٔ اصلی
- 📧 **ایمیل:** Offerspishnahadat.feedback@gmail.com
- 🎬 **YouTube:** [@offers_pishnahadat](https://www.youtube.com/@offers_pishnahadat)
- 🌐 **وبسایت:** [zaya.io/offers_pishnahadat](https://zaya.io/offers_pishnahadat)

### 🤖 **Claude (Anthropic)** — کمک در طراحی و توسعه
- هدایت در معماری پروژه
- بهینه‌سازی کد و امنیت
- مهاجرت زیرساخت به Cloudflare

### 👨‍💻 **Alireza** — توسعه‌دهندهٔ فعلی
- 🐙 GitHub: [@Alireza123456w6w](https://github.com/Alireza123456w6w)

---

## ❓ سوالات متکرر | FAQ

### **Q: آیا داده‌های من واقعاً محفوظ هستند؟**
✅ بله! AES-256-GCM یکی از قوی‌ترین الگوریتم‌های رمزنگاری است. رمز هرگز ذخیره نمی‌شود.

### **Q: چرا از Cloudflare استفاده می‌کنید؟**
✅ سرعت بالا، قابل‌اعتماد بودن، امنیت درجهٔ اول، و قیمت مناسب.

### **Q: می‌توانم این پروژه را شخصی‌سازی کنم؟**
✅ کاملاً! مجوز MIT به شما کامل آزادی می‌دهد.

### **Q: چطور می‌تواند بدون بک‌اند کار کند؟**
✅ رمزنگاری تمام‌کاملاً در مرورگر انجام می‌شود (Web Crypto API).

---

## 📜 مجوز | License

این پروژه تحت مجوز **MIT** منتشر شده است.

```
MIT License

Copyright (c) 2026 Alireza & Offers Pishnahadat

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
```

---

## 💬 بازخورد و پیشنهادات | Feedback & Support

ما از نظرات و پیشنهادات شما استقبال می‌کنیم!

| روش | لینک |
|------|------|
| 📧 **ایمیل** | Offerspishnahadat.feedback@gmail.com |
| 🎬 **YouTube** | [@offers_pishnahadat](https://www.youtube.com/@offers_pishnahadat) |
| 🐛 **Issues** | [GitHub Issues](https://github.com/Alireza123456w6w/link_mohr.w6w/issues) |
| 💬 **Discussions** | [GitHub Discussions](https://github.com/Alireza123456w6w/link_mohr.w6w/discussions) |

---

## 🔄 نسخه‌های پروژه | Version History

| نسخه | تاریخ | توضیح |
|------|------|--------|
| **1.0.0** | 2026 | 🎉 رونمایی اولیهٔ ابزار |
| **1.0.1** | 2026 | 🌐 ذخیره‌سازی ابری + بین‌دستگاهی |
| **1.1.0** | 2026 | 🚀 Cloudflare Workers + D1 + Auth |
| **1.2.0** | ⏳ | 🎨 طراحی بهتر + بهینه‌سازی |
| **2.0.0** | ⏳ | 📱 API + زبان‌های جدید |

---

## 📊 آمار و معلومات | Stats

```
📦 کل فایل‌ها:       10+
📝 خط‌های کد:         2000+
🌍 زبان‌های پشتیبانی‌شده: 2 (+ 2 در راه)
📱 دستگاه‌های سازگار: تمام مرورگرهای مدرن
⚡ میانگین سرعت:    < 500ms
🔐 استانداردهای امنیت: Military-Grade (AES-256)
```

---

## 📞 تماس | Contact Info

```
╔═══════════════════════════════════════════════════╗
║          📬 برای تماس و همکاری                  ║
╠═══════════════════════════════════════════════════╣
║  👨‍💻 Alireza123456w6w                             ║
║  🔗 https://github.com/Alireza123456w6w           ║
║                                                   ║
║  🎨 Offers Pishnahadat                            ║
║  📧 Offerspishnahadat.feedback@gmail.com         ║
║  🎬 https://www.youtube.com/@offers_pishnahadat  ║
║  🌐 https://zaya.io/offers_pishnahadat           ║
╚═══════════════════════════════════════════════════╝
```

---

## 🙏 سپاس

از شما برای استفاده و حمایت از مُهر تشکر می‌کنیم! 

**⭐ اگر این پروژه برایتان مفید بود، لطفاً یک ستاره بدهید!**

---

**ساخته شده با ❤️ در ایران | Made with ❤️ in Iran**

```
    ╔══════════════════════════════════════╗
    ║  🇮🇷 مُهر — ابزار لینک محرمانه 🇮🇷  ║
    ║     Mohr — Secret Link Tool        ║
    ║                                    ║
    ║   "امانت داری، امانت خانه‌ای"      ║
    ║   "تقسیم ایمن، تقسیم محفوظ"        ║
    ╚══════════════════════════════════════╝
```

---

**آپدیت شده:** ۷ سپتامبر ۲۰۲۶ | Last Updated: September 7, 2026
