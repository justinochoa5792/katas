// Get the Area of a Country
// Create a function that takes a country's name and its area as arguments and returns the area of the country's proportion of the total world's landmass.

function areaOfCountry(name, area) {
  let mass = (area / 148940000) * 100;
  return `${name} is ${mass.toFixed(2)}% of the total world's landmass`;
}
