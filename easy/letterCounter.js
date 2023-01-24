// Count Letters in a Word Search
// Create a function that counts the number of times a particular letter shows up in the word search.

function letterCounter(arr, letter) {
  return arr.flat().filter((i) => i === letter).length;
}
