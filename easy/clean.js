// Remove Empty Items of Array
// In this Kata, you will learn how to remove all empty items in an Array.
// In JavaScript, empty items in arrays can be declared by [1, 2,,,3, 4] (Multiple commas without a value in that index)
// The values that are not given a value are empty items, and usually add up with others to form <# empty items>; In the example, <2 empty items>

function clean(arr) {
  return arr.filter(() => true);
}
