// Burglary Series (07): Make a Copy
// Your spouse wants a copy of the stolen items. Given an object containing the stolen items, return a copy of that list.
function makeCopy(obj) {
  return (newObj = Object.assign({}, obj));
}
