// Who is going to pay for the wall?
// Your code will show Full name of the neighbor and the truncated version of the name as an array. If the number of the characters in name is less than or equal to two, it will return an array containing only the name as is"

function whoIsPaying(name) {
  //your code here
  return name.length > 2 ? [name, name.slice(0, 2)] : [name];
}
