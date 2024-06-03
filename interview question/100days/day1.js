// given a sentence find the longest word
let longest = 0;
function getLongestWord(s) {
  let longestWord = "";
  s.split(" ").map((i) => {
    if (i.length > longest) {
      longest = i.length;
      longestWord = i;
    }
  });
  return [longest, longestWord];
}

console.log(getLongestWord(``));
