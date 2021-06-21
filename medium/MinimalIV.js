// Minimal IV: if-else if-else Inferno
// Write a function that returns the boolean true if the given number is zero, the string "positive" if the number is greater than zero or the string "negative" if it's smaller than zero.

// original

function equilbrium (x) {
	if (x > 0) {
		return "positive"
	} else if (x < 0) {
		return "negative"
	} else {
		return true
	}
}

// Fix
function equilibrium (x) {
	if (x > 0) return "positive"
	if (x < 0)return "negative"
		return true
}