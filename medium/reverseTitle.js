// Reverse Titling
// Your stereotypical titleCase() function in JavaScript might capitalize the first letter of every word in a given sentence, leaving all the other letters as lowercase.
// The goal of this challenge, however, is to create a reverseTitle() function, which achieves the complete opposite! Make the first letter of every word lowercase, and the rest uppercase!

function reverseTitle(s) {
  return s
    .split(" ")
    .map(
      (el) =>
        `${el[0].toLowerCase()}${el.substring(1, el.length).toUpperCase()}`
    )
    .join(" ");
}
