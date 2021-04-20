// Minimal I: If Boolean Then Boolean
// In the Code tab you will find a code that is missing a single character in order to pass the tests. However, YOUR GOAL is to submit a function as minimalist as possible. Use the tips in the Tips section down below.
// Write a function that returns true if the given integer is even, and false if it's odd.

// original solution:
function isEven(n) {
	if n % 2 === 0 {
		return true
	}
	else if n % 2 === 1 {
		return false
	}
}
// my solution : 
function isEven(n) {
	return n % 2 === 0 ? true : false
	
}