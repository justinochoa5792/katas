// Narcissistic Number
// A Narcissistic Number is a number that is the sum of its own digits each raised to the power of the number of digits.

function isNarcissistic(n) {
  let m = 1,
    count = 0;
  while (n / m > 1) {
    m *= 10;
    count++;
  }
  let sum = 0,
    temp = n;
  while (temp) {
    sum += Math.pow(temp % 10, count);
    temp = Math.floor(temp / 10);
  }
  return sum === n;
}
