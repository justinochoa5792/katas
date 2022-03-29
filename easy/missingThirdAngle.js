// Missing Third Angle
// You are given 2 out of 3 angles in a triangle, in degrees.

function missingAngle(angle1, angle2) {
  if (angle1 + angle2 === 90) {
    return "right";
  } else if (angle1 + angle2 > 90) {
    return "acute";
  } else return "obtuse";
}
