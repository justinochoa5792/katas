// Sum of Two Digit Numbers
// For this challenge, you are supposed to find the sum of the digits of a two-digit number. Sounds easy, right? But for this challenge, I expect you to find the sum of the digits mathematically.

function twoDigitSum(n) {
  return (n % 10) + Math.floor(n / 10);
}
