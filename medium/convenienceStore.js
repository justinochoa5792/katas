// Convenience Store
function changeEnough(change, amountDue) {
  let quarters = change[0] * 0.25;
  let dime = change[1] * 0.1;
  let nickel = change[2] * 0.05;
  let penny = change[3] * 0.02;
  let total = quarters + dime + nickel + penny;
  return total > amountDue ? true : false;
}
