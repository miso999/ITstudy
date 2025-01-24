const arr = [1, 3, 5, 7, 9];

arr.map((x) => x + 1);

//배열 0부터 1000까지 담긴 코드 만드셈
// [0~1000]
const q1 = Array(1001)
  .fill(0)
  .map((x, i) => i);

// 배열 5의 배수 0부터 100까지
const q2 = Array(101)
  .fill(0)
  .map((x, i) => i)
  .filter((x) => x % 5 == 0);

// 0~ 100 3의배수는 🐭 5의 배수는 🐷 15의 배수는🐰
//나머지는 숫자

const q3 = Array(101)
  .fill(0)
  .map((x, i) => i)
  .map((x) => {
    if (x % 3 == 0 && x & 5 == 0) return "🐰";
    else if (x % 3 == 0) return "🐭";
    else if (x % 5 == 0) return "🐷";
    else return x;
  });

  [1900~2025]
[{연도:1900,띠:🐭}, {연도:1901,띠:"🐮"}, ... ,{연도:2025,띠:"🐍"}]
const makezodiac = (to,from) => {
const zodiac = {
	0 : "원숭이",
	1 : "닭",
	2: "개",
	3: "돼지",
	4: "쥐",
	5: "소",
	6: "호랑이",
	7: "토끼",
	8: "용",
	9: "뱀",
	10:"말",
	11:"양",
};
// const q4 = Array(125).fill(0).map((x,i)=>1900+i).map((x)=> {
// 	if (x % 12 ==4) return "🐭";
// 	else if (x % 12 ==5) return "🐮";
// 	else if(x % 12 == 6) return "🐯";
// 	else if( x % 12 ==7) return "🐰";
// 	else if(x %12 ==8) return "🐉";
// 	else if (x % 12 ==9) return "🐍";
// 	else if (x %)
// })

return Array(from-to).fill(0).map((v,i)=>i+to).map(v=>{
	return {연도:v, 띠: zodiac[v%12]};
});
};
const result = makezodiac(1000,3000);
console.log(result);
