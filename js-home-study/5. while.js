var x = +prompt("첫번째 숫자");
var y = +prompt("두번째 숫자");

let total = 0;

while (x <= y) {
  total = total + x;
  x++;
}

alert(`${x}와 ${y}의 합은 ${total}입니다.`);
