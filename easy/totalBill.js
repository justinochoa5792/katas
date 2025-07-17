// Sushi-go-round (Beginner's)
// Sam would like your help to write a program for the cashier's machine to read the string and return the total amount a customer has to pay when they ask for the bill. The current price for the dishes are as follows:
// Red plates of sushi: $2 each - but every 5th one is free!

function totalBill(str) {
  let total = [];
  let splitStr = str.replaceAll(" ", "").split("");
  for (let i = 1; i <= splitStr.length; i++) {
    if (i % 5 == 0) {
      total.push(0);
    } else {
      total.push(2);
    }
  }
  return total.reduce((a, b) => a + b, 0);
}
