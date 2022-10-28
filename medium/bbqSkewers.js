// Barbecue Skewers
// You are in charge of the barbecue grill. A vegetarian skewer is a skewer that has only vegetables (-o). A non-vegetarian skewer is a skewer with at least one piece of meat (-x).
// For example, the grill below has 4 non-vegetarian skewers and 1 vegetarian skewer (the one in the middle).

function bbqSkewers(grill) {
  let nonVeg = grill.filter((item) => item.includes("x"));
  let veg = grill.filter((item) => !item.includes("x") && item.includes("o"));
  return [veg.length, nonVeg.length];
}
