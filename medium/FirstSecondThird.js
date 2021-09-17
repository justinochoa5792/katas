// First Class, Second Class and Third Class Levers
// Levers are simple machines with a rigid beam and a fulcrum. From the picture below, you can see that there are 3-types of levers: first class, second class and third class.
function determineLever(arr) {
  if (arr.indexOf("f") === 0) {
    return "third class lever";
  } else if (arr.indexOf("f") === 1) {
    return "first class lever";
  } else return "second class lever";
}
