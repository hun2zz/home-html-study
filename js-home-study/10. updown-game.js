alert(`재밌는 업다운 게임~`);

alert(`1~100 숫자의 무작위 숫자를 맞춰보세요~`);

let randomValue = Math.floor(Math.random() * 100) + 1;

let chance = 5;

while (true) {
  let answer = +prompt(`1~100 값을 입력해주세요.`);
  if (answer < randomValue) {
    alert(`up!!`);
    chance--;
  } else if (answer === randomValue) {
    alert(`정답입니다~`);
    break;
  } else {
    alert(`down!!`);
    chance--;
  }
  if (chance === 0) {
    alert(`기회를 모두 소진하였습니다~ \n 정답은 ${randomValue}이지롱~`);
    break;
  }
}
