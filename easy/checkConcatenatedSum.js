// Concatenated Sum
// The number 198 has the property that 198 = 11 + 99 + 88, i.e., if each of its digits is concatenated twice and then summed, the result will be the original number. It turns out that 198 is the only number with this property. However, the property can be generalized so that each digit is concatenated n times and then summed.

/*
function :-checkConcatenatedSum
inputs:- integers representing orginal number and number of times each digit should be repeated
output:- true of concatenated sum gives orginal number else false


*/

function checkConcatenatedSum(sum, n) {
  let concatenated = sum
    .toString()
    .split("")
    .map((el) => (el == "-" ? "" * 1 : el.repeat(n) * 1))
    .reduce((a, b) => a + b);
  return concatenated === Math.abs(sum) ? true : false;
}
