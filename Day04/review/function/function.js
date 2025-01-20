// function [함수]
// 입력 : x
//출력 : x +100

function plus100(x) {
  return x + 100;
}

//plus100 [함수이름]
const a = plus100(500);
console.log(a); // 600

//twice
//x가 들어오면 두배를 돌려주는 함수 만들고
//실행까지 해서 콘솔로 나타내기

function twice(x) {
  return x * 2;
}
const b = twice(100);
console.log(b);

//luckybiky 함수만들고
//어떠한 문구를 넣으면 마지막에 럭키비키잖아 ~ 붙여서
//돌려주는 함수를 만들고 실행해서 콘솔로그 확인하기

function luckybiky(x) {
  return x + "럭키비키잖아~";
}
const c = luckybiky("안녕");
console.log(c);

//홀수 짝수 판별 함수 만들어주세요
//반환값 :홀수 or 짝수
function oddeven(x) {
  return x % 2 ? "홀수" : "짝수";
}
const d = oddeven(2);
console.log(d);
