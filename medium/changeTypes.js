// Changing Mixed Types
// Create a function that changes all the elements in an array as follows:
// Add 1 to all even integers, nothing to odd integers.
// Concatenates "!" to all strings and make the first letter of the word a capital letter.
// Changes all boolean values to its opposite.

function changeTypes(arr) {
  return arr.map((el) => {
    if (typeof el === "string") {
      return `${el[0].toUpperCase() + el.substring(1)}!`;
    } else if (typeof el === "number" && el % 2 === 0) {
      return el + 1;
    } else if (typeof el === "number" && el % 1 === 0) {
      return el;
    } else {
      return !el;
    }
  });
}
