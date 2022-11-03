// Emphasise the Words
// Create a function that returns a capitalized version of the string passed. The first letter of each word in the string should be capitalized while the rest of each word should be lowercase.

function emphasise(str) {
  let string = str.split(" ");
  return string
    .map((item) =>
      item ? item[0].toUpperCase() + item.toLowerCase().substring(1) : ""
    )
    .join(" ");
}
