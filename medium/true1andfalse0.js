// True Ones, False Zeros
// Create a function that returns an array of booleans from a given number by iterating through the number one digit at a time and appending true into the array if the digit is 1 and false otherwise.

function integerBoolean(n) {
  return n.split("").map((num) => (num === "1" ? true : false));
}
