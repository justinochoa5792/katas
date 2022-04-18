// Next Element in Arithmetic Sequence
// Create a function that returns the next element in an arithmetic sequence. In an arithmetic sequence, each element is formed by adding the same constant to the previous element.

function nextElement(arr) {
  let last = arr[arr.length - 1];
  let diff = arr[1] - arr[2];
  return last === arr[0] ? last : last - diff;
}
