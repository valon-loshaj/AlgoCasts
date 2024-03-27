// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
	// Step 1: Turn str into an array using .split
	// Step 2: Use reduce to aggregate final reversed string
	return str
		.split("")
		.reduce((reversed, character) => character + reversed, "");
}

module.exports = reverse;

// Solution #1:
// Step 1: Turn the string into an array using .split
// const arr = str.split("");
// Step 2: Reverse the array using .reverse
// arr.reverse();
// Step 3: Convert that reversed array into a string
// return arr.join("");

// Solution #2:
// Step 1: Creat an empty string
// let reversed = "";
// Step 2: Loop through str and add the characters to the new empty string
// for (let character of str) {
// 	reversed = character + reversed;
// }
// Step 3: Return the new string
// return reversed;
