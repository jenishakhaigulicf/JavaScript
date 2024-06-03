function hammingNumber(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    a = a.toString(2);
    b = b.toString(2);
    while (a.length !== b.length) {
      if (a.length < b.length) {
        a = "0" + a;
      } else {
        b = "0" + b;
      }
    }
  }
  if (a.length != b.length) return "the values are invalid";
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) count++;
  }
  return count;
}

// console.log(hammingNumber("aabc", "cdec"));
console.log(hammingNumber(10, 1));
// 01 -->0001
// 10 -->1010
// 11 -->1011
// 12 -->1100
// 13 -->1101
// 14 -->1110
// 15 -->1111
