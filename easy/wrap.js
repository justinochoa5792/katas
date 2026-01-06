// Happy Birthday
// Write the method wrap that calculates that!
// A box has a height, a width and a length (in cm). The ribbon is crossed on the side with the largest area. Opposite this side (also the side with the largest area) the loop is bound, calculate with 20 cm more tape.

function wrap(height, width, length) {
  let [a, b, c] = [height, width, length].sort((x, y) => x - y);
  return 2 * (c + b) + a * 4 + 20;
}
