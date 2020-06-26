/**
 * flip Boolean
 * @param {*} bool a boolean value goes in
 */
const reverse = (bool) => {
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
const isTruthy = (input) => (input ? 1 : 0)
//console.log(isTruthy(" "));

//Return First and Last Parameter
const firstArg = (...arguments) => arguments[0]
const lastArg = (...arguments) => arguments[arguments.length - 1]
/* console.log(firstArg(1, 2, 3));
console.log(lastArg(2, 5, 9, 10)); */

/**FizzBuzz Interview Question: 
 * crazy things are happening here!
 */
const FizzBuzz = (num) => (num % 3 ? '' : 'Fizz') + (num % 5 ? '' : 'Buzz') || `${num}`
/* console.log("FizzBuzz -> FizzBuzz", FizzBuzz(3));
console.log("FizzBuzz -> FizzBuzz", FizzBuzz(5));
console.log("FizzBuzz -> FizzBuzz", FizzBuzz(15));
console.log("FizzBuzz -> FizzBuzz", FizzBuzz(4)); */

/**The Farm Problem */
const animals = (chickens, cows, pigs) =>
	/* [chickens, cows, pigs]
    .map((animalCount, index) => animalCount * [2, 4, 4][index])
    .reduce((sum, animalLegs) => sum + animalLegs, 0); */
	2 * chickens + 4 * (cows + pigs)
//console.log("Legs Total: ", animals(2, 3, 5));

/**Algebra Sequence - Boxes */
const boxSeq = (step) => {
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
const sortByLength = (arr) => arr.sort((a, b) => a.length - b.length)
//console.log("sortByLength", sortByLength(["Google", "Microsoft", "Apple"]));

/**Square Every Digit
 * @param {integer} n
 * @returns {integer}
 */
const squareDigits = (n) => +[ ...String(n) ].map((x) => x * x).join('')
//console.log("squareDigits", squareDigits(1234));

/**Matchstick Houses
 * @param {integer} step
 * @returns {integer} number of sticks needed for houses
 */
const matchHouses = (step) => step && step * 5 + 1
//console.log("matchHouses", matchHouses(2));

/**Find the Integer in odd amounts
 * @param {array} arr
 * @returns {integer} the (first) odd number found in arr
 */
const findOdd = (arr) =>
	//arr.reduce((a, b) => a ^ b, 0);
	//binäre XOR Zuweisung durch alle Elemente
	arr.find((n) => arr.filter((n2) => n == n2).length % 2)
//console.log("findOdd", findOdd([1, 1, -2, 1, 2, 1, 2, 4, 4, -1, 5]));

/**Don't Roll Doubles! */
const diceGame = (arr) =>
	/* if (arr.find(pair => pair[0] == pair[1])) return 0;
  return arr.reduce((sum, wurf) => sum + wurf[0] + wurf[1], 0); */
	arr.some((pair) => pair[0] == pair[1]) ? 0 : arr.flat().reduce((total, point) => total + point, 0)
/* console.log("diceGame", diceGame([[1, 1], [5, 6], [6, 4]]));
console.log("diceGame", diceGame([[1, 2], [3, 4], [5, 6]])); */

/**Integer in Range?
 */
const intWithinBounds = (n, lower, upper) => n >= lower && n < upper && Number.isInteger(n)
// console.log(intWithinBounds(3, 1, 9));
// console.log(intWithinBounds(4.5, 3, 8));
// console.log(intWithinBounds(6, 1, 6));
