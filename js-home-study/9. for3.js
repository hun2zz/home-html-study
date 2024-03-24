let height = +prompt(`높이를 설정해주세요.`);
let width = +prompt(`가로를 설정해주세요.`);
let sum = ``;
for (let i = 0; i < height; i++) {
  for (let j = 0; j < width; j++) {
    sum += `* `;
  }
  sum += `\n`;
}

alert(sum);
