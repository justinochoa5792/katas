// Little Dictionary
// Create a function that takes an initial word and extracts any words that start with the same letters as the initial word.

function dictionary(initial, words) {
  return words.filter((word) => word.startsWith(initial));
}
