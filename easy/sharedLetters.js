// Letters Shared between Two Words
// Create a function that returns the number of characters shared between two words.

function sharedLetters(str1, str2) {
  str1 = str1.split("");
  str2 = str2.split("");
  return new Set(str1.filter((char) => str2.includes(char))).size;
}
