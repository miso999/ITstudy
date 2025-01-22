const arr = [1, 3, 5, 7, 9];
//❤짱중요💕
//요소들을 바꿔주는 함수

 const a = (x) => x * 2;
 const newArr = arr.map(a);
 console.log(newArr);

 const b = (x) => x + 10;
 const newArr1 = arr.map(b);
 console.log(newArr1);

// 제곱을 해서 10보다 작으면 짜장면, 크면 탕수육 바꿔주기
 const c = (x) => (x ** 2; < 10 ? "짜장면" : "탕수육");
 const newArr2 = arr.map(c);
 console.log(newArr2);

// 세제곱을 하고 자리수가 2자리 이하면 커피 아니면 붕어빵
 const d = (x) => {
   x ** 3 < 10  ? "커피" : "붕어빵";
 };


// const fruits = ["peach", "mango", "strawberry", "apple", "orange", "mandarin", "plum", "persimmon", "fig"];
// //문자 길이가 6글자 이상이면 💙 아니면 💔 바꾸기
// const fruit = (word) => {
// 	word.length >= 6 ? "💙" : "💔";
// }
// const a = fruits.map(fruit);
// console.log(a);


// 문자길이를 두 배 했을 때, 15보다 작으면 과일이름 짧음 아니면 과일이름 긺
const fruit1 = (word) => {
	word.length *2 < 15 ? "과일이름 짧음" : "과일이름 긺"
}
const b = fruits.map(fruit);
console.log(b);


// map: 요소를 조건(함수)에 맞게 바꿔줌
// some : 요소중에 조건(함수)에 맞는거 하나라도 갖는지 물음
// every : 요소중에 조건(함수)에 맞는거 모두 갖는지 물음 

const arr1 = [1, 3, 5, 7, 9];

//요소중에 하나라도 있으면 true, 없으면 false
arr.some()

const number = (x) => x == 3;
const isthree = arr.some(number);
console.log(isthree);
//
const five = (x) => x < 5 ;
arr.some(five);
//
const even = (x) => x % 2 ==0;
const evenNumber = arr.some(even);
console.log(evenNumber);


const fruits = ["peach", "mango", "strawberry", "apple", "orange", "mandarin", "plum", "persimmon", "fig"];
// 1. 과일 이름중에 k,b,s로 시작하는게 있으면 true 아니면 false
// 2. 과일 이름중에 길이가 모두 4~12글자 사이면 true 아니면 false
// 3. 과일 이름중에 i, o, u가 있으면 "💛" 아니면 "🧨"

//1.
const word1 = (x) => x.startsWith("k") || x.startsWith("b") || x.startsWith("s") ? "true" : "false";
const result = fruits.some(word1);
console.log(result);

//2.
const word2 = (x) => 4 <= x.length && x.length <= 12;
const result1 = fruits.every(word2);

//3.
const word3 = (x) => x.includes("i") || x.includes("o") || x.includes("u") ? "💛" : "🧨";
const result2 = fruits.map(word3);


const song = `Ooh
I, I just woke up from a dream
Where you and I had to say goodbye
And I don't know what it all means
But since I survived, I realized
Wherever you go, that's where I'll follow
Nobody's promised tomorrow
So I'ma love you every night like it's the last night
Like it's the last night
If the world was ending, I'd wanna be next to you
If the party was over and our time on Earth was through
I'd wanna hold you just for a while and die with a smile
If the world was ending, I'd wanna be next to you
Ooh
Oh, lost, lost in the words that we scream
I don't even wanna do this anymore
'Cause you already know what you mean to me
And our love's the only war worth fighting for
Wherever you go, that's where I'll follow
Nobody's promised tomorrow
So I'ma love you every night like it's the last night
Like it's the last night
If the world was ending, I'd wanna be next to you
If the party was over and our time on Earth was through
I'd wanna hold you just for a while and die with a smile
If the world was ending, I'd wanna be next to you
Right next to you
Next to you
Right next to you
Oh-oh, oh
If the world was ending, I'd wanna be next to you
If the party was over and our time on Earth was through
I'd wanna hold you just for a while and die with a smile
If the world was ending, I'd wanna be next to you
If the world was ending, I'd wanna be next to you
Ooh
I'd wanna be next to you`
// song을 배열로 바꾸고 각각 문자 길이로 바꾼다음 문자길이가 6글자 넘으면'💛' 아니면 그대로 나오고 출력하기
const songArr = song.split(" ");
const change = (word) => (word.length < 6? "💛" : word).join(" ");
const result3 = songArr.map(change);
confirm.sole(result3);

// const sresult3 = song.split(" ").map((word) => (word.length > 6? "💛" : word)).join(" ");
//console.log(result3); 


const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//filter[입구컷] 
const isSixOver = (x) => x >=6;
const newArr3 = numArr.filter(isSixOver);
console.log({newArr3:newArr3});

const oddArr = numArr.filter((x)=> x % 2);

//제곱을 했을때 100보다 작으면 살린다음 +10하기
numArr.filter((x)=> x**2 < 100).map((x)=> x+10);