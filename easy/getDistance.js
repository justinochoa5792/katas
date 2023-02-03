// Distance Between Two Points
// In this challenge, you have to find the distance between two points placed on a Cartesian plane. Knowing the coordinates of both the points, you have to apply the Pythagorean theorem to find the distance between them.

function getDistance(a, b) {
  let distance = Math.sqrt(
    Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2)
  ).toFixed(3);
  return Number(distance);
}
