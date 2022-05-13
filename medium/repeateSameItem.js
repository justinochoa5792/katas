// Repeat the Same Item Multiple Times
// Create a function that takes two arguments (item, times). The first argument (item) is the item that needs repeating while the second argument (times) is the number of times the item is to be repeated. Return the result in an array

function repeat(item, times) {
  let total = [];
  for (let i = 0; i < times; i++) {
    total.push(item);
  }
  return total;
}
