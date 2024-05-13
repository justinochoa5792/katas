// Count all the sheep on farm in the heights of New Zealand
// Farmer knows the total amount of sheep, this is a third parameter. You need to return the amount of sheep lost (not returned to the farm) after final sheep counting on Saturday.

function lostSheep(friday, saturday, total) {
  //your code here
  let fridayTotal = friday.reduce((a, b) => a + b, 0);
  let saturdayTotal = saturday.reduce((a, b) => a + b, 0);
  return (fridayTotal + saturdayTotal - total) * -1;
}
