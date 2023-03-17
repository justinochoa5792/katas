// Flatten the Curve
// Given an array of integers, replace every number with the mean of all numbers.

function flattenCurve(arr) {
	let mean = arr.reduce((a,b) => a + b,0) / arr.length
	return arr.fill(Number(mean.toFixed(1)))
}