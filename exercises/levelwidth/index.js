// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
	// create an array that will be used to maintain the state of the tree traversal
	const arr = [root, "s"];
	// create a counter that maintains the width of the levels fo the tree
	const counter = [0];
	// use a while loop to do the work of traversing the tree
	while (arr.length > 1) {
		const node = arr.shift();
		if (node === "s") {
			counter.push(0);
			arr.push("s");
		} else {
			arr.push(...node.children);
			counter[counter.length - 1]++;
		}
	}
	return counter;
}

module.exports = levelWidth;
