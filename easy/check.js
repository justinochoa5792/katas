// Strictly Increasing or Decreasing
// Create a function that takes an array and determines whether it's strictly increasing, strictly decreasing, or neither.

function check(arr) {
  var aa = arr.slice(1);
  if (aa.every((a, i) => arr[i] > a)) {
    return "decreasing";
  } else if (aa.every((a, i) => arr[i] < a)) {
    return "increasing";
  } else {
    return "neither";
  }
}
