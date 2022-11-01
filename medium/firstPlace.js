// Who's in First Place?
// Create a function that takes a string road and returns the car that's in first place. The road will be made of "=", and cars will be represented by letters in the alphabet.

function firstPlace(road) {
  if (road.match(/[a-z,A-Z]/g)) {
    return road.match(/[a-z,A-Z]/g).pop();
  } else if (road.includes("===")) {
    return "No car available";
  } else {
    return "No road available";
  }
}
