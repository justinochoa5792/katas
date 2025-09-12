// Aerial Firefighting
// You must return the minimum number of waterbombs it would take to extinguish the fire in the string.

function waterbombs(fire, w) {
  //#your code is here
  return fire.split("Y").reduce((total, section) => {
    return total + Math.ceil(section.length / w);
  }, 0);
}
