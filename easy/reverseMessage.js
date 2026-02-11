// Reversed Message
// Reverse a message so that the words and letters passed into it are made lower case and reversed. In addition, capitalise the first letter of the newly reversed words. If a number or symbol(!#,>) is now in the first position of the word, no capitalisation needs to occur.

function reverseMessage(str) {
  return str
    .toLowerCase()
    .split(" ")
    .reverse()
    .map((el) =>
      el
        .split("")
        .reverse()
        .join("")
        .substring(0, 1)
        .toUpperCase()
        .concat(el.split("").reverse().join("").slice(1)),
    )
    .join(" ");
}
