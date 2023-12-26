// The Feast of Many Beasts
// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.
// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

function feast(beast, dish) {
  //your function here
  let bst = [];
  bst.push(beast.split("").shift(0, 1));
  bst.push(beast.split("").pop());
  let food = [];
  food.push(dish.split("").shift(0, 1));
  food.push(dish.split("").pop());
  return bst.join("") === food.join("") ? true : false;
}
