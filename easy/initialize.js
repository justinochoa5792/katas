// Initialize
// Create a function that takes in an array of full names and returns the initials.

function initialize(names) {
  return names.map(
    (el) =>
      el
        .split(" ")
        .map((y) => y[0])
        .join(". ") + "."
  );
}
