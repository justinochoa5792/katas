// Form The Minimum
// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).

function minValue(values) {
  //your code here
  let set = new Set(values);
  return Number(
    Array.from(set)
      .sort((a, b) => a - b)
      .join("")
  );
}
