const bus = +prompt("어떤 버스를 탑승하시겠습니까?");
const age = +prompt("나이가 어떻게 되시나요?");

if (bus == "1") {
  if (age <= 7 || 65 <= age) {
    alert("무료입니다!");
  } else if (8 <= age && age <= 19) {
    alert(`청소년 비용은 시내버스 ${2000 * 0.7}원입니다.`);
  }
}
