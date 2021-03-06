//Repeater
/* repeat("edabit", 3) ➞ ["edabit", "edabit", "edabit"]
repeat(13, 5) ➞ [13, 13, 13, 13, 13]
repeat("7", 2) ➞ ["7", "7"]
repeat(0, 0) ➞ [] */
function repeat(item, times) {
	return Array(times).fill(item)
}
//console.log(repeat(13, 1));

//Convert Number to String of Dashes
//const GoArray = num => "-".repeat(num);
const GoArray = (num) => Array(num).fill('-').join('')
// console.log(GoArray(5));

//Largest number
/* findLargestNum([4, 5, 1, 3]) ➞ 5
findLargestNum([300, 200, 600, 150]) ➞ 600
findLargestNum([1000, 1001, 857, 1]) ➞ 1001 */
const findLargestNum = (arr) => Math.max(...arr)
//console.log(findLargestNum([4, 5, 1, 3]));

//Return the Four Letter Strings
const isFourLetters = (arr) => arr.filter((word) => word.length == 4)
//console.log(isFourLetters(["Kangaroo", "Bear", "Fox"]));

//Remove NULL from an Array
const removeNull = (arr) =>
	//arr.filter(v => v !== null);
	arr.filter(Boolean)
/* console.log(removeNull(["a", null, "b", null]));
console.log(removeNull([null, null, null, null, null]));
console.log(removeNull([7, 8, null, 9])); */

//Filter by Digit Length
const filterDigitLength = (arr, num) =>
	//arr.filter(number => Math.floor(Math.log10(number)) + 1 == num);
	arr.filter((number) => String(number).length === num)
//console.log(filterDigitLength([1, 8, 3, 6, 0, 1], 1));

//alle Elemente erweitern
const multiplyByLength = (arr) => arr.map((x) => x * arr.length)
//console.log(multiplyByLength([2, 3, 1, 0]));

//Calculate Determinant of a 2x2 Matrix
const calcDeterminant = //matrix =>
	//matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
	([ [ a, b ], [ c, d ] ]) => a * d - b * c
//console.log(calcDeterminant([[5, 3], [3, 1]]));

//Array Comparison
const checkEquals = (arr1, arr2) => arr1.length === arr2.length && arr2.every((element, i) => element === arr1[i]) //every() checks every element and returns boolean
//console.log(checkEquals([1, 0, 1], [1, 0, 1]));

/**Even Number Generator: 
 * Throws an array with even numbers from 2 to num. 
 * @param {integer} num
 * @returns an array with num even numbers
 */
const findEvenNums = (num) => [ ...Array(num).keys() ].map((n) => ++n).filter((n) => !(n % 2))
//[...Array(num).keys()] constructs num elements with iterators
//console.log(findEvenNums(8));

/**Next Element in an Arithmetic Sequence
 * @param {array} arr An array in an arithmetic sequence.
 */
const nextElement = (arr) => 2 * arr[arr.length - 1] - arr[arr.length - 2]
//console.log(nextElement([-5, -6, -7]));

//Return the First and Last Elements in an Array
const firstLast = (arr) => [ arr.shift(), arr.pop() ]
//console.log(firstLast(["edabit", 13, null, false, true]));

/**Exists a Number Higher?
 * true if at least on number is larger than or equal to n
*/
const existsHigher = (arr, n) =>
	//arr.some(number => number >= n);
	Math.max(...arr) >= n
/* console.log(existsHigher([5, 3, 15, 22, 4], 10));
console.log(existsHigher([1, 2, 3, 4, 5], 8)); */

/**Date Format: 
 * transforms dates from MM/DD/YYYY to YYYYDDMM
 */
const formatDate = (date) => date.split('/').reverse().join('')
//console.log("formatDate -> formatDate", formatDate("11/12/2019"));

/**Eliminate Odd Numbers within an Array: 
 * deleting the array elements from odd numbers
 */
const noOdds = (arr) => arr.filter((num) => !(num % 2))
//console.log("noOdds -> noOdds", noOdds([1, 2, 3, 4, 5, 6, 7, 8]));

/**Negate the Array of Numbers: 
 * array with negated signs of each elements
 */
const negate = (arr) => arr.map((num) => -num)
//console.log("negate -> negate", negate([-1, 2, -3, 4]));

/**Check if a String Contains only Identical Characters*/
const isIdentical = (wordToCheck) => new Set(wordToCheck).size == 1
/* console.log("isIdentical -> isIdentical", isIdentical("aabaaa"));
console.log("isIdentical -> isIdentical", isIdentical("aaaaa")); */

/**Is the Number a Repdigit? */
const isRepdigit = (num) => new Set(num.toString()).size == 1
/* console.log("isRepdigit", isRepdigit(66));
console.log("isRepdigit", isRepdigit(-66)); */

/**Index Shuffle */
const indexShuffle = (str) =>
	[ ...str ].filter((l, index) => !(index % 2)).concat([ ...str ].filter((l, index) => index % 2)).join('')
//[0, 1].map(v => [...str].filter((e, i) => i % 2 === v).join("")).join("");
//console.log(indexShuffle("acebdf"));

/** Summing a Slice*/
function sliceSum(arr, n) {
	return arr.slice(0, n).reduce((sum, num) => sum + num, 0)
}
/* console.log("sliceSum -> sliceSum", sliceSum([4, 2, 5, 7], 2));
console.log("sliceSum -> sliceSum", sliceSum([4, 2, 5, 7], 0)); */

/** Secret Society*/
const societyName = (friends) => friends.map((name) => name[0]).sort().join('')
// console.log(societyName(["Adam", "Sarah", "Malcolm"]));

/** How Much is True?*/
const countTrue = (arr) => arr.filter(Boolean).length
// console.log(countTrue([true, false, false, true, false]));

/** Concatenate Variable Number of Input Arrays*/
const concat = (...args) => [].concat(...args)
// console.log(concat([1, 2, 3], [4, 5], [6, 7]));
// console.log(concat([1], [2], [3], [4], [5], [6], [7]));

/**Convenience Store */
const changeEnough = (change, amountDue) =>
	change
		.map((coinAmount, i) => coinAmount * [ 0.25, 0.1, 0.05, 0.01 ][i])
		.reduce((pocketTotal, coinTotal) => pocketTotal + coinTotal, 0) >= amountDue
// console.log("changeEnough Output: ", changeEnough([2, 100, 0, 0], 14.11));
// console.log("changeEnough Output: ", changeEnough([0, 0, 20, 5], 0.75));
// console.log("changeEnough Output: ", changeEnough([30, 40, 20, 5], 12.55));

/** Count Number of Identical Arrays
 * @param 4 arrays
 * @returns amount of identical arrays
*/
function countIdenticalArrays(arr1, arr2, arr3, arr4) {
	let args = Array.from(arguments).map((x) => x.join('')),
		set = Array.from(new Set(args)),
		num = set.map((x) => args.filter((c) => c === x).length),
		max = Math.max(...num)
	return max === 1 ? 0 : max
}
// console.log("2: ", countIdenticalArrays([0, 0, 0], [0, 1, 2], [0, 0, 0], [0, 1, 2]));
// console.log("3: ", countIdenticalArrays([0, 0, 0], [0, 1, 2], [0, 0, 0], [0, 0, 0]));

/**Positive Dominant
 * @param array with numbers
 * @returns {Boolean} true, if amount of positive unique numbers > amount of negative unique numbers
 */
const isPositiveDominant = (a) =>
	[ ...new Set(a) ].filter((x) => x > 0).length > [ ...new Set(a) ].filter((x) => x < 0).length

// console.log("isPositiveDominant? ", isPositiveDominant([1, 1, 1, 1, -3, -4]));
// console.log("isPositiveDominant? ", isPositiveDominant([5, 99, 832, -3, -4]));

const objectToArray = (obj) =>
	//Object.keys(obj).map(key=>[key, obj[key]])
	Object.entries(obj)
/* console.log(
  objectToArray({
    likes: 2,
    dislikes: 3,
    followers: 10
  })
); */

/**Return the Objects Keys and Values */
function keysAndValues(obj) {
	return [ Object.keys(obj), Object.keys(obj).map((x) => obj[x]) ]
}
// console.log(keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" }));

/** Converting Objects to Arrays*/
const toArray = (obj) => Object.entries(obj)
// console.log(toArray({ shrimp: 15, tots: 12 }));

/**Fix the Error: Flattening an Array (Debugging) */
function flatten(...arr) {
	let arr2 = []
	for (let i = 0; i < arr.length; i++) {
		arr2 = arr2.concat(arr[i])
	}
	return arr2
	//return [].concat(...arr)
}
// console.log(flatten(["a", "b"], ["c", "d"]));

/** Array of Multiples*/
const arrayOfMultiples = (num, length) =>
	// Array.from({ length: length }, (_, i) => num * (i + 1));
	Array.from({ length }, (_, i) => num * (i + 1))
// [...Array(length)].map((_, i) => num * (i + 1));
// [...Array(length).keys()].map((e, i) => (e + 1) * num);
// console.log(arrayOfMultiples(7, 5));

/**Factor Chain */
const factorChain = (arr) => arr.slice(1).every((num, i) => num % arr[i] === 0)
// console.log(factorChain([1, 2, 4, 8, 16, 32]));
// console.log(factorChain([2, 4, 6, 7, 12]));

/**Sastry Numbers */
const isSastry = (number) => !(`${number}${number + 1}` ** 0.5 % 1)
// console.log("isSastry", isSastry(106755));

/**Possible to Concatenate to Form Target Array?*/
const canConcatenate = (arr, target) =>
	/* [].concat(...arr).sort((a, b) => a - b).join("") ===
  target.sort((a, b) => a - b).join(""); */
	[].concat(...arr).sort().join('') === target.sort().join('')
/* console.log(
  "canConcatenate => True",
  canConcatenate([[2, 1, 3], [5, 4, 7, 6]], [7, 6, 5, 4, 3, 2, 1])
); */

/**Oddish vs. Evenish */
const oddishOrEvenish = (num) =>
	`${num}`.split('').reduce((sum, str) => sum + 1 * str, 0) % 2 == 0 ? 'Evenish' : 'Oddish'
// console.log("oddishOrEvenish Oddish =>", oddishOrEvenish(43));
// console.log("oddishOrEvenish Evenish =>", oddishOrEvenish(4433));
