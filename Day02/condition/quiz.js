// const num = +prompt("정수를 입력하세요");
// if (num > 0 && num % 2 == 0) {
//   alert("양의 짝수입니다");
// } else if (num > 0 && num % 2 == 1) {
//   alert("양의 홀수입니다");
// } else if (num == 0) {
//   alert("0입니다");
// } else if (num < 0 && num % 2 == 0) {
//   alert("음의 짝수입니다");
// } else if (num < 0 && num % 2 == -1) {
//   alert("음의 홀수입니다");
// } else {
//   alert("에러!");
// }

// //    ->    } else {
// //const result = num == 0? "0입니다 : "에러입니다";
// //alert(result);
// //}

const year = +prompt("몇년생");

// 8 - 용 , 9 -뱀, 10-말, 11-양
// 0- 원숭, 1- 닭, 2-개, 3-돼지
//4-쥐, 5-소, 6-호랑이, 7-토끼
if (year % 12 == 0) {
  alert("원숭이");
} else if (year % 12 == 1) {
  alert("닭");
} else if (year % 12 == 2) {
  alert("개");
} else if (year % 12 == 3) {
  alert("돼지");
} else if (year % 12 == 4) {
  alert("쥐");
} else if (year % 12 == 5) {
  alert("소");
} else if (year % 12 == 6) {
  alert("호랑이");
} else if (year % 12 == 7) {
  alert("토끼");
} else if (year % 12 == 8) {
  alert("용");
} else if (year % 12 == 9) {
  alert("뱀");
} else if (year % 12 == 10) {
  alert("말");
} else {
  alert("양");
}
