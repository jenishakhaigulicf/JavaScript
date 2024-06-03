function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let n = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, n));
  let right = mergeSort(arr.slice(n));
  return merge(left, right);
}
function merge(left, right) {
  let sort = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sort.push(left.shift());
    } else {
      sort.push(right.shift());
    }
  }
  return [...sort, ...left, ...right];
}

console.log(mergeSort([2, 1, 99, 1, 555, 0, 66]));
