//  Capture the Rook
// Write a function that returns true if two rooks can attack each other, and false otherwise.

function canCapture([yourRook, opponentsRook]) {
  let yR = yourRook.split("");
  let oR = opponentsRook.split("");
  return yR[0] === oR[0] || yR[1] === oR[1] ? true : false;
}
