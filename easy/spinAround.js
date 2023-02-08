// Spin Around, Touch The Ground
// Given a list of directions to spin, "left" or "right", return an integer of how many full 360° rotations were made. Note that each word in the array counts as a 90° rotation in that direction.

function spinAround(r) {
  let left = r.filter((a) => a === "left").length * 90;
  let right = r.filter((a) => a === "right").length * 90;
  return Math.floor(Math.abs((left - right) / 360));
}
