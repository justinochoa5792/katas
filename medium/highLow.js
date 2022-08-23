// Return the Highest and Lowest Numbers
// Create a function that accepts a string of space separated numbers and returns the highest and lowest number (as a string).

function highLow(str) {
  let number = str.split(" ").sort((a, b) => b - a);
  return number[0] + " " + number[number.length - 1];
}
