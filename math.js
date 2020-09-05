//Gleiche Vorzeichen
const both = (n1, n2) => Math.sign(n1) === Math.sign(n2)
//console.log(both(-1, 0));

//Fakultät: (n?) deckt die Fälle 0 und 1 ab, recursion breaks.
const factorial = n => (n ? n * factorial(--n) : 1)
//console.log(factorial(1));

//0 und 1 vertauschen
//flip = y => 1 - y;
//flip = y => Math.abs(--y);
const flip = y => [ 1, 0 ][y] //gibt Wert aus Array an y-ter Position
/* console.log(flip(1));
console.log(flip(0));
console.log(flip(-1));
console.log(flip(2)); */

//Winkelqualität für fehlenden Dreieckswinkel
const missingAngle = (angle1, angle2) => [ 'acute', 'right', 'obtuse' ][Math.sign(180 - angle1 - angle2 - 90) + 1]
//console.log(missingAngle(45, 45));

//Difference of Max and Min Numbers in Array
const diffMaxMin = arr => Math.max(...arr) - Math.min(...arr)
//console.log(diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]));

//Convert Kilometers to Miles and round
const kmtomiles = kilometers => (kilometers * 0.621371).toPrecision(6)
//console.log(kmtomiles(2));

//Leap Years
const isLeap = year => year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)
/* console.log(isLeap(2020));
console.log(isLeap(1800));
console.log(isLeap(2000));
console.log(isLeap(2019)); */

/** Sum of Cubes */
const sumOfCubes = nums => nums.reduce((sum, num) => sum + Math.pow(num, 3), 0)
/* console.log(sumOfCubes([1, 5, 9]));
console.log(sumOfCubes([5]));
console.log(sumOfCubes([])); */

/**Add up the Numbers from a Single Number */
const addUp = num => {
	return num ? num + addUp(--num) : 0
	return num * (num + 1) / 2
}

/** Absolute Sum*/
const getAbsSum = arr => arr.reduce((sum, num) => sum + Math.abs(num), 0)
//console.log(getAbsSum([2, -1, 4, 8, 10]));

/** Make a Circle with OOP*/
class Rectangle {
	constructor(sideA, sideB) {
		this.sideA = sideA
		this.sideB = sideB
	}
	getArea() {
		return this.sideA * this.sideB
	}
	getPerimeter() {
		return (this.sideA + this.sideB) * 2
	}
}

class Circle {
	constructor(radius) {
		this.radius = radius
	}
	getArea() {
		return Math.PI * this.radius ** 2
	}
	getPerimeter() {
		return 2 * Math.PI * this.radius
	}
}

let example = new Rectangle(2, 3)
// console.log(example.sideA);
// console.log(example.sideB);
// console.log(example);
// console.log(example.getArea());
// console.log(example.getPerimeter());

//unquote and use run to test these cases
// let q = new Circle(1);
// console.log(q.getArea());
// console.log(q.getPerimeter());

/**Even or Odd Number of Factors */
const factorGroup = num => (Number.isInteger(Math.sqrt(num)) ? 'odd' : 'even')
// console.log(factorGroup(33));
// console.log(factorGroup(36));
// console.log(factorGroup(7));

/** Basic Calculator
 *  Object with all operators and the input as selector.
*/
const calculator = (num1, operator, num2) => {
	return {
		'+' : num1 + num2,
		'-' : num1 - num2,
		'*' : num1 * num2,
		'/' : num2 ? num1 / num2 : 'Cannot divide by 0!',
	}[operator]
}
// console.log("Result: ", calculator(2, "+", 2));
// console.log("Result: ", calculator(4, "", 2));

/** Tower of Hanoi*/
const towerHanoi = discs => 2 ** discs - 1
// console.log("It needs ", towerHanoi(3), "steps to move to a new tower.");

/**Larger Swap */
largestSwap = num => num / 10 > num % 10
// num >= num.toString()[1] + num.toString()[0]
// console.log(largestSwap(33))

function mean(num) {
	return `${num}`.split('').reduce((sum, digit) => sum + +digit, 0) / `${num}`.split('').length
}
// console.log(mean(123))

/**Orthogonal Vector */
function isOrthogonal(arr1, arr2) {
	return arr1.reduce((acc, _, i) => acc + arr1[i] * arr2[i], 0) == 0
}
// console.log(isOrthogonal([ 1, 2 ], [ 2, -1 ]))
// console.log(isOrthogonal([ 1, 2, 0 ], [ 2, -1, 10 ]))

/**Instant JAZZ */
function jazzify(arr) {
	return arr.map(chord => (chord.endsWith(7) ? chord : chord + 7))
}
// console.log(jazzify([ 'F', 'E7', 'A7', 'Ab', 'Gm7', 'C7' ]))

function sumDigProd(...nums) {
	let sum = [ ...nums ].reduce((sum, num) => sum + num, 0) //sum as number
	arrayfy = sum => [ ...('' + sum) ].map(digit => +digit) //array with digits
	sum = arrayfy(sum)
	while (sum.length > 1) {
		sum = sum.reduce((product, digit) => product * digit, 1)
		sum = arrayfy(sum)
	}
	return sum[0]
}
// console.log(sumDigProd(16, 28))
// console.log(sumDigProd(1, 2, 3, 4, 5, 6))

function isPowerful(num) {
	let remainder = num
	let factors = []

	for (i = 2; i <= remainder; i++) {
		while (remainder % i === 0) {
			factors.push(i)
			remainder /= i
		}
	}
	factors = [ ...new Set(factors) ]

	return factors.every(factor => num % factor ** 2 == 0)
}
// console.log(isPowerful(674))
