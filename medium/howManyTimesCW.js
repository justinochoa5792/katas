// How many times should I go?
// In this kata you should complete a function in order to know after how many visit it will be better to take an annual pass. The function take 2 arguments annual_price and individual_price.

function howManyTimes(annualPrice, individualPrice) {
  // code here
  let visit = 0;
  let total = 0;
  while (annualPrice > total && individualPrice !== 0) {
    visit++;
    total = individualPrice * visit;
  }
  return individualPrice == 0 ? Infinity : visit;
}
