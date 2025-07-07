// Array Array Array
// You are given an initial 2-value array (x). You will use this to calculate a score.
// If both values in (x) are numbers, the score is the sum of the two. If only one is a number, the score is that number. If neither is a number, return 'Void!'.
// Once you have your score, you must return an array of arrays. Each sub array will be the same as (x) and the number of sub arrays should be equal to the score.

function explode(x) {
  let score = x.filter((el) => typeof el === "number");
  return score.length === 0
    ? "Void!"
    : Array(score.reduce((a, b) => a + b, 0)).fill(x);
}
