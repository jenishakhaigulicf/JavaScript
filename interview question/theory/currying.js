const avg = (a, b, c) => {
  let total = a + b + c;
  return function divide(count) {
    console.log(total / count);
  };
};

avg(10, 10, 10)(3);
