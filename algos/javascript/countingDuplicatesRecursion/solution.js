// take in array
// create empty object with each color as a key
// iterate through array and increment count if the array has that color

/**
 * @param {obj[]} // an array of objs, with arrays inside of them
 * @return {} // an obj with the colors as keys, and the count as values
 */

const colorsArr = [
	{ colors: ['blue', 'purple', 'red'] },
	{ colors: ['black', 'orange', 'blue'] },
	{ colors: ['green', 'red', 'blue', 'orange', 'green'] },
];

const countObj = {};
let countingDups = (arr, index = 0, countObj = {}) => {
	// console.log(countObj)
	if (index === arr.length) {
		console.log(countObj);
		return countObj;
	}
	const tempArr = arr[index].colors;
	tempArr.forEach((color) => {
		if (countObj[color]) {
			countObj[color] = countObj[color] + 1;
		} else {
			countObj[color] = 1;
		}
	});
	countingDups(arr, index + 1, countObj);
};

console.log(countingDups(colorsArr));
