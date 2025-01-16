// 1
const name = window.prompt("당신의 이름은 무엇인가요?");
const age = window.prompt("당신은 몇살인가요?");
const color = window.prompt("당신이 좋아하는 색깔은 무엇인가요?");
console.log(`제 이름은 ${name}이고 ${age}살이고 좋아하는 색은 ${color}`);

// 2
const day = window.prompt("오늘의 날짜를 말해주세요");
const plan = window.prompt("계획하고 있는 일정은 무엇인가요?");
window.alert(`오늘은 ${day},계획하신 일정은 ${plan}입니다.`);

// 3
const num1 = window.prompt("숫자를 말해주세요");
const num2 = window.prompt("숫자를 말해주세요");
const sum = Number(num1) + Number(num2);
const diff = Number(num1) - Number(num2);
window.alert(`합 : ${sum}, 차 : ${diff}`);

// 4
const food = window.prompt("가격을 말해주세요");
const some = window.prompt("몇 개를 사실 예정이신가요?");
const calculation = food * some;
window.alert(`${calculation}원 입니다.`);

//5
const temperature = window.prompt("온도를 말해주세요");
const calcul = temperature * 1.8 + 32;
winndow.alert(`${calcul}입니다`);

//6
const length = window.prompt("몇 cm인가요?");
window.alert(`정사각형 넓이: ${Number(length) * Number(length)}`);
