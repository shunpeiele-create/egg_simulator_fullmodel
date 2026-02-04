// sw.js
// ★HTMLに合わせてバージョンを v164 に更新しました
const CACHE_NAME = 'egg-mouse-v164-offline';

const ASSETS = [
    './',
    './index.html',
    './manifest.json',
    './image/top.png',
    './image/default.png',
    './image/guide.png',
    './image/saver_bg.png',
    './title.png',
    // base画像
    './image/base_1.png', './image/base_2.png', './image/base_3.png', './image/base_4.png', './image/base_5.png',
    // cover画像
    './image/cover_0.png', 
    './image/cover_1.png', './image/cover_2.png', './image/cover_3.png', './image/cover_4.png', './image/cover_5.png',
    './image/cover_6.png', './image/cover_7.png', './image/cover_8.png', './image/cover_9.png', './image/cover_10.png', './image/cover_11.png'
];

// インストール処理：指定されたファイルを全てキャッシュする
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS);
        })
    );
});

// 通信処理：ネットを見る前にキャッシュから返す
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            // キャッシュにあればそれを返す。なければネットに取りに行く。
            return response || fetch(event.request);
        })
    );
});
