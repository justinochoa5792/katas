// Reversible Inclusive List Ranges
// Write a function that, given the start and end values, returns an array containing all the numbers inclusive to that range. See examples below.

function reversibleInclusiveList(start, end) {
  let arr = [];
  if (start > end) {
    for (var i = start; i >= end; i--) {
      arr.push(i);
    }
    return arr;
  } else {
    for (var i = start; i <= end; i++) {
      arr.push(i);
    }
    return arr;
  }
}
