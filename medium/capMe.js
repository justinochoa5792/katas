// Name Array Capping
// Create a method that accepts an array of names, and returns an array of each name with its first letter capitalized.

function capMe(names) {
  return names.map((el) =>
    el.substring(0, 1).toUpperCase().concat(el.substring(1).toLowerCase())
  );
}
