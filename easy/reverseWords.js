// Reverse Words in a String
//  Given an input string, reverse the string word by word, the first word will be the last, and so on.

function reverseWords(string) {
  return string.split(" ").reverse().join(" ");
}
