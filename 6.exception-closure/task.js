function parseCount (number) {
    let result = Number.parseFloat(number);
    if (Number.isNaN(result)) {
        throw new Error("Невалидное значение");
    }
    return result;
}

function validateCount (number) {
    try {
        return parseCount(number);
    } catch (error) {
        return error;
    }
}

class Triangle {
    constructor (firstSide, secondSide, thirdSide) {
        this.firstSide = firstSide;
        this.secondSide = secondSide;
        this.thirdSide = thirdSide;
        if ((firstSide + secondSide) < thirdSide || (firstSide + thirdSide) < secondSide || (secondSide + thirdSide) < firstSide) {
            throw new Error ('Треугольник с такими сторонами не существует');
        }
    }
    get perimeter() {
        return this.firstSide + this.secondSide + this.thirdSide;
    }
    get area() {
        return Number(Math.sqrt(this.perimeter / 2 * (this.perimeter / 2 - this.firstSide) * (this.perimeter / 2 - this.secondSide) * (this.perimeter / 2 - this.thirdSide)).toFixed(3));
    }
}

function getTriangle (firstSide, secondSide, thirdSide) {
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
        }
    }
}