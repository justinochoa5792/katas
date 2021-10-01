// Maximum Weight Allowed
// Create a function that returns true if the combined weight of a car car and the weight of the passengers p in the car is less than the maximum weight maxWeight the car is allowed to carry. Otherwise, return false. The weight of the car and the weight of the passengers are given in pounds. The maximum weight is given in kilograms.
// 1 pound = 0.453592 kilogram

function weightAllowed(car, p, maxWeight) {
  let c = car * 0.453592;
  let peep = p.reduce((a, b) => a + b * 0.453592, 0);
  return c + peep < maxWeight ? true : false;
}
