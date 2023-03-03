// Censor Words Longer Than Four Characters
// Create a function that takes a string and censors words over four characters with *.

function censor(str) {
  let word = str.split(" ");
  return word.map((i) => (i.length > 4 ? "*".repeat(i.length) : i)).join(" ");
}
