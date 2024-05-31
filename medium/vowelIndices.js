// Find the vowels
// We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

function vowelIndices(word) {
  //your code here
  let vowel = word
    .split("")
    .map((el, i) => (el.match(/[aeiouy]/gi) === null ? "" : i + 1));
  return vowel.filter((n) => n);
}
