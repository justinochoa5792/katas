// Get the mean of an array
// Return the average of the given array rounded down to its nearest integer.

function getAverage(marks) {
  //TODO : calculate the downward rounded average of the marks array
  return Math.floor(marks.reduce((a, b) => a + b, 0) / marks.length);
}
