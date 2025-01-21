// cook
// 콘솔로 요리시작!
// 1.콘솔 된장국 요리!
// 2.콘솔 김치찌개 요리!
// 3.콘솔 짜파게티 요리!
// 4.콘솔 가자미튀김 요리
// 5.콘솔 비엔나소세지 요리
// 6.콘솔 라면 요리!
//콘솔로 요리 끝!

//내코드
// function cook(x) {
//   if ((x = "1")) return `된장국 요리!`;
//   else if ((x = "2")) return `김치찌개 요리!`;
//   else if ((x = "3")) return `짜파게티 요리!`;
//   else return `요리 끝`;
// }

const cook = (num) => {
  console.log("요리시작!");
  if (num == 1) console.log("된장국");
  else if (num == 2) console.log("김치찌개");
  else if (num == 3) console.log("짜파게티");
  else if (num == 4) console.log("가자미튀김");
  else if (num == 5) console.log("비엔나소세지");
  else if (num == 6) console.log("라면");
  else console.log("손나료리나시");
  console.log("요리끝");
};

//1.불 2.얼음 3.번개
const skill = (x) => {
  console.log("스킬 준비");
  if (x == 1) console.log("불");
  else if (x == 2) console.log("얼음");
  else if (x == 3) console.log("번개");
  else console.log("손나마호나시");
  console.log("스킬 완료");
};
skill(1); // 불
