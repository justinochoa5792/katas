// Applying Discounts
// Create a function that applies a discount d to every number in the array.

function getDiscounts(nums, d) {
  let discount = parseFloat(d) / 100;
  return nums.map((number) => number * discount);
}
