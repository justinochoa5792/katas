// Convert camelCase to snake_case
// Create a function that takes a string of words (or just one word) and converts each word from camelCase to snake_case.

function camelToSnake(str) {
  return str.replace(/[A-Z]/g, (el) => `_${el.toLowerCase()}`);
}
