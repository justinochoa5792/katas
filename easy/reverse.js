// Reverse the Order of Words with Five Letters or More
// Write a function that takes a string of one or more words as an argument and returns the same string, but with all five or more letter words reversed. Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

function reverse(str) {
  return str
    .split(" ")
    .map((i) => (i.length >= 5 ? i.split("").reverse().join("") : i))
    .join(" ");
}
