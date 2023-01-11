// Flick Switch
// Create a function that always returns true for every item in a given array. However, if an element is the word "flick", switch to always returning the opposite boolean value.

function flickSwitch(arr) {
  let isSwitch = true;
  let newArr = [];
  for (let item of arr) {
    if (item === "flick") {
      isSwitch = !isSwitch;
      newArr.push(isSwitch);
    } else {
      newArr.push(isSwitch);
    }
  }
  return newArr;
}
