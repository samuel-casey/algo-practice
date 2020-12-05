function threeLargestNumbers(array) {
	const largestArr = [null, null, null];
	for (let i of array) {
		updateLargest(largestArr, i);
	}
	return largestArr;
}

function updateLargest(threeLargest, num) {
	if (threeLargest[2] === null || num > threeLargest[2]) {
		shiftAndUpdate(threeLargest, num, 2);
		console.log(threeLargest);
	} else if (threeLargest[1] === null || num > threeLargest[1]) {
		shiftAndUpdate(threeLargest, num, 1);
		console.log(threeLargest);
	} else if (threeLargest[0] === null || num > threeLargest[0]) {
		shiftAndUpdate(threeLargest, num, 0);
		console.log(threeLargest);
	}
}

function shiftAndUpdate(array, num, idx) {
	for (let i = 0; i <= idx; i++) {
		if (i === idx) {
			array[i] = num;
		} else {
			array[i] = array[i + 1];
		}
	}
}

console.log(threeLargestNumbers([1, 2, 3, 4, -2, 99]));
