// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length - i - 1; j++) {
			const previous = arr[j];
			const element = arr[j + 1];
			if (previous > element) {
				arr[j] = element;
				arr[j + 1] = previous;
			}
		}
	}
	return arr;
}

function selectionSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		let indexOfMin = i;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[indexOfMin]) {
				indexOfMin = j;
			}
		}
		if (indexOfMin !== i) {
			const minValue = arr[indexOfMin];
			arr[indexOfMin] = arr[i];
			arr[i] = minValue;
		}
	}
	return arr;
}

function mergeSort(arr) {
	if (arr.length === 1) {
		return arr;
	}
	const center = Math.floor(arr.length / 2);
	const left = arr.slice(0, center);
	const right = arr.slice(center);
	return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
	const results = [];
	while (left.length && right.length) {
		left[0] < right[0]
			? results.push(left.shift())
			: results.push(right.shift());
	}
	// left.length ? results.push(left.shift()) : results.push(right.shift());
	return [...results, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
