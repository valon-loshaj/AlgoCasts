// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, stair = "") {
	/*
	solution 2 (recursion)
	step 1: base case = 
		if (row === n) then we have hit the end of the problem
	step 2: if column is equal to n, then we have hit the end of the column
	step 3: if the length of the stair string is less than or equal to the row number we're working on, we add a '#', otherwise add a space
	
	tips:
	- figure out the bare minimnum pieces of information to represent your problem
	- give reasonable defaults to the bare minimum pieces of info
	- check the base case, is there any work left ot do? if not, return
	- do some work, call the function again, make sure to change the arguements in some fashion to avoid infinite loops
	*/
	if (n === row) {
		return;
	}

	if (n === stair.length) {
		console.log(stair);
		return steps(n, row + 1);
	}

	const add = stair.length <= row ? "#" : " ";
	steps(n, row, stair + add);
}

module.exports = steps;

/*
	solution 1
	-step 1: n defines the number of rows and columns
		-step 2: write a for loop that iterates through rows
		-step 3: for each row we create an empty string 'stair'
			-step 4: iterate through columns
			-step 5: if the current column is equal to or less than current row, add a #
		step 6: else add a space to stair
		step 7: console log stair
	*/
// for (let row = 0; row < n; row++) {
// 	let stair = "";
// 	for (let col = 0; col < n; col++) {
// 		if (col <= row) {
// 			stair += "#";
// 		} else {
// 			stair += " ";
// 		}
// 	}
// 	console.log(stair);
// }
