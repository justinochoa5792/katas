// Drink Sorting
// You will be given an array of drinks, with each drink being an object with two properties: name and price. Create a function that has the drinks array as an argument and return the drinks objects sorted by price in ascending order.

function sortDrinkByPrice(drinks) {
  return drinks.sort((a, b) => {
    return a.price - b.price;
  });
}
