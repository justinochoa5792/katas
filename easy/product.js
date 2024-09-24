// Exclamation marks series #13: Count the number of exclamation marks and question marks, return the product
// Count the number of exclamation marks and question marks, return the product.

function product(string) {
  //coding and coding....
  let exclamation =
    string.match(/[!]/gi) == null ? 0 : string.match(/[!]/gi).length;
  let question =
    string.match(/[?]/gi) == null ? 0 : string.match(/[?]/gi).length;
  return exclamation * question;
}
