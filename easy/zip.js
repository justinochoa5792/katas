// Zip it!
// that merges the corresponding elements of two sequences using a specified selector function fn (a block in Ruby)
// if arrays have different lengths, go up to the minimum length and then stop.

Array.prototype.zip = function (arr, fn) {
  // code me
  const length = Math.min(this.length, arr.length);
  const result = [];

  for (let i = 0; i < length; i++) {
    result.push(fn(this[i], arr[i]));
  }

  return result;
};
