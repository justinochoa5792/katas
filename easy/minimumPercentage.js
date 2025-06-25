// Minimum Percentage of Visitors that Ate All Foods
// You are the manager of an amusement park! Today you are doing research on the revenue from various food items sold throughout your venue. All the vendors working for you can report the percentage of visitors that eat that particular food that they sell. Based on this data, your current goal is to create a method to figure out the minimum percentage of all visitors that must have purchased an item from all of the available vendors in your park.

function minimumPercentage(foods) {
  //  <----  hajime!
  let total = foods.reduce((a, b) => a + b, 0);
  const minRequired = total - 100 * (foods.length - 1);
  return Math.max(minRequired, 0);
}
