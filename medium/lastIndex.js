// Recreating the String.length Property
// Create a function which returns the length of a string, WITHOUT using String.length property.

function length(s) {
  return s.lastIndexOf("");
}
