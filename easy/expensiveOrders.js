// Expensive Orders
// Write a function that has two parameters: orders and cost. Return any orders that are greater than the cost.

function expensiveOrders(orders, cost) {
  return Object.fromEntries(
    Object.entries(orders).filter((el) => el[1] > cost)
  );
}
