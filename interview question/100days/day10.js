// function arraysAreEqual(arr1, arr2) {
//   if (arr1.length !== arr2.length) return false;
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] != arr2[i]) return false;
//   }
//   return true;
// }
function arraysAreEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  return arr1.every((ele, i) => ele === arr2[i]);
}
console.log(arraysAreEqual([1, 2, 3], [1, 2, 3]));
console.log(arraysAreEqual([], []));
console.log(arraysAreEqual([1, 2, 4], [1, 2, 3]));
// console.log(
//   [1, 1, 1, 1, [1, [1, [1, 1, 1, 1, 1, [1]]]]].flatMap((a) => {
//     return a * 2;
//   })
// );
