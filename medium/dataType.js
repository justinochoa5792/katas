// What's the Data Type?
// Create a function that returns the data type of a given variable. These are the eight data types this challenge will be testing for:
// Array
// Object
// String
// Number
// Boolean
// Null
// Undefined
// Date

function dataType(value) {
  if (value === null) {
    return "null";
  } else if (Array.isArray(value)) {
    return "array";
  } else if (value instanceof Date) {
    return "date";
  } else {
    return typeof value;
  }
}
