// Count characters in your string
// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

function count(string) {
  // TODO
  let a = string.split("");
  let obj = {};
  a.forEach(function (s) {
    obj[s] = (obj[s] || 0) + 1;
  });
  return obj;
}
