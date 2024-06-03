function secondLargest(a) {
  let n = a.length;
  let l = a[0];
  let sl;
  for (i = 1; i < n; i++) {
    if (a[i] > l) {
      sl = l;
      l = a[i];
    } else if (a[i] > sl) {
      sl = a[i];
    }
  }
  return sl;
}

console.log(secondLargest([-2, 1, 99, 1, 55, 0, 1000, -666]));

// optimized way
// time complexity --> n
// space complexity --> 1

function findSecondLargest(arr) {
  const sortedArray = [...new Set(arr)];
  sortedArray.sort((a, b) => b - a);
  return sortedArray[1];
}

console.log(findSecondLargest([-2, 1, 99, 1, 55, 0, 1000, -666]));

// time complexity --> n + nlogn
// space complexity --> 1
