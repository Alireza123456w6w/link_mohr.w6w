// ============================================================
// مُهر — shared account logic (login.html, signup.html, dashboard.html)
// ============================================================
//
// این نسخه به‌جای GitHub Gist از یه Worker اختصاصی روی Cloudflare (با
// دیتابیس D1) استفاده می‌کنه. رمز عبور مستقیم (روی HTTPS) به Worker
// فرستاده می‌شه و هش‌کردنش اونجا انجام می‌شه؛ نه رمز و نه هشش هیچ‌وقت
// توی کد یا مرورگر ذخیره نمی‌مونه.

// آدرس Workerت رو بعد از دیپلوی اینجا بذار (همون آدرسی که در index.html هم گذاشتی)
const API_BASE = "https://mohr-backend.4-k5bbin1ys6uuriq0ud2nrhdph4-p.workers.dev";
const SESSION_KEY = 'mohr_session';

function hasUsersGist() {
  return !!(API_BASE && !API_BASE.includes('PUT-YOUR-WORKER-URL-HERE'));
}

function normalizeUsername(u) {
  return (u || '').trim().toLowerCase();
}

// ---------- base64 helpers (برای رمزنگاری AES-256 در dashboard.html) ----------
function bytesToBase64(bytes) {
  let bin = '';
  const arr = new Uint8Array(bytes);
  for (let i = 0; i < arr.length; i++) bin += String.fromCharCode(arr[i]);
  return btoa(bin);
}
function base64ToBytes(b64) {
  const bin = atob(b64);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return bytes;
}

// ---------- ثبت‌نام ----------
async function signup(username, password) {
  username = normalizeUsername(username);
  if (!username || !password) throw new Error('empty');

  const res = await fetch(`${API_BASE}/api/auth/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  });

  if (res.status === 409) throw new Error('taken');
  if (!res.ok) throw new Error('signup-failed');

  // بعد از ثبت‌نام موفق، خودکار وارد می‌شیم تا session بسازیم
  await login(username, password);
}

// ---------- ورود ----------
async function login(username, password) {
  username = normalizeUsername(username);

  const res = await fetch(`${API_BASE}/api/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include', // برای گرفتن کوکی session
    body: JSON.stringify({ username, password })
  });

  if (res.status === 401) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.error === 'no-user' ? 'no-user' : 'wrong-password');
  }
  if (!res.ok) throw new Error('login-failed');

  const body = await res.json();
  setSession(body.username, !!body.isAdmin);
}

// ---------- session محلی (فقط برای نمایش سریع در UI؛ اعتبار واقعی
// همیشه با کوکی session سمت سرور چک می‌شه) ----------
function setSession(username, isAdmin) {
  localStorage.setItem(SESSION_KEY, JSON.stringify({ username, isAdmin: !!isAdmin }));
}
function getSession() {
  try { return JSON.parse(localStorage.getItem(SESSION_KEY)); } catch (e) { return null; }
}
async function logout() {
  try {
    await fetch(`${API_BASE}/api/auth/logout`, { method: 'POST', credentials: 'include' });
  } catch (e) {}
  localStorage.removeItem(SESSION_KEY);
  location.href = 'login.html';
}
// در ابتدای هر صفحه‌ای که نیاز به لاگین داره صداش کن. اگه session نباشه
// ریدایرکت می‌کنه و null برمی‌گردونه؛ وگرنه { username, isAdmin }.
function requireAuth() {
  const s = getSession();
  if (!s || !s.username) {
    location.href = 'login.html';
    return null;
  }
  return s;
}
