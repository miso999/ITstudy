// 1
const food = window.prompt("좋아하는 음식이 무엇인가요?");
const place = window.prompt("가장 최근에 갔던 장소는 어디인가요?");
window.alert(`최근에 갔던 ${place}에서 ${food}를 먹고싶어요!`);

// 2
const height = window.prompt("몇 cm인가요?");
const weight = window.prompt("몸무게는 몇 kg인가요?");
const bmi = Number(weight) / (Number(height) * Number(height));
window.alert(`BMI ${bmi}이시군요!`);

// 3
const rate = window.prompt("오늘의 환율은?");
const dollar = window.prompt("얼마를 원으로 환전하시겠습니까?");
const won = Number(rate) * Number(dollar);
window.alert(`${dollar}달러 -> ${won}입니다.`);

// 4
const btc_rate = prompt("1 BTC = 몇 원");
const btc = prompt("몇 BTC를 환산하고 싶습니까?");
const result = Number(btc_rate) * Number(btc);
console.log(result);
