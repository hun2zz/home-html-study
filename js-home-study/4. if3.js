var a = +prompt("정수 A");
var b = +prompt("정수 B");

var diff;

if (a > b) {
  diff = a - b;
} else {
  diff = b - a;
}

alert(`두 값의 차이는 ${diff}입니다.`);
