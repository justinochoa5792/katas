// String Merge!
// Given two words and a letter, return a single word that's a combination of both words, merged at the point where the given letter first appears in each word. The returned word should have the beginning of the first word and the ending of the second, with the dividing letter in the middle. You can assume both words will contain the dividing letter.

function stringMerge(string1, string2, letter) {
  // Add code here :)
  const wordOne = string1.slice(0, string1.indexOf(letter));
  const wordTwo = string2.slice(string2.indexOf(letter));
  return wordOne + wordTwo;
}
