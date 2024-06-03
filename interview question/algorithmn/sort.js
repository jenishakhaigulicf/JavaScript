// sort numbers [33,552,1232,1,9,99]

function jsSort(arr) {
  return JSON.stringify(
    arr.sort((a, b) => {
      return a.id - b.id;
    })
  );
}

console.log(
  jsSort([
    { name: "jenisha", id: 89 },
    { name: "gurung", id: 3 },
    { name: "gu", id: 1 },
    { name: "gu", id: 0 }
  ])
);

function sortNumbers(arr) {
  return arr.sort((a, b) => a - b);
}

console.log(sortNumbers([33, 552, 1232, 1, 9, 99]));
