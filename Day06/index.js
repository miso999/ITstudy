// 화살표 함수 구현하기 시작+.
// 1. 음식 이모지 넣으면 음식이모지 피자 나오는 함수
//EX)🍍 ->🍍피자

//2.영단어를 넣으면 그 영단어를 3배곱해서 돌려주는 함수
//ex) kim -> kimkimkim

//3.원화를 넣으면 달러를 돌려주는 함수

//1
const food = (x) => {
  return x + "피자";
};
//=const food = (x) => x + "피자";
food("🍍");
console.log(food);

//2
const word = (x) => x.repeat(3);

//3
const toDollar = (won) => won / 1430;

// gotoAcademy 함수가 있음
// 시작 콘솔로 집에서 출발
// 택시, 버스, 걷기, 자전거, 엄마차
// 끝 콘솔로 학원도착

const gotoAcademy(transport) =>{
  console.log("집에서 출발!");
  const taxi = () => {
	console.log("택시타고 감");
  const bus = () => {
	console.log("버스타고감");
  }
  const walk = () => {
	console.log("걸어서감");
  }
  const bicycle = () => {
	console.log("자전거타고감");
  }
  const momCar = () => {
	console.log("엄마차타고감");
  };
  };
  console.log ("학원 도착!");
}
gotoAcademy("bus")



// makeBeverage
// 커피 만들기 => {1.원두갈기 2.평탄화하기 3.커피기계넣기 4.버튼클릭 5.즙짜기}
// 스무디 만들기 => {1.재료넣기 2.얼음넣기 3.갈기 4.즙짜기}
// 차 만들기 => {1.티백넣기 2.뜨물넣기 3.후 불기}
//시작:콘솔로 주문받기
//종료:콘솔로 주문완료
const makeBeverage (makeSomething) => {
	console.log("주문 받겠습니다");
	makeSomething();
	console.log("주문 완료되었습니다");
}
const makeCoffee = () =>  {
	console.log("1.원두갈기");
	console.log("2.평탄화");
	console.log("3.커피기계넣기");
	console.log("4.버튼");
	console.log("5.즙짜기");
}

const makeSmoothie = () => {
	console.log("1.재료넣기");
	console.log("2.얼음넣기");
	console.log("3.갈기");
	console.log("4.즙짜기");
}

const makeTea = () => {
	console.log("1.티백넣기");
	console.log("2.뜨물넣기");
	console.log("3.후 불기");
}

makeBeverage(makeSmoothie);


