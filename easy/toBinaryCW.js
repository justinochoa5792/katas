// Convert Integer to Binary
// Convert integers to binary as simple as that. You would be given an integer as a argument and you have to return its binary form. To get an idea about how to convert a decimal number into a binary number, visit here.

function toBinary(n) {
  //Be Ready for Large Numbers. Happy Coding ^_^
  return (n >>> 0).toString(2);
}
