// Number to Reversed Array
// Create a function that takes a number and returns an array with the digits of the number in reverse order.

function reverseArr(num) {
	let reverse =  num.toString().split('').reverse()
	return reverse.map(item => Number(item))
	}