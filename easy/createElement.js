// The createElement method should take in a content, tag, and properties, similar to the React method. We should be able to call this method with just content like createElement('Hello World') and by default it should create a div with the content "Hello World".
// The createUnorderedList method should take in list, which is an array strings and create a ul element, whose children are li elements containing the values from the list. Given an array ['apples', 'oranges', 'bananas'], the createUnorderedList method should return a react element with this heirarchy:

var React = require("react");

function createElement(content, tag = "div", props = {}) {
  // create a react element here
  return React.createElement(tag, props, content);
}

function createUnorderedList(list) {
  // list is expected to be an array of strings
  const items = list.map((item, index) =>
    React.createElement("li", { key: index }, item)
  );
  return React.createElement("ul", {}, items);
}
