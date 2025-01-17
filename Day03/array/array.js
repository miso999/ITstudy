const menu = ["아메리카노", "카라멜 마끼아또", "바닐라 라떼"]; //array 타입
const soccer = ["손흥민", "황희찬", "이강인", "김민재"];

// 배열 관련된 연산자

//1. indexing 연산자 (=꺼내기)
const test = [...menu, ...soccer];
console.log(menu[0][2]); // 바닐라
console.log(test[1][1]); //황희찬

// 2.
const test1 = [...menu, ...soccer];
console.log(test1);

// 3. Rest 연산자
const [son1, hwang] = soccer; // ["손흥민", "황희찬", "이강인", "김민재"]
console.log(son1); // 손흥민
console.log(rest1.hwang); // 황희찬

// 4. add 및 update 연산자
soccer[4] = "박지성";
soccer[1] = "황히찬";
console.log(soccer);

// 5. delte 연산자 (=삭제)
delete soccer[3]; //
console.log(soccer);
