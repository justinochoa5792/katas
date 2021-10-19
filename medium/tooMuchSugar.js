// Skip the Drinks with Too Much Sugar
// Write a function that takes an array of drinks and returns an array of only drinks with no sugar in them. Drinks that contain sugar (in this challenge) are:
// Cola
// Fanta

function skipTooMuchSugarDrinks(drinks) {
  return drinks.filter((drink) => (drink != "cola") & (drink != "fanta"));
}
