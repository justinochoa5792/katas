// Grid index
// You are given an n by n ( square ) grid of characters, for example:
// You have to find the characters in these indexes of the grid if you think of the indexes as:

function gridIndex(grid, indices) {
  let flat = grid.flat();
  return indices.map((i) => flat[i - 1]).join("");
}
