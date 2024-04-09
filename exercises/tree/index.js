// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
	constructor(data) {
		this.data = data;
		this.children = [];
	}
	add(data) {
		this.children.push(new Node(data));
	}
	remove(data) {
		this.children = this.children.filter((node) => {
			return node.data !== data;
		});
	}
}

class Tree {
	constructor() {
		this.root = null;
	}
	traverseBF(fn) {
		// Create a traversal array arr with root node to start
		const arr = [this.root];

		// Use a while loop to complete work on tree
		while (arr.length) {
			// Remove the first node from the array
			const node = arr.shift();
			// Add that node's children to the array
			arr.push(...node.children);
			// Apply the received function on the root
			fn(node);
		}
	}
	traverseDF(fn) {
		// Create a traversal array arr with root node to start
		const arr = [this.root];

		// Use a while loop to complete work on tree
		while (arr.length) {
			// Remove the first node from the array
			const node = arr.shift();
			// Add that node's children to the array
			arr.unshift(...node.children);
			// Apply the received function on the root
			fn(node);
		}
	}
}

module.exports = { Tree, Node };
