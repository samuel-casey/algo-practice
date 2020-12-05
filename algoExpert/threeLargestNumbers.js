function findThreeLargestNumbers(array) {
	const result = [];

	for (let i of array) {
		console.log(array.indexOf(i));
		if (result.length < 3) {
			result.push(i);
		} else if (result.length === 3) {
			result.sort((a, b) => a - b);
			if (i >= result[2]) {
				result.shift();
				result.push(i);
			} else if (i >= result[0] && i < result[1]) {
				result.shift();
				result.unshift(i);
			} else if (i >= result[1] && i < result[2]) {
				result.shift();
				result.unshift(i);
			}
		}
	}

	return result.sort((a, b) => a - b);
}
