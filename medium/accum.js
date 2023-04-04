// Compounding Letters
// Create a function that takes a string and returns a new string with each new character accumulating by +1. Separate each set with a dash.

function accum(str) {
  let repeat = str.split("").map((el, i) => el.repeat(i + 1));
  return repeat
    .map((el) => el.charAt(0).toUpperCase() + el.substr(1).toLowerCase())
    .join("-");
}
