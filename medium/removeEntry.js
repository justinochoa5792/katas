// Burglary Series (08): Remove an Entry
// Your spouse tells you that one of the items on the list wasn't stolen, it is in your castle in Transilvania. Given an object of the stolen items and an item name, return a copy without that item on the list.

function removeEntry(obj, itemName) {
  let copy = Object.assign({}, obj);
  delete copy[itemName];
  return copy;
}
