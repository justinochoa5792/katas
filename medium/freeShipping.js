// Online Shopping
// Create a function that determines whether a shopping order is eligible for free shipping. An order is eligible for free shipping if the total cost of items purchased exceeds $50.00.

function freeShipping(order) {
  let total = Object.values(order).reduce((a, b) => a + b);
  return total >= 50 ? true : false;
}
