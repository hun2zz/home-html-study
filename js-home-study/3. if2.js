let num1 = prompt(`정수A를 입력해주세요.`);
let num2 = prompt(`정수B를 입력해주세요.`);
let num3 = prompt(`정수C를 입력해주세요.`);

if (num1 === num2 && num2 === num3) {
  alert(`정수 3개의 값이 같습니다.`);
} else if (num1 === num3 || num1 === num2 || num3 === num2) {
  alert(`정수 2개의 값이 같습니다`);
} else {
  alert(`맞는 값이 없습니다.`);
}
