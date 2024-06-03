function anagram(w1, w2) {
  // 2o(n)+o(nlog(n))
  const sortW1 = w1.split("").sort().join("");
  const sortW2 = w2.split("").sort().join("");
  return sortW1 === sortW2 ? "true" : "false";
}

console.log(anagram("tarpatt", "aptart"));

function ana(a, b) {
  let obj1 = {};
  let obj2 = {};
  if (a.length != b.length) return false;
  for (let i = 0; i < a.length; i++) {
    obj1[a[i]] = (obj1[a[i]] || 0) + 1;
    obj2[a[i]] = (obj2[a[i]] || 0) + 1;
  }

  for(let key in obj1){
    if(obj1[key] !== obj2[key]) return false
  }
  return true
}
console.log(ana("aabcd", "bcaad"));
