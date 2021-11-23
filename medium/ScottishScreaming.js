// Scottish Screaming
// A strong Scottish accent makes every vowel similar to an "e", so you should replace every vowel with an "e". Additionally, it is being screamed, so it should be in block capitals.
// Create a function that takes a string and returns a string.

function toScottishScreaming(str) {
  return str
    .toLowerCase()
    .replace(/[aeiou]/g, "e")
    .toUpperCase();
}
