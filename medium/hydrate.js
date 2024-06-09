// Responsible Drinking
// Your fellow coders have bought you several drinks tonight in the form of a string. Return a string suggesting how many glasses of water you should drink to not be hungover.

function hydrate(s) {
  // your code here
  let glass = s
    .split(" ")
    .filter((el) => el.match(/\d/))
    .reduce((a, b) => Number(a) + Number(b));
  return glass > 1 ? `${glass} glasses of water` : `${glass} glass of water`;
}
