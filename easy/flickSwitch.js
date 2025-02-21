// Flick Switch
// Create a function that always returns True/true for every item in a given list.
// However, if an element is the word 'flick', switch to always returning the opposite boolean value.

function flickSwitch(arr) {
  let on = true;
  return arr.map((item) => {
    if (item === "flick") {
      on = !on;
    }
    return on;
  });
}
