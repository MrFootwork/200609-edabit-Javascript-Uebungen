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
	([[a, b], [c, d]]) => a * d - b * c
//console.log(calcDeterminant([[5, 3], [3, 1]]));

//Array Comparison
const checkEquals = (arr1, arr2) =>
	arr1.length === arr2.length && arr2.every((element, i) => element === arr1[i]) //every() checks every element and returns boolean
//console.log(checkEquals([1, 0, 1], [1, 0, 1]));

/**Even Number Generator:
 * Throws an array with even numbers from 2 to num.
 * @param {integer} num
 * @returns an array with num even numbers
 */
const findEvenNums = (num) =>
	[...Array(num).keys()].map((n) => ++n).filter((n) => !(n % 2))
//[...Array(num).keys()] constructs num elements with iterators
//console.log(findEvenNums(8));

/**Next Element in an Arithmetic Sequence
 * @param {array} arr An array in an arithmetic sequence.
 */
const nextElement = (arr) => 2 * arr[arr.length - 1] - arr[arr.length - 2]
//console.log(nextElement([-5, -6, -7]));

//Return the First and Last Elements in an Array
const firstLast = (arr) => [arr.shift(), arr.pop()]
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
	[...str]
		.filter((l, index) => !(index % 2))
		.concat([...str].filter((l, index) => index % 2))
		.join('')
//[0, 1].map(v => [...str].filter((e, i) => i % 2 === v).join("")).join("");
//console.log(indexShuffle("acebdf"));

/** Summing a Slice*/
function sliceSum(arr, n) {
	return arr.slice(0, n).reduce((sum, num) => sum + num, 0)
}
/* console.log("sliceSum -> sliceSum", sliceSum([4, 2, 5, 7], 2));
console.log("sliceSum -> sliceSum", sliceSum([4, 2, 5, 7], 0)); */

/** Secret Society*/
const societyName = (friends) =>
	friends
		.map((name) => name[0])
		.sort()
		.join('')
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
		.map((coinAmount, i) => coinAmount * [0.25, 0.1, 0.05, 0.01][i])
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
	[...new Set(a)].filter((x) => x > 0).length >
	[...new Set(a)].filter((x) => x < 0).length

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
	return [Object.keys(obj), Object.keys(obj).map((x) => obj[x])]
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
	[]
		.concat(...arr)
		.sort()
		.join('') === target.sort().join('')
/* console.log(
  "canConcatenate => True",
  canConcatenate([[2, 1, 3], [5, 4, 7, 6]], [7, 6, 5, 4, 3, 2, 1])
); */

/**Oddish vs. Evenish */
const oddishOrEvenish = (num) =>
	`${num}`.split('').reduce((sum, str) => sum + 1 * str, 0) % 2 == 0
		? 'Evenish'
		: 'Oddish'
// console.log("oddishOrEvenish Oddish =>", oddishOrEvenish(43));
// console.log("oddishOrEvenish Evenish =>", oddishOrEvenish(4433));

/**Cowboy Shootout */
const rogerShots = (arr) =>
	// arr.reduce((seconds, shot) => seconds + 0.5 * (shot === 'Bang!' || shot === 'BangBang!'), 0)
	arr.filter((el) => el === 'Bang!' || el === 'BangBang!').length * 0.5
// console.log('3', rogerShots([ 'Bang!', 'Bang!', 'Bang!', 'Bang!', 'Bang!', 'Bang!' ]))
// console.log('2.5', rogerShots([ 'Bang!', 'Bang!', 'Bang!', 'Bang!', 'BangBang!' ]))
// console.log(
// 	'2',
// 	rogerShots([ 'Bang!', 'BangBangBang!', 'Boom!', 'Bang!', 'BangBang!', 'BangBang!' ])
// )

/**Retrieve the Last N Elements */
const last = (a, n) =>
	n <= a.length ? a.slice(a.length - n, a.length) : 'invalid'
// console.log('[5]', last([ 1, 2, 3, 4, 5 ], 1))
// console.log('[9,7,6]', last([ 1, 2, 3, 4, 5 ], 7))

/**The Sweetest Ice Cream */
class IceCream {
	constructor(flavor, numSprinkles) {
		this.flavor = flavor
		this.numSprinkles = numSprinkles
	}
}

ice1 = new IceCream('Chocolate', 13)
ice2 = new IceCream('Vanilla', 0)
ice3 = new IceCream('Strawberry', 7)
ice4 = new IceCream('Plain', 18)
ice5 = new IceCream('ChocolateChip', 3)
ice6 = new IceCream('Chocolate', 23)
ice7 = new IceCream('Strawberry', 0)
ice8 = new IceCream('Plain', 34)
ice9 = new IceCream('Plain', 81)
ice10 = new IceCream('Vanilla', 12)

const sweetestIcecream = (arr) => {
	let sweeties = {
		Plain: 0,
		Vanilla: 5,
		ChocolateChip: 5,
		Strawberry: 10,
		Chocolate: 10,
	}
	return Math.max(...arr.map((ice) => sweeties[ice.flavor] + ice.numSprinkles))
}
// console.log(sweetestIcecream([ ice1, ice2, ice3, ice4, ice5 ]))

const isSpecialArray = (arr) => arr.every((v, i) => v % 2 == i % 2)
// console.log('', isSpecialArray([ 2, 7, 5, 9, 6, 1, 6, 3 ]))
// console.log('', isSpecialArray([ 2, 7, 4, 9, 6, 1, 6, 3 ]))

/**Alternate Sort */
function alternateSort(arr) {
	const letters = arr
		.filter((str) => typeof str == 'string')
		.sort((a, b) => (b.toLowerCase() < a.toLowerCase() ? 1 : -1))
	const numbers = arr //
		.filter((num) => typeof num == 'number')
		.sort((a, b) => a - b)
	let result = []
	arr.forEach((_, i) =>
		!(i % 2) ? result.push(numbers[i / 2]) : result.push(letters[i / 2 - 0.5])
	)
	return result
}
// console.log(alternateSort([ 'a', 'c', 'b', 1, 2, 3 ]))
// console.log(alternateSort([ -2, 'F', 'a', 0, 100, 'z' ]))

/**Total Volume */
function totalVolume(...boxes) {
	return boxes.reduce((total, [l, w, h]) => total + l * w * h, 0)
	return boxes
		.map((box) => box.reduce((boxVolume, edge) => boxVolume * edge, 1))
		.reduce((totalVolume, boxVolume) => totalVolume + boxVolume, 0)
}
// console.log(totalVolume([ 4, 2, 4 ], [ 3, 3, 3 ], [ 1, 1, 2 ], [ 2, 1, 1 ]))

function adjacentProduct(a) {
	// return Math.max(...arr.slice(1).map((num, i) => num * arr[i]))
	return (
		a.sort((x, y) => {
			a = a > x * y ? a : x * y
		}) | a
	)
}
// console.log(adjacentProduct([ -23, 4, -3, 8, -12 ]))

/**Number of Boomerangs */
function countBoomerangs(arr) {
	return arr.reduce(
		(count, left, i) => count + (left == arr[i + 2] && left != arr[i + 1]),
		0
	)
	// let count = 0
	// arr.forEach((left, i) => {
	// 	if (left == arr[i + 2] && left != arr[i + 1]) count++
	// })
	// return count
}
// console.log(countBoomerangs([ 9, 5, 9, 5, 1, 1, 1 ]))
// console.log(countBoomerangs([ 5, 6, 6, 7, 6, 3, 9 ]))

/**Star Ratings */
function starRating(arr) {
	let starSum = arr.reduce((sum, starCount) => sum + starCount, 0)
	let avg = arr.reduce(
		(avg, starCount, i) => avg + (starCount * (i + 1)) / starSum,
		0
	)
	return `[${avg.toFixed(2)}] ${'*'.repeat(Math.round(avg))}`
}
// console.log(starRating([ 55, 67, 98, 115, 61 ]))
// console.log(starRating([ 0, 2, 0, 1, 23 ]))
// console.log(starRating([ 16, 17, 23, 40, 45 ]))

/**Peeling off the Outer Layers */
function peelLayerOff(arr) {
	return arr.slice(1, -1).map((column) => column.slice(1, -1))
}
// console.log(
// 	peelLayerOff([
// 		[ 'a', 'b', 'c', 'd' ],
// 		[ 'e', 'f', 'g', 'h' ],
// 		[ 'i', 'j', 'k', 'l' ],
// 		[ 'm', 'n', 'o', 'p' ],
// 	])
// )
// console.log(peelLayerOff([ [ 'hello', 'world' ], [ 'hello', 'world' ] ]))

/**Finding Nemo */
function findNemo(sentence) {
	let nemoFoundAt = sentence.split(' ').indexOf('Nemo') + 1
	if (nemoFoundAt) return `I found Nemo at ${nemoFoundAt}!`
	return `I can't find Nemo :(`
}
// console.log(findNemo('I am finding Nemo !'))
// console.log(findNemo('I Nemo am'))
// console.log(findNemo('I am'))

/**Finding Common Elements */
function commonElements(arr1, arr2) {
	//JS methods
	return [...new Set(arr1.filter((element) => arr2.includes(element)))]

	//in-place operation
	let pointer1 = 0
	let pointer2 = 0
	let stack = -1
	while (pointer1 !== arr1.length && pointer2 !== arr2.length) {
		if (arr1[pointer1] < arr2[pointer2]) pointer1++
		if (arr1[pointer1] > arr2[pointer2]) pointer2++
		if (arr1[pointer1] === arr2[pointer2]) {
			arr1[++stack] = arr1[pointer1++]
			pointer2++
		}
	}
	arr1.splice(++stack, arr1.length - stack)
	return arr1
}
// console.log(commonElements([ -1, 3, 4, 6, 7, 9 ], [ 1, 3 ]))
// console.log(commonElements([ 1, 2, 2, 2, 3, 4, 5 ], [ 1, 2, 4, 5 ]))

/** Sum of Slices of an Array (Part 1)*/
function sumOfSlices(arr) {
	return arr.reduce(
		(result, val) =>
			result[result.length - 1] + val <= 100
				? ((result[result.length - 1] += val), result)
				: (result.push(val), result),
		[0]
	)
}
// console.log(sumOfSlices([ 10, 29, 13, 14, 15, 16, 17, 31, 20, 10, 29, 13, 14, 15, 16, 17, 31, 20, 100 ]))
// console.log(sumOfSlices([ 58, 3, 38, 99, 10 ]))
// console.log(sumOfSlices([ 13 ]))
// console.log(sumOfSlices([ 315, 47 ]))

/**Decimal to Binary Using Stack */
function Stack() {
	let data = []
	this.push = function (item) {
		data.push(item)
	}
	this.isEmpty = function () {
		return !data.length
	}
	this.pop = function () {
		return data.pop()
	}
	this.peek = function () {
		return data[data.length - 1]
	}
	this.size = function () {
		return data.length
	}
}

function toBinary(num) {
	let stack = new Stack()
	stack.push(0)
	for (let i = 0; i < num; i++) {
		if (!stack.peek()) {
			//wenn hinten 0 => 1
			stack.pop()
			stack.push(1)
		} else {
			//wenn hinten 1 => 0
			let cMod = 0
			while (stack.peek()) {
				stack.pop()
				cMod++
			}
			stack.pop()
			stack.push(1)
			while (cMod) {
				stack.push(0)
				cMod--
			}
		}
	}
	let binary = Array(stack.size())
	for (let i = stack.size() - 1; i >= 0; i--) {
		binary[i] = stack.pop()
	}
	return +binary.join('')

	//TODO: use bitwise operations instead
}
// console.log(toBinary(12))
// console.log(toBinary(101))

/**Sum of all Evens in a Matrix */
function sumOfEvens(arr) {
	return arr //
		.flat()
		.filter((num) => !(num % 2))
		.reduce((sum, even) => sum + even, 0)

	//O(n)
	let topLen = arr.length
	let bottomLen = arr[0].length || 0
	let sum = 0

	for (let i = 0; i < topLen; i++) {
		for (let j = 0; j < bottomLen; j++) {
			if (!(arr[i][j] % 2)) sum += arr[i][j]
		}
	}
	return sum
}
// console.log(sumOfEvens([ [ 1, 0, 2 ], [ 5, 5, 7 ], [ 9, 4, 3 ] ]))
// console.log(sumOfEvens([ [], [], [] ]))
// console.log(sumOfEvens([ [ 1, 1 ], [ 1, 1 ] ]))
// console.log(sumOfEvens([ [ 1, 5, 1, 3 ], [ 4, 1, 2, 0 ], [ 6, 9, 7, 4 ], [ 5, 1, 2, 6 ] ]))

/**Array Chunking */
function chunk(array, size) {
	let result = []
	while (array.length > 0) {
		result.push(array.splice(0, size))
	}
	return result

	//O(n)
	let subSize = size
	let iNextSub = 0
	for (let i = 0; i < array.length; i++) {
		if (subSize === size) {
			array.splice(iNextSub++, 1, [array[i]])
			subSize = 1
		} else {
			array[iNextSub - 1].push(...array.splice(i--, 1))
			subSize++
		}
	}
	return array
}
//https://edabit.com/challenge/AWEX2eYNWGEsig4Fc?tab=comments&commentId=TGN2ufH2sbwZRN8TE
// console.log(chunk([ 1, 2, 3, 4 ], 2))
// console.log(chunk([ 1, 2, 3, 4, 5, 6, 7 ], 3))
// console.log(chunk([ 1, 2, 3, 4, 5 ], 10))

/**Indey Parity of Largest Even */
function bitwiseIndex(arr) {
	//bitwise
	let [x, k] = arr.reduce(
		(v, n, i) => (v = !(n & 1) && n > v[0] ? [n, i] : v),
		[-Infinity, -1]
	)
	return k == -1
		? 'No even integer found!'
		: { [`@${['even', 'odd'][k & 1]} index ${k}`]: x }

	//my solution
	const isEven = (num) => Math.floor(num / 2) * 2 === num
	let intMax = 0
	let iMax = -1
	let found = false

	for (let i = 0; i < arr.length; i++) {
		if (isEven(arr[i]) && arr[i] > intMax) {
			intMax = arr[i]
			iMax = i
			found = true
		}
	}
	let answer = { [`@${isEven(iMax) ? 'even' : 'odd'} index ${iMax}`]: intMax }
	if (found) return answer
	return 'No even integer found!'
}
// console.log(bitwiseIndex([ 107, 19, 36, -18, -78, 24, 97 ]))
// console.log(bitwiseIndex([ 31, 7, 2, 13, 7, 9, 10, 13 ]))
// console.log(bitwiseIndex([ 4, 4, 4, 4, 4, 4 ]))
// console.log(bitwiseIndex([ -31, -7, -13, -7, -9, -13 ]))

/**The Fizz Buzz Test */
function fizzBuzz(number) {
	let result = []
	for (let i = 1; i <= number; i++) {
		let fizz = i % 3 == 0 ? 'Fizz' : ''
		let buzz = i % 5 == 0 ? 'Buzz' : ''
		if (fizz || buzz) result.push(fizz + buzz)
		else result.push(i)
	}
	return result
}
// console.log(fizzBuzz(16))

/**Zip It, If You Can? */
function zipIt(women, men) {
	if (women.length !== men.length) return "sizes don't match"
	let pairs = []
	for (let person in men) pairs.push([women[person], men[person]])
	return pairs
}

console.log(zipIt(['Elise', 'Mary'], ['John', 'Rick']))
console.log(zipIt(['Ana', 'Amy', 'Lisa'], ['Bob', 'Josh']))
console.log(zipIt(['Ana', 'Amy', 'Lisa'], ['Bob', 'Josh', 'Tim']))
