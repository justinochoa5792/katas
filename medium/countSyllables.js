// Count the Syllables
// Create a function that returns the number of syllables in a simple string. The string is made up of short repeated words like "Lalalalalalala" (which would have 7 syllables

function countSyllables(str) {
  let newStr = str.toLowerCase();
  return newStr.length / 2;
}
