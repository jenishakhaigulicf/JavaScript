// function getSum(num) {
//   let sum = 0;
//   while (num > 0) {
//     const remainder = num % 10;
//     num = Math.floor(num / 10);
//     console.log(num);
//     sum = sum + remainder;
//   }
//   return sum;
// }
function getSum(num) {
  let arr = Array.from(String(num), Number);
  return arr.reduce((acc, ele) => acc + ele, 0);
}
console.log(getSum(1234));
