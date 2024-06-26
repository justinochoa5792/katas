// Blood-Alcohol Content
// Output must be returned as a number data-type, greater than or equal to 0, with up to 4 decimal places. No error handling will be required.

function bloodAlcoholContent(drinks, weight, sex, time) {
  let r;
  r = sex === "male" ? 0.73 : 0.66;
  return +(
    ((drinks.ounces * drinks.abv * 5.14) / weight) * r -
    0.015 * time
  ).toFixed(4);
}
