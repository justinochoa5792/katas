// The average length
// Given an array of strings of the same letter type. Return a new array, which will differ in that the length of each element is equal to the average length of the elements of the previous array.

function averageLength(array) {
  let mean = Math.round(
    array.map((el) => el.length).reduce((a, b) => a + b) / array.length
  );
  return array.map((el) => el.slice(0, 1).repeat(mean));
}
