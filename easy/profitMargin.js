// Profit Margin
// Create a function that calculates the profit margin given costPrice and salesPrice. Return the result as a percentage formatted string, and rounded to one decimal. To calculate profit margin you subtract the cost from the sales price, then divide by sales price.
function profitMargin(costPrice, salesPrice) {
  let price = ((salesPrice - costPrice) / salesPrice) * 100;
  let newPrice = price.toFixed(1);
  return `${newPrice}%`;
}
