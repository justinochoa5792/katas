// Sum of differences in array
// Your task is to sum the differences between consecutive pairs in the array in descending order.

function sumOfDifferences(arr) {
  return arr
    .sort((a, b) => b - a)
    .map((el, i, arr) => el - arr[i + 1])
    .filter((el) => !isNaN(el))
    .reduce((a, b) => a + b, 0);
}
