"use strict"

function solveEquation(a, b, c) {
	let arr = [];

	let x = b ** 2 - 4 * a * c;

	if (x > 0) {
		let x1 = (-b + Math.sqrt(x)) / (2 * a);
		let x2 = (-b - Math.sqrt(x)) / (2 * a);
		arr.push(x1, x2)
	} else if (x === 0) {
		let x = -b / (2 * a);
		arr.push(x)
	}

	return arr;
}

// let result = solveEquation(19, 15, 1);

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

	percent = Number(percent);
	contribution = Number(contribution);
	amount = Number(amount);
	countMonths = Number(countMonths);

	let rate = percent / 100;

	let monthlyRate = rate / 12;

	let bodyOfTheLoan = amount - contribution;

	let monthlyPayment = bodyOfTheLoan * (monthlyRate + (monthlyRate / (((1 + monthlyRate) ** countMonths) - 1)));

	let totalLoan = monthlyPayment * countMonths;

	totalLoan = parseFloat(totalLoan.toFixed(2));

	if (typeof(totalLoan) === "number") {
		return totalLoan;
	} else {
		return false;
	}
}

// let result = calculateTotalMortgage(15, 0, 10000, 36)

// console.log(result)

