// Fix the Bug: Simple Array Manipulation
// Help fix all the bugs in the function incrementItems! It is intended to add 1 to every element in the array!

// original
function incrementItems(arr) {
  for (let i = 0; i < array.length; i++) arr[i] === arr[i] + 1;
  return array;
}

// fix
function incrementItems(arr) {
  for (let i = 0; i < arr.length; i++) arr[i]++;
  return arr;
}
