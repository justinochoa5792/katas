// Evens and Odds
// This kata is about converting numbers to their binary or hexadecimal representation:
// If a number is even, convert it to binary.
// If a number is odd, convert it to hex.

function evensAndOdds(num) {
  //your code here
  return num % 2 === 0 ? num.toString(2) : num.toString(16);
}
