// Write shortest function to calculate Average number of Array
// Given an array of integers, calculate the Average of these numbers.
// Main challenge is to write shortest and compact function for it.

function avg(a) {
  return a.reduce((a, b) => a + b) / a.length;
}
