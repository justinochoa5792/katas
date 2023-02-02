// Length of Worm
// Given a string worm create a function that takes the length of the worm and converts it into millimeters. Each - represents one centimeter.

function wormLength(worm) {
  if (worm.includes("-") && !worm.includes("_")) {
    return `${worm.split("").length * 10} mm.`;
  } else {
    return "invalid";
  }
}
