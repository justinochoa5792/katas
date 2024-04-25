// Special Number (Special Numbers Series #5)
// A number is a Special Number if it’s digits only consist 0, 1, 2, 3, 4 or 5

function specialNumber(n) {
  //your code here
  return n.toString().match(/[^012345]/gi) === null ? "Special!!" : "NOT!!";
}
