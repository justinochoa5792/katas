// Sum The Array
// Your job is to add a method 'sum' to all array objects, which sums all the numbers in it. You should return 0 if the array is empty.

Array.prototype.sum = function () {
  return this.reduce((a, b) => a + b, 0);
};
