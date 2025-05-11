// Not above the one!
// Return a nested array or a tuple depending on the language:
// The first sequence being only the 1s and 0s from the original sequence.
// The second sequence being the indexes of the elements greater than 1 in the original sequence.

function binaryCleaner(arr) {
  //
  let greaterThanOne = arr.flatMap((el, i) => (el > 1 ? [i] : []));
  let lessThanOne = arr.filter((el) => el <= 1);
  return [lessThanOne, greaterThanOne];
}
