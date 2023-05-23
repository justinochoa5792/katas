// What Type of Triangle?
// Create a function which returns the type of triangle, given the side lengths. Return the following values if they match the criteria.
// No sides equal: "scalene"
// Two sides equal: "isosceles"
// All sides equal: "equilateral"
// Less or more than 3 sides given: "not a triangle"

function getTriangleType(arr) {
  let newSet = new Set(arr);
  if (arr.length > 3 || arr.length <= 2) {
    return "not a triangle";
  } else if (newSet.size === 3) {
    return "scalene";
  } else if (newSet.size === 2) {
    return "isosceles";
  } else if (newSet.size === 1) {
    return "equilateral";
  } else {
    return "not a triangle";
  }
}
