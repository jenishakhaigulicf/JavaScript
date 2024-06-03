function quickSort(arr) {
  if (arr.length <= 1) return arr;
  let pivot = arr[0];
  let n = arr.length;
  let left = [];
  let right = [];
  for (i = 1; i < n; i++) {
    if (arr[i] > pivot) {
      right.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.time("quickSort");
console.log(quickSort([2, 1, 99, 1, 555, 0, 66]));
console.timeEnd("quickSort");
