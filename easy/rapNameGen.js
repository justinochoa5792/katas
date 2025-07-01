//Rap-Name Generator
// Write a function that takes a string representing a date-of-birth as an argument ("dd.mm.yy") and returns a string containing the generated Rap-Name.
// How to figure out one's Rap-Name:
// Find the average of the two digits that make up the DAY of birth. ("DD.mm.yy")
// Find the average of the two digits that make up the YEAR of birth. ("dd.mm.YY")
// Note: only integers are admissible, therefore round up averages that are decimal
// Note: if the average of the YEAR of birth is 0 (in the case of "dd.mm.00"), the format is '0ero'
// Return a single string containing both numbers represented in the following format - e.g, '3hree 6ix'
// format = the respective number replaces the first character for the word of said number. 'three' becomes '3hree'

function rapNameGen(dob) {
  //good luck!
  let day = Math.round(
    dob
      .split(".")[0]
      .split("")
      .reduce((a, b) => Number(a) + Number(b)) / 2
  ).toString();
  let year = Math.round(
    dob
      .split(".")[2]
      .split("")
      .reduce((a, b) => Number(a) + Number(b)) / 2
  ).toString();
  const words = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
    "twenty",
  ];
  return `${day.concat(words[day].substring(1))} ${year.concat(
    words[year].substring(1)
  )}`;
}
