// Return Last Item
// Create a function that returns the last value of the last item in an array or string.

function lastItem(input) {
  let text = input.slice(input.length - 1);
  return text[0];
}
