// Simple Fun #263: Even Numbers Before Fixed
// Given array of integers sequence and some integer fixedElement, output the number of even values in sequence before the first occurrence of fixedElement or -1 if and only if fixedElement is not contained in sequence.

function evenNumbersBeforeFixed(sequence, fixedElement) {
  //coding and coding..
  let arr = sequence
    .map((el) => el.toString())
    .join("")
    .split(fixedElement);
  return arr.length == 1
    ? -1
    : arr[0].split("").filter((el) => Number(el) % 2 == 0).length;
}
