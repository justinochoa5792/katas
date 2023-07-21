// RegEx Exercise 2: Find HTML Tags
// Create a regular expression to find all (opening and closing) HTML tags with their attributes. Assume that tag attributes may not contain < and > (inside quotes too).

const REGEXP = /<[^<>]+>/g;
