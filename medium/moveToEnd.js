// Moving to the End
// Write a function that moves all elements of one type to the end of the array.

function moveToEnd(arr, el) {
  let filter = arr.filter((i) => i === el);
  return arr.filter((i) => i !== el).concat(filter);
}
