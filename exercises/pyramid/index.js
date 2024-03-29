// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, level = "") {
	/*
	solution 2 (recursion)
	step 1: base case
		if (row === n), we've reached the bottom of the pyramid
	step 2: how do we know if work is completed for a certain level
		if (column >= 2 * n - 1)
	step 3: what arguments do we need to pass in when re-calling our function
		n = total number of rows
		row = current row we are on
		level = current state of level
	step 4: how do we determine if we need to put a # or space
		if (midpoint - row <= column && midpoint + row >= column) {
				level += "#";
			} else {
				level += " ";
			}
	*/
	if (row === n) {
		return;
	}

	if (level.length === 2 * n - 1) {
		console.log(level);
		return pyramid(n, row + 1);
	}

	const midpoint = Math.floor((2 * n - 1) / 2);
	let add;
	if (midpoint - row <= level.length && midpoint + row >= level.length) {
		add = "#";
	} else {
		add = " ";
	}
	pyramid(n, row, level + add);
}
module.exports = pyramid;

/*
	solution 1 (iterative)
	step 1: create an iterative row loop starting at 0 and going up to n
	step 2: for each row, loop through the columns in a nested loop
	step 3: determine if you need to enter a space or # for each column
	step 4: console log each row
	*/
// 	let midpoint = Math.floor((2 * n - 1) / 2);
// 	for (let row = 0; row < n; row++) {
// 		let level = "";
// 		for (let column = 0; column < 2 * n - 1; column++) {
// 			if (midpoint - row <= column && midpoint + row >= column) {
// 				level += "#";
// 			} else {
// 				level += " ";
// 			}
// 		}
// 		console.log(level);
// 	}
// }
