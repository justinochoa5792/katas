// Split Item Codes
// You have an array of item codes with the following format: "[letters][digits]"
// Create a function that splits these strings into their alphabetic and numeric parts.

function splitCode(item) {
  let split = [];
  let num = item.match(/[0-9]/g).join("");
  let letters = item.match(/[A-Z]/g).join("");
  split.push(letters, +num);
  return split;
}
