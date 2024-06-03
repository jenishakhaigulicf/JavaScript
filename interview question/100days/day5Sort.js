function getSortedArray(arr) {
  let right = [];
  let left = [];
  const n = arr.length;
  let pivot = arr[0];

  if (n <= 1) return arr;
  for (let i = 1; i < n; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...getSortedArray(left), pivot, ...getSortedArray(right)];
}

console.log(getSortedArray([1, 5, 33, 0, -2, 34, 3252, 1, 34, 5]));
