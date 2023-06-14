// Shopping for Memorial Day!
// Create a function that takes an array of objects and calculate the total based on the quantity of items purchased. Apply a 6% sales tax for each item when appropriate.

const tax = 0.06;

function checkout(cart) {
  return cart
    .map((el) =>
      el.taxable ? el.prc * el.qty + el.prc * el.qty * tax : el.prc * el.qty
    )
    .reduce((a, b) => a + b);
}
