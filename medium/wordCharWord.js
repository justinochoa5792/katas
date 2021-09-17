// WordCharWord
// Create a function that will put the first argument, a character, between every word in the second argument, a string.
function add(char, str) {
  return str.split(" ").join(char);
}
