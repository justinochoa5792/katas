// Describe the shape
// You will be given the number of angles of a shape with equal sides and angles, and you need to return the number of its sides, and the measure of the interior angles.

function describeTheShape(angles) {
  return angles <= 2
    ? "this will be a line segment or a dot"
    : `This shape has ${angles} sides and each angle measures ${Math.floor(
        ((angles - 2) * 180) / angles
      )}`;
}
