// Find the nth Tetrahedral Number
// A tetrahedron is a pyramid with a triangular base and three sides. A tetrahedral number is a number of items within a tetrahedron.

function tetra(n) {
  return (n * (n + 1) * (n + 2)) / 6;
}
