// function isPalindrome(str) {
//   let reverse = "";
//   let n = str.length - 1;
//   for (let i = n; i >= 0; i--) {
//     reverse = reverse + str[i];
//   }
//   return reverse === str;
// }
// console.log(isPalindrome("sasasa"));

function isPalindrome(str) {
  const char = str.toLowerCase().split("");
  const f = char.filter((c) => {
    const ascii = c.charCodeAt(0);
    return (ascii >= 97 && ascii <= 122) || (ascii >= 65 && ascii <= 90);
  });
  const temp = JSON.parse(JSON.stringify(f));
  const reverse = temp.reverse().join("");
  return f.join("") === reverse;
}

// function isPalindrome(str) {
//   const str_f = str.replace(/\W/g, "").toLowerCase();
//   const reverse = str_f.split("").reverse().join("");
//   return str_f === reverse;
// }

console.log(isPalindrome("A man, a plan, a canal, Panama"));
console.log(isPalindrome("hello"));
// console.log(isPalindrome("ollo ollo ollo "));
// console.log(isPalindrome("o"));
