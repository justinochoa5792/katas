// Longest Word
// Write a function that finds the longest word in a sentence and returns it. If two or more words are the biggest, return the word closest to the start of the sentence. Characters such as apostrophe, commas, periods, etc count as letters (e.g. O'Connor is 8 characters long).

function longestWord(sentence) {
  let arr = sentence.split(" ").sort((a, b) => b.length - a.length);
  return arr[0];
}
