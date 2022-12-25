// Can You Spare a Square?
// Although the number of squares per roll of TP varies significantly, we'll assume each roll has 500 sheets, and the average person uses 57 sheets per day.
// Create a function that will receive an object with two key/values:
// people ⁠— Number of people in the household.
// tp ⁠— Number of rolls.
// Return a statement telling the user if they need to buy more TP!

function tpChecker(home) {
  let sheets = (home.tp * 500) / 57;
  let total = Math.floor(sheets / home.people);
  return total < 15
    ? `Your TP will only last ${total} days, buy more!`
    : `Your TP will last ${total} days, no need to panic!`;
}
