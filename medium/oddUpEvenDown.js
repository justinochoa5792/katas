// Odd Up, Even Down
// Create a function that goes through the array, incrementing (+1) for each odd-valued number and decrementing (-1) for each even-valued number.

function transform(arr) {
  return arr.map((num) => (num % 2 === 0 ? num - 1 : num + 1));
}
