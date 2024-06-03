// function sumTarget(num, target) {
//   for (let i = 0; i < num.length; i++) {
//     for (let j = 1; j < num.length; j++) {
//       let sum = num[i] + num[j];
//       if (sum === target) return [num[i], num[j]];
//     }
//   }
// }

// console.log(sumTarget([6, 2, 4, 9, 1, 3], 12));

function sumTarget(num, target) {
  debugger;
  let obj = {};
  for (let i = 0; i < num.length; i++) {
    // 6, 12-6 = 6, obj= {6}
    // 2, 12-2 = 10, obj= {6,2}
    // 4, 12-4 = 8, obj= {6,2,4}
    // 9, 12-9 = 3, obj= {6,2,4,9}
    // 1, 12-1 = 11, obj= {6,2,4,9,1}
    // 3, 12-3 = 9, obj= {6:0,2:1,4:2,9:3,1:4}

    var a = num[i];
    // console.log(`${num[i]}, 12-${num[i]} = ${12-num[i]}, obj={${obj}}`)
    console.log(obj);
    if (obj[target - a] >= 0) {
      return [obj[target - a], i];
    } else {
      obj[a] = i;
    }
  }
}

console.log(sumTarget([6, 2, 4, 9, 1, 3], 12));
