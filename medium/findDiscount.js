// Find the Discount
// Create a function that takes two arguments: the original price and the discount percentage as integers and returns the final price after the discount.

function dis(price, discount) {
  let reduce = (price * discount) / 100;
  let total = (price - reduce).toFixed(2);
  return Number(total);
}
