// String Flips
// Create a function that takes a string as the first argument, and a (string) specification as a second argument. If the specification is "word", return a string with each word reversed while maintaining their original order. If the specification is "sentence", reverse the order of the words in the string, while keeping the words intact.

function flip(str, spec) {
  return spec === "word"
    ? str
        .split(" ")
        .map((el) => el.split("").reverse().join(""))
        .join(" ")
    : str.split(" ").reverse().join(" ");
}
