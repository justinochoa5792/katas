// Pizza Payments
// Kate and Michael want to buy a pizza and share it. Depending on the price of the pizza, they are going to divide the costs:
// If the pizza is less than €5,- Michael invites Kate, so Michael pays the full price.
// Otherwise Kate will contribute 1/3 of the price, but no more than €10 (she's broke :-) and Michael pays the rest.
// How much is Michael going to pay? Calculate the amount with two decimals, if necessary.

function michaelPays(costs) {
  //Insert your code here
  let num = Number(costs.toFixed(2));
  let kateShare = Math.min(costs / 3, 10);
  let michaelShare = costs - kateShare;

  return costs < 5 ? Number(costs.toFixed(2)) : Number(michaelShare.toFixed(2));
}
