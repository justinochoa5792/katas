// How old will I be in 2099?
// Your task is to write a function that takes two parameters: the year of birth and the year to count years in relation to. As Philip is getting more curious every day he may soon want to know how many years it was until he would be born, so your function needs to work with both dates in the future and in the past.

function calculateAge(age, year) {
  // enter your code here.
  let newAge = year - age;
  if (newAge < 0 && Math.abs(newAge) === 1) {
    return `You will be born in ${Math.abs(newAge)} year.`;
  } else if (newAge < 0) {
    return `You will be born in ${Math.abs(newAge)} years.`;
  } else if (newAge === 0) {
    return "You were born this very year!";
  } else if (newAge === 1) {
    return `You are ${Math.abs(newAge)} year old.`;
  } else {
    return `You are ${newAge} years old.`;
  }
}
