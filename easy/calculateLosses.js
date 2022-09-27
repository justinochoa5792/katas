// Burglary Series (01): Calculate Total Losses
// You just returned home to find your mansion has been robbed! Given an object of the stolen items, return the total amount of the burglary (number). If nothing was robbed, return the string "Lucky you!".

function calculateLosses(obj) {
  let object = Object.values(obj);
  return object.length === 0
    ? "Lucky you!"
    : Object.values(obj).reduce((a, b) => a + b);
}
