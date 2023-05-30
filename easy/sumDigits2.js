// Sum of Digits Between Two Numbers
// Create a function that sums the total number of digits between two numbers, inclusive. For example, between the numbers 19 and 22 we have:

function sumDigits(a, b) {
  let arr = [];
  for (let i = a; i <= b; i++) {
    arr.push(
      i
        .toString()
        .split("")
        .map(Number)
        .reduce((a, b) => a + b, 0)
    );
  }
  return arr.reduce((a, b) => a + b, 0);
}
