// Training JS #29: methods of arrayObject---concat() and join()
// Coding in function bigToSmall. function accept 1 parameter arr(2D number array).
// Your task is: First to all, refer to the example above, flat output arr to a one-dimensional array.
// And then sort array in descending order.
// Finally, use the separator ">" to connect the elements into a string.
// Don't complain about the situation like 1>1 is not reasonable, it is just a separator.

function bigToSmall(arr) {
  //coding here...
  return arr
    .flatMap((el) => el)
    .sort((a, b) => b - a)
    .join(">");
}
