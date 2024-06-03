function insertionSort(a) {
  let n = a.length;
  for (let i = 1; i < n; i++) {
    let key = a[i]
    let j = i-1;
    while(key<a[j] && j>=0){
        a[j+1]=a[j]
        j--
    }
    a[j+1] = key
  }
  return a
}
console.log(insertionSort([4,3,1,19,0]));
