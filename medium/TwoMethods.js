// Two Regular Expression Methods
// There are three methods (exclude compile) that you can use with regular expression literals. Use these two methods to fix the code.
// One method returns a boolean if there is a match. The other method returns an iterator from a search.

// Original
function twoMethods() {
  // find and equals are not regular expression methods.  Replace them.
  let methodOne = /hello/.find("hello")[0] === "hello";
  let methodTwo = /hello/.equals("hello"); // returns a boolean
  return methodOne && methodTwo;
}

// Remix
function twoMethods() {
  // find and equals are not regular expression methods.  Replace them.
  let methodOne = /hello/.exec("hello")[0] === "hello";
  let methodTwo = /hello/.test("hello"); // returns a boolean
  return methodOne && methodTwo;
}
