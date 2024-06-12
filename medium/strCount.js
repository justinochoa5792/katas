// Count strings in objects
// Create a function strCount (takes an object as argument) that will count all string values inside an object. For example:

function strCount(obj) {
  // Your code here
  var c = 0;
  for (var i in obj) {
    if (typeof obj[i] == "object") c += strCount(obj[i]);
    if (typeof obj[i] == "string") c += 1;
  }
  return c;
}
