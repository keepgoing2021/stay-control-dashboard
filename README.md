# 스테이컨트롤

중소형 호스텔 운영자를 위한 더미 데이터 기반 숙박 운영 대시보드 프로토타입입니다.

## 주요 화면

- 오늘의 운영
- 객실·예약 관리
- 예약채널 관리
- 가격 최적화
- 수익 분석

## 핵심 기능

- 6층 25개 객실 기준 예약 타임라인
- 체크인, 체크아웃, 객실 점유율, 오늘 예상 매출 표시
- 청소·점검 작업 큐, 객실 상태 변경, 완료 기록 더미 운영
- 반복 점검 체크리스트, 객실 문제 이력, 소모품 재고, 담당자 현황, 사진 증빙 더미 흐름
- 에어비앤비, 부킹닷컴, 아고다, 익스피디아, 야놀자, 여기어때, 네이버예약, 트립닷컴 더미 채널 상태
- 추천 가격 승인/보류 흐름
- 모바일 폭 대응

## 실행 방법

별도 설치 없이 `index.html`을 브라우저에서 열면 됩니다.

정적 서버로 확인하려면:

```bash
node -e "const http=require('http'),fs=require('fs'),path=require('path');const root=process.cwd();const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8'};http.createServer((req,res)=>{let url=decodeURIComponent(req.url.split('?')[0]);if(url==='/')url='/index.html';const file=path.join(root,url);if(!file.startsWith(root)){res.writeHead(403);res.end('forbidden');return;}fs.readFile(file,(err,data)=>{if(err){res.writeHead(404);res.end('not found');return;}res.writeHead(200,{'Content-Type':types[path.extname(file)]||'application/octet-stream'});res.end(data);});}).listen(4173,()=>console.log('http://127.0.0.1:4173'));"
```

## 현재 상태

실제 예약채널 API 연동과 직원 알림은 아직 없습니다. 화면과 흐름 검증을 위한 더미 데이터 프로토타입입니다.
