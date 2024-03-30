const createCalculator = () => {
  let total = 0;
  const sum = (sumInput) => (total += sumInput);
  const minus = (minusInput) => total - +minusInput;
  const sumtotal = () => total;
  return { sum, minus, sumtotal };
};

let create = createCalculator();
const { sum, minus, sumtotal } = create;

console.log(sum(5));
console.log(minus(3));
