// Generate HTML links
// Write a function generateMenu() with the following inputs/output:
// menuItems: An array of objects (with url and text properties), which represents our menu items

function generateMenu(menuItems) {
  // Your code goes here..
  return menuItems.length === 0
    ? ""
    : menuItems.map((el) => `<a href="${el.url}">${el.text}</a>`).join("");
}
