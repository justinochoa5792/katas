// uniquePush - No Dupes!
// Write a function that will take an array and a person object as parameters. The function will only push a "person" object onto the end of an array if someone with that phone number doesn't already exist in that array.

//only push obj onto arr if it has a unique phoneNumber
function uniquePush(arr, obj) {
  if (
    !obj.phoneNumber ||
    arr.some((person) => person.phoneNumber === obj.phoneNumber)
  ) {
    return false;
  } else {
    arr.push(obj);
    return true;
  }
}
