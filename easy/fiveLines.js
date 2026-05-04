// Training JS #21: Methods of String object--trim() and the string template
// Coding in function fiveLine, function accept 1 parameter:s. s is a string.
// Please return a string of 5 lines(newline symbol is \n). The first line has one s; Second line have two s; and so on..Fifth line have five s;

function fiveLine(s) {
  let arr = [];
  //coding here...
  for (let i = 1; i <= 5; i++) {
    arr.push(s.trim().repeat(i));
  }
  return arr.join("\n");
}
