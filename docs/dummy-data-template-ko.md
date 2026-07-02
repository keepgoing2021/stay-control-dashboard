# 더미데이터 제공 템플릿

화면 표현은 한글로 가되, 개발용 컬럼명은 영문 소문자와 밑줄 형식으로 맞춘다.
엑셀, 구글시트, CSV, JSON 중 아무 형식이나 가능하지만 가장 쉬운 방식은 엑셀/구글시트다.

## 권장 시트 구성

1. `숙소정보`
2. `객실목록`
3. `예약목록`
4. `예약채널`
5. `가격규칙`
6. `가격추천`
7. `일별재고`

## 1. 숙소정보

| 컬럼명 | 설명 | 예시 |
| --- | --- | --- |
| property_id | 숙소 고유값 | hostel_001 |
| property_name | 숙소명 | 서울스테이 호스텔 |
| address | 주소 | 서울시 중구 명동 |
| total_rooms | 전체 객실 수 | 25 |
| timezone | 기준 시간대 | Asia/Seoul |

## 2. 객실목록

| 컬럼명 | 설명 | 예시 |
| --- | --- | --- |
| room_id | 객실 고유값 | room_201 |
| room_name | 화면에 보일 객실명 | 201 |
| room_type | 객실 타입 | 스탠다드 |
| floor | 층 | 2 |
| base_weekday_price | 기본 평일가 | 79000 |
| base_weekend_price | 기본 주말가 | 99000 |
| standard_capacity | 기준 인원 | 2 |
| max_capacity | 최대 인원 | 2 |
| room_status | 객실 상태 | 판매 가능 |

예시:

| room_id | room_name | room_type | floor | base_weekday_price | base_weekend_price | standard_capacity | max_capacity | room_status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| room_101 | 101 | 스탠다드 | 1 | 69000 | 89000 | 2 | 2 | 판매 가능 |
| room_201 | 201 | 디럭스 | 2 | 89000 | 119000 | 2 | 3 | 판매 가능 |
| room_301 | 301 | 패밀리룸 | 3 | 139000 | 179000 | 4 | 5 | 점검 중 |

## 3. 예약목록

| 컬럼명 | 설명 | 예시 |
| --- | --- | --- |
| reservation_id | 예약 고유값 | res_0001 |
| guest_name | 예약자명 | 김민준 |
| room_id | 객실 고유값 | room_201 |
| channel_id | 예약채널 고유값 | yanolja |
| check_in | 체크인 날짜 | 2026-07-05 |
| check_out | 체크아웃 날짜 | 2026-07-07 |
| nights | 숙박일수 | 2 |
| total_amount | 총 예약 금액 | 238000 |
| reservation_status | 예약 상태 | 예약완료 |
| payment_status | 결제 상태 | 결제완료 |

예시:

| reservation_id | guest_name | room_id | channel_id | check_in | check_out | nights | total_amount | reservation_status | payment_status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| res_0001 | 김민준 | room_201 | yanolja | 2026-07-05 | 2026-07-07 | 2 | 238000 | 예약완료 | 결제완료 |
| res_0002 | 박지현 | room_101 | airbnb | 2026-07-06 | 2026-07-08 | 2 | 178000 | 투숙예정 | 결제완료 |
| res_0003 | 이서연 | room_301 | booking | 2026-07-09 | 2026-07-10 | 1 | 179000 | 취소 | 환불완료 |

## 4. 예약채널

| 컬럼명 | 설명 | 예시 |
| --- | --- | --- |
| channel_id | 채널 고유값 | airbnb |
| channel_name | 채널명 | 에어비앤비 |
| connection_status | 연결 상태 | 연결됨 |
| commission_rate | 수수료율 | 0.15 |
| price_multiplier | 가격 배율 | 1.05 |
| monthly_revenue | 이번 달 매출 | 2350000 |

예시:

| channel_id | channel_name | connection_status | commission_rate | price_multiplier | monthly_revenue |
| --- | --- | --- | --- | --- | --- |
| airbnb | 에어비앤비 | 연결됨 | 0.15 | 1.05 | 2350000 |
| yanolja | 야놀자 | 연결됨 | 0.12 | 1.02 | 3100000 |
| yeogi | 여기어때 | 연결 대기 | 0.12 | 1.02 | 1420000 |
| naver | 네이버예약 | 연결됨 | 0.06 | 1.00 | 980000 |

## 5. 가격규칙

| 컬럼명 | 설명 | 예시 |
| --- | --- | --- |
| rule_id | 규칙 고유값 | rule_weekend |
| rule_name | 규칙명 | 주말 할증 |
| condition_type | 조건 유형 | 요일 |
| condition_value | 조건값 | 금,토 |
| adjustment_type | 조정 방식 | 퍼센트 |
| adjustment_value | 조정값 | 20 |
| enabled | 사용 여부 | true |

예시:

| rule_id | rule_name | condition_type | condition_value | adjustment_type | adjustment_value | enabled |
| --- | --- | --- | --- | --- | --- | --- |
| rule_weekend | 주말 할증 | 요일 | 금,토 | 퍼센트 | 20 | true |
| rule_last_minute | 임박 공실 할인 | 체크인까지 남은 일수 | 3일 이하 | 퍼센트 | -10 | true |
| rule_high_occupancy | 높은 점유율 할증 | 객실 점유율 | 80% 이상 | 퍼센트 | 15 | true |

## 6. 가격추천

| 컬럼명 | 설명 | 예시 |
| --- | --- | --- |
| recommendation_id | 추천 고유값 | rec_0001 |
| target_date | 대상 날짜 | 2026-07-05 |
| room_type | 객실 타입 | 디럭스 |
| current_price | 현재 가격 | 99000 |
| recommended_price | 추천 가격 | 119000 |
| reason | 추천 이유 | 주말 수요와 높은 점유율 |
| expected_revenue_delta | 예상 매출 차이 | 20000 |
| approval_status | 승인 상태 | 승인 대기 |

예시:

| recommendation_id | target_date | room_type | current_price | recommended_price | reason | expected_revenue_delta | approval_status |
| --- | --- | --- | --- | --- | --- | --- | --- |
| rec_0001 | 2026-07-05 | 디럭스 | 99000 | 119000 | 주말 수요와 높은 점유율 | 20000 | 승인 대기 |
| rec_0002 | 2026-07-08 | 스탠다드 | 79000 | 71000 | 임박 공실 | -8000 | 승인 대기 |
| rec_0003 | 2026-07-15 | 패밀리룸 | 159000 | 189000 | 공휴일 전날 수요 | 30000 | 보류 |

## 7. 일별재고

| 컬럼명 | 설명 | 예시 |
| --- | --- | --- |
| date | 날짜 | 2026-07-05 |
| room_type | 객실 타입 | 스탠다드 |
| total_rooms | 전체 객실 수 | 12 |
| reserved_rooms | 예약 객실 수 | 9 |
| blocked_rooms | 판매 중지 객실 수 | 1 |
| available_rooms | 판매 가능 객실 수 | 2 |
| occupancy_rate | 객실 점유율 | 0.75 |

예시:

| date | room_type | total_rooms | reserved_rooms | blocked_rooms | available_rooms | occupancy_rate |
| --- | --- | --- | --- | --- | --- | --- |
| 2026-07-05 | 스탠다드 | 12 | 9 | 1 | 2 | 0.75 |
| 2026-07-05 | 디럭스 | 10 | 8 | 0 | 2 | 0.80 |
| 2026-07-05 | 패밀리룸 | 4 | 4 | 0 | 0 | 1.00 |

## 최소로 필요한 데이터

처음 개발을 시작하려면 아래 정도면 충분하다.

- 6층, 객실 25개
- 예약 50건
- 예약채널 6~8개
- 가격규칙 3~5개
- 가격추천 20건
- 일별재고 30일치

## 가장 편한 전달 방식

구글시트나 엑셀로 아래 시트 이름만 맞춰서 주면 된다.

- 숙소정보
- 객실목록
- 예약목록
- 예약채널
- 가격규칙
- 가격추천
- 일별재고

값이 정확하지 않아도 괜찮다. 실제 운영과 비슷한 패턴만 있으면 화면과 기능 검증에는 충분하다.
