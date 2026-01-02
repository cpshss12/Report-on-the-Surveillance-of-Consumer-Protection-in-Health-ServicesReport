self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  console.log('[Service Worker] Activated');
  return self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  // Pass through requests (ไม่แคชไฟล์ เพื่อให้ข้อมูลอัปเดตเสมอ)
  e.respondWith(fetch(e.request));
});