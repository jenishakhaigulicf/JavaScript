// const getFactorial = (num) => {
//   let temp = 1;
//   for (let i = 1; i <= num; i++) {
//     temp = temp * i;
//   }
//   return temp;
// };
d;
const getFactorial = (num) => {
  if (num == 1) return num;
  return getFactorial(num - 1) * num;
};

console.log(getFactorial(5));
