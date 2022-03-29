// Calculate the Profit
// You work for a manufacturer, and have been asked to calculate the total profit made on the sales of a product. You are given an object containing the cost price per unit (in dollars), sell price per unit (in dollars), and the starting inventory. Return the total profit made, rounded to the nearest dollar.

function profit(info) {
  let sell = info.sellPrice * info.inventory;
  let cost = info.costPrice * info.inventory;
  return Math.round(sell - cost);
}
