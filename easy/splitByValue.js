// Split By Value
// all elements that are less than k are placed before elements that are not less than k;
// all elements that are less than k remain in the same order with respect to each other;
// all elements that are not less than k remain in the same order with respect to each other.

function splitByValue(k, elements) {
  let left = elements.filter((el) => el >= k);
  let right = elements.filter((el) => el < k);
  return [right, left].flat();
}
