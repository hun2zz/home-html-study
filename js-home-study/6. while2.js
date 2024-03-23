let a = +prompt(`숫자를 입력해주세요`);
let miss = ``;
let i = 1;

while (i <= a) {
  if (i % 2 === 0) {
    miss += "-";
  } else {
    miss += `+`;
  }
  i++;
}

alert(miss);
