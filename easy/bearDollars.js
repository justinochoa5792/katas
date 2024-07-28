// Bear the Freelancer
// Bear the Freelancer charges clients on the hour, but he adjusts his rate depending on how close friends he is with his clients. For close friends, he charges $25 per hour, for his other friends he charges $50, for his acquaintances his hourly rate is $100, reaching $125 for all his other clients.
// The total amount of dollars Bear the Freelancer has invoiced for his work. For an empty array, return 0.

function bearDollars(arr) {
  return arr
    .map((el) => {
      if (el[1].toLowerCase().includes("close friend")) {
        return el[0] * 25;
      } else if (el[1].toLowerCase().includes("acquaintance")) {
        return el[0] * 100;
      } else if (el[1].toLowerCase().includes("friend")) {
        return el[0] * 50;
      } else {
        return el[0] * 125;
      }
    })
    .reduce((a, b) => a + b, 0);
}
