// Mean vs. Median
// Your goal is to implement the method meanVsMedian which accepts an odd-length array of integers and returns one of the following:
// 'mean' - in case mean value is larger than median value
// 'median' - in case median value is larger than mean value
// 'same' - in case both mean and median share the same value

function meanVsMedian(numbers) {
  let mean = Math.floor(numbers.reduce((a, b) => a + b) / numbers.length);
  let median = Math.floor(
    numbers.sort((a, b) => a - b)[Math.floor(numbers.length / 2)]
  );
  return mean > median ? "mean" : mean === median ? "same" : "median";
}
