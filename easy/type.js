// What is type of variable?
// Create a function to return true type of variable, i.e.

function type(value) {
  return Array.isArray(value)
    ? "array"
    : value === null
    ? "null"
    : value instanceof Date
    ? "date"
    : typeof value;
}
