// Buggy Code
// The challenge is to try and fix this buggy code, given the inputs true and false. See the examples below for the expected output.
// OLD
function has_bugs(buggy_code) {
	if (buggyCode) {
		return 'sad days'
	} else if {
		return 'it's a good day'
	}
}

//Fixed
function has_bugs(buggy_code) {
	if (buggy_code) {
		return 'sad days'
	} else{
		return "it's a good day"
	}
}