// 메뉴 : 아아, 4000 라떼,4500, 유자차 4000
// // 매출 : 0
// // 판매기능 : 번호를 물어보고 판매되면 매출이 올라가면 됨
// //메뉴 추가 : 이름과 가격이 주어지면 메뉴에 추가됨

// const starbucks = {
//   menu: [
//     { name: "아아", price: 4000 },
//     { name: "라떼", price: 4500 },
//     { name: "유자차", price: 4000 },
//   ],
//   sale: 0,
//   sell: function(num) {
// 	if(!menu[num] console.log("그런 메뉴 없음"));
// 	else {
// 		console.log(`${this.menu[num].name}이 팔렸습니다`);
// 		this.sale = this.sale + this.menu[num].price;
// 	}
//   },
//   add: function (a,b) {
// 	console.log(`${a}메뉴가 추가되었습니다.`);
// 	this.menu.push({name:a, price:b});
//   }
// };

// //quiz2
// //체력:100 마나: 100 레벨: 1 경험치:0
// //매직클로: 마나 -10달고 매직클로 발동! [1번 경험치 10오름] 단, 마나가 충분할 때 가능
// //텔레포트: 마나 -50달고 텔레포트 발동! [2번 경험치 50오름] 단, 마나가 충분할 때 가능
// //포션마시기:체력,마나 50충전됨

// const magician = {
// 	hp:100,
// 	mana:100,
// 	level:1,
// 	exp:0,
// 	getExp: function (exp) {
// 		this.exp = this.exp + exp;
// 		if (this.exp >= 100) {
// 			this.level = this.level + 1;
// 			this.exp = this.exp - 100;
// 		}
// 		console.log(`레벨 업 현재 레벨 : ${this.level}`);
// 	},
// 	magicClaw: function() {
// 		if(this.mana < 10) {
// 			console.log(`현재 마나 : ${this.mana}이므로 마나가 부족합니다.`);
// 		}else {
// 			this.mana =  this.mana - 10 ;
// 			this this.getExp(10) = this.exp + 10;
// 			if (this.exp >= 100) {
// 				this.level = this.level + 1;
// 				this.exp = this.exp - 100;
// 			}
// 			console.log("매직 클로 발동!");
// 		}

// 	}
// 	telePort:function() {
// 	if (this.mana <50) {
// 		console.log(`현재 마나 : ${this.mana}이므로 마나가 부족합니다.`);
// 	}else {
// 		this.mana = this.mana - 50;
// 		this.exp = this.exp + 50;
// 		console.log("텔레포트 발동!");
// 	}
// 	}

// };
//위 코드 수정하기

// youtube
// 내 아이디:
// 구독한 채널:
// 좋아요 눌렀던 채널:
// 구독하기
// 좋아요 누르기

// const youtube = {
// 	subscribeChannels : ["슈카월드","타요","G무비"]
// 	likedChannel : ["슈카월드","YTN"],
// 	subscribe: function(newChannel) {
// 		this.subscribeChannels.push(newChannel);
// 	},
// 	like : function(likeChannel) {
// 		this.subscribeChannels.push(likeChannel);
// 	},
// };

// car 오브젝트
// 자동차 이름
// 자동차 현재 속도
// 자동차 속도 올리기
// 자동차 속도 내리기
// 자동차 브레이크 밟기
// 자동차 현재 속도 나타내기

// const car = {
// 	name : "제네시스",
// 	speed: 100,
// 	speedUp : function () {
// 		this.speed = this.speed + 1;
// 	},
// 	speedDown : function() {
// 		this.speed = this.speed == 0 ? this.speed -1 : 0;
// 	},
// 	break: function() {
// 		this.speed = 0;
// 	},
// 	printNowSpeed:function() {
// 		console.log(`현재 속도:${this.speed}`);
// 	}
// };

// result: 0
// history : 계산의 모든 결과를 가지고 있음
// add 함수 있음 - result + x
// minus 함수 있음 - result -  x
//multiply 함수 있음 - result
//divide 함수 있음 [단 0 들어오면 에러]
//square(제곱)함수 있음
//clear 함수 있음 - result 0으로 초기화
// showHistory 함수 있음  - history 결과 보여줌
// 현균이 함수 있음 - 뭐이렇게 많아 alert 으로 보여줌
const calculator = {
  result: 0,
  historys: [],
  add: function (x) {
    this.result = this.result + x;
    this.aaahistorys();
  },
  minus: function (x) {
    this.result = this.result - x;
    this.aaahistorys();
  },
  multiply: function (x) {
    this.result = this.result * x;
    this.aaahistorys();
  },
  divide: function (x) {
    this.result = this.result / x;
    this.aaahistorys();
  },
  square: function (x) {
    this.result = this.result * this.result;
    this.aaahistorys();
  },
  clear: function (x) {
    this.result = 0;
    this.result = clear.history();
  },
  aaahistory: function () {
    this.historys.push(this.result);
  },
};

calculator.add(10);
calculator.minus(5);
calculator.multiply(2);
calculator.divide(2);
calculator.square(3);
console.log(`여태까지 계산한 계산값은 ${calculator.historys}입니다`);
