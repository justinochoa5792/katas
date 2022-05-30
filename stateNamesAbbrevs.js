// State Names and Abbreviations
// Create a function that filters out an array of state names into two categories based on the second parameter.
// Abbreviations abb
// Full names full

function filterStateNames(arr, type) {
  return type === "abb"
    ? arr.filter((state) => state.length === 2)
    : arr.filter((states) => states.length > 2);
}
