// No Hidden Fees
// Given an array of prices prices and a "supposed" total t, return true if there is a hidden fee added to the total (i.e. the total is greater than the sum of prices), otherwise return false.

function hasHiddenFee(prices, t) {
  let total = prices
    .map((i) => Number(i.replace("$", "")))
    .reduce((a, b) => a + b);
  return `$${total}` === t ? false : true;
}
