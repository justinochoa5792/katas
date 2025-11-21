// New £5 notes collectors!
// Given a salary and the array of bills, calculate your disposable income for a month and return it as a number of new £5 notes you can get with that amount. If the money you've got (or do not!) doesn't allow you to get any £5 notes return 0.

function getNewNotes(salary, bills) {
  // code it away!!!
  let totalBills = bills.reduce((a, b) => a + b, 0);
  let total = salary - totalBills;
  return total < 0 ? 0 : Math.floor(total / 5);
}
