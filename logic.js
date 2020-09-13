/**
 * flip Boolean
 * @param {*} bool a boolean value goes in
 */
const reverse = bool => {
	//return typeof bool === "boolean" ? !bool : "boolean expected";
	if (typeof bool !== 'boolean') return 'boolean expected'
	return !bool
}
/* console.log(reverse(true));
console.log(reverse(false));
console.log(reverse(0));
console.log(reverse(null)); */

//Does the Object Contain a Given Key?
const hasKey = (obj, key) => key in obj //Suche in Prototypenkette(!)
//obj.hasOwnProperty(key);          //besser
//Object.keys(obj).includes(key);   //Array mit Keys wird durchsucht (y/n)
/* console.log(hasKey({ a: 44, b: 45, c: 46 }, "d"));
console.log(hasKey({ craves: true, midnight: true, snack: true }, "morning"));
console.log(hasKey({ pot: 1, tot: 2, not: 3 }, "not")); */

//Truthy or Falsy?
const isTruthy = input => (input ? 1 : 0)
//console.log(isTruthy(" "));

//Return First and Last Parameter
// const firstArg = (...arguments) => arguments[0]
// const lastArg = (...arguments) => arguments[arguments.length - 1]
/* console.log(firstArg(1, 2, 3));
console.log(lastArg(2, 5, 9, 10)); */

/**FizzBuzz Interview Question: 
 * crazy things are happening here!
 */
const FizzBuzz = num => (num % 3 ? '' : 'Fizz') + (num % 5 ? '' : 'Buzz') || `${num}`
/* console.log("FizzBuzz -> FizzBuzz", FizzBuzz(3));
console.log("FizzBuzz -> FizzBuzz", FizzBuzz(5));
console.log("FizzBuzz -> FizzBuzz", FizzBuzz(15));
console.log("FizzBuzz -> FizzBuzz", FizzBuzz(4)); */

/**The Fizz Buzz Test */
function fizzBuzz(number) {
	let result = []
	for (let i = 1; i <= number; i++) {
		if (!(i % 3) || !(i % 5)) {
			result.push('Fizz'.repeat(!(i % 3)) + 'Buzz'.repeat(!(i % 5)))
		} else result.push(i)
	}
	return result
}
// console.log(fizzBuzz(30))

/**The Farm Problem */
const animals = (chickens, cows, pigs) =>
	/* [chickens, cows, pigs]
    .map((animalCount, index) => animalCount * [2, 4, 4][index])
    .reduce((sum, animalLegs) => sum + animalLegs, 0); */
	2 * chickens + 4 * (cows + pigs)
//console.log("Legs Total: ", animals(2, 3, 5));

/**Algebra Sequence - Boxes */
const boxSeq = step => {
	/* return [...Array(step).keys()]
    .map(element => (element % 2 ? -1 : 3))
    .reduce((sum, element) => sum + element, 0); */
	//return step ? [3, -1][1 * !(step % 2)] + boxSeq(--step) : 0;
	return step + (step % 2) * 2
}
/* console.log("boxSeq 0", boxSeq(0));
console.log("boxSeq", boxSeq(1));
console.log("boxSeq", boxSeq(2)); */

const programmers = (...args) => Math.max(...args) - Math.min(...args)
//console.log("programmers", programmers(147, 33, 526));

/**Sort an Array by String Length */
const sortByLength = arr => arr.sort((a, b) => a.length - b.length)
//console.log("sortByLength", sortByLength(["Google", "Microsoft", "Apple"]));

/**Square Every Digit
 * @param {integer} n
 * @returns {integer}
 */
const squareDigits = n => +[ ...String(n) ].map(x => x * x).join('')
//console.log("squareDigits", squareDigits(1234));

/**Matchstick Houses
 * @param {integer} step
 * @returns {integer} number of sticks needed for houses
 */
const matchHouses = step => step && step * 5 + 1
//console.log("matchHouses", matchHouses(2));

/**Find the Integer in odd amounts
 * @param {array} arr
 * @returns {integer} the (first) odd number found in arr
 */
const findOdd = arr =>
	//arr.reduce((a, b) => a ^ b, 0);
	//binäre XOR Zuweisung durch alle Elemente
	arr.find(n => arr.filter(n2 => n == n2).length % 2)
//console.log("findOdd", findOdd([1, 1, -2, 1, 2, 1, 2, 4, 4, -1, 5]));

/**Don't Roll Doubles! */
const diceGame = arr =>
	/* if (arr.find(pair => pair[0] == pair[1])) return 0;
  return arr.reduce((sum, wurf) => sum + wurf[0] + wurf[1], 0); */
	arr.some(pair => pair[0] == pair[1]) ? 0 : arr.flat().reduce((total, point) => total + point, 0)
/* console.log("diceGame", diceGame([[1, 1], [5, 6], [6, 4]]));
console.log("diceGame", diceGame([[1, 2], [3, 4], [5, 6]])); */

/**Integer in Range?
 */
const intWithinBounds = (n, lower, upper) => n >= lower && n < upper && Number.isInteger(n)
// console.log(intWithinBounds(3, 1, 9));
// console.log(intWithinBounds(4.5, 3, 8));
// console.log(intWithinBounds(6, 1, 6));

function everySome(test, type, ...values) {
	return values[type.slice(0, -4)](value => eval(value + test))
}
// console.log(everySome('>= 1', 'somebody', -1, -1, -1, -1, 1))
// console.log(everySome('< 4 / 2', 'everybody', 1, 2, 1, 2, 1, 0, -10))

/**Drinks Allowed? */
function shouldServeDrinks(age, onBreak) {
	return age >= 18 && !onBreak
}
// console.log(shouldServeDrinks(17, true))
// console.log(shouldServeDrinks(19, false))

/**Track the Robot (Part 2) */
const trackRobot = (...steps) =>
	steps.reduce(
		([ x, y ], dist, i) =>
			({
				0 : [ x, y + dist ],
				1 : [ x + dist, y ],
				2 : [ x, y - dist ],
				3 : [ x - dist, y ],
			}[i % 4]),
		[ 0, 0 ]
	)
// console.log(trackRobot(20, 30, 10, 40))
// console.log(trackRobot())
// console.log(trackRobot(-10, 20, 10))
// console.log(trackRobot(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))

/**Check If the Brick Fits through the Hole */
// (a,b,c) -- dimensions of the brick
// (w,h) -- dimensions of the hole
function doesBrickFit(a, b, c, w, h) {
	const s = (a, b) => a - b
	const brick = [ a, b, c ].sort(s)
	const hole = [ w, h ].sort(s)
	return brick[0] <= hole[0] && brick[1] <= hole[1]

	return (
		(a <= w && b <= h) ||
		(b <= w && a <= h) ||
		(b <= w && c <= h) ||
		(c <= w && b <= h) ||
		(a <= w && c <= h) ||
		(c <= w && a <= h)
	)
}
// console.log(doesBrickFit(1, 1, 1, 1, 1))
// console.log(doesBrickFit(1, 2, 2, 1, 1))

/**combinations */
function combinations(...items) {
	return items.reduce((product, item) => product * (item || 1), 1)
}
// console.log(combinations(1, 2, 3, 4, 5, 6))

/**Factor Tractor */
function primeFactorize(num) {
	let factors = []
	for (let i = 2; i <= num; i++) {
		while (!(num % i)) {
			factors.push(i)
			num /= i
		}
	}
	return factors
}
// console.log(primeFactorize(25))
// console.log(primeFactorize(48))
// console.log(primeFactorize(77))
// console.log(primeFactorize(1))

/**Strong Password Checker */
function strongPasswordChecker(str) {
	const repeats = str.match(/(.)\1{2,}/g) || []
	const repfix = repeats.reduce((a, b) => a + Math.floor(Math.min(20, b.length) / 3), 0)
	const typefix = 3 - /[a-z]/g.test(str) - /[A-Z]/g.test(str) - /\d/g.test(str)
	const underfix = Math.max(8 - str.length, 0)
	const overfix = Math.max(str.length - 20, 0)
	return overfix + Math.max(repfix, typefix, underfix)

	// let changeNeed = 0
	// if (!str.match(/[a-z]/)) changeNeed++
	// if (!str.match(/[A-Z]/)) changeNeed++
	// if (!str.match(/[0-9]/)) changeNeed++
	// if (!(str.length <= 20)) changeNeed++
	// if (!(8 <= str.length) && changeNeed) changeNeed += 8 - str.length - changeNeed
	// if (!(8 <= str.length) && !changeNeed) changeNeed++
	// console.log(changeNeed)
	// changeNeed += (str.match(/(.)\1{2}/g) || []).length
	// return changeNeed
}
// console.log(strongPasswordChecker('Edabit!'))
// console.log(strongPasswordChecker('edabit1!'))
// console.log(strongPasswordChecker('EDABITEDABITEDABITEDA'))
// console.log(strongPasswordChecker('Edaaaabit!!1'))
// console.log(strongPasswordChecker('Edab1111111t!!!'))
// console.log(strongPasswordChecker('1234'))
// console.log(strongPasswordChecker('LLLLLLLLLLLLLLLLLLLL'))

/**The Collatz Conjecture */
function collatz(num) {
	// let steps = 0
	// while (num !== 1) {
	// 	!(num % 2) ? (num /= 2) : (num = num * 3 + 1)
	// 	steps++
	// }
	// return steps

	//recursion
	if (num === 1) return 0
	return 1 + collatz(!(num % 2) ? num / 2 : num * 3 + 1)
}
// console.log(collatz(2))
// console.log(collatz(3))
// console.log(collatz(10))

/**Repeat a Char */
function repeat(str, nb) {
	if (nb <= 0) return ''
	return str + repeat(str, nb - 1)
	//TODO: exceeds call stack
}
//https://edabit.com/challenge/HQXJLmsGK9KiKmeDf?tab=comments&commentId=zygb7R2AAj8tYScXX
// console.log(repeat('-', 3))
// console.log(repeat('A', 268435440))
// console.log(repeat('c', -1))
