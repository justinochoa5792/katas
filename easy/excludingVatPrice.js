// Calculate Price Excluding VAT
// Write a function that calculates the original product price, without VAT.

//return price without vat
function excludingVatPrice(price) {
  // your code
  let vat = (15 * price) / (100 + 15);
  return price === null ? -1 : Number((price - vat).toFixed(2));
}
