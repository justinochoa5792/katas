// Miles per gallon to kilometers per liter
// Create an application that will display the number of kilometers per liter (output) based on the number of miles per imperial gallon (input).

function converter(mpg) {
  //code to convert miles per imperial gallon to kilometers per liter
  return Number(((mpg * 1.609344) / 4.54609188).toFixed(2));
}
