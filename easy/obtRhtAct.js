// Acute, Obtuse, or Right?
// In this Kata, you will be given an array of side lengths for a triangle. Your job is to figure out whether the triangle should be classified as Right, Acute, or Obtuse. To learn more about Right, Acute, or Obtuse triangles see here - Acute and Obtuse Triangles.

function obtRhtAct(sideLen) {
  const sides = [...sideLen].sort((a, b) => a - b);
  const [a, b, c] = sides;

  if (a + b <= c) return -1;

  if (a * a + b * b === c * c) return 1;
  if (a * a + b * b < c * c) return 0;

  return 2;
}
