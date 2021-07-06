// Repeat String
// Create a function that takes a string txt and a number n and returns the repeated string n number of times.
// If given argument txt is not a string, return Not A String !!

function repeatString(txt, n) {
  if (typeof txt === "string") {
    return txt.repeat(n);
  }
  return "Not A String !!";
}
