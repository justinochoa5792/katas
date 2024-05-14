// Discover The Original Price
// Given an item at $75 sale price after applying a 25% discount, the function should return the original price of that item before applying the sale percentage, which is ($100.00) of course, rounded to two decimal places.

function discoverOriginalPrice(discountedPrice, salePercentage) {
  // ...
  let discount = 1 - salePercentage / 100;
  return Number((discountedPrice / discount).toFixed(2));
}
