// Loose Change!
// Create change_count() to return a dollar amount of how much change you have!

// Remember you have a CHANGE dictionary to work with ;)

function changeCount(change) {
  let amount = change
    .split(" ")
    .map((el) =>
      el === "dime"
        ? 0.1
        : el == "penny"
        ? 0.01
        : el == "nickel"
        ? 0.05
        : el == "quarter"
        ? 0.25
        : 1.0
    );
  return `$${amount.reduce((a, b) => a + b).toFixed(2)}`;
}
