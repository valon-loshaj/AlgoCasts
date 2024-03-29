// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
	/*Solution 2
	Create a string called result with the first letter of str capitalized
	iterate through every character in str
		if the character to the left of the space
			capitalize it an add it to result
		else add it to result
	*/
	let result = str[0].toUpperCase();
	for (let i = 1; i < str.length; i++) {
		if (str[i - 1] === " ") {
			result += str[i].toUpperCase();
		} else {
			result += str[i];
		}
	}
	return result;
}

module.exports = capitalize;

/* Solution 1
	Step 1: Need to use the .slice() method on strings 
	Step 2: Split the string into an array based on spaces using .split(' ')
	Step 3: Use .toCapitalize() to capitalize the first letter of each index
	Step 4: Join the array with spaces using .join(' ')
	*/
// let capitalizedStringArr = [];
// rawStringArr = str.split(" ");
// console.log("Raw String Array", rawStringArr);
// for (let element of rawStringArr) {
// 	let capitalizedStr = `${element
// 		.slice(0, 1)
// 		.toUpperCase()}${element.slice(1)}`;
// 	capitalizedStringArr.push(capitalizedStr);
// }
// return capitalizedStringArr.join(" ");
