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

// console.log(palindrome(12110));

function palindrome2(num) {
  const rev = num.toString().split("").reverse().join("");
  console.log(num);
  console.log(rev);
  return rev[0] == num ? true : false;
}
console.log(palindrome2(12110));
