// Check three and two
// Given an array with exactly 5 strings "a", "b" or "c" (chars in Java, characters in Fortran), check if the array contains three and two of the same values.

function checkThreeAndTwo(array) {
  //your code here
  let filteredA = array.filter((el) => el == "a");
  let filteredB = array.filter((el) => el == "b");
  let filteredC = array.filter((el) => el == "c");
  return (
    (filteredA.length === 3 ||
      filteredB.length === 3 ||
      filteredC.length === 3) &&
    (filteredA.length === 2 || filteredB.length === 2 || filteredC.length === 2)
  );
}
