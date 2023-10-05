// Spin Around, Touch the Ground
// Given a list of directions to spin, "left" or "right", return an integer of how many full 360° rotations were made. Note that each word in the array counts as a 90° rotation in that direction.

function spinAround(turns) {
  // Here be dragons!
  let left = turns.filter((el) => el === "left");
  left = left.length * 90;

  let right = turns.filter((el) => el === "right");
  right = right.length * 90;

  let total = Math.abs(left - right);
  return total < 360 ? 0 : Math.floor(total / 360);
}
