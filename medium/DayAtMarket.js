// A Day at the Market
// Create a function that returns the name of the man who can bring home the most items. The parameters are given as follows:
// Bill's amount of money.
// Will's amount of inventory space.
// The item's price.
// The item's size.

function whoWinsTonight(coins, space, price, size) {
  let Coins = Math.floor(coins / price);
  let Space = Math.floor(space / size);

  if (Coins < Space) {
    return "Will";
  } else if (Coins > Space) {
    return "Bill";
  } else return "Tie";
}
