const fruits = ["딸기", "블루베리", "배", "사과", "바나나"];

//1. 딸기, 블루베리, 나머지 변수 만들기
const [a, b, ...rests] = fruits;

//2. 딸기, 배 가져와서 콘솔로 딸기배 출력
console.log(fruits[0] + fruits[2]);
