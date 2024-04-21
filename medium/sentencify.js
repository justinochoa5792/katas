// Pull your words together, man!
// Capitalise the first letter of the first word.
// Add a period (.) to the end of the sentence.
// Join the words into a complete string, with spaces.
// Do no other manipulation on the words.

function sentencify(words) {
  // TODO: Write your solution here!
  let caps = words[0].charAt(0).toUpperCase() + words[0].slice(1);
  return words.join(" ").concat(".").replace(words[0], caps);
}
