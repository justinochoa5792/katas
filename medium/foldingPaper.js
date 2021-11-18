// Folding a Piece of Paper
// Create a function that returns the thickness (in meters) of a piece of paper after folding it n number of times. The paper starts off with a thickness of 0.5mm.

function numLayers(n) {
  let count = 0;
  let i = 0.0005;
  while (count < n) {
    i *= 2;
    count++;
  }
  return `${i}m`;
}
