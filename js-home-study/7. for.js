var n = +prompt("양의 정수를 입력하세요.");
let string = ``;
for (var i = 2; i <= n; i *= 2) {
  string += i + `, `;
}

alert(string);
