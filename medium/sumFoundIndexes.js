// Sum of Found Indexes
// Create a function which takes in an array of numbers and a number to find. Return the sum of every index in the array which matches the chosen number.

function sumFoundIndexes(arr, n) {
  let num = arr
    .map((el, i) => {
      if (el === n) {
        return i;
      } else {
        return;
      }
    })
    .filter((i) => i !== undefined);
  return num.reduce((a, b) => a + b, 0);
}
