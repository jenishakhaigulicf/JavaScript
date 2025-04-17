// const sumThenAvg = (total1, total2, count) => {
//     const total = total1 + total2
//     const avg = () => console.log("avg=", total /count)
//     return avg
// }

// const getAvg = sumThenAvg(10,10,2)
// getAvg()

const sumThenAvg = (a, b, c, count) => {
  const total = a + b + c;
  return function avg() {
    return total / count;
  };
};

console.log(sumThenAvg(10, 10, 10, 3)());
