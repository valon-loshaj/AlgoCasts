// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
	let isPalindrome = false;
	// Step 1: Determine if the arguement is an empty string or a number
	if (str === "" || Number.isInteger(str)) {
		return isPalindrome;
	}
	// Step 2: Derive the reverse value of str
	else {
		return str.split("").reduce((rev, char) => char + rev, "") === str;
	}
	// Step 3: Return the result of the operator str === reversedStr
}

module.exports = palindrome;
