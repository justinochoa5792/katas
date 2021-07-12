// Jay and Silent Bob Weight Convertor
// Jay and Silent Bob have been given a fraction of an ounce but they only understand grams. Given an ounce weighs 28.3495 grams, convert the amount of ounces to grams. Round the number of grams to one decimal place.

function convert(num) {
  let newNum = num * 28.3495;
  return `${newNum.toFixed(1)} grams`;
}
