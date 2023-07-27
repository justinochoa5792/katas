// Burglary Series (09): Filter Values
// The insurance guy calls, the policy you chose doesn't cover values below 5000€, it wouldn't dignify your status you said at the time. Given an object with a list of the stolen items, return a copy of that list without the values below 5000.

function filterValues(obj) {
  return Object.fromEntries(
    Object.entries(obj).filter(([key, value]) => value >= 5000)
  );
}
