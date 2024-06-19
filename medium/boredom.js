// The Office II - Boredom Score
// sentiment:
// <=80: 'kill me now'
// < 100 & > 80: 'i can handle this'
// 100 or over: 'party time!!

function boredom(staff) {
  let arr = Object.values(staff);
  arr = arr.map((el) => {
    if (el == "accounts") {
      return 1;
    } else if (el == "finance") {
      return 2;
    } else if (el == "canteen") {
      return 10;
    } else if (el == "regulation") {
      return 3;
    } else if (el == "trading" || el == "change") {
      return 6;
    } else if (el == "IS") {
      return 8;
    } else if (el == "retail") {
      return 5;
    } else if (el == "cleaning") {
      return 4;
    } else {
      return 25;
    }
  });
  let total = arr.reduce((a, b) => a + b);

  return total <= 80
    ? "kill me now"
    : (total < 100) & (total > 80)
    ? "i can handle this"
    : "party time!!";
}
