// Product ID from URL
// All URLs are formatted similarly, first there is a domain exampleshop.com, then we have name of a product separated by dashes(-), then we have letter p indicating start of product ID, then an actual ID (no limit on length), and lastly 8-digit long representation of date when product got added followed by .html.It can look like this:

function getProductId(url) {
  //your code here
  let split = url.split("p-");
  return split[split.length - 1].split("-")[0];
}
