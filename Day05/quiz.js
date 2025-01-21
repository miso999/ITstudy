//  add 함수 x,y
// function add(x, y) {
//   return x + y;
// }

//  minus 함수
// function minus(x, y) {
//   return x - y;
// }

// hello 함수 : 이름이 들어오면 ~~님 안녕 돌려주는 함수
// function hello(x) {
//   return `${x}님 안녕`;
// }

// tolength 함수: 문자가 들어오면 "~~문자 :문자의 길이"
//ex tolength("happy") => "happy문자:5"
// ex tolength("coke") => "coke문자:4"

// function tolength(word) {
//   return `${word}문자:${word.length}`;
// }

// square_three : x가 들어오면 제곱의 세배 돌려줌
// lunch_menu : x가 들오면 점심메뉴:~~입니다 돌려줌
// allergy_test: 어떠한 긴글이 들어오고
// 거기에 새우,땅콩,조개 단어가 포함되면 알러지 있음 돌려주고 아니면 알러지 없음 돌려주는 함수

// function square_three(x) {
//   return x ** 2 * 3;
// }

// function lunch_menu(meal) {
//   return `점심메뉴 ${meal}입니다`;
// }

// function allergy_test(x) {
//   const hasShrimp = x.includes("새우");
//   const hasPeanut = x.includes("땅콩");
//   const hasShell = x.includes("조개");
//   return hasShrimp || hasPeanut || hasShell ? "알러지있음" : "알러지없음";
// }

// threeToArray 세 개의 단어를 넣으면 배열로 돌려주는 함수
// 고기, 야채, 스프 -> [고기,야채,스프]

// function threeToArray(word) {
//   const hasMeat = word.includes("고기");
//   const hasVegetables = word.includes("야채");
//   const hasSoup = word.includes("스프");
//   return hasMeat && hasVegetables && hasSoup ? "포함함 " : "포함하지않음";
// }

//  getIphone version,model,stoarge
// function getIphone(version, model, stoarge) {
//   return { version: version, model: model, storage: stoarge };
// }

//각도(0~180)
//몇도를 넣으면 평각, 직각, 둔각,예각 돌려주는 함수
// function angle(x) {
//   if (x > 0 && x < 90) return "예각";
//   else if (x == 90) return "직각";
//   else if (x > 90 && x < 180) return "둔각";
//   else if (x == 180 || angle == 0) return "평각";
//   else return "에바각";
// }

// 어떠한 단어를 입력하고 하나의 알파벳도 입력하면
//그 알파벳 기준으로 앞뒤로 쪼개서 앞의 단어를 대문자로 돌려줌
//  icecream, r => ICEC
// americano, i => AMER
// trump , u => TR

//내코드
// const word = prompt("단어를 입력하세요");
// const alphabet = prompt("알파벳을 하나 입력하세요");
// function sentence(x) {
//   if (word.includes("alphabet")) return `word.toUpperclass()`;
// }
//강사님코드
// function change(word, alpha) {
//   const [first] = word.split(alpha);
//   return first.toUpperCase();
// }

//어떠한 단어를 입력하면 단어의 길이가 4~10 사이면 길이가 유효! 돌려주고
// 아니면 길이가 유효하지않음! 돌려주기

function word(x) {
  return 4 <= x.length && x.length <= 10 ? "유효!" : "유효하지 않음!";
}
