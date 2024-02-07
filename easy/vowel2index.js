// The old switcheroo
// that takes in a string and replaces all the vowels [a,e,i,o,u] with their respective positions within that string.

function vowel2index(str) {
  //code me
  return str
    .split("")
    .map((el, i) => el.replace(/[aeiou]/gi, i + 1))
    .join("");
}
