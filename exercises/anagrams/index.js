// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
	// Solution 1 (didn't work)
	// Step 1: Use RegExp to remove spaces and punctuations const word = "HI THERE!!" word.replace(/[^/w]/g)
	// Step 2: Use .toLowerCase() to make both strings lower case
	// Step 3: Check if both strings are of equal length, if not, return false
	// Step 4: Turn each string into an array using split
	// Step 5: Sort the arrays
	// Step 6: Loop over the first array and check if it is equal to the second array
	return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
	return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}

module.exports = anagrams;

// Solution 2
// Step 1: Create a charMap for each cleansed string (use helper function)
// Step 2: Compare the length of the map keys to ensure they are the same length
// Step 3: Loop through one of the char maps and compare each value to the other charMap
// 	const aCharMap = buildCharMap(stringA);
// 	const bCharMap = buildCharMap(stringB);

// 	if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
// 		return false;
// 	}

// 	for (let char in aCharMap) {
// 		if (aCharMap[char] !== bCharMap[char]) {
// 			return false;
// 		}
// 	}

// 	return true;
// }

// function buildCharMap(str) {
// 	const charMap = {};

// 	for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
// 		charMap[char] = charMap[char] + 1 || 1;
// 	}

// 	return charMap;
