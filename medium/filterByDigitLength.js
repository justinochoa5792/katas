// Filter by Digit Length
// Create a function that filters out an array to include numbers that only have a certain number of digits.

function filterDigitLength(arr, num) {
  return arr.filter((digits) => digits.toString().length === num);
}
