// Holiday VIII - Duty Free
// The purpose of this kata is to work out just how many bottles of duty free whiskey you would have to buy such that the savings over the normal high street price would effectively cover the cost of your holiday.
// You will be given the high street price (normPrice, in £ (Pounds)), the duty free discount (discount, in percent) and the cost of the holiday (in £).

function dutyFree(normPrice, discount, hol) {
  let discountedPrice = normPrice * (discount / 100);
  return Math.floor(hol / discountedPrice);
}
