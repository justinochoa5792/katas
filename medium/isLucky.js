// Lucky Bus Ticket
// In Russia regular bus tickets usually consist of 6 digits. The ticket is called lucky when the sum of the first three digits equals to the sum of the last three digits. Write a function to find out whether the ticket is lucky or not. Return true if so, otherwise return false. Consider that input is always a string. Watch examples below.

function isLucky(ticket) {
  return ticket.match(/[a-z]/gi) == null &&
    ticket.length === 6 &&
    ticket
      .substring(0, 3)
      .split("")
      .reduce((a, b) => Number(a) + Number(b)) ==
      ticket
        .substring(3, ticket.length)
        .split("")
        .reduce((a, b) => Number(a) + Number(b))
    ? true
    : false;
}
