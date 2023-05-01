// Burglary Series (02): Most Valuable Item
// You call your spouse to inform his/her most precious item is gone! Given an object of stolen items, return the most expensive item on the list.

function mostExpensiveItem(obj) {
  return Object.keys(obj).reduce((a, b) => (obj[a] > obj[b] ? a : b));
}
