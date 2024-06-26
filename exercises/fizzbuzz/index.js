// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
	// Solution 1:
	// Step 1: Check if n is a number
	// Step 2: Check if a number is a multiple of 3
	// Step 3: Check if a number is a multiple of 5
	// Step 4: Check if a number is a multiple of 3 & 5
	for (let i = 1; i <= n; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			console.log("fizzbuzz");
		} else if (i % 3 === 0) {
			console.log("fizz");
		} else if (i % 5 === 0) {
			console.log("buzz");
		} else {
			console.log(i);
		}
	}
}

module.exports = fizzBuzz;
