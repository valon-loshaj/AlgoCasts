// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
	// Solution #1:
	// Step 0: Cleanse the data to ensure you received a number
	if (isNaN(n)) {
		return;
	}
	// Step 1: Derive the Math.sign value of the number to handle negatives
	else {
		let initialNeg = Math.sign(n);
		return (
			parseInt(
				n
					.toString()
					.split("")
					.reduce((rev, int) => int + rev, "")
			) * initialNeg
		);
	}
	// Step 2: Turn n into a string and split it into an array
	// Step 4: Reverse the array using reduce()
	// Step 5: Turn the reversed string back into a number using parseInt
	// Step 6: Use the derived Math.sign value to preserve negatives
}

module.exports = reverseInt;
