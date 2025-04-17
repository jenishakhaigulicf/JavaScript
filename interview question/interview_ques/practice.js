a = [1, 2, 3, 4, 5, 0, 55, 90, 100];

a.sort();
a.sort((a, b) => a - b);
console.log(a);

a = [
  { name: "jenisha", surname: "100" },
  { name: "ashesh", surname: "90" },
];

console.log(a.sort());
console.log(a.sort((a, b) => a.surname - b.surname));

a = ["e", "jenis", "a"];
console.log(a.sort());
