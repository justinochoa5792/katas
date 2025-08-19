// Format of a ticket number
// You must check if some ticket numbers are valid. To be valid, a ticket number must :
// Contain exactly 6 characters
// Contain : one letter then one digit then 4 letters
// 'letter' means a single character, unaccented, uppercase or lowercase, between a and z.

function nbrValidTickets(tickets) {
  //TODO : return the numbers of valid ticke number of the list
  let regex = /^[A-Za-z][0-9][A-Za-z]{4}$/;
  return tickets.filter((ticket) => regex.test(ticket)).length;
}
