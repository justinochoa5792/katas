// Get Sum of People's Budget
// Create the function that takes an array with objects and returns the sum of people's budgets.

function getBudgets(arr) {
  return arr.map((item) => item.budget).reduce((a, b) => a + b);
}
