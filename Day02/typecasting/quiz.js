const nickname = prompt("닉네임이 무엇인가요?") || "Guest";
window.alert(`${nickname}님 환영합니다!`);

const number = prompt("화장실 비밀번호를 입력하세요");
if (number == 1024) {
  alert("정답입니다");
} else {
  alert("땡");
}

const number1 = prompt("화장실 비밀번호를 입력하세요");
number1 == "1024" && alert("정답!");
