const movie_number = prompt("영화 번호 입력(1~3)");
const age = +prompt("나이 입력");
const movie = ["액션영화", "로맨틱 코미디", "공포영화"];
const fee = [10000, 8000, 9000];

if (age < 13)
  alert(
    `어린이 ${movie[movie_number - 1]} 가격은 ${
      fee[movie_number - 1] * 0.5
    }원 입니다.`
  );
else if (age >= 60)
  alert(
    `노인 ${movie[movie_number - 1]} 가격은 ${
      fee[movie_number - 1] * 0.7
    }원입니다.`
  );
else
  alert(
    `일반 ${movie[movie_number - 1]} 가격은 ${
      fee[movie_number - 1] * 1
    }원입니다.`
  );
