// Number of Stickers
// Given a Rubik's Cube with a side length of n, return the number of individual stickers that are needed to cover the whole cube.

function howManyStickers(n) {
  return Math.pow(n, 2) * 6;
}
