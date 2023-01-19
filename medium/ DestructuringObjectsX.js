// ES6: Destructuring Objects X
// Push the first names of all users in the names array.

let names = [];

let users = [
  { name: "John", email: "john@example.com" },
  { name: "Jason", email: "jason@example.com" },
  { name: "Jeremy", email: "jeremy@example.com" },
  { name: "Jacob", email: "jacob@example.com" },
];

const str = `
	for(let { name } of users) {
			names.push(name)
	}`;
