// 1

const height = prompt("몇cm이신가요?");
const a = Number(height) > 140 ? "탑승가능" : "탑승불가";
alert(a);

// 2
const number = prompt("숫자를 말해보세요");
const a1 = number % 2 == 0 ? "짝수입니다" : "홀수입니다";
alert(a1);

// 3
const birth = prompt("태어난 년도를 말씀해주세요");
const age = 2026 - Number(birth);
const a2 = age > 20 ? "성인입니다" : "미성년자입니다.";
window.alert(`${a2}`);

// 4
const hour = prompt("시를 입력하세요");
const min = prompt("분을 입력하세요");
const sec = prompt("초를 입력하세요");
alert(`${number(hour) * 3600 + Number(min) * 660 + number(sec)}초`);

// 5
const first = prompt("첫번째 숫자를 입력하세요");
const second = prompt("두번째 숫자를 입력하세요");
alert(Number(first) > Number(second) ? first : second);
