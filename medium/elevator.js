// Closest elevator
// Given 2 elevators (named "left" and "right") in a building with 3 floors (numbered 0 to 2), write a function accepting 3 arguments (in order):
// left - The current floor of the left elevator
// right - The current floor of the right elevator
// call - The floor that called an elevator
// It should return the name of the elevator closest to the called floor ("left"/"right").
// In the case where both elevators are equally distant from the called floor, choose the elevator to the right.
// You can assume that the inputs will always be valid integers between 0-2.

function elevator(left, right, call) {
  // code on! :)
  const leftDist = Math.abs(call - left);
  const rightDist = Math.abs(call - right);
  if (leftDist > rightDist || leftDist === rightDist) {
    return "right";
  } else {
    return "left";
  }
}
