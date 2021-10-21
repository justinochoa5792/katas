// Volume of a Pizza
// Tom is a very methodic guy that loves geometry and pizza: he loves them so much that, before eating a pizza, he calculates its radius and its height. Now, he wants to know from you the total volume of pizza that he swallowed!

function volPizza(radius, height) {
  let total = Math.pow(radius, 2) * height * Math.PI;
  return Math.round(total);
}
