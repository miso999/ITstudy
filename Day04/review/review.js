//내 코드
const email = prompt("이메일을 입력하세요");
if (id.includes("@")) {
  if (id.includes(".com" || ".net")) {
    if (id.includes("naver" || "kakao" || "yahoo" || "paran")) {
      alert("이메일이 타당합니다!");
    } else {
      alert("다시 입력해주세요");
    }
  } else {
    alert("다시 입력해주세요");
  }
} else {
  alert("다시 입력해주세요");
}

//강사님코드
const mbti = prompt("MBTI를 입력해주세요");
const first = mbti.slice(0, 1).toUpperCase();
const second = mbti.slice(1, 2).toUpperCase();
const third = mbti.slice(2, 3).toUpperCase();
const fourth = mbti.slice(3, 4).toUpperCase();
const mbtiObj = {
  E: "외향적",
  I: "내향적",
  S: "감각적",
  N: "직관적",
  T: "이성적",
  F: "감성적",
  J: "계획적",
  P: "즉흥적",
};

alert(
  `${mbtiObj[first]} ${mbtiObj[second]} ${mbtiObj[third]} ${mbtiObj[fourth]}`
);

const email1 = prompt("이메일 입력");
const hasAt = email1.includes("@");
const hasDot = email1.includes(".com") || email.includes(".net");
const hasDomail =
  email1.includes("naver") ||
  email1.includes("kakao") ||
  email1.includes("yahoo") ||
  email1.includes("paran");
hasAt && hasDot && hasDomail
  ? alert("이메일 타당함")
  : alert("이메일 타당하지 않음");
