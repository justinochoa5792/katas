// Right Shift by Division
// Write a function that mimics (without the use of >>) the right shift operator and returns the result from the two given integers.

function shiftToRight(x, y) {
  let total = Math.pow(2, y);
  return Math.floor(x / total);
}
