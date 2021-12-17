// Sum Greater Than Five
// Write a function that returns the sum of elements greater than 5, in the given array .

function sumFive(arr) {
  return arr.reduce((sum, cur) => {
    if (cur > 5) return sum + cur;
    return sum;
  }, 0);
}
