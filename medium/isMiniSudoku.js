// Mini Sudoku
// For this task, you will be given a completed 3x3 square, in the form of a two-dimensional array. Create a function that checks to make sure this 3x3 square contains each number from 1-9 exactly once. Make sure there are no duplicates, and no numbers outside this range.

function isMiniSudoku(square) {
  let flatArr = square.flat();
  if (flatArr.includes(0)) {
    return false;
  } else if (new Set(flatArr).size !== flatArr.length) {
    return false;
  } else {
    return true;
  }
}
