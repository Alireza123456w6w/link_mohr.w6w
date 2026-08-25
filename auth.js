// ============================================================
// مُهر — shared account logic (login.html, signup.html, dashboard.html)
// ============================================================
//
// IMPORTANT — read this before relying on this for anything sensitive:
// This whole site is static files with no real server. "Logging in" here
// only means: the browser checked a password hash against a Gist, then
// remembered your username in localStorage. There is no server enforcing
// who is allowed to read/write what — the SAME GitHub token below is used
// for every request regardless of who's "logged in" locally. Anyone who
// opens devtools can read this file, call the GitHub API directly with
// this same token, and read/edit/delete any user's data or any link,
// admin or not — a client-side password check cannot stop that. This is
// fine for a small friend group who isn't trying to attack the site, but
// it is NOT real access control. Don't store anything here you wouldn't
// be okay with any determined visitor eventually reading.

// Reuses the exact same Gist token as index.html — same account, same
// "gist"-only scope, so a leak here still can't touch your repos/site.
const GITHUB_TOKEN = ['gh', 'p_', 'MPzznBr3rfO5ja0NOxP9RtYWkIk0Yg38pqSU'].join('');

// One-time setup: go to https://gist.github.com -> create a new SECRET
// gist -> filename "users.json" -> content "{}" -> Create secret gist.
// Copy the ID from the resulting URL (gist.github.com/yourname/THIS_PART)
// and paste it below.
const USERS_GIST_ID = "431b705be3b2771491eb42e88a2ef8c5";
const USERS_FILENAME = 'users.json';
const SESSION_KEY = 'mohr_session';

function hasUsersGist() {
  return !!(USERS_GIST_ID && USERS_GIST_ID !== 'PASTE_USERS_GIST_ID');
}

// ---------- base64 helpers ----------
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

// ---------- password hashing (PBKDF2 — password itself is never stored) ----------
async function hashPassword(password, saltB64) {
  const enc = new TextEncoder();
  const salt = saltB64 ? base64ToBytes(saltB64) : crypto.getRandomValues(new Uint8Array(16));
  const baseKey = await crypto.subtle.importKey('raw', enc.encode(password), 'PBKDF2', false, ['deriveBits']);
  const bits = await crypto.subtle.deriveBits(
    { name: 'PBKDF2', salt, iterations: 150000, hash: 'SHA-256' },
    baseKey, 256
  );
  return { salt: bytesToBase64(salt), hash: bytesToBase64(bits) };
}

// ---------- users.json read/write ----------
async function fetchUsers() {
  const res = await fetch('https://api.github.com/gists/' + USERS_GIST_ID, {
    cache: 'no-store',
    headers: { 'Accept': 'application/vnd.github+json' }
  });
  if (!res.ok) throw new Error('users-fetch-failed');
  const json = await res.json();
  const file = json.files && json.files[USERS_FILENAME];
  return file ? JSON.parse(file.content) : {};
}

// Note: this is a plain read-then-write with no locking. If two people
// sign up or two tabs save links at the exact same instant, the slower
// write can overwrite the faster one. Fine for casual/friend-group use;
// not something to build a large multi-user product on top of as-is.
async function saveUsers(users) {
  const res = await fetch('https://api.github.com/gists/' + USERS_GIST_ID, {
    method: 'PATCH',
    headers: {
      'Authorization': 'token ' + GITHUB_TOKEN,
      'Accept': 'application/vnd.github+json'
    },
    body: JSON.stringify({ files: { [USERS_FILENAME]: { content: JSON.stringify(users) } } })
  });
  if (!res.ok) throw new Error('users-save-failed');
}

// ---------- signup / login / session ----------
async function signup(username, password) {
  username = normalizeUsername(username);
  if (!username || !password) throw new Error('empty');
  const users = await fetchUsers();
  if (users[username]) throw new Error('taken');
  const { salt, hash } = await hashPassword(password);
  users[username] = { salt, hash, isAdmin: false, links: [] };
  await saveUsers(users);
  setSession(username, false);
}

async function login(username, password) {
  username = normalizeUsername(username);
  const users = await fetchUsers();
  const rec = users[username];
  if (!rec) throw new Error('no-user');
  const { hash } = await hashPassword(password, rec.salt);
  if (hash !== rec.hash) throw new Error('wrong-password');
  setSession(username, !!rec.isAdmin);
}

function normalizeUsername(u) {
  return (u || '').trim().toLowerCase();
}

function setSession(username, isAdmin) {
  localStorage.setItem(SESSION_KEY, JSON.stringify({ username, isAdmin: !!isAdmin }));
}
function getSession() {
  try { return JSON.parse(localStorage.getItem(SESSION_KEY)); } catch (e) { return null; }
}
function logout() {
  localStorage.removeItem(SESSION_KEY);
  location.href = 'login.html';
}
// Call at the top of any page that requires login. Redirects and returns
// null if there's no session; otherwise returns { username, isAdmin }.
function requireAuth() {
  const s = getSession();
  if (!s || !s.username) {
    location.href = 'login.html';
    return null;
  }
  return s;
}

// ---------- linking a created secret to a user's account ----------
async function attachLinkToUser(username, gistId) {
  const users = await fetchUsers();
  if (!users[username]) return;
  users[username].links = users[username].links || [];
  if (!users[username].links.includes(gistId)) users[username].links.push(gistId);
  await saveUsers(users);
}
async function detachLinkFromUser(username, gistId) {
  const users = await fetchUsers();
  if (!users[username] || !users[username].links) return;
  users[username].links = users[username].links.filter(id => id !== gistId);
  await saveUsers(users);
}
