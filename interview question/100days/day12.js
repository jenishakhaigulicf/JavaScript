function removeDuplicate(arr) {
  return [...new Set(arr)];
}

console.log(removeDuplicate([1, 2, 2, 2, 2, 2, 5, 6, 4, 3, 2, 2, 3, 3]));
