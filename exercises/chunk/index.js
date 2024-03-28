// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
	// Solution 2
	// Step 1: Declare a new chunked array that is empty
	// Step 2: Create index start at 0
	// Step 3: While loop index is less than array.length
	// Step 4: Push a slice of original array which is equal to index plus size
	// Step 5: Add size to index
	let chunkedArr = [];
	let index = 0;
	while (index < array.length) {
		chunkedArr.push(array.slice(index, index + size));
		index += size;
	}
	return chunkedArr;
}

module.exports = chunk;

// Solution 1
// Step 1: create an array for the chunks which will be returned
// Step 2: loop through the unchunked array
// Step 3: Retrieve the last element in chunked array
// Step 4: Check to see if the chunk doesn't exist or if the length is equal to the chunk size
// Step 5: Push new chunk into chunked array with current element
// Step 6: Else, add the current element into the chunk
// let chunkedArr = [];
// for (let element of array) {
// 	const last = chunkedArr[chunkedArr.length - 1];
// 	switch (true) {
// 		case !last || last.length === size:
// 			chunkedArr.push([element]);
// 			break;
// 		default:
// 			last.push(element);
// 			break;
// 	}
// }
// return chunkedArr;
