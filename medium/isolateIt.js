// Training JS #26: methods of arrayObject---map()
// If the string length is an even number, use the insert method. for example: "abcd" should became "ab|cd". "|" should be inserted between ab and cd.
// If the string length is an odd number, use the replacement method. for example: "abcde" should became "ab|de". Character c will be replaced by |.

function isolateIt(arr) {
  //coding here...
  return arr.map((el) =>
    el.length % 2 !== 0
      ? el
          .slice(0, Math.ceil(el.length / 2) - 1)
          .concat("|")
          .concat(el.slice(Math.ceil(el.length / 2)))
      : el
          .slice(0, Math.ceil(el.length / 2))
          .concat("|")
          .concat(el.slice(Math.ceil(el.length / 2)))
  );
}
