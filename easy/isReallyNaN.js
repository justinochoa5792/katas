// isReallyNaN
// Write a function isReallyNaN that returns true only if passed in an argument that evalutes to NaN, and returns false otherwise.

const isReallyNaN = (val) => {
  return Number.isNaN(val);
};
