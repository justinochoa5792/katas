// Multidimensional Array into Single Dimensional Array
// Create a function that takes multidimensional array, converts into one dimensional array and returns it using recursion.

function flatten(arr) {
  const flat = [];
  arr.map((el) => {
    Array.isArray(el) ? flat.push(...flatten(el)) : flat.push(el);
  });
  return flat;
}
