// lucky number
// Write a function to find if a number is lucky or not. If the sum of all digits is 0 or multiple of 9 then the number is lucky.

function isLucky(n) {
  //your code here
  let total = n
    .toString()
    .split("")
    .reduce((a, b) => Number(a) + Number(b));
  return total % 9 == 0;
}
