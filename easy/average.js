// Average Scores
// Create a function that returns the average of an array of numbers ("scores"), rounded to the nearest whole number. You are not allowed to use any loops (including for, for/in, while, and do/while loops).

function average(scores) {
  // code to calculate the average
  return Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
}
