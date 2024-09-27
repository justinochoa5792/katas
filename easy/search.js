// Filter Coffee
// The search function should return a string of prices for the coffees beans you can afford. The prices in this string are to be sorted in ascending order.

function search(budget, prices) {
  // return array of prices that are within budget
  return prices
    .filter((el) => el <= budget)
    .sort((a, b) => a - b)
    .join(",");
}
