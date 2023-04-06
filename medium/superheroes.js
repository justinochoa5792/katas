// Superheroes
// Create a function that takes an array of superheroes / superheroines names and returns an array of only superheroe names ending in "man". Return the names in alphabetical order.

function superheroes(heroes) {
  return heroes
    .filter(
      (el) =>
        el.includes("man") && !el.includes("Woman") && !el.includes("woman")
    )
    .sort();
}
