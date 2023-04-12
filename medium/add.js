// Adding Numbers
// Create a function that takes two number strings and returns their sum as a string.

function add(numberOne, numberTwo) {
  return numberOne === "" ||
    numberOne === null ||
    numberTwo === "" ||
    numberTwo === null
    ? "Invalid Operation"
    : String(Number(numberOne) + Number(numberTwo));
}
