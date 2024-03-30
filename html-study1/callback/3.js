const userList = [
  {
    account: "abc1234",
    userName: "대길이",
    job: "추노",
    address: "서울",
    hobbys: ["수영", "축구", "테니스"],
    salary: 5400000,
    age: 35,
  },
  {
    account: "banana",
    userName: "빠나나",
    job: "과일",
    address: "서울",
    hobbys: ["푸드파이팅", "테니스"],
    salary: 2700000,
    age: 18,
  },
  {
    account: "park1234",
    userName: "주차왕",
    job: "발렛파킹",
    address: "경기",
    hobbys: ["족구", "축구", "테니스", "영화감상"],
    salary: 3900,
    age: 56,
  },
  {
    account: "fire",
    userName: "불꽃남자카리스마",
    job: "게이머",
    address: "서울",
    hobbys: ["독서", "테니스"],
    salary: 7900000,
    age: 42,
  },
];

// 회원정보에서 회원의 이름들만 다 추출해서
// 배열에 담아줘
const nameList = userList.map((user) => user.userName);
console.log(nameList);

// 회원정보에서 회원의 주소들만 다 추출해서
// 배열에 담아줘
const address = userList.map((user) => user.address);
console.log(address);

// 회원의 첫번째 취미들만 다 추출해줘

// 모든 회원의 이름과 계정을 연결해서 배열에 담아줘
// [ 대길이(abc1234), 빠나나(banana), ... ]

console.log("=============================");
// 서울에 사는 급여가 400만원보다 높은 사람의 이름과 주소만 추출해줘
