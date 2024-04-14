// Age Range Compatibility Equation
// Given an integer (1 <= n <= 100) representing a person's age, return their minimum and maximum age range.

function datingRange(age) {
  //return min-max
  let min;
  let max;
  age <= 14
    ? (min = Math.floor(age - 0.1 * age))
    : (min = Math.floor(age / 2 + 7));
  age <= 14
    ? (max = Math.floor(age + 0.1 * age))
    : (max = Math.floor((age - 7) * 2));
  return `${min}-${max}`;
}
