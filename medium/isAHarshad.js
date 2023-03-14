// Harshad Numbers
// Write a function to determine whether the given number is a Harshad number.

function isHarshad(num) {
  let total = num
    .toString()
    .split("")
    .map((i) => Number(i))
    .reduce((a, b) => a + b);
  return num % total === 0 ? true : false;
}
