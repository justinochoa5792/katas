// Find the Amount of Potatoes
// Create a function to return the amount of potatoes there are in a string.
function potatoes(str) {
  return (str.match(/potato/g) || []).length;
}
