// Equality of 3 Values
// Create a function that takes three integer arguments (a, b, c) and returns the amount of integers which are of equal value.

function equal(a, b, c) {
  if (a === b && a === c) {
    return 3;
  } else if ((a !== b || a !== c) && (a === b || a === c)) {
    return 2;
  } else {
    return 0;
  }
}
