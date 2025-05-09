// Turn any word into a beef taco
// If you like Taco Bell, you will be familiar with their signature doritos locos taco. They're very good.
// Why can't everything be a taco? We're going to attempt that here, turning every word we find into the taco bell recipe with each ingredient.
// We want to input a word as a string, and return a list representing that word as a taco.
// Key
// all vowels (except 'y') = beef
// t = tomato
// l = lettuce
// c = cheese
// g = guacamole
// s = salsa

function tacofy(word) {
  // Code here
  const chars = {
    "a": "beef",
    "e": "beef",
    "e": "beef",
    "i": "beef",
    "o": "beef",
    "u": "beef",
    "t": "tomato",
    "l": "lettuce",
    "g": "guacamole",
    "c": "cheese",
    "s": "salsa",
  };
  let taco = word
    .replace(/[^aeioutlcgs]/gi, "")
    .split("")
    .map((el) => el.toLowerCase().replace(/[aeioutlcgs]/gi, (el) => chars[el]));

  return ["shell", ...taco, "shell"];
}
