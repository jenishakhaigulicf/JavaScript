const vowelsAva = [];
const vowels = ["a", "e", "i", "o", "u"];
function getVowels(str) {
  for (let char of str.toLowerCase()) {
    if (vowels.includes(char) && !vowelsAva.includes(char))
      vowelsAva.push(char);
  }
}

// if you want to get the count
let count = 0;
const getVowelsCount = (str) => {
  for (char of str) {
    if (vowels.includes(char)) count++;
  }
  console.log(count);
};

getVowels("aeirst");
getVowelsCount("aeirst");
console.log(vowelsAva);
