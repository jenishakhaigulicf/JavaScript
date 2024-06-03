console.log(1);

setTimeout(() => {
  console.log(3);
}, 0);

Promise.resolve(console.log(4));

console.log(2);
