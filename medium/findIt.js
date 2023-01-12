// Burglary Series (03): Is It Gone?
// Given an object of the stolen items and a string in lowercase representing the name of the pet (e.g. "rambo"), return:

function findIt(obj, name) {
  let newName = name.charAt(0).toUpperCase() + name.slice(1);
  if (Object.keys(obj).includes(name)) {
    return `${newName} is gone...`;
  } else {
    return `${newName} is here!`;
  }
}
