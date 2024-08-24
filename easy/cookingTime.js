// Boiled Eggs
// Implement a function, which takes a non-negative integer, representing the number of eggs to boil. It must return the time in minutes (integer), which it takes to have all the eggs boiled.

function cookingTime(eggs) {
  // TODO
  return eggs > 8 ? Math.ceil(eggs / 8) * 5 : eggs == 0 ? 0 : 5;
}
