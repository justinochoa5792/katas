// Currying functions: multiply all elements in an array
// This function must return another function, which takes a single integer as an argument and returns a new array.
// The returned array should consist of each of the elements from the first array multiplied by the integer.

function multiplyAll(arr) {
  return (multiplyNum = (num) => {
    return arr.map((el) => el * num);
  });
}
