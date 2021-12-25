// Sum of Minimums
// Create a function that takes a 2D array arr returns the sum of the minimum value in each row.

function sumMinimums(arr) {
  let firstRow = Math.min(...arr[0]);
  let secondRow = Math.min(...arr[1]);
  let thirdRow = Math.min(...arr[2]);

  if (arr.includes(arr[3]) === true) {
    let fourthRow = Math.min(...arr[3]);
    return firstRow + secondRow + thirdRow + fourthRow;
  } else return firstRow + secondRow + thirdRow;
}
