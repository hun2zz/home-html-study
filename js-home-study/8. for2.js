let number = +prompt(`정수를 입력해주세요.`);
let sum = ``;

for (let i = 1; i < number; i++) {
  if (number % i === 0) {
    sum += i + `\n`;
  }
}

alert(sum);
