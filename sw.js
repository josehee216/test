// 최소한의 서비스 워커: 앱 설치(홈 화면 추가) 조건만 맞춥니다. 캐싱은 하지 않습니다.

// 설치되면 바로 활성화
self.addEventListener('install', () => self.skipWaiting());

// 활성화되면 열려 있는 페이지를 바로 관리
self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()));

// 요청은 건드리지 않고 그대로 네트워크로 보냄 (오프라인 캐싱 없음)
self.addEventListener('fetch', () => {});
