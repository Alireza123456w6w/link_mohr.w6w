1| # 📜 مُهر — ابزار لینک محرمانه
2| ## 🔐 Secret Link Tool
3| 
4| ![License](https://img.shields.io/badge/License-MIT-green)
5| ![Language](https://img.shields.io/badge/Language-HTML%2FCSS%2FJS-blue)
6| ![Status](https://img.shields.io/badge/Status-Active-brightgreen)
7| ![Backend](https://img.shields.io/badge/Backend-Cloudflare%20Workers-orange)
8| ![Database](https://img.shields.io/badge/Database-Cloudflare%20D1-orange)
9| 
10| ---
11| 
12| ## 🎯 درباره پروژه | About
13| 
14| **مُهر** یک ابزار وب مدرن و ایمن برای ایجاد و اشتراک‌گذاری لینک‌های محرمانه است که از **Cloudflare Workers** و **Cloudflare D1*[...]
15| 
16| **Mohr** is a modern and secure web tool for creating and sharing confidential links, powered by **Cloudflare Workers** and **Cloudflare D1**, with advanced AES-256 encryption and one-time access [...]
17| 
18| لینک صفحه برای استفاده:
19| 🌐 https://alireza123456w6w.github.io/link_mohr.w6w
20| 
21| ��خزن گیت‌هاب:
22| 💻 https://github.com/Alireza123456w6w/link_mohr.w6w
23| 
24| ---
25| 
26| ### ✨ ویژگی‌های اصلی | Key Features
27| 
28| - 🔐 **رمزنگاری AES-256-GCM** با اشتقاق کلید PBKDF2-SHA256 (۱۰۰,۰۰۰ تکرار)
29|   - **AES-256-GCM Encryption** with PBKDF2-SHA256 key derivation (100,000 iterations)
30| 
31| - 🔄 **استفادهٔ یک‌بار** — لینک بعد از اولین باز شدن خودکار پاک می‌شود
32|   - **One-Time Use** — Link automatically deletes itself after first access
33| 
34| - 🔑 **محافظت با رمز** — رمز هرگز ذخیره نمی‌شود، فقط برای رمزگشایی استفاده می‌شود
35|   - **Password Protection** — Password is never stored, used only for decryption
36| 
37| - 🌐 **پشتیبانی دوزبانه** (فارسی و انگلیسی) + سایر زبان‌ها در راه
38|   - **Multi-Language Support** (Persian, English; Turkish & Arabic coming soon)
39| 
40| - 📱 **Responsive Design** — کار می‌کند روی تمام دستگاه‌ها
41|   - Works perfectly on desktop, tablet, and mobile devices
42| 
43| - ☁️ **زیرساخت Cloudflare (Workers + D1)**
44|   - **Cloudflare Workers** — منطق برنامه و رمزنگاری در edge اجرا می‌شود، سریع و بدون تأخیر
45|   - **Cloudflare D1** — پایگاه‌دادهٔ SQL سراسری برای ذخیرهٔ متادیتای لینک‌ها
46|   - **Cross-Device Support** — دسترسی به لینک‌ها از هر مرورگر و دستگاهی
47| 
48| - 🎨 **طراحی شیک و حرفه‌ای** — رابط کاربری با تم «مُهر و موم»، انیمیشن‌های نرم
49|   - Beautiful wax-seal themed UI with smooth animations
50| 
51| - 🔒 **رمز هرگز ذخیره نمی‌شود**
52|   - Passwords are only used for encryption, never stored
53| 
54| ---
55| 
56| ## 🚀 شروع سریع | Quick Start
57| 
58| ### روش ۱: استفاده مستقیم (بهترین برای امتحان سریع)
59| 1. صفحهٔ آنلاین را باز کنید: https://alireza123456w6w.github.io/link_mohr.w6w/
60| 2. برای ایجاد لینک محرمانه شروع کنید!
61| 3. لینک تولید شده را با هرکسی شریک کنید
62| 
63| ### روش ۲: راه‌اندازی محلی برای توسعه (Cloudflare Workers)
64| برای اجرای کامل بک‌اند (Workers + D1) روی سیستم خودتان:
65| 
66| **نیازمندی‌ها | Requirements**
67| - Node.js (پیشنهاد: نسخهٔ 16 به بالا)
68| - [wrangler](https://developers.cloudflare.com/workers/wrangler/) (ابزار خط‌فرمان Cloudflare)
69| - حساب Cloudflare با دسترسی به D1
70| - متغیرهای محیطی: `CF_ACCOUNT_ID`, `CF_API_TOKEN`, نام binding مربوط به D1
71| 
72| **مراحل | Steps**
73| 1. کلون کردن مخزن:
74|    ```bash
75|    git clone https://github.com/Alireza123456w6w/link_mohr.w6w.git
76|    cd link_mohr.w6w
77|    ```
78| 2. نصب وابستگی‌ها:
79|    ```bash
80|    npm install
81|    ```
82| 3. اجرای محلی:
83|    ```bash
84|    wrangler dev
85|    ```
86| 
87| نمونهٔ `wrangler.toml` (مقادیر را جایگزین کنید):
88| ```toml
89| name = "link_mohr"
90| account_id = "<CF_ACCOUNT_ID>"
91| workers_dev = true
92| type = "javascript"
93| 
94| [d1_databases]
95| bindings = [
96|   { name = "DB", database_name = "LINK_MOHR_DB" }
97| ]
98| ```
99| 
100| ### روش ۳: میزبانی به‌عنوان فرانت‌اند ساده (بدون بک‌اند)
101| ```bash
102| # هر سرور وب ساده‌ای می‌تواند فایل‌های استاتیک را serve کند
103| python -m http.server 8000
104| # یا
105| npx http-server
106| ```
107| ⚠️ در این حالت، ذخیره‌سازی ابری و اشتراک بین‌دستگاهی کار نمی‌کند؛ فقط برای پیش‌نمایش رابط کاربری مناسب [...]
108| 
109| ---
110| 
111| ## 📖 راهنمای استفاده | How to Use
112| 
113| ### ساخت لینک محرمانه | Creating a Secret Link
114| 1. **آدرس مقصد را وارد کنید** — Enter the destination URL you want to hide
115| 2. **گزینه‌ها را انتخاب کنید:**
116|    - ✅ استفادهٔ یک‌بار (One-Time Use)
117|    - ✅ محافظت با رمز (Password Protection)
118| 3. **دکمهٔ «مُهر و موم کن» را بزنید** — Click "Seal it"
119| 4. **لینک یا کد تولیدشده را کپی کنید**
120| 
121| ### باز کردن لینک محرمانه | Opening a Secret Link
122| 1. صفحهٔ ابزار را باز کنید
123| 2. دکمهٔ «کد یه لینک رو داری؟» را بزنید
124| 3. کد یا لینک را پیست کنید
125| 4. در صورت وجود رمز، آن را وارد کنید
126| 5. لینک را باز کنید
127| 
128| ---
129| 
130| ## 🏗️ معماری پروژه | Architecture
131| 
132| ```
133| ┌─────────────────────────────────────────────┐
134| │   کاربر A: ایجاد لینک محرمانه               │
135| │   مرورگر → رمزنگاری (Web Crypto API)         │
136| │   ➜ Worker  →  D1 (ذخیرهٔ متادیتای رمزشده)   │
137| └────────────────┬────────────────────────────┘
138|                   │
139|            ☁️ Cloudflare Workers + D1
140|                   │
141| ┌─────────────────▼────────────────────────────┐
142| │   کاربر B: باز کردن لینک (دستگاه دیگر)       │
143| │   مرورگر → Worker → D1 → رمزگشایی در مرورگر   │
144| └───────────────────────────────────────────────┘
145| ```
146| 
147| - **Frontend:** صفحات استاتیک / SPA (`index.html`, `login.html`, `signup.html`, `dashboard.html`)
148| - **Backend:** Cloudflare Workers (منطق برنامه و رمزنگاری)
149| - **Database:** Cloudflare D1 (متادیتا و وضعیت لینک‌ها)
150| - **جریان داده:** Browser → Worker → D1 → Worker → Browser
151| 
152| ---
153| 
154| ## 🔐 امنیت | Security Details
155| 
156| ### رمزنگاری | Encryption
157| ```
158| // PBKDF2-SHA256 برای مشتق کردن کلید — 100,000 iterations
159| // AES-256-GCM برای رمزنگاری و تأیید هویت
160| // Unique salt و IV برای هر لینک
161| ```
162| 
163| ### نکات مهم ⚠️
164| - رمز **هرگز** ذخیره نمی‌شود — فقط برای رمزنگاری/رمزگشایی استفاده می‌شود
165| - اگر رمز اشتباه وارد شود، رمزگشایی خودکار ناموفق است
166| - داده‌ها به‌صورت رمزشده در Cloudflare D1 ذخیره می‌شوند
167| - هیچ log سروری از محتوای لینک‌ها نگهداری نمی‌شود
168| 
169| ### محدودیت‌ها | Limitations
170| - برای اطلاعات **فوق‌حساس** (رمزهای بانکی، کد ملی و مشابه) توصیه نمی‌شود
171| - بهترین کاربرد: لینک‌های فناوری، فایل‌ها، و محتوای عمومی حساس
172| 
173| ---
174| 
175| ## ⚙️ پیکربندی Cloudflare | Cloudflare Configuration
176| 
177| ### مشخصات پروژه (نمونه)
178| ```
179| Worker name: link_mohr
180| D1 Database: LINK_MOHR_DB
181| Binding: DB
182| Table: mohr_secrets
183| ```
184| 
185| ### نمونهٔ اسکیمای D1 (مثال)
186| ```sql
187| CREATE TABLE mohr_secrets (
188|   id TEXT PRIMARY KEY,
189|   encrypted_data TEXT NOT NULL,
190|   salt TEXT NOT NULL,
191|   iv TEXT NOT NULL,
192|   one_time INTEGER DEFAULT 1,
193|   created_at INTEGER NOT NULL,
194|   expires_at INTEGER
195| );
196| ```
197| 
198| ### نحوهٔ تنظیم برای خودتان
199| 1. به [Cloudflare Dashboard](https://dash.cloudflare.com/) بروید و وارد شوید
200| 2. با `wrangler login` حساب خود را متصل کنید
201| 3. یک پایگاه‌دادهٔ D1 بسازید: `wrangler d1 create LINK_MOHR_DB`
202| 4. binding را در `wrangler.toml` مطابق نمونهٔ بالا تنظیم کنید
203| 5. جدول را با `wrangler d1 execute` ایجاد کنید
204| 
205| ### 🔁 مهاجرت از دیتابیس قبلی | Database Migration
206| - از دیتابیس قبلی خروجی (Export) بگیرید (CSV/SQL)
207| - اسکیمای D1 را طبق نمونهٔ بالا تعریف کنید
208| - یک اسکریپت مهاجرت (Node.js یا یک Worker موقت) بنویسید تا داده‌ها به D1 وارد شوند
209| - ابتدا روی محیط staging تست کنید، سپس در production اجرا کنید
210| 
211| ---
212| 
213| ## 🚀 استقرار | Deploy
214| ```bash
215| wrangler publish
216| ```
217| 
218| ## 🧪 تست و دیباگ | Testing & Debugging
219| - `npm test` (در صورت وجود)
220| - استفاده از curl یا Postman برای تست endpointهای محلی
221| - مشاهدهٔ لاگ‌ها از طریق `console.log` در Worker یا داشبورد Cloudflare Workers
222| 
223| ---
224| 
225| ## 🎨 طراحی | Design System
226| 
227| ### رنگ‌ها | Colors
228| ```css
229| --ink: #171512              /* پس‌زمینهٔ تیره */
230| --brass: #c9a15b            /* برنج (رنگ اصلی) */
231| --wax: #8c2a34               /* موم (دکمه‌ها) */
232| --parchment: #ece3ce         /* پرگامنت (متن) */
233| --danger: #c96b3d            /* قرمز (خطاها) */
234| --ok: #7f9e6d                /* سبز (لینک صحیح) */
235| ```
236| 
237| ### فونت‌ها | Fonts
238| - **متن اصلی:** Vazirmatn (فارسی)
239| - **کد:** IBM Plex Mono
240| 
241| ---
242| 
243| ## 📱 Responsive Breakpoints
244| 
245| | دستگاه   | عرض           | وضعیت       |
246| | -------- | ------------- | ----------- |
247| | موبایل   | < 420px       | ✅ بهینه‌شده |
248| | تبلت     | 420px – 768px | ✅ بهینه‌شده |
249| | کامپیوتر | > 768px       | ✅ بهینه‌شده |
250| 
251| ---
252| 
253| ## 🛠️ ساختار پروژه | Project Structure
254| 
255| ```
256| index.html         # صفحهٔ اصلی ابزار (ساخت/باز کردن لینک)
257| login.html         # صفحهٔ ورود کاربر
258| signup.html        # صفحهٔ ثبت‌نام کاربر
259| dashboard.html      # پنل کاربری
260| auth.js             # منطق احراز هویت
261| README.md           # این فایل
262| ```
263| 
264| ### سازماندهی کد | Code Organization
265| 1. **i18n System** — سیستم ترجمهٔ درونی (فارسی/انگلیسی)
266| 2. **Encryption Module** — رمزنگاری AES-256-GCM و PBKDF2
267| 3. **Cloudflare Integration** — اتصال به Workers و D1
268| 4. **Storage Abstraction** — D1 → LocalStorage (fallback آفلاین)
269| 5. **Auth Module** — ورود، ثبت‌نام و پنل کاربری (`auth.js`)
270| 6. **Render Functions** — رندر UI برای هر صفحه
271| 
272| ---
273| 
274| ## 🌍 پشتیبانی زبان‌ها | Language Support
275| 
276| | زبان    | کد   | وضعیت           | توضیح        |
277| | ------- | ---- | --------------- | ------------ |
278| | فارسی   | `fa` | ✅ کامل          | زبان پیش‌فرض |
279| | English | `en` | ✅ کامل          | رابط انگلیسی |
280| | Turkish | `tr` | ⏳ در حال آماده‌سازی | -            |
281| | العربية | `ar` | ⏳ در حال آماده‌سازی | -            |
282| 
283| ---
284| 
285| ## 🐛 مسائل و راه‌حل‌ها | Troubleshooting
286| 
287| ### مشکل: لینک در دستگاه دیگری کار نمی‌کند
288| **حل:**
289| - مطمئن شوید Worker و D1 به‌درستی تنظیم و متصل‌اند
290| - اگر فایل را به‌صورت آفلاین دانلود کرده‌اید (بدون بک‌اند)، لینک فقط روی همان دستگاه/مرورگر کار می‌کند
291| 
292| ### مشکل: رمز کار نمی‌کند
293| **حل:** مرورگر باید از Web Crypto API پشتیبانی کند (مرورگرهای مدرن)
294| 
295| ### مشکل: خطای اتصال به D1 یا Worker
296| **حل:**
297| - مقادیر `CF_ACCOUNT_ID`، `CF_API_TOKEN` و نام binding مربوط به D1 را در `wrangler.toml` بررسی کنید
298| - با `wrangler dev` خطاهای لاگ را بررسی کنید
299| 
300| ---
301| 
302| ## 📋 نقشهٔ راه | Roadmap
303| 
304| - [x] رمزنگاری AES-256-GCM
305| - [x] استفادهٔ یک‌بار
306| - [x] دوزبانه (فارسی/انگلیسی)
307| - [x] مهاجرت زیرساخت از دیتابیس قبلی به Cloudflare D1 + Workers
308| - [ ] سایر زبان‌ها (ترکی، عربی)
309| - [ ] QR Code generation
310| - [ ] محدودیت زمانی (expiration)
311| - [ ] شمارندهٔ دسترسی
312| - [ ] انتخاب نسخهٔ رنگی (Light/Dark/Custom)
313| - [ ] صادرات/وارد کردن تنظیمات
314| - [ ] API برای توسعه‌دهندگان
315| 
316| ---
317| 
318| ## 🤝 مشارکت | Contributing
319| 1. مخزن را Fork کنید
320| 2. یک برنچ جدید بسازید: `feature/نام-ویژگی`
321| 3. پیش از ارسال Pull Request، تست‌ها و لینتر را اجرا کنید
322| 
323| ---
324| 
325| ## 👥 سازندگان | Credits
326| 
327| - **🎨 Offers Pishnahadat** — طراح و سازندهٔ اصلی
328|   - 📧 Offerspishnahadat.feedback@gmail.com
329|   - 🎬 [YouTube: @offers_pishnahadat](https://www.youtube.com/@offers_pishnahadat)
330|   - 🌐 [zaya.io/offers_pishnahadat](https://zaya.io/offers_pishnahadat)
331| 
332| - **🤖 Claude (Anthropic)** — کمک در طراحی، توسعهٔ کد و مهاجرت زیرساخت به Cloudflare D1 + Workers
333|   - AI Assistant
334| 
335| ---
336| 
337| ## 📜 مجوز | License
338| 
339| این پروژه تحت مجوز **MIT** منتشر شده است.
340| 
341| ```
342| MIT License
343| 
344| Permission is hereby granted, free of charge, to any person obtaining a copy
345| of this software and associated documentation files (the "Software"), to deal
346| in the Software without restriction, including without limitation the rights
347| to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
348| copies of the Software, and to permit persons to whom the Software is
349| furnished to do so, subject to the following conditions:
349| 
350| The above copyright notice and this permission notice shall be included in
351| all copies or substantial portions of the Software.
352| 
353| THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
354| IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
355| FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
356| ```
357| 
358| ---
359| 
360| ## 💬 بازخورد و پیشنهادات | Feedback
361| 
362| - 📧 ایمیل: Offerspishnahadat.feedback@gmail.com
363| - 🎬 یوتیوب: [@offers_pishnahadat](https://www.youtube.com/@offers_pishnahadat)
364| - 💬 GitHub Issues برای گزارش باگ
365| 
366| ---
367| 
368| ## 🔄 نسخهٔ پروژه | Version History
369| 
370| | نسخه  | تاریخ | تغییرات                                                          |
371| | ----- | ----- | ----------------------------------------------------------------- |
372| | 1.0.0 | 2026  | رونمایی اولیه                                                     |
373| | 1.0.1 | 2026  | یکپارچه‌سازی اولیهٔ ذخیره‌سازی ابری + پشتیبانی بین‌دستگاهی           |
374| | 1.1.0 | 2026  | مهاجرت زیرساخت به Cloudflare Workers + D1؛ افزودن ورود/ثبت‌نام/پنل کاربری |
375| | ?     | ⏳     | افزودن زبان‌های جدید + QR Code                                     |
376| | ?     | ⏳     | محدودیت زمانی و شمارندهٔ دسترسی                                    |
377| 
378| ---
379| 
380| ## 📞 تماس | Contact
381| 
382| ```
383| Offers Pishnahadat
384| 📧 Offerspishnahadat.feedback@gmail.com
385| 🎬 https://www.youtube.com/@offers_pishnahadat
386| 🌐 https://zaya.io/offers_pishnahadat
387| 
388| Alireza — https://github.com/Alireza123456w6w
389| ```
390| 
391| ---
392| 
393| **ساخته شده با ❤️ در ایران | Made with ❤️ in Iran**
394| 
