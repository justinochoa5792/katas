// Percentage Changed
// Create a function that takes an old price oldPrice, a new price newPrice, and returns what percent the price decreased or increased. Round the percentage to the nearest whole percent.

function percentageChanged(oldPrice, newPrice) {
  newPrice = Number(newPrice.split("$")[1]);
  oldPrice = Number(oldPrice.split("$")[1]);
  let total = Math.abs(newPrice - oldPrice);
  total = Math.round((total / oldPrice) * 100);
  return newPrice > oldPrice ? `${total}% increase` : `${total}% decrease`;
}
