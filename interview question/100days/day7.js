// get maximum number from the array

// function getMaximum(arr) {
//   arr.sort((a, b) => {
//     return a - b;
//   });
//   return arr[arr.length - 1];
// }

function getMaximum(arr) {
  return Math.max(...arr);
}

console.log(getMaximum([22, 3333, 1000000, 53, 234, 2, 65, 0, -32, -9837]));
