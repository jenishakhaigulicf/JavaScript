const a = [1, 2, 3];
const b = [3, 4, 5];
console.log([...a, ...b]);
console.log(...a, ...b);

const c = [...a, ...b];
const [x, ...rest] = c;
console.log(rest);
console.log(x);

const a1 = { naam: "Jenisha", surname: "Khaiguli", job: "React Developer" };
const b1 = { namea: "Jenish", surnamea: "Khaigul", joba: "React " };
// console.log({...a1,...b1})
const c1 = { ...a1, ...b1 };
console.log(c1);
const { naam, ...rest1 } = c1;
console.log(rest1);
console.log(naam);
