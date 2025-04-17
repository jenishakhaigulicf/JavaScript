let reversed = 0;
function palindrome(num) {
  const remainder = num % 10;
  const divisor = parseInt(num / 10);
  console.log(remainder, divisor);
  reversed = reversed * 10 + remainder;
  if (divisor != 0) {
    palindrome(divisor);
  } else {
    reversed = reversed * 10;
  }
  return reversed - num === 0 ? true : false;
}
// let reverse = 0;
// function palindrome(num) {
//   let temp = num;
//   let remainder = num % 10;
//   let result = parseInt(num / 10);
//   reverse = reverse * 10 + remainder;
//   if (result != 0) {
//     palindrome(result);
//   }
//   return reverse === temp;
// }

// palindrome(11211);

function palindrome2(num) {
  const rev = num.toString().split("").reverse().join("");
  console.log(num);
  console.log(rev);
  return rev[0] == num ? true : false;
}

console.log(palindrome2(11221));
