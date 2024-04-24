// Colour Association
// You are given a 2D array, composed of a colour and its 'common' association in each array element. The function you will write needs to return the colour as 'key' and association as its 'value'.

function colourAssociation(array) {
  // We <3 colours..
  return array.map(([colour, association]) => ({ [colour]: association }));
}
