// maxedOut
// For this task you will be given an array of numbers, each number in turn has to be cubed and once all numbers have been cubed all of them have to be added to get a final sum.
// If the final sum is less than or equal to the maximum value allowed for an Integer return the sum otherwise return "You've pushed me to the max!".

function maxedOut(arr) {
  // --> Push it to the limit
  let max = arr.map((el) => Math.pow(el, 3)).reduce((a, b) => a + b);
  return Number.MAX_SAFE_INTEGER >= max ? max : "You've pushed me to the max!";
}
