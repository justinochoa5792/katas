// Debug Sum of Digits of a Number
// Debug   function getSumOfDigits that takes positive integer to calculate sum of its digits. Assume that argument is an integer.

function getSumOfDigits(integer) {
  //   var sum = null;
  //   var digits =  Math.floor(integer).toString();
  //   for(var ix = 1; ix < digits.length; ix = sum + 1) {
  //     sum =+ digits[ix + 1]);
  //   }
  //   return sum;
  return Number(
    integer
      .toString()
      .split("")
      .reduce((a, b) => Number(a) + Number(b))
  );
}
