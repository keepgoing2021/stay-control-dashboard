const TODAY = new Date("2026-07-02T09:00:00+09:00");

const state = {
  view: "today",
  timelineStart: new Date("2026-07-02T00:00:00+09:00"),
  roomTypeFilter: "전체",
  search: "",
  alertBeforeAutoChange: true,
};

const roomTypes = ["스탠다드", "디럭스", "패밀리룸", "도미토리"];

const rooms = [
  { id: "room_101", name: "101", type: "스탠다드", floor: 1, status: "판매 가능", weekday: 69000, weekend: 89000 },
  { id: "room_102", name: "102", type: "스탠다드", floor: 1, status: "판매 가능", weekday: 69000, weekend: 89000 },
  { id: "room_103", name: "103", type: "스탠다드", floor: 1, status: "청소 필요", weekday: 69000, weekend: 89000 },
  { id: "room_104", name: "104", type: "스탠다드", floor: 1, status: "판매 가능", weekday: 69000, weekend: 89000 },
  { id: "room_201", name: "201", type: "스탠다드", floor: 2, status: "판매 가능", weekday: 72000, weekend: 92000 },
  { id: "room_202", name: "202", type: "스탠다드", floor: 2, status: "판매 가능", weekday: 72000, weekend: 92000 },
  { id: "room_203", name: "203", type: "스탠다드", floor: 2, status: "판매 가능", weekday: 72000, weekend: 92000 },
  { id: "room_204", name: "204", type: "스탠다드", floor: 2, status: "판매 가능", weekday: 72000, weekend: 92000 },
  { id: "room_301", name: "301", type: "디럭스", floor: 3, status: "판매 가능", weekday: 89000, weekend: 119000 },
  { id: "room_302", name: "302", type: "디럭스", floor: 3, status: "판매 가능", weekday: 89000, weekend: 119000 },
  { id: "room_303", name: "303", type: "디럭스", floor: 3, status: "판매 가능", weekday: 89000, weekend: 119000 },
  { id: "room_304", name: "304", type: "디럭스", floor: 3, status: "점검 중", weekday: 89000, weekend: 119000 },
  { id: "room_401", name: "401", type: "디럭스", floor: 4, status: "판매 가능", weekday: 99000, weekend: 129000 },
  { id: "room_402", name: "402", type: "디럭스", floor: 4, status: "판매 가능", weekday: 99000, weekend: 129000 },
  { id: "room_403", name: "403", type: "디럭스", floor: 4, status: "판매 가능", weekday: 99000, weekend: 129000 },
  { id: "room_404", name: "404", type: "디럭스", floor: 4, status: "판매 가능", weekday: 99000, weekend: 129000 },
  { id: "room_501", name: "501", type: "패밀리룸", floor: 5, status: "판매 가능", weekday: 139000, weekend: 179000 },
  { id: "room_502", name: "502", type: "패밀리룸", floor: 5, status: "판매 가능", weekday: 139000, weekend: 179000 },
  { id: "room_503", name: "503", type: "패밀리룸", floor: 5, status: "판매 가능", weekday: 139000, weekend: 179000 },
  { id: "room_504", name: "504", type: "패밀리룸", floor: 5, status: "판매 가능", weekday: 139000, weekend: 179000 },
  { id: "room_601A", name: "601A", type: "도미토리", floor: 6, status: "판매 가능", weekday: 39000, weekend: 49000 },
  { id: "room_601B", name: "601B", type: "도미토리", floor: 6, status: "판매 가능", weekday: 39000, weekend: 49000 },
  { id: "room_602A", name: "602A", type: "도미토리", floor: 6, status: "판매 가능", weekday: 39000, weekend: 49000 },
  { id: "room_602B", name: "602B", type: "도미토리", floor: 6, status: "판매 가능", weekday: 39000, weekend: 49000 },
  { id: "room_603A", name: "603A", type: "도미토리", floor: 6, status: "판매 가능", weekday: 39000, weekend: 49000 },
];

const channels = [
  { id: "airbnb", name: "에어비앤비", status: "연결됨", commission: 15, multiplier: 1.05, revenue: 3280000, reservations: 18, color: "#d83b45", lastSync: "2분 전", healthNote: "가격·재고 정상" },
  { id: "booking", name: "부킹닷컴", status: "연결됨", commission: 14, multiplier: 1.03, revenue: 4120000, reservations: 24, color: "#1d6ee8", lastSync: "1분 전", healthNote: "예약 수신 정상" },
  { id: "agoda", name: "아고다", status: "연결됨", commission: 13, multiplier: 1.03, revenue: 2860000, reservations: 16, color: "#167b76", lastSync: "4분 전", healthNote: "재고 반영 정상" },
  { id: "expedia", name: "익스피디아", status: "점검 필요", commission: 15, multiplier: 1.04, revenue: 980000, reservations: 6, color: "#d78a00", lastSync: "18분 전", healthNote: "가격·재고 확인 필요" },
  { id: "yanolja", name: "야놀자", status: "연결됨", commission: 12, multiplier: 1.02, revenue: 3560000, reservations: 21, color: "#5d5fef", lastSync: "3분 전", healthNote: "국내 채널 정상" },
  { id: "yeogi", name: "여기어때", status: "연결됨", commission: 12, multiplier: 1.02, revenue: 2440000, reservations: 14, color: "#0f9f79", lastSync: "5분 전", healthNote: "가격 배율 정상" },
  { id: "naver", name: "네이버예약", status: "연결됨", commission: 6, multiplier: 1.0, revenue: 1310000, reservations: 10, color: "#20a060", lastSync: "6분 전", healthNote: "직접 예약 정상" },
  { id: "trip", name: "트립닷컴", status: "연결 대기", commission: 13, multiplier: 1.04, revenue: 620000, reservations: 4, color: "#3550aa", lastSync: "연결 전", healthNote: "객실 매핑 대기" },
];

const reservations = [
  { id: "res_001", guest: "김민준", roomId: "room_101", channel: "yanolja", checkIn: "2026-07-02", checkOut: "2026-07-04", amount: 178000, status: "투숙 중" },
  { id: "res_002", guest: "박한산", roomId: "room_102", channel: "booking", checkIn: "2026-07-03", checkOut: "2026-07-05", amount: 198000, status: "투숙예정" },
  { id: "res_003", guest: "WENJIN YAN", roomId: "room_103", channel: "agoda", checkIn: "2026-07-02", checkOut: "2026-07-06", amount: 356000, status: "투숙 중" },
  { id: "res_004", guest: "이서연", roomId: "room_201", channel: "airbnb", checkIn: "2026-07-05", checkOut: "2026-07-07", amount: 178000, status: "투숙예정" },
  { id: "res_005", guest: "Michael Ai", roomId: "room_303", channel: "booking", checkIn: "2026-07-03", checkOut: "2026-07-06", amount: 357000, status: "투숙예정" },
  { id: "res_006", guest: "Sabrina See", roomId: "room_302", channel: "airbnb", checkIn: "2026-07-02", checkOut: "2026-07-04", amount: 238000, status: "투숙 중" },
  { id: "res_007", guest: "SU GUN DAM", roomId: "room_404", channel: "agoda", checkIn: "2026-07-04", checkOut: "2026-07-08", amount: 476000, status: "투숙예정" },
  { id: "res_008", guest: "윤준영", roomId: "room_201", channel: "yanolja", checkIn: "2026-07-02", checkOut: "2026-07-03", amount: 89000, status: "투숙 중" },
  { id: "res_009", guest: "Dmitry Voydakov", roomId: "room_204", channel: "booking", checkIn: "2026-07-03", checkOut: "2026-07-07", amount: 476000, status: "투숙예정" },
  { id: "res_010", guest: "호이호", roomId: "room_402", channel: "yeogi", checkIn: "2026-07-02", checkOut: "2026-07-05", amount: 327000, status: "투숙 중" },
  { id: "res_011", guest: "송유나", roomId: "room_501", channel: "naver", checkIn: "2026-07-02", checkOut: "2026-07-04", amount: 278000, status: "투숙 중" },
  { id: "res_012", guest: "MIZUSE KAWASAKI", roomId: "room_504", channel: "agoda", checkIn: "2026-07-03", checkOut: "2026-07-05", amount: 318000, status: "투숙예정" },
  { id: "res_013", guest: "RONGYU WANG", roomId: "room_501", channel: "booking", checkIn: "2026-07-05", checkOut: "2026-07-09", amount: 716000, status: "투숙예정" },
  { id: "res_014", guest: "AKARI MATSUMOTO", roomId: "room_601A", channel: "expedia", checkIn: "2026-07-02", checkOut: "2026-07-07", amount: 245000, status: "투숙 중" },
  { id: "res_015", guest: "Joon Lee", roomId: "room_601B", channel: "booking", checkIn: "2026-07-04", checkOut: "2026-07-06", amount: 98000, status: "투숙예정" },
  { id: "res_016", guest: "김채린", roomId: "room_602B", channel: "yanolja", checkIn: "2026-07-03", checkOut: "2026-07-04", amount: 39000, status: "투숙예정" },
  { id: "res_017", guest: "영준 김", roomId: "room_602A", channel: "yeogi", checkIn: "2026-07-05", checkOut: "2026-07-08", amount: 147000, status: "투숙예정" },
  { id: "res_018", guest: "Ella Newman", roomId: "room_603A", channel: "airbnb", checkIn: "2026-07-06", checkOut: "2026-07-08", amount: 98000, status: "투숙예정" },
  { id: "res_019", guest: "Cecilia Delgado", roomId: "room_202", channel: "booking", checkIn: "2026-07-02", checkOut: "2026-07-05", amount: 137000, status: "투숙 중" },
  { id: "res_020", guest: "최유진", roomId: "room_104", channel: "naver", checkIn: "2026-07-01", checkOut: "2026-07-02", amount: 69000, status: "체크아웃" },
  { id: "res_021", guest: "문지호", roomId: "room_203", channel: "yanolja", checkIn: "2026-07-01", checkOut: "2026-07-03", amount: 138000, status: "투숙 중" },
  { id: "res_022", guest: "정하린", roomId: "room_403", channel: "yeogi", checkIn: "2026-07-02", checkOut: "2026-07-05", amount: 247000, status: "투숙 중" },
  { id: "res_023", guest: "SEYON PARK", roomId: "room_404", channel: "booking", checkIn: "2026-07-02", checkOut: "2026-07-04", amount: 178000, status: "투숙 중" },
  { id: "res_024", guest: "홍다은", roomId: "room_301", channel: "airbnb", checkIn: "2026-07-01", checkOut: "2026-07-04", amount: 327000, status: "투숙 중" },
  { id: "res_025", guest: "Andres Marin", roomId: "room_401", channel: "expedia", checkIn: "2026-07-02", checkOut: "2026-07-06", amount: 476000, status: "투숙 중" },
  { id: "res_026", guest: "이상일", roomId: "room_204", channel: "yanolja", checkIn: "2026-07-02", checkOut: "2026-07-03", amount: 89000, status: "투숙 중" },
  { id: "res_027", guest: "박지영", roomId: "room_503", channel: "naver", checkIn: "2026-07-01", checkOut: "2026-07-03", amount: 278000, status: "투숙 중" },
  { id: "res_028", guest: "김서우", roomId: "room_502", channel: "booking", checkIn: "2026-07-02", checkOut: "2026-07-05", amount: 537000, status: "투숙 중" },
  { id: "res_029", guest: "LUCY FENG", roomId: "room_602A", channel: "agoda", checkIn: "2026-07-02", checkOut: "2026-07-04", amount: 98000, status: "투숙 중" },
  { id: "res_030", guest: "한지수", roomId: "room_602B", channel: "yeogi", checkIn: "2026-07-01", checkOut: "2026-07-02", amount: 39000, status: "체크아웃" },
  { id: "res_031", guest: "박민재", roomId: "room_102", channel: "airbnb", checkIn: "2026-07-01", checkOut: "2026-07-03", amount: 138000, status: "투숙 중" },
  { id: "res_032", guest: "이지안", roomId: "room_303", channel: "booking", checkIn: "2026-07-01", checkOut: "2026-07-03", amount: 178000, status: "투숙 중" },
  { id: "res_033", guest: "송민호", roomId: "room_304", channel: "naver", checkIn: "2026-07-01", checkOut: "2026-07-02", amount: 267000, status: "체크아웃" },
  { id: "res_034", guest: "강수아", roomId: "room_204", channel: "yanolja", checkIn: "2026-07-01", checkOut: "2026-07-02", amount: 178000, status: "체크아웃" },
  { id: "res_035", guest: "Cahaya Putri", roomId: "room_504", channel: "agoda", checkIn: "2026-07-01", checkOut: "2026-07-03", amount: 278000, status: "투숙 중" },
  { id: "res_036", guest: "장예린", roomId: "room_403", channel: "airbnb", checkIn: "2026-07-01", checkOut: "2026-07-02", amount: 417000, status: "체크아웃" },
  { id: "res_037", guest: "rico ka", roomId: "room_601B", channel: "trip", checkIn: "2026-07-01", checkOut: "2026-07-04", amount: 117000, status: "투숙 중" },
  { id: "res_038", guest: "김채린", roomId: "room_602A", channel: "yanolja", checkIn: "2026-07-01", checkOut: "2026-07-02", amount: 78000, status: "체크아웃" },
  { id: "res_039", guest: "Shane Sarkar", roomId: "room_603A", channel: "booking", checkIn: "2026-07-01", checkOut: "2026-07-02", amount: 78000, status: "체크아웃" },
];

const pricingRecommendations = [
  { id: "rec_001", date: "2026-07-03", roomType: "디럭스", current: 119000, next: 139000, reasons: ["금요일", "점유율 86%"], delta: 140000, status: "승인 대기" },
  { id: "rec_002", date: "2026-07-04", roomType: "패밀리룸", current: 179000, next: 209000, reasons: ["토요일", "잔여 1실"], delta: 120000, status: "승인 대기" },
  { id: "rec_003", date: "2026-07-05", roomType: "스탠다드", current: 89000, next: 79000, reasons: ["임박 공실"], delta: -50000, status: "승인 대기" },
  { id: "rec_004", date: "2026-07-06", roomType: "도미토리", current: 49000, next: 44000, reasons: ["평일", "잔여 2실"], delta: -30000, status: "승인 대기" },
  { id: "rec_005", date: "2026-07-07", roomType: "디럭스", current: 89000, next: 99000, reasons: ["검색량 증가"], delta: 70000, status: "승인 대기" },
  { id: "rec_006", date: "2026-07-08", roomType: "스탠다드", current: 69000, next: 62000, reasons: ["낮은 점유율"], delta: -42000, status: "보류" },
  { id: "rec_007", date: "2026-07-10", roomType: "패밀리룸", current: 179000, next: 219000, reasons: ["주말", "시장가 상승"], delta: 160000, status: "승인 대기" },
  { id: "rec_008", date: "2026-07-11", roomType: "디럭스", current: 119000, next: 149000, reasons: ["토요일", "높은 점유율"], delta: 210000, status: "승인 대기" },
];

const rules = [
  { id: "rule_weekend", name: "주말 할증", condition: "금·토", value: "+20%", enabled: true },
  { id: "rule_last_minute", name: "임박 공실 할인", condition: "체크인 3일 전", value: "-10%", enabled: true },
  { id: "rule_high_occupancy", name: "높은 점유율 할증", condition: "점유율 80% 이상", value: "+15%", enabled: true },
];

const maintenanceTasks = [
  { id: "task_001", roomId: "room_104", type: "청소", title: "퇴실 청소", detail: "최유진 체크아웃 후 재판매 준비", priority: "긴급", due: "10:30", assignee: "하우스키핑 A", status: "대기", nextStatus: "판매 가능" },
  { id: "task_002", roomId: "room_602B", type: "청소", title: "도미토리 침구 교체", detail: "한지수 체크아웃, 내일 김채린 입실", priority: "높음", due: "12:00", assignee: "하우스키핑 B", status: "진행 중", nextStatus: "판매 가능" },
  { id: "task_003", roomId: "room_304", type: "점검", title: "욕실 배수 확인", detail: "반복 신고 2회, 판매 재개 전 확인", priority: "높음", due: "15:00", assignee: "시설 담당", status: "대기", nextStatus: "판매 가능" },
  { id: "task_004", roomId: "room_103", type: "청소", title: "입실 전 객실 재확인", detail: "아고다 도착 전 어메니티 보충", priority: "보통", due: "13:30", assignee: "프런트", status: "대기", nextStatus: "판매 가능" },
];

const maintenanceHistory = [
  { id: "log_001", roomId: "room_502", title: "냉장고 소음 확인", completedAt: "08:20", assignee: "시설 담당", result: "완료" },
  { id: "log_002", roomId: "room_301", title: "수건 추가 세팅", completedAt: "08:05", assignee: "하우스키핑 A", result: "완료" },
  { id: "log_003", roomId: "room_601A", title: "공용 샤워실 소모품 보충", completedAt: "07:40", assignee: "프런트", result: "완료" },
];

const recurringChecklists = [
  {
    id: "check_public_bath",
    title: "공용 욕실 야간 점검",
    area: "6층 도미토리",
    due: "20:00",
    assignee: "프런트",
    items: [
      { id: "soap", label: "샴푸·바디워시 보충", done: false },
      { id: "drain", label: "배수구 막힘 확인", done: false },
      { id: "towel", label: "공용 수건 회수", done: true },
    ],
  },
  {
    id: "check_fire_exit",
    title: "비상구·소화기 체크",
    area: "전층",
    due: "금요일",
    assignee: "시설 담당",
    items: [
      { id: "exit", label: "비상구 적치물 없음", done: true },
      { id: "light", label: "유도등 정상 점등", done: false },
      { id: "extinguisher", label: "소화기 압력 확인", done: false },
    ],
  },
];

const roomIssueHistory = [
  { id: "issue_001", roomId: "room_304", title: "욕실 배수 지연", count: 2, lastReported: "어제 21:10", severity: "높음", status: "추적 중" },
  { id: "issue_002", roomId: "room_502", title: "냉장고 소음", count: 3, lastReported: "오늘 08:20", severity: "보통", status: "완료 후 관찰" },
  { id: "issue_003", roomId: "room_602A", title: "침대 사다리 흔들림", count: 1, lastReported: "어제 18:40", severity: "보통", status: "다음 청소 때 확인" },
];

const supplyInventory = [
  { id: "supply_towel", name: "수건", stock: 38, min: 45, unit: "장", location: "린넨실", status: "부족" },
  { id: "supply_sheet", name: "침대 시트", stock: 62, min: 50, unit: "세트", location: "5층 창고", status: "정상" },
  { id: "supply_shampoo", name: "샴푸 리필", stock: 7, min: 10, unit: "병", location: "공용 욕실", status: "부족" },
  { id: "supply_keycard", name: "키카드", stock: 24, min: 20, unit: "개", location: "프런트", status: "정상" },
];

const staffWorkloads = [
  { id: "staff_house_a", name: "하우스키핑 A", role: "객실 청소", open: 2, done: 3, next: "104 퇴실 청소", load: "높음" },
  { id: "staff_house_b", name: "하우스키핑 B", role: "린넨·도미토리", open: 1, done: 2, next: "602B 침구 교체", load: "보통" },
  { id: "staff_front", name: "프런트", role: "입실·공용공간", open: 2, done: 1, next: "103 입실 전 확인", load: "보통" },
  { id: "staff_facility", name: "시설 담당", role: "점검·수리", open: 1, done: 2, next: "304 욕실 배수", load: "주의" },
];

const maintenanceProofs = [
  { id: "proof_001", roomId: "room_502", title: "냉장고 소음 확인", type: "사진", status: "첨부됨", file: "502-fridge-check.jpg" },
  { id: "proof_002", roomId: "room_304", title: "욕실 배수 상태", type: "사진", status: "요청됨", file: "업로드 대기" },
  { id: "proof_003", roomId: "room_601A", title: "공용 샤워실 소모품", type: "사진", status: "첨부됨", file: "601A-shower-supply.jpg" },
];

const monthlyRevenue = [
  { label: "1월", value: 24 },
  { label: "2월", value: 28 },
  { label: "3월", value: 31 },
  { label: "4월", value: 34 },
  { label: "5월", value: 39 },
  { label: "6월", value: 42 },
  { label: "7월", value: 48 },
];

const occupancyTrend = [62, 68, 73, 71, 79, 83, 86];

const content = document.getElementById("content");
const title = document.getElementById("page-title");
const toast = document.getElementById("toast");
const approvalChip = document.getElementById("approval-count-chip");

function formatWon(value) {
  return `₩${Number(value).toLocaleString("ko-KR")}`;
}

function formatSignedWon(value) {
  const sign = value > 0 ? "+" : value < 0 ? "-" : "";
  return `${sign}${formatWon(Math.abs(value))}`;
}

function parseDate(value) {
  return new Date(`${value}T00:00:00+09:00`);
}

function dateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function addDays(date, days) {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
}

function diffDays(start, end) {
  return Math.round((parseDate(end) - parseDate(start)) / 86400000);
}

function visibleDays() {
  return Array.from({ length: 7 }, (_, index) => addDays(state.timelineStart, index));
}

function getChannel(id) {
  return channels.find((channel) => channel.id === id) || channels[0];
}

function getRoom(id) {
  return rooms.find((room) => room.id === id);
}

function roomStateClass(status) {
  if (status === "판매 중지" || status === "점검 중") return "blocked";
  if (status === "청소 필요" || status === "청소 중") return "cleaning";
  return "";
}

function filteredRooms() {
  return rooms.filter((room) => {
    const matchesType = state.roomTypeFilter === "전체" || room.type === state.roomTypeFilter;
    const needle = state.search.trim().toLowerCase();
    const matchesSearch = !needle || `${room.name} ${room.type} ${room.status}`.toLowerCase().includes(needle);
    return matchesType && matchesSearch;
  });
}

function activeReservationsOn(date) {
  const key = dateKey(date);
  return reservations.filter((reservation) => reservation.checkIn <= key && reservation.checkOut > key);
}

function availableRoomsOn(date) {
  const activeRoomIds = new Set(activeReservationsOn(date).map((reservation) => reservation.roomId));
  return rooms.filter((room) => room.status === "판매 가능" && !activeRoomIds.has(room.id)).length;
}

function calculateKpis() {
  const todayKey = dateKey(TODAY);
  const activeToday = activeReservationsOn(TODAY);
  const checkIns = reservations.filter((reservation) => reservation.checkIn === todayKey).length;
  const checkOuts = reservations.filter((reservation) => reservation.checkOut === todayKey).length;
  const todayRevenue = reservations
    .filter((reservation) => reservation.checkIn <= todayKey && reservation.checkOut > todayKey)
    .reduce((sum, reservation) => sum + Math.round(reservation.amount / Math.max(1, diffDays(reservation.checkIn, reservation.checkOut))), 0);
  const occupancy = Math.round((activeToday.length / rooms.length) * 100);
  const averageDailyRoom = activeToday.length ? Math.round(todayRevenue / activeToday.length) : 0;
  const pending = pricingRecommendations.filter((item) => item.status === "승인 대기").length;

  return { checkIns, checkOuts, todayRevenue, occupancy, averageDailyRoom, pending };
}

function getTodayArrivals() {
  const todayKey = dateKey(TODAY);
  return reservations.filter((reservation) => reservation.checkIn === todayKey);
}

function getTodayDepartures() {
  const todayKey = dateKey(TODAY);
  return reservations.filter((reservation) => reservation.checkOut === todayKey);
}

function getPendingPricingRecommendations() {
  return pricingRecommendations.filter((item) => item.status === "승인 대기");
}

function getOpenMaintenanceTasks() {
  return maintenanceTasks.filter((task) => task.status !== "완료");
}

function getRoomMaintenanceTasks(roomId) {
  return getOpenMaintenanceTasks().filter((task) => task.roomId === roomId);
}

function getRoomsNeedingAttention() {
  const taskRoomIds = new Set(getOpenMaintenanceTasks().map((task) => task.roomId));
  return rooms.filter((room) => room.status !== "판매 가능" || taskRoomIds.has(room.id));
}

function getNextReservation(roomId) {
  return reservations
    .filter((reservation) => reservation.roomId === roomId && reservation.checkIn >= dateKey(TODAY))
    .sort((a, b) => a.checkIn.localeCompare(b.checkIn))[0];
}

function maintenanceStatusClass(status) {
  if (status === "완료") return "approved";
  if (status === "진행 중") return "pending";
  return "hold";
}

function priorityClass(priority) {
  if (priority === "긴급") return "urgent";
  if (priority === "높음") return "high";
  return "normal";
}

function getChecklistProgress(checklist) {
  const done = checklist.items.filter((item) => item.done).length;
  return { done, total: checklist.items.length };
}

function inventoryStatusClass(status) {
  if (status === "부족") return "urgent";
  if (status === "발주 요청") return "high";
  return "normal";
}

function workloadClass(load) {
  if (load === "높음") return "urgent";
  if (load === "주의") return "high";
  return "normal";
}

function formatShortDate(value) {
  return value.slice(5).replace("-", "/");
}

function formatStayRange(reservation) {
  return `${formatShortDate(reservation.checkIn)} ~ ${formatShortDate(reservation.checkOut)}`;
}

function renderChannelPill(channel) {
  return `<span class="channel-pill" style="--channel-color: ${channel.color}">${channel.name}</span>`;
}

function setTitle(label) {
  title.textContent = label;
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 2200);
}

function updateApprovalChip() {
  approvalChip.textContent = pricingRecommendations.filter((item) => item.status === "승인 대기").length;
}

function renderKpis() {
  const kpis = calculateKpis();
  const cards = [
    { label: "오늘 체크인", value: `${kpis.checkIns}팀`, sub: "프런트 확인 필요", color: "var(--blue)" },
    { label: "오늘 체크아웃", value: `${kpis.checkOuts}팀`, sub: "객실 정리 예정", color: "var(--teal)" },
    { label: "객실 점유율", value: `${kpis.occupancy}%`, sub: `판매 가능 ${availableRoomsOn(TODAY)}실`, color: "var(--green)" },
    { label: "오늘 예상 매출", value: formatWon(kpis.todayRevenue), sub: "더미 데이터 기준", color: "var(--amber)" },
    { label: "가격 승인 대기", value: `${kpis.pending}건`, sub: "예상 증가 ₩860,000", color: "var(--red)" },
  ];

  return `
    <div class="kpi-grid">
      ${cards
        .map(
          (card) => `
            <article class="kpi-card" style="--accent: ${card.color}">
              <div class="kpi-label">${card.label}</div>
              <div class="kpi-value">${card.value}</div>
              <div class="kpi-sub">${card.sub}</div>
            </article>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderTodayMetricStrip() {
  const kpis = calculateKpis();
  const channelIssues = channels.filter((channel) => channel.status !== "연결됨").length;
  const openMaintenance = getOpenMaintenanceTasks();
  const roomIssues = getRoomsNeedingAttention().length;
  const metrics = [
    { label: "점유율", value: `${kpis.occupancy}%`, note: `판매 가능 ${availableRoomsOn(TODAY)}실` },
    { label: "오늘 매출", value: formatWon(kpis.todayRevenue), note: `평균 ${formatWon(kpis.averageDailyRoom)}` },
    { label: "청소·점검", value: `${openMaintenance.length}건`, note: `객실 ${roomIssues}개 확인` },
    { label: "채널 문제", value: `${channelIssues}개`, note: "동기화 확인" },
  ];

  return `
    <div class="metric-strip">
      ${metrics
        .map(
          (metric) => `
            <div class="metric-item">
              <span>${metric.label}</span>
              <strong>${metric.value}</strong>
              <small>${metric.note}</small>
            </div>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderMiniReservationRows(rows, emptyText) {
  if (!rows.length) {
    return `<div class="empty-row">${emptyText}</div>`;
  }

  return `
    <div class="mini-reservation-list">
      ${rows
        .slice(0, 4)
        .map((reservation) => {
          const room = getRoom(reservation.roomId);
          const channel = getChannel(reservation.channel);
          return `
            <div class="mini-reservation-row">
              <div>
                <strong>${reservation.guest}</strong>
                <span>${room.name} · ${room.type}</span>
              </div>
              ${renderChannelPill(channel)}
            </div>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderPricingPreviewRows(rows) {
  return `
    <div class="mini-reservation-list">
      ${rows
        .slice(0, 3)
        .map(
          (item) => `
            <div class="mini-reservation-row">
              <div>
                <strong>${item.roomType}</strong>
                <span>${formatShortDate(item.date)} · ${item.reasons.join(", ")}</span>
              </div>
              <strong class="${item.delta >= 0 ? "delta-up" : "delta-down"}">${formatSignedWon(item.delta)}</strong>
            </div>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderChannelIssueRows(rows) {
  return `
    <div class="mini-reservation-list">
      ${rows
        .map(
          (channel) => `
            <div class="mini-reservation-row">
              <div>
                <strong>${channel.name}</strong>
                <span>${channel.status === "점검 필요" ? "가격·재고 마지막 확인 18분 전" : "채널 매핑 완료 전"}</span>
              </div>
              <span class="status-badge ${channel.status === "점검 필요" ? "pending" : "hold"}">${channel.status}</span>
            </div>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderMaintenancePreviewRows(rows) {
  if (!rows.length) {
    return `<div class="empty-row">열린 청소·점검 작업이 없습니다.</div>`;
  }

  return `
    <div class="mini-reservation-list">
      ${rows
        .slice(0, 4)
        .map((task) => {
          const room = getRoom(task.roomId);
          return `
            <div class="mini-reservation-row">
              <div>
                <strong>${room.name} · ${task.title}</strong>
                <span>${task.due}까지 · ${task.assignee}</span>
              </div>
              <span class="status-badge ${maintenanceStatusClass(task.status)}">${task.status}</span>
            </div>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderTodayWorkflow() {
  const arrivals = getTodayArrivals();
  const departures = getTodayDepartures();
  const pendingPrices = getPendingPricingRecommendations();
  const channelIssues = channels.filter((channel) => channel.status !== "연결됨");
  const openMaintenance = getOpenMaintenanceTasks();
  const expectedDelta = pendingPrices.reduce((sum, item) => sum + item.delta, 0);
  const cards = [
    {
      step: "1",
      title: "입실 준비",
      count: `${arrivals.length}팀`,
      note: "객실, 예약자명, OTA 확인",
      action: "입실 목록",
      view: "reservations",
      tone: "blue",
      body: renderMiniReservationRows(arrivals, "오늘 입실 예약이 없습니다."),
    },
    {
      step: "2",
      title: "퇴실·청소",
      count: `${openMaintenance.filter((task) => task.type === "청소").length}건`,
      note: `퇴실 ${departures.length}팀 · 점검 ${openMaintenance.filter((task) => task.type === "점검").length}건`,
      action: "작업 보기",
      scrollTarget: "maintenance-center",
      tone: "teal",
      body: renderMaintenancePreviewRows(openMaintenance),
    },
    {
      step: "3",
      title: "가격 승인",
      count: `${pendingPrices.length}건`,
      note: `승인 시 예상 ${formatSignedWon(expectedDelta)}`,
      action: "승인하기",
      view: "pricing",
      tone: "red",
      body: renderPricingPreviewRows(pendingPrices),
    },
    {
      step: "4",
      title: "채널 점검",
      count: `${channelIssues.length}개`,
      note: "문제 채널만 확인",
      action: "동기화",
      view: "channels",
      tone: "amber",
      body: renderChannelIssueRows(channelIssues),
    },
  ];

  return `
    <section class="section-band">
      <div class="ops-workflow">
        ${cards
          .map(
            (card) => `
              <article class="ops-card ${card.tone}">
                <div class="ops-card-head">
                  <span class="ops-step">${card.step}</span>
                  <div>
                    <h3>${card.title}</h3>
                    <p>${card.note}</p>
                  </div>
                  <strong>${card.count}</strong>
                </div>
                <div class="ops-card-body">${card.body}</div>
                <button class="ghost-button" ${card.scrollTarget ? `data-scroll-target="${card.scrollTarget}"` : `data-view-jump="${card.view}"`} type="button">${card.action}</button>
              </article>
            `,
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderTodayGuestBoard() {
  const arrivals = getTodayArrivals();
  const departures = getTodayDepartures();
  return `
    <div class="guest-board">
      <div class="movement-column">
        <div class="movement-title">
          <span>도착</span>
          <strong>${arrivals.length}팀</strong>
        </div>
        ${renderMovementRows(arrivals, "arrival")}
      </div>
      <div class="movement-column">
        <div class="movement-title">
          <span>출발</span>
          <strong>${departures.length}팀</strong>
        </div>
        ${renderMovementRows(departures, "departure")}
      </div>
    </div>
  `;
}

function renderMovementRows(rows, type) {
  if (!rows.length) return `<div class="empty-row">오늘 ${type === "arrival" ? "도착" : "출발"} 예약이 없습니다.</div>`;
  return rows
    .slice(0, 7)
    .map((reservation) => {
      const room = getRoom(reservation.roomId);
      const channel = getChannel(reservation.channel);
      return `
        <div class="movement-row">
          <div class="movement-main">
            <strong>${reservation.guest}</strong>
            <span>${room.name} · ${room.type} · ${formatStayRange(reservation)}</span>
          </div>
          ${renderChannelPill(channel)}
        </div>
      `;
    })
    .join("");
}

function renderTodayFocusList() {
  const departures = getTodayDepartures();
  const pendingPrices = getPendingPricingRecommendations();
  const channelIssues = channels.filter((channel) => channel.status !== "연결됨");
  const items = [
    {
      label: "가격",
      title: `승인 대기 ${pendingPrices.length}건`,
      detail: "오늘 승인하면 전 채널에 반영 예정",
      view: "pricing",
      status: "확인",
    },
    {
      label: "채널",
      title: `${channelIssues.map((channel) => channel.name).join(", ")} 점검`,
      detail: "가격·재고 동기화 상태 확인",
      view: "channels",
      status: "주의",
    },
    {
      label: "객실",
      title: departures.length ? `${getRoom(departures[0].roomId).name} 퇴실 후 청소` : "퇴실 청소 없음",
      detail: departures.length ? `${departures[0].guest} · ${formatShortDate(departures[0].checkOut)} 출발` : "오늘은 재판매 대기 객실만 확인",
      view: "reservations",
      status: departures.length ? "작업" : "정상",
    },
  ];

  return `
    <div class="focus-list">
      ${items
        .map(
          (item) => `
            <article class="focus-item">
              <span class="focus-label">${item.label}</span>
              <div>
                <strong>${item.title}</strong>
                <p>${item.detail}</p>
              </div>
              <button class="quiet-button" data-view-jump="${item.view}" type="button">${item.status}</button>
            </article>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderMaintenanceTaskList() {
  const tasks = getOpenMaintenanceTasks();
  if (!tasks.length) {
    return `<div class="empty-row">오늘 열린 유지보수 작업이 없습니다.</div>`;
  }

  return `
    <div class="maintenance-task-list">
      ${tasks
        .map((task) => {
          const room = getRoom(task.roomId);
          return `
            <article class="maintenance-task">
              <div class="task-room">
                <strong>${room.name}</strong>
                <span>${room.type}</span>
              </div>
              <div class="task-main">
                <div class="task-title-row">
                  <span class="task-type">${task.type}</span>
                  <strong>${task.title}</strong>
                  <span class="priority-chip ${priorityClass(task.priority)}">${task.priority}</span>
                </div>
                <p>${task.detail}</p>
                <div class="task-meta">
                  <span>담당 ${task.assignee}</span>
                  <span>마감 ${task.due}</span>
                  <span>객실상태 ${room.status}</span>
                </div>
              </div>
              <div class="task-actions">
                <span class="status-badge ${maintenanceStatusClass(task.status)}">${task.status}</span>
                ${task.status === "대기" ? `<button class="quiet-button task-start" data-task="${task.id}" type="button">시작</button>` : ""}
                <button class="primary-button task-complete" data-task="${task.id}" type="button">완료</button>
              </div>
            </article>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderRoomStatusBoard() {
  const attentionRooms = getRoomsNeedingAttention().slice(0, 6);
  return `
    <div class="room-status-board">
      ${attentionRooms
        .map((room) => {
          const nextReservation = getNextReservation(room.id);
          const taskCount = getRoomMaintenanceTasks(room.id).length;
          return `
            <article class="room-status-card">
              <div>
                <strong>${room.name}</strong>
                <span>${room.type} · ${taskCount ? `작업 ${taskCount}건` : "수동 확인"}</span>
              </div>
              <span class="room-state ${roomStateClass(room.status)}">${room.status}</span>
              <p>${nextReservation ? `${formatShortDate(nextReservation.checkIn)} ${nextReservation.guest} 입실` : "예정 입실 없음"}</p>
              <div class="status-actions">
                ${["판매 가능", "청소 필요", "점검 중", "판매 중지"]
                  .map((status) => `<button class="quiet-button room-status-action" data-room="${room.id}" data-status="${status}" type="button">${status}</button>`)
                  .join("")}
              </div>
            </article>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderChannelHealthBoard() {
  return `
    <div class="channel-health-list">
      ${channels
        .map(
          (channel) => `
            <div class="channel-health-row">
              <span class="status-dot ${channel.status === "연결됨" ? "good" : channel.status === "점검 필요" ? "warn" : "bad"}"></span>
              <div>
                <strong>${channel.name}</strong>
                <span>${channel.lastSync} · ${channel.healthNote}</span>
              </div>
              <button class="quiet-button channel-health-check" data-channel="${channel.name}" type="button">확인</button>
            </div>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderMaintenanceLog() {
  const completedTasks = maintenanceTasks
    .filter((task) => task.status === "완료")
    .map((task) => ({
      id: `${task.id}_log`,
      roomId: task.roomId,
      title: task.title,
      completedAt: task.completedAt || "방금",
      assignee: task.assignee,
      result: "완료",
    }));
  const logs = [...completedTasks, ...maintenanceHistory].slice(0, 5);

  return `
    <div class="maintenance-log">
      ${logs
        .map((log) => {
          const room = getRoom(log.roomId);
          return `
            <div class="log-row">
              <span>${log.completedAt}</span>
              <strong>${room.name} · ${log.title}</strong>
              <small>${log.assignee} · ${log.result}</small>
            </div>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderRecurringChecklistPanel() {
  return `
    <div class="detail-list">
      ${recurringChecklists
        .map((checklist) => {
          const progress = getChecklistProgress(checklist);
          return `
            <article class="checklist-card">
              <div class="detail-card-head">
                <div>
                  <strong>${checklist.title}</strong>
                  <span>${checklist.area} · 마감 ${checklist.due} · ${checklist.assignee}</span>
                </div>
                <span class="progress-pill">${progress.done}/${progress.total}</span>
              </div>
              <div class="checklist-items">
                ${checklist.items
                  .map(
                    (item) => `
                      <button class="checklist-toggle ${item.done ? "done" : ""}" data-checklist="${checklist.id}" data-item="${item.id}" type="button">
                        <span>${item.done ? "✓" : ""}</span>
                        ${item.label}
                      </button>
                    `,
                  )
                  .join("")}
              </div>
            </article>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderRoomIssueHistoryPanel() {
  return `
    <div class="detail-list">
      ${roomIssueHistory
        .map((issue) => {
          const room = getRoom(issue.roomId);
          return `
            <article class="issue-row">
              <div>
                <strong>${room.name} · ${issue.title}</strong>
                <span>${issue.lastReported} · ${issue.count}회 기록 · ${issue.status}</span>
              </div>
              <span class="priority-chip ${priorityClass(issue.severity)}">${issue.severity}</span>
              <button class="quiet-button issue-task-create" data-issue="${issue.id}" type="button">점검 추가</button>
            </article>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderSupplyInventoryPanel() {
  return `
    <div class="detail-list">
      ${supplyInventory
        .map(
          (item) => `
            <article class="inventory-row">
              <div>
                <strong>${item.name}</strong>
                <span>${item.location} · 최소 ${item.min}${item.unit}</span>
              </div>
              <div class="inventory-stock">
                <strong>${item.stock}${item.unit}</strong>
                <span class="priority-chip ${inventoryStatusClass(item.status)}">${item.status}</span>
              </div>
              <button class="quiet-button inventory-reorder" data-supply="${item.id}" type="button">발주 요청</button>
            </article>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderStaffWorkloadPanel() {
  return `
    <div class="staff-grid">
      ${staffWorkloads
        .map(
          (staff) => `
            <article class="staff-card">
              <div class="staff-card-head">
                <div>
                  <strong>${staff.name}</strong>
                  <span>${staff.role}</span>
                </div>
                <span class="priority-chip ${workloadClass(staff.load)}">${staff.load}</span>
              </div>
              <div class="staff-counts">
                <span>진행 ${staff.open}</span>
                <span>완료 ${staff.done}</span>
              </div>
              <p>다음: ${staff.next}</p>
            </article>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderProofPanel() {
  return `
    <div class="detail-list">
      ${maintenanceProofs
        .map((proof) => {
          const room = getRoom(proof.roomId);
          return `
            <article class="proof-row">
              <div class="proof-thumb" aria-hidden="true">${proof.status === "첨부됨" ? "IMG" : "+"}</div>
              <div>
                <strong>${room.name} · ${proof.title}</strong>
                <span>${proof.type} · ${proof.file}</span>
              </div>
              <span class="status-badge ${proof.status === "첨부됨" ? "approved" : "pending"}">${proof.status}</span>
              <button class="quiet-button proof-complete" data-proof="${proof.id}" type="button">${proof.status === "첨부됨" ? "보기" : "첨부 표시"}</button>
            </article>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderMaintenanceDepth() {
  return `
    <div class="maintenance-depth">
      <div class="section-head compact">
        <div>
          <h2>2차 운영 관리</h2>
          <p>반복 점검, 문제 이력, 소모품, 담당자 현황까지 확장합니다.</p>
        </div>
      </div>
      <div class="maintenance-depth-grid">
        <div class="maintenance-panel">
          <div class="panel-head">
            <h3>반복 점검 체크리스트</h3>
            <span>정기 업무 누락을 줄입니다.</span>
          </div>
          ${renderRecurringChecklistPanel()}
        </div>
        <div class="maintenance-panel">
          <div class="panel-head">
            <h3>객실 문제 이력</h3>
            <span>반복 고장 객실을 추적합니다.</span>
          </div>
          ${renderRoomIssueHistoryPanel()}
        </div>
        <div class="maintenance-panel">
          <div class="panel-head">
            <h3>소모품·린넨 재고</h3>
            <span>최소 수량 이하만 빠르게 요청합니다.</span>
          </div>
          ${renderSupplyInventoryPanel()}
        </div>
        <div class="maintenance-panel">
          <div class="panel-head">
            <h3>담당자 작업 현황</h3>
            <span>업무가 한 사람에게 몰리는지 봅니다.</span>
          </div>
          ${renderStaffWorkloadPanel()}
        </div>
        <div class="maintenance-panel maintenance-panel-wide">
          <div class="panel-head">
            <h3>사진 증빙</h3>
            <span>현장 확인 자료를 작업 기록과 연결합니다.</span>
          </div>
          ${renderProofPanel()}
        </div>
      </div>
    </div>
  `;
}

function renderMaintenanceCenter() {
  const openTasks = getOpenMaintenanceTasks();
  const channelIssues = channels.filter((channel) => channel.status !== "연결됨");
  const blockedRooms = rooms.filter((room) => room.status === "점검 중" || room.status === "판매 중지");
  const cleaningTasks = openTasks.filter((task) => task.type === "청소");
  return `
    <section class="section-band maintenance-center" id="maintenance-center">
      <div class="section-head">
        <div>
          <h2>운영 유지보수</h2>
          <p>객실 상태, 청소·점검 작업, 채널 동기화를 한 번에 확인합니다.</p>
        </div>
      </div>
      <div class="maintenance-summary">
        <div><span>열린 작업</span><strong>${openTasks.length}건</strong></div>
        <div><span>청소 작업</span><strong>${cleaningTasks.length}건</strong></div>
        <div><span>판매 제한</span><strong>${blockedRooms.length}실</strong></div>
        <div><span>채널 확인</span><strong>${channelIssues.length}개</strong></div>
      </div>
      <div class="maintenance-grid">
        <div class="maintenance-panel maintenance-panel-wide">
          <div class="panel-head">
            <h3>오늘 작업 큐</h3>
            <span>완료하면 객실 상태와 기록이 갱신됩니다.</span>
          </div>
          ${renderMaintenanceTaskList()}
        </div>
        <div class="maintenance-panel">
          <div class="panel-head">
            <h3>객실 상태 변경</h3>
            <span>판매 가능 여부를 빠르게 바꿉니다.</span>
          </div>
          ${renderRoomStatusBoard()}
        </div>
        <div class="maintenance-panel">
          <div class="panel-head">
            <h3>채널 건강상태</h3>
            <span>동기화 지연과 연결 대기를 확인합니다.</span>
          </div>
          ${renderChannelHealthBoard()}
        </div>
      </div>
      <div class="maintenance-panel">
        <div class="panel-head">
          <h3>완료 기록</h3>
          <span>오늘 처리된 작업 이력입니다.</span>
        </div>
        ${renderMaintenanceLog()}
      </div>
      ${renderMaintenanceDepth()}
    </section>
  `;
}

function renderTimelineControls() {
  const start = state.timelineStart;
  const end = addDays(start, 6);
  return `
    <div class="toolbar">
      <button class="ghost-button" id="prev-week" type="button" aria-label="이전 기간">‹</button>
      <button class="ghost-button" id="today-week" type="button">오늘</button>
      <button class="ghost-button" id="next-week" type="button" aria-label="다음 기간">›</button>
      <strong>${start.getMonth() + 1}/${start.getDate()} ~ ${end.getMonth() + 1}/${end.getDate()}</strong>
      <div class="segmented" aria-label="보기 방식">
        <button class="active" type="button">일별</button>
        <button type="button">시간별</button>
      </div>
      <select class="select-control" id="room-type-filter" aria-label="객실 타입 필터">
        ${["전체", ...roomTypes].map((type) => `<option value="${type}" ${state.roomTypeFilter === type ? "selected" : ""}>${type}</option>`).join("")}
      </select>
      <input class="search-control" id="room-search" value="${state.search}" placeholder="객실 검색" />
    </div>
  `;
}

function renderTimeline(limitRows = false) {
  const days = visibleDays();
  const todayIndex = days.findIndex((day) => dateKey(day) === dateKey(TODAY));
  const displayRooms = filteredRooms();
  const rows = limitRows ? displayRooms.slice(0, 12) : displayRooms;
  const grouped = roomTypes
    .map((type) => ({
      type,
      rooms: rows.filter((room) => room.type === type),
    }))
    .filter((group) => group.rooms.length > 0);

  const header = `
    <div class="timeline-header">
      <div class="corner-cell">객실</div>
      ${days
        .map((day) => {
          const isToday = dateKey(day) === dateKey(TODAY);
          return `
            <div class="date-cell ${isToday ? "today" : ""}">
              <span>${day.getMonth() + 1}/${day.getDate()}</span>
              <span class="date-weekday">${["일", "월", "화", "수", "목", "금", "토"][day.getDay()]}</span>
            </div>
          `;
        })
        .join("")}
    </div>
  `;

  const body = grouped
    .map((group) => {
      const groupHeader = `<div class="room-group"><span>− ${group.type}</span></div>`;
      const groupRows = group.rooms
        .map((room) => {
          const bars = reservations
            .filter((reservation) => reservation.roomId === room.id)
            .map((reservation) => {
              const startOffset = Math.max(0, diffDays(dateKey(state.timelineStart), reservation.checkIn));
              const endOffset = Math.min(7, diffDays(dateKey(state.timelineStart), reservation.checkOut));
              if (endOffset <= 0 || startOffset >= 7) return "";
              const channel = getChannel(reservation.channel);
              const outline = reservation.status === "투숙예정" ? "outline" : "";
              return `
                <div
                  class="reservation-bar ${outline}"
                  style="grid-column: ${startOffset + 2} / ${endOffset + 2}; --bar-bg: ${channel.color}; --bar-border: ${channel.color};"
                  title="${reservation.guest} · ${channel.name} · ${formatWon(reservation.amount)}"
                >
                  ${reservation.guest}
                </div>
              `;
            })
            .join("");

          return `
            <div class="timeline-row">
              <div class="room-cell">
                <span class="room-number">${room.name}</span>
                <span>${room.type}</span>
                <span class="room-state ${roomStateClass(room.status)}">${room.status}</span>
              </div>
              ${days.map(() => `<div class="day-cell"></div>`).join("")}
              ${bars}
            </div>
          `;
        })
        .join("");
      return `${groupHeader}${groupRows}`;
    })
    .join("");

  const footer = `
    <div class="timeline-footer">
      <div class="footer-cell">판매 가능 객실 수</div>
      ${days.map((day) => `<div class="footer-cell"><span class="availability-number">${availableRoomsOn(day)}</span></div>`).join("")}
    </div>
  `;

  return `
    <div class="timeline-wrap">
      <div class="timeline" style="--today-index: ${todayIndex >= 0 ? todayIndex : -10}">
        ${todayIndex >= 0 ? `<div class="today-line"></div>` : ""}
        ${header}
        ${body}
        ${footer}
      </div>
    </div>
  `;
}

function renderTodayView() {
  setTitle("오늘의 운영");
  const kpis = calculateKpis();
  content.innerHTML = `
    <div class="view-stack">
      <section class="ops-overview">
        <div class="ops-summary">
          <span class="eyebrow">2026년 7월 2일 목요일 · 오전 9시 기준</span>
          <h2>입실 ${kpis.checkIns}팀, 퇴실 ${kpis.checkOuts}팀, 가격 승인 ${kpis.pending}건</h2>
          <p>입실 준비 → 퇴실·청소 → 객실 점검 → 가격 승인 → 채널 점검</p>
        </div>
        ${renderTodayMetricStrip()}
      </section>
      ${renderTodayWorkflow()}
      ${renderMaintenanceCenter()}
      <div class="two-column ops-columns">
        <section class="section-band">
          <div class="section-head">
            <div>
              <h2>오늘 이동 손님</h2>
              <p>도착과 출발을 OTA까지 같이 확인합니다.</p>
            </div>
          </div>
          ${renderTodayGuestBoard()}
        </section>
        <section class="section-band">
          <div class="section-head">
            <div>
              <h2>운영 알림</h2>
              <p>관리자가 지금 처리할 항목만 남깁니다.</p>
            </div>
          </div>
          ${renderTodayFocusList()}
        </section>
      </div>
      <section class="section-band">
        <div class="section-head">
          <div>
            <h2>객실·예약 타임라인</h2>
              <p>7일간 객실 예약 현황</p>
          </div>
          ${renderTimelineControls()}
        </div>
        ${renderTimeline(true)}
      </section>
    </div>
  `;
  bindCommonControls();
  bindMaintenanceControls();
}

function renderReservationsView() {
  setTitle("객실·예약 관리");
  content.innerHTML = `
    <div class="view-stack">
      ${renderKpis()}
      <section class="section-band">
        <div class="section-head">
          <div>
            <h2>객실 재고형 예약판</h2>
            <p>6층 25개 객실 기준 7일 현황</p>
          </div>
          ${renderTimelineControls()}
        </div>
        ${renderTimeline(false)}
      </section>
      <section class="section-band">
        <div class="section-head">
          <div>
            <h2>오늘 예약 목록</h2>
            <p>체크인과 투숙 중 예약만 모았습니다.</p>
          </div>
        </div>
        ${renderReservationTable()}
      </section>
    </div>
  `;
  bindCommonControls();
}

function renderReservationTable() {
  const todayKey = dateKey(TODAY);
  const rows = reservations.filter((reservation) => reservation.checkIn <= todayKey && reservation.checkOut >= todayKey);
  return `
    <div class="table-card">
      <table>
        <thead>
          <tr>
            <th>예약자</th>
            <th>객실</th>
            <th>예약채널</th>
            <th>일정</th>
            <th class="text-right">금액</th>
            <th>상태</th>
          </tr>
        </thead>
        <tbody>
          ${rows
            .map((reservation) => {
              const room = getRoom(reservation.roomId);
              const channel = getChannel(reservation.channel);
              return `
                <tr>
                  <td><strong>${reservation.guest}</strong></td>
                  <td>${room.name} · ${room.type}</td>
                  <td>${channel.name}</td>
                  <td>${reservation.checkIn} ~ ${reservation.checkOut}</td>
                  <td class="text-right">${formatWon(reservation.amount)}</td>
                  <td><span class="status-badge ${reservation.status === "투숙 중" ? "approved" : "pending"}">${reservation.status}</span></td>
                </tr>
              `;
            })
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

function renderChannelsView() {
  setTitle("예약채널 관리");
  content.innerHTML = `
    <div class="view-stack">
      <section class="section-band">
        <div class="section-head">
          <div>
            <h2>연결된 예약채널</h2>
            <p>연결됨 6개 · 점검 필요 1개 · 연결 대기 1개</p>
          </div>
          <button class="primary-button" id="sync-all-channels" type="button">모든 채널 동기화</button>
        </div>
        <div class="channel-grid">
          ${channels
            .map(
              (channel) => `
                <article class="channel-card">
                  <div class="channel-top">
                    <div>
                      <div class="channel-name">${channel.name}</div>
                      <div class="channel-meta">가격 배율 ${channel.multiplier.toFixed(2)}배 · 수수료 ${channel.commission}%</div>
                    </div>
                    <span class="status-badge ${channel.status === "연결됨" ? "approved" : channel.status === "점검 필요" ? "pending" : "hold"}">${channel.status}</span>
                  </div>
                  <div class="channel-stats">
                    <div class="mini-stat">
                      <span>이번 달 매출</span>
                      <strong>${formatWon(channel.revenue)}</strong>
                    </div>
                    <div class="mini-stat">
                      <span>예약 수</span>
                      <strong>${channel.reservations}건</strong>
                    </div>
                  </div>
                  <button class="ghost-button channel-sync" data-channel="${channel.name}" type="button">동기화 확인</button>
                </article>
              `,
            )
            .join("")}
        </div>
      </section>
      <section class="section-band">
        <div class="section-head">
          <div>
            <h2>채널별 매출</h2>
            <p>어느 예약채널이 매출을 만드는지 빠르게 봅니다.</p>
          </div>
        </div>
        ${renderChannelRevenueChart()}
      </section>
    </div>
  `;
  bindChannelControls();
}

function renderChannelRevenueChart() {
  const max = Math.max(...channels.map((channel) => channel.revenue));
  return `
    <div class="chart-card">
      <div class="bar-chart">
        ${channels
          .map(
            (channel) => `
              <div class="bar-item">
                <div class="bar-fill" style="height: ${Math.round((channel.revenue / max) * 170)}px; background: linear-gradient(180deg, ${channel.color}, #8dc7d4)"></div>
                <div class="bar-label">${channel.name.replace("예약", "")}</div>
              </div>
            `,
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderPricingView() {
  setTitle("가격 최적화");
  const pendingCount = pricingRecommendations.filter((item) => item.status === "승인 대기").length;
  const holdCount = pricingRecommendations.filter((item) => item.status === "보류").length;
  content.innerHTML = `
    <div class="view-stack">
      <section class="section-band">
        <div class="section-head">
          <div>
            <h2>가격 추천 승인</h2>
            <p>승인 대기 ${pendingCount}건 · 보류 ${holdCount}건</p>
          </div>
          <div class="toolbar">
            <button class="ghost-button" id="approve-all-visible" type="button">승인 대기 모두 승인</button>
            <button class="quiet-button" id="toggle-alert" type="button">
              자동 변경 전 알림 ${state.alertBeforeAutoChange ? "켜짐" : "꺼짐"}
            </button>
          </div>
        </div>
        <div class="pricing-grid">
          ${pricingRecommendations.map(renderPriceCard).join("")}
        </div>
      </section>
      <section class="section-band">
        <div class="section-head">
          <div>
            <h2>가격 규칙</h2>
            <p>사용 중 3개</p>
          </div>
        </div>
        <div class="rule-grid">
          ${rules
            .map(
              (rule) => `
                <article class="rule-card">
                  <div class="toggle-row">
                    <div>
                      <strong>${rule.name}</strong>
                      <div class="channel-meta">${rule.condition} · ${rule.value}</div>
                    </div>
                    <button class="switch ${rule.enabled ? "on" : ""}" data-rule="${rule.id}" type="button" aria-label="${rule.name}"></button>
                  </div>
                </article>
              `,
            )
            .join("")}
        </div>
      </section>
    </div>
  `;
  bindPricingControls();
}

function renderPriceCard(item) {
  const statusClass = item.status === "승인 완료" ? "approved" : item.status === "보류" ? "hold" : "pending";
  return `
    <article class="price-card">
      <div class="price-card-head">
        <div>
          <div class="price-date">${item.date}</div>
          <div class="price-room">${item.roomType}</div>
        </div>
        <span class="status-badge ${statusClass}">${item.status}</span>
      </div>
      <div class="price-compare">
        <div>
          <span class="channel-meta">현재</span>
          <strong>${formatWon(item.current)}</strong>
        </div>
        <span class="arrow-token">→</span>
        <div>
          <span class="channel-meta">추천</span>
          <strong>${formatWon(item.next)}</strong>
        </div>
      </div>
      <div class="reason-list">
        ${item.reasons.map((reason) => `<span class="reason-chip">${reason}</span>`).join("")}
        <span class="reason-chip">${item.delta >= 0 ? "+" : ""}${formatWon(item.delta)} 예상</span>
      </div>
      <div class="card-actions">
        <button class="primary-button approve-price" data-id="${item.id}" type="button" ${item.status === "승인 완료" ? "disabled" : ""}>승인</button>
        <button class="ghost-button hold-price" data-id="${item.id}" type="button">보류</button>
      </div>
    </article>
  `;
}

function renderReportsView() {
  setTitle("수익 분석");
  content.innerHTML = `
    <div class="view-stack">
      <div class="kpi-grid">
        <article class="kpi-card" style="--accent: var(--green)">
          <div class="kpi-label">이번 달 예상 매출</div>
          <div class="kpi-value">${formatWon(48200000)}</div>
          <div class="kpi-sub">전월 대비 +14%</div>
        </article>
        <article class="kpi-card" style="--accent: var(--blue)">
          <div class="kpi-label">평균 객실단가</div>
          <div class="kpi-value">${formatWon(96300)}</div>
          <div class="kpi-sub">가격 추천 반영 전</div>
        </article>
        <article class="kpi-card" style="--accent: var(--amber)">
          <div class="kpi-label">예약채널 매출 1위</div>
          <div class="kpi-value">부킹닷컴</div>
          <div class="kpi-sub">이번 달 24건</div>
        </article>
        <article class="kpi-card" style="--accent: var(--teal)">
          <div class="kpi-label">가격 추천 효과</div>
          <div class="kpi-value">${formatWon(860000)}</div>
          <div class="kpi-sub">승인 시 예상 증가분</div>
        </article>
        <article class="kpi-card" style="--accent: var(--red)">
          <div class="kpi-label">점검 필요 날짜</div>
          <div class="kpi-value">4일</div>
          <div class="kpi-sub">공실이 많은 평일</div>
        </article>
      </div>
      <div class="two-column">
        <section class="chart-card">
          <div class="section-head">
            <div>
              <h2>월별 매출</h2>
              <p>단위: 백만원</p>
            </div>
          </div>
          ${renderMonthlyRevenueChart()}
        </section>
        <section class="chart-card">
          <div class="section-head">
            <div>
              <h2>객실 점유율</h2>
              <p>최근 7개월</p>
            </div>
          </div>
          ${renderOccupancyLineChart()}
        </section>
      </div>
      <section class="section-band">
        <div class="section-head">
          <div>
            <h2>객실 타입별 매출</h2>
            <p>가격 최적화 우선순위를 정합니다.</p>
          </div>
        </div>
        ${renderRoomTypeTable()}
      </section>
    </div>
  `;
}

function renderMonthlyRevenueChart() {
  const max = Math.max(...monthlyRevenue.map((item) => item.value));
  return `
    <div class="bar-chart">
      ${monthlyRevenue
        .map(
          (item) => `
            <div class="bar-item">
              <div class="bar-fill" style="height: ${Math.round((item.value / max) * 170)}px"></div>
              <div class="bar-label">${item.label}</div>
            </div>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderOccupancyLineChart() {
  const width = 420;
  const height = 190;
  const points = occupancyTrend.map((value, index) => ({
    x: (index / (occupancyTrend.length - 1)) * (width - 20) + 10,
    y: height - (value / 100) * (height - 20) - 10,
    value,
  }));

  const segments = points.slice(0, -1).map((point, index) => {
    const next = points[index + 1];
    const length = Math.hypot(next.x - point.x, next.y - point.y);
    const angle = Math.atan2(next.y - point.y, next.x - point.x) * (180 / Math.PI);
    return `<span class="line-segment" style="left:${point.x}px; top:${point.y}px; width:${length}px; transform: rotate(${angle}deg)"></span>`;
  });

  return `
    <div class="line-chart">
      ${segments.join("")}
      ${points.map((point) => `<span class="line-point" style="left:${point.x - 5}px; top:${point.y - 5}px" title="${point.value}%"></span>`).join("")}
    </div>
  `;
}

function renderRoomTypeTable() {
  const rows = [
    { type: "스탠다드", rooms: 8, revenue: 6320000, occupancy: 82, action: "임박 할인 점검" },
    { type: "디럭스", rooms: 8, revenue: 12860000, occupancy: 88, action: "주말 가격 인상" },
    { type: "패밀리룸", rooms: 4, revenue: 9340000, occupancy: 92, action: "잔여 객실 보존" },
    { type: "도미토리", rooms: 5, revenue: 4210000, occupancy: 71, action: "평일 할인 적용" },
  ];

  return `
    <div class="table-card">
      <table>
        <thead>
          <tr>
            <th>객실 타입</th>
            <th class="text-right">객실 수</th>
            <th class="text-right">이번 달 매출</th>
            <th class="text-right">점유율</th>
            <th>추천 운영</th>
          </tr>
        </thead>
        <tbody>
          ${rows
            .map(
              (row) => `
                <tr>
                  <td><strong>${row.type}</strong></td>
                  <td class="text-right">${row.rooms}실</td>
                  <td class="text-right">${formatWon(row.revenue)}</td>
                  <td class="text-right">${row.occupancy}%</td>
                  <td>${row.action}</td>
                </tr>
              `,
            )
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

function bindCommonControls() {
  document.getElementById("prev-week")?.addEventListener("click", () => {
    state.timelineStart = addDays(state.timelineStart, -7);
    render();
  });
  document.getElementById("next-week")?.addEventListener("click", () => {
    state.timelineStart = addDays(state.timelineStart, 7);
    render();
  });
  document.getElementById("today-week")?.addEventListener("click", () => {
    state.timelineStart = new Date("2026-07-02T00:00:00+09:00");
    render();
  });
  document.getElementById("room-type-filter")?.addEventListener("change", (event) => {
    state.roomTypeFilter = event.target.value;
    render();
  });
  document.getElementById("room-search")?.addEventListener("input", (event) => {
    state.search = event.target.value;
    render();
  });
}

function bindPricingControls() {
  document.querySelectorAll(".approve-price").forEach((button) => {
    button.addEventListener("click", () => {
      const item = pricingRecommendations.find((recommendation) => recommendation.id === button.dataset.id);
      if (!item) return;
      item.status = "승인 완료";
      updateApprovalChip();
      showToast(`${item.roomType} ${item.date} 추천 가격을 승인했습니다.`);
      renderPricingView();
    });
  });

  document.querySelectorAll(".hold-price").forEach((button) => {
    button.addEventListener("click", () => {
      const item = pricingRecommendations.find((recommendation) => recommendation.id === button.dataset.id);
      if (!item) return;
      item.status = "보류";
      updateApprovalChip();
      showToast(`${item.roomType} ${item.date} 추천을 보류했습니다.`);
      renderPricingView();
    });
  });

  document.getElementById("approve-all-visible")?.addEventListener("click", () => {
    pricingRecommendations.forEach((item) => {
      if (item.status === "승인 대기") item.status = "승인 완료";
    });
    updateApprovalChip();
    showToast("승인 대기 가격을 모두 승인했습니다.");
    renderPricingView();
  });

  document.getElementById("toggle-alert")?.addEventListener("click", () => {
    state.alertBeforeAutoChange = !state.alertBeforeAutoChange;
    showToast(`자동 변경 전 알림을 ${state.alertBeforeAutoChange ? "켰습니다" : "껐습니다"}.`);
    renderPricingView();
  });

  document.querySelectorAll(".switch").forEach((button) => {
    button.addEventListener("click", () => {
      const rule = rules.find((item) => item.id === button.dataset.rule);
      if (!rule) return;
      rule.enabled = !rule.enabled;
      showToast(`${rule.name} 규칙을 ${rule.enabled ? "켰습니다" : "껐습니다"}.`);
      renderPricingView();
    });
  });
}

function bindChannelControls() {
  document.querySelectorAll(".channel-sync").forEach((button) => {
    button.addEventListener("click", () => {
      showToast(`${button.dataset.channel} 동기화 상태를 확인했습니다.`);
    });
  });
  document.getElementById("sync-all-channels")?.addEventListener("click", () => {
    showToast("모든 예약채널 더미 동기화를 완료했습니다.");
  });
}

function bindMaintenanceControls() {
  document.querySelectorAll(".task-start").forEach((button) => {
    button.addEventListener("click", () => {
      const task = maintenanceTasks.find((item) => item.id === button.dataset.task);
      if (!task) return;
      task.status = "진행 중";
      const room = getRoom(task.roomId);
      if (task.type === "청소") room.status = "청소 중";
      showToast(`${room.name} ${task.title} 작업을 시작했습니다.`);
      renderTodayView();
    });
  });

  document.querySelectorAll(".task-complete").forEach((button) => {
    button.addEventListener("click", () => {
      const task = maintenanceTasks.find((item) => item.id === button.dataset.task);
      if (!task) return;
      task.status = "완료";
      task.completedAt = "방금";
      const room = getRoom(task.roomId);
      room.status = task.nextStatus || "판매 가능";
      showToast(`${room.name} ${task.title} 작업을 완료했습니다.`);
      renderTodayView();
    });
  });

  document.querySelectorAll(".room-status-action").forEach((button) => {
    button.addEventListener("click", () => {
      const room = getRoom(button.dataset.room);
      if (!room) return;
      room.status = button.dataset.status;
      showToast(`${room.name} 객실 상태를 '${room.status}' 상태로 변경했습니다.`);
      renderTodayView();
    });
  });

  document.querySelectorAll(".channel-health-check").forEach((button) => {
    button.addEventListener("click", () => {
      showToast(`${button.dataset.channel} 채널 상태를 확인했습니다.`);
    });
  });

  document.querySelectorAll(".checklist-toggle").forEach((button) => {
    button.addEventListener("click", () => {
      const checklist = recurringChecklists.find((item) => item.id === button.dataset.checklist);
      const checklistItem = checklist?.items.find((item) => item.id === button.dataset.item);
      if (!checklist || !checklistItem) return;
      checklistItem.done = !checklistItem.done;
      showToast(`${checklist.title} 항목을 ${checklistItem.done ? "완료" : "미완료"}로 변경했습니다.`);
      renderTodayView();
    });
  });

  document.querySelectorAll(".issue-task-create").forEach((button) => {
    button.addEventListener("click", () => {
      const issue = roomIssueHistory.find((item) => item.id === button.dataset.issue);
      if (!issue) return;
      const room = getRoom(issue.roomId);
      const alreadyExists = maintenanceTasks.some((task) => task.roomId === issue.roomId && task.title === issue.title && task.status !== "완료");
      if (!alreadyExists) {
        maintenanceTasks.push({
          id: `task_${String(maintenanceTasks.length + 1).padStart(3, "0")}`,
          roomId: issue.roomId,
          type: "점검",
          title: issue.title,
          detail: `${issue.count}회 반복 기록 · ${issue.lastReported} 마지막 신고`,
          priority: issue.severity === "높음" ? "높음" : "보통",
          due: "17:00",
          assignee: "시설 담당",
          status: "대기",
          nextStatus: "판매 가능",
        });
      }
      issue.status = "점검 등록";
      showToast(`${room.name} ${issue.title} 점검 작업을 추가했습니다.`);
      renderTodayView();
    });
  });

  document.querySelectorAll(".inventory-reorder").forEach((button) => {
    button.addEventListener("click", () => {
      const supply = supplyInventory.find((item) => item.id === button.dataset.supply);
      if (!supply) return;
      supply.status = "발주 요청";
      showToast(`${supply.name} 발주 요청을 표시했습니다.`);
      renderTodayView();
    });
  });

  document.querySelectorAll(".proof-complete").forEach((button) => {
    button.addEventListener("click", () => {
      const proof = maintenanceProofs.find((item) => item.id === button.dataset.proof);
      if (!proof) return;
      if (proof.status !== "첨부됨") {
        const room = getRoom(proof.roomId);
        proof.status = "첨부됨";
        proof.file = `${room.name}-maintenance-proof.jpg`;
        showToast(`${room.name} ${proof.title} 증빙을 첨부 완료로 표시했습니다.`);
        renderTodayView();
        return;
      }
      showToast(`${proof.file} 더미 증빙을 확인했습니다.`);
    });
  });
}

function bindShellControls() {
  document.querySelectorAll("[data-view]").forEach((button) => {
    button.addEventListener("click", () => {
      state.view = button.dataset.view;
      render();
    });
  });

  document.body.addEventListener("click", (event) => {
    const jump = event.target.closest("[data-view-jump]");
    if (jump) {
      state.view = jump.dataset.viewJump;
      render();
      return;
    }

    const scrollTarget = event.target.closest("[data-scroll-target]");
    if (!scrollTarget) return;
    const target = document.getElementById(scrollTarget.dataset.scrollTarget);
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  document.getElementById("sync-button")?.addEventListener("click", () => {
    showToast("예약채널 더미 동기화를 완료했습니다.");
  });
}

function syncNavState() {
  document.querySelectorAll("[data-view]").forEach((button) => {
    button.classList.toggle("active", button.dataset.view === state.view);
  });
}

function render() {
  syncNavState();
  updateApprovalChip();

  if (state.view === "reservations") {
    renderReservationsView();
    return;
  }
  if (state.view === "channels") {
    renderChannelsView();
    return;
  }
  if (state.view === "pricing") {
    renderPricingView();
    return;
  }
  if (state.view === "reports") {
    renderReportsView();
    return;
  }
  renderTodayView();
}

bindShellControls();
render();
