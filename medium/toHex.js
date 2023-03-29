// Convert to Hex
// Create a function that takes a string's characters as ASCII and returns each character's hexadecimal value as a string.

function toHex(str) {
  return str
    .split("")
    .map((el, i) => el.charCodeAt().toString(16))
    .join(" ");
}
