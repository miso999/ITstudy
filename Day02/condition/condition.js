// if문
const username = prompt("이름이 뭐예요?");
if (username == "김미소") {
  alert("27살입니다");
}

const number = prompt("숫자를 입력하세요");
const number_number = Number(num);
if (number > 0) {
  alert("양의 정수입니다");
}
// ->
const num = Number(prompt("숫자입력"));
if (num > 0) {
  alert("양의정수입니다");
} else {
  alert("음의 정수입니다");
}

const num1 = Number(prompt("숫자를 입력하세요"));
if (num1 % 2 == 0) {
  alert("짝수입니다");
} else {
  alert("홀수입니다");
}

const num2 = +prompt("정수 입력");
if (num2 > 0) {
  alert("양의 정수");
} else if (num == 0) {
  alert("0입니다");
} else {
  alert("음의 정수");
}
