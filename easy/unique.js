// Which Number Is Not like the Others?
// Create a function that takes an array of numbers and returns the number that's unique.

function unique(arr) {
  return arr.filter((x) => arr.lastIndexOf(x) === arr.indexOf(x))[0];
}
