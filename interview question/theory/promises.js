// Execution Context

// JS Engine: CallStack, heap
// CallBack queue :
// microtask: Promise
// macrotask: Set timeout
// Event loop

console.log(1);

setTimeout(() => {
  console.log(3);
}, 0);

Promise.resolve(console.log(4));

console.log(2);
