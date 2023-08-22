// Count a Specific Digit
// Write a function that counts the number of times a specific digit occurs in a range (inclusive). The function will look like:

function digitOccurrences(min, max, digit) {
  let total = [];
  let regex = new RegExp(`[${digit}]`, "gi");

  for (let i = min; i <= max; i++) {
    total.push(i);
  }
  return total
    .map((el) => el.toString().match(regex))
    .filter((el) => el !== null)
    .map((el) => el.length)
    .reduce((a, b) => a + b, 0);
}
