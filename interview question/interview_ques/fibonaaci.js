// function fibonacci(n) {
//   let a = 0;
//   let b = 1;
//   let c;
//   let fib;
//   console.log(a);
//   console.log(b);
//   for (let i = 0; i < n - 1; i++) {
//     c = a + b;
//     fib = c;
//     console.log(c);
//     a = b;
//     b = c;
//   }
//   return fib;
// }

// console.log(fibonacci(15));

// function fib(n) {
//     if(n<=1) return n;
//     return (fib(n-1)+fib((n-2)))

// }
// console.log(fib(15));

// function fib(n) {
//   const arr = [0, 1];
//   for (i = 0; i < n - 1; i++) {
//     arr.push(arr[i] + arr[i + 1]);
//   }
//   return arr
// }

// console.log(fib(15));

function fib(n){
  let a=0
  let b=1
  let c=a+b
  console.log(a)
  console.log(b)
  for (let i=2; i<n; i++){
    console.log(c)
    a = b
    b = c
    c=a+b
  }
}

fib(7)
