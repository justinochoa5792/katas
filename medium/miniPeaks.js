// Mini Peaks
// Write a function that returns all the elements in an array that are strictly greater than their adjacent left and right neighbors.

function miniPeaks(arr) {
  let total = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1] && arr[i] > arr[i - 1]) {
      total.push(arr[i]);
    }
  }
  return total;
}
