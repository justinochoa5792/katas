// Total Count of Numbers in a MultiDimensional Array
// Create a function that takes a multidimensional array and return the total count of numbers in that array.

return arr.flat(Infinity).filter((el) => typeof el === "number").length;
