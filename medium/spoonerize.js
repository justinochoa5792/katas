// Spoonerize Me
// Your task is to create a function that takes a string of two words, separated by a space: words and returns a spoonerism of those words in a string, as in the above example. A "word" in the context of this kata can contain any of the letters A through Z in upper or lower case, and the numbers 0 to 9. Though spoonerisms are about letters in words in the domain of written and spoken language, numbers are included in the inputs for the random test cases and they require no special treatment.

function spoonerize(words) {
  //...aaaaand SPOONERIZE!
  let split = words.split(" ");
  let first = split[0]
    .substring(0, 1)
    .concat(split[1].substring(1, split[1].length));
  let second = split[1]
    .substring(0, 1)
    .concat(split[0].substring(1, split[0].length));
  return `${second} ${first}`;
}
