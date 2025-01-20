// Borrower Speak
// As a result, the borrowers talk very very quietly. They find that capitals and punctuation of any sort lead them to raise their voices and put them in danger.
// The young borrowers have begged their parents to stop using caps and punctuation.

function borrow(s) {
  return s.replace(/\W/g, "").toLowerCase();
}
