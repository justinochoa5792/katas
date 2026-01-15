// Recycle!
// There are 3 recycling boxes: Red: Plastic, Green: Glass, Blue: Card.
// You want to sort the rubbish according to the material and return the number of items in each box as an array (or a tuple in Python):

function recycleMe(recycle) {
  // your code here
  let plastic = recycle.filter((el) => el > 0).length;
  let glass = recycle.filter((el) => el < 0).length;
  let card = recycle.filter((el) => el === 0).length;
  return [plastic, glass, card];
}
