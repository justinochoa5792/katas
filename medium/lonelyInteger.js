// Lonely Integer
// You are given an array of integers having both negative and positive values, except for one integer which can be negative or positive. Create a function to find out that integer.

function lonelyInteger(arr) {
  return arr.find((b) => !arr.includes(-b));
}
