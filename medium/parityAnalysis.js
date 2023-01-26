// Same Parity?
// Create a function that takes a number as input and returns true if the sum of its digits has the same parity as the entire number. Otherwise, return false.

function parityAnalysis(num) {
  let split = num
    .toString()
    .split("")
    .map((i) => Number(i));
  if (num % 2 == 0 && split.reduce((a, b) => a + b) % 2 == 0) {
    return true;
  } else if (num % 2 !== 0 && split.reduce((a, b) => a + b) % 2 !== 0) {
    return true;
  } else {
    return false;
  }
}
