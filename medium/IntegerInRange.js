// Integer in Range?
// Create a function that validates whether a number n is within the bounds of lower and upper. Return false if n is not an integer.

function intWithinBounds(n, lower, upper) {
  return Number.isInteger(n) && n >= lower && n < upper ? true : false;
}
