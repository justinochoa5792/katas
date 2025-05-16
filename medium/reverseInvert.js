// Reverse and Invert
// Reverse and invert all integer values in a given list.

function reverseInvert(array) {
  //your code here
  let numbers = array.filter((el) => Number.isInteger(el));
  return numbers.map(
    (el) =>
      parseInt(el.toString().split("").reverse().join("")) * Math.sign(el) * -1
  );
}
