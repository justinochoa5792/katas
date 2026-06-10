// ScholarStem: Unit 6- Baby count!
// They have arrays of all the baby names they see each year, but the lists are sooo long! They don’t know how to calculate how many times one name is used.
// Given an array of names and a specific name string, return the number of times that specific name appears in the array.

function countName(anArr, name) {
  //anArr is an array of strings. name is a single string
  //This function should return the total number of times the name string is found in anArr.
  //Your code here
  return anArr.filter((el) => el.includes(name)).length;
}
