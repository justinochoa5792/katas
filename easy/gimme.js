// Find the middle element
// As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

function gimme(triplet) {
  let middle = [...triplet].sort((a, b) => a - b)[1];
  return parseInt(
    triplet.map((el) => (el === middle ? triplet.indexOf(el) : "")).join("")
  );
}
