const getAvg = (arr) => {
  return arr.reduce((acc, ele) => acc + ele / arr.length, 0);
};

console.log(getAvg([5, 10, 2, 8]));
