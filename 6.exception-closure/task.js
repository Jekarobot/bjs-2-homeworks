function parseCount(value) {
	const parsedValue = Number.parseFloat(value);
	if (isNaN(parsedValue)) {
		throw new Error("Невалидное значение");
	}
	return parsedValue;
}

function validateCount(value) {
	try {
		return parseCount(value);
	} catch (Error) {
		return Error;
	}
}

class Triangle {
	constructor(firstSide, secondSide, thirdSide) {
		if (firstSide + secondSide < thirdSide ||
			firstSide + thirdSide < secondSide ||
			secondSide + thirdSide < firstSide) {
			throw new Error("Треугольник с такими сторонами не существует")
		}
		this.firstSide = firstSide;
		this.secondSide = secondSide;
		this.thirdSide = thirdSide;
	}

	get perimeter() {
		return this.firstSide + this.secondSide + this.thirdSide;
	}

	get halfPerimeter() {
		return this.perimeter / 2;
	}

	get area() {
		let area = Math.sqrt(this.halfPerimeter * (this.halfPerimeter - this.firstSide) *
			(this.halfPerimeter - this.secondSide) *
			(this.halfPerimeter - this.thirdSide));
		return +area.toFixed(3);
	}
}

function getTriangle(firstSide, secondSide, thirdSide) {
	try {
		return new Triangle(firstSide, secondSide, thirdSide);
	} catch (error) {
		return {
			get area() {
				return "Ошибка! Треугольник не существует";
			},
			get perimeter() {
				return "Ошибка! Треугольник не существует";
			}

		};
	}
}