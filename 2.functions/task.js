function getArrayParams(...arr) {
	let min = Infinity;
	let max = -Infinity;
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		if (min > arr[i]) {
			min = arr[i]
		}

		if (max < arr[i]) {
			max = arr[i]
		}

		sum = sum + arr[i];
	};

	let avg = (sum / arr.length);

	avg = +avg.toFixed(2);

	return {
		min: min,
		max: max,
		avg: avg
	};
}

// console.log(getArrayParams(-99, 99, 10))

function summElementsWorker(...arr) {

	if (arr.length === 0) {
		return 0
	}

	let sum = arr.reduce((acc, val) => acc + val, 0);
	return sum;
}

function differenceMaxMinWorker(...arr) {

	if (arr.length === 0) {
		return 0
	}

	let dif = Math.max(...arr) - Math.min(...arr);
	return dif
}

function differenceEvenOddWorker(...arr) {
	let sumEvenElement = 0;
	let sumOddElement = 0;

	if (arr.length === 0) {
		return 0
	}

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement = sumEvenElement + arr[i];
		} else {
			sumOddElement = sumOddElement + arr[i];
		}
	}
	dif = sumEvenElement - sumOddElement;

	return dif
}

function averageEvenElementsWorker(...arr) {
	let sumEvenElement = 0;
	let countEvenElement = 0;

	if (arr.length === 0) {
		return 0
	}

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement = sumEvenElement + arr[i];
			countEvenElement = countEvenElement + 1;
		}
	}

	let average = sumEvenElement / countEvenElement;
	return average
}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;

	for (let i = 0; i < arrOfArr.length; i++) {
		let item = arrOfArr[i];
		let result = func(...item);
		if (result > maxWorkerResult) {
			maxWorkerResult = result;
		}
	}
	return maxWorkerResult;
}

const arr = [
	[10, 10, 11, 20, 10],
	[67, 10, 2, 39, 88],
	[72, 75, 51, 87, 43],
	[30, 41, 55, 96, 62]
];
console.log(makeWork(arr, summElementsWorker)); // максимум из 61, 206, 328, 284 => 328
console.log(makeWork(arr, differenceMaxMinWorker)); // максимум из 10, 86, 44, 66 => 86
console.log(makeWork(arr, differenceEvenOddWorker)); // максимум из 39, -6, -184, 92 => 92
console.log(makeWork(arr, averageEvenElementsWorker)); // максимум из 12.5, 33.333, 72, 62.666 => 72