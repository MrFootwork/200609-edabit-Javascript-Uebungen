/**Get Sum of People's Budget */
const getBudgets = arr =>
	arr.reduce((total, person) => total + person.budget, 0)

/* console.log(getBudgets([
  { name: "John", age: 21, budget: 23000 },
  { name: "Steve", age: 32, budget: 40000 },
  { name: "Martin", age: 16, budget: 2700 }
])); //65700 */

/**Letter Occurrences Per Word */
const findOccurrences = (str, char) => {
	return str
		.toLowerCase()
		.match(/\S+/g) //[ 'create', 'a', 'nice', 'juicy', 'function' ]
		.reduce(
			(o, k) => ({
				...o,
				[k]: [...k] //assigning the object elements
					.filter(v => v === char.toLowerCase()).length,
			}),
			{}
		)
}
const findOccurrences_2 = (str, char) => {
	let words = str.toLowerCase().match(/\S+/g)
	let object = words.reduce(
		(o, key) =>
			Object.assign(o, {
				//assigning the object elements
				[key]: [...key].filter(v => v === char.toLowerCase()).length,
			}),
		{}
	)
	return object
}
const findOccurrences_3 = (str, char) => {
	let words = str.toLowerCase().match(/\S+/g)
	let object = Object.fromEntries(
		words.map(word => [
			//ECMAscript2019 Object.fromEntries()
			//building an array of word - occurrence pairs
			word,
			[...word].filter(letter => letter === char.toLowerCase()).length,
		])
	)
	return object
}
// console.log('findOccurrences', findOccurrences_3('Hello World', 'o'))
// console.log('findOccurrences', findOccurrences('Create a nice JUICY function', 'c'))
// console.log('findOccurrences', findOccurrences_2('An APPLE a day keeps an Archeologist AWAY...', 'A'))

/**Ageing the Population... */
function afterNYears(names, n) {
	for (const name in names) names[name] += Math.abs(n)
	return names
}
// console.log(
// 	afterNYears(
// 		{
// 			Joel     : 32,
// 			Fred     : 44,
// 			Reginald : 65,
// 			Susan    : 33,
// 			Julian   : 13,
// 		},
// 		-14
// 	)
// )

/**International Greetings */
const GUEST_LIST = {
	Randy: 'Germany',
	Karla: 'France',
	Wendy: 'Japan',
	Norman: 'England',
	Sam: 'Argentina',
}
const greeting = name =>
	!GUEST_LIST.hasOwnProperty(name)
		? "Hi! I'm a guest."
		: `Hi! I'm ${name}, and I'm from ${GUEST_LIST[name]}.`
// console.log('greeting', greeting('Randy'))
// console.log('greeting', greeting('Monti'))

/**[Color Conversion] RGB to HEX and HEX to RGB */
const colorConversion = input => {
	// let output = 0
	// switch (typeof input) {
	// 	case 'string': //HEX => RGB
	// 		if (input[0] === '#' && input.length <= 7) {
	// 			output = { r: 0, g: 0, b: 0 }
	// 			let i = 0
	// 			for (const color in output) {
	// 				output[color] = parseInt(input[2 * i + 1] + input[2 * i + 2], 16)
	// 				i++
	// 			}
	// 			return output
	// 		}

	// 	case 'object': //RGB => HEX
	// 		if (Object.values(input).every(v => 0 <= v && v <= 255)) {
	// 			output = [ 0, 1, 2 ]
	// 			let toHEX = color => Object.values(input)[color].toString(16)
	// 			output = output.map(color => (toHEX(color) < 10 ? `0${toHEX(color)}` : toHEX(color)))
	// 			output.unshift('#')
	// 			return output.join('')
	// 		}
	// }
	// return 'Not valid input'

	if (typeof input === 'string') {
		//HEX => RGB
		if (!/^#[0-9a-f]{6}$/.test(input)) return 'Not valid input'
		const [r, g, b] = input.match(/[0-9a-f]{2}/g).map(h => parseInt(h, 16))
		return { r, g, b }
	} else {
		//RGB => HEX
		const colors = Object.values(input)
		if (colors.some(c => c < 0 || 255 < c)) return 'Not valid input'
		return '#' + colors.map(c => c.toString(16).padStart(2, '0')).join('')
	}
}
// console.log(colorConversion('#ffffff'))
// console.log(colorConversion('#050106'))
// console.log(colorConversion({ r: 9, g: 200, b: 125 }))

/**Remove Repeated Letters*/
const unrepeated = str => [...new Set(str)].join('')
// console.log('unrepeated', unrepeated('altwaff test'))
// console.log('unrepeated', unrepeated('hello'))
// console.log('unrepeated', unrepeated('WWE!!!'))
// console.log('unrepeated', unrepeated('call 911'))

/**ES6: Destructuring Objects IV */
const objIV = { first: 'James', last: 'Baker' }
var { first = 'John', last = 'Doe', alias: nickname = 'JD' } = objIV
// console.log(first)
// console.log(last)
// console.log(nickname)

/**ES6: Destructuring Objects V */
const user = {
	first: 'James',
	last: 'Baker',
	bestFriend: {
		first: 'Scott',
		last: 'Parkman',
	},
}
function bio({ first, last, bestFriend: { first: best } }) {
	// Do not edit the return statement below
	return (
		'Hi, my name is ' + first + ' ' + last + '. ' + best + ' is my best friend.'
	)
}
// console.log(bio(user))

/**ES6: Destructuring Objects VI */
function shirtSize({ size = 'big' } = {}) {
	return size
}
// console.log(shirtSize())

/**ES6: Destructuring Objects VII */
let key = 'foo'
let { [key]: foo } = { foo: 'Jessie' }
// console.log(foo)

/**Dynamische Object Properties */
let dynamicKey = 'name'
let theObject = { [dynamicKey]: 'bar' }
// console.log(theObject.name) // "bar"

/**Variablenzuweisung per Object Destructering */
const { p: eineZahl, q: einBoolean } = { p: 42, q: true }
// console.log(eineZahl) // 42
// console.log(einBoolean) // true

/**ES6: Destructuring Objects IX */
let users = [
	{ name: 'John', email: 'john@example.com' },
	{ name: 'Jason', email: 'jason@example.com' },
	{ name: 'Jeremy', email: 'jeremy@example.com' },
	{ name: 'Jacob', email: 'jacob@example.com' },
]
let [, , { name: thirdUser }] = users
// console.log(thirdUser)

let names = []
for (const { name } of users) {
	names.push(name)
}
// console.log(names)

/** Online Shopping*/
const freeShipping = order =>
	Object.values(order).reduce((total, item) => (total += item)) >= 50
// console.log('freeShipping', freeShipping({ Shampoo: 5.99, 'Rubber Ducks': 15.99 }))
// console.log('freeShipping', freeShipping({ Monopoly: 11.99, 'Secret Hitler': 35.99, Bananagrams: 13.99 }))

/**Lowercase and Uppercase Map */

const mapping = letters => {
	// let result = {}
	// for (const letter in letters) {
	//   Object.assign(result, { [letters[letter]]: letters[letter].toUpperCase() })
	// }
	// return result
	return letters.reduce((obj, l) => ((obj[l] = l.toUpperCase()), obj), {})
}
// console.log('mapping', mapping(['a', 'b', 'c']))

/**Verkettung von Ausdrücken innerhalb eines Callbacks
 * Das letzte Argument ist das return-Argument
 */
const test = zahlen => zahlen.reduce((a, b) => ((a = a + b), a), 0)
// console.log(test([1, 2, 3]))

/**Edabit Experience Points */
const getXP = obj =>
	`${Object.values(obj).reduce(
		(sum, v, i) => (sum += v * [5, 10, 20, 40, 80][i]),
		0
	)}XP`
// console.log(
// 	'2055XP',
// 	getXP({
// 		'Very Easy' : 89,
// 		Easy        : 77,
// 		Medium      : 30,
// 		Hard        : 4,
// 		'Very Hard' : 1,
// 	})
// )

/**Is it an Object? */
const isObject = value => value instanceof Object
// console.log('isObject', isObject((add = (x, y) => x + y)))
// console.log('isObject', isObject(new Regex('^[a-zA-Z0-9]+$', 'g')))
// console.log('isObject', isObject(''))

/**Planetary Weight Converter */
const planetGrav = {
	Mercury: 3.7,
	Venus: 8.87,
	Earth: 9.81,
	Mars: 3.711,
	Jupiter: 24.79,
	Saturn: 10.44,
	Uranus: 8.69,
	Neptune: 11.15,
}
const spaceWeights = (planetA, weight, planetB) =>
	+((weight * planetGrav[planetB]) / planetGrav[planetA]).toFixed(2)
// console.log('0.38 => ', spaceWeights('Earth', 1, 'Mars'))
// console.log('2.53 => ', spaceWeights('Earth', 1, 'Jupiter'))
// console.log('1.14 => ', spaceWeights('Earth', 1, 'Neptune'))

/**Leaderboard Sort */

const leaderboards = users =>
	users.sort(
		(a, b) => (
			(trueScore = u => u.score + 2 * u.reputation), trueScore(b) - trueScore(a)
		)
	)
// console.log(
// 	'leaderboards',
// 	leaderboards([
// 		{ name: 'a', score: 100, reputation: 20 },
// 		{ name: 'b', score: 90, reputation: 40 },
// 		{ name: 'c', score: 115, reputation: 30 },
// 	])
// )

/**Paint the Walls */
const time = (obj, people, wall) =>
	(((obj.minutes * obj.people) / obj.walls) * wall) / people
let rate = {
	people: 10,
	walls: 10,
	minutes: 22,
}
// console.log('time', time(rate, 14, 14))

let drinks = [
	{ name: 'lemonade', price: 50 },
	{ name: 'lime', price: 10 },
]
/**Drink Sorting */
const sortDrinkByPrice = drinks => drinks.sort((a, b) => a.price - b.price)
// console.log('', sortDrinkByPrice(drinks))

/**Get Student Top Notes*/
function getStudentTopNotes(students) {
	return students.map(student => Math.max(...student.notes, 0))
}
// console.log(
// 	getStudentTopNotes([
// 		{
// 			id    : 1,
// 			name  : 'Jacek',
// 			notes : [ 5, 3, 4, 2, 5, 5 ],
// 		},
// 		{
// 			id    : 2,
// 			name  : 'Ewa',
// 			notes : [ 2, 3, 3, 3, 2, 5 ],
// 		},
// 		{
// 			id    : 3,
// 			name  : 'Zygmunt',
// 			notes : [ 2, 2, 4, 4, 3, 3 ],
// 		},
// 	])
// )

/**A Knacpsack */
//https://edabit.com/challenge/uqwmC7RJF98xr3TiD?tab=comments&commentId=SZNmbdGPJGQdpYYot
function knapsack(capacity, getItems) {
	let weight = 0
	let value = 0
	let items = []
	for (let item of getItems) {
		while (items.length + 1 <= capacity) {
			weight += item.weight
			value += item.value
			items.push(item)
		}
	}
	return {
		capacity,
		items,
		weight,
		value,
	}
}
var items = [
	{ name: 'desk lamp', weight: 2, value: 12 },
	{ name: 'beach towel', weight: 1, value: 10 },
	{ name: 'textbook', weight: 3, value: 20 },
	{ name: 'wall clock', weight: 2, value: 15 },
	{ name: 'frozen dinners', weight: 10, value: 50 },
	{ name: 'tablet', weight: 7, value: 1400 },
	{ name: 'smartphone', weight: 1, value: 200 },
	{ name: 'paper', weight: 2, value: 5 },
	{ name: 'laser printer', weight: 25, value: 400 },
	{ name: 'shoes', weight: 1, value: 79 },
	{ name: 'medicine', weight: 1, value: 17 },
	{ name: 'decorative cushion', weight: 1, value: 11 },
	{ name: 'gold necklace', weight: 1, value: 2500 },
	{ name: 'toaster oven', weight: 5, value: 129 },
]
// console.log(knapsack(4, items))

/**Calculate the Total Price of Groceries */
function getTotalPrice(groceries) {
	return +groceries.reduce((total, item) => total + item.price, 0).toFixed(2)
}
// console.log(
// 	getTotalPrice([
// 		{ product: 'Milk', quantity: 1, price: 1.5 },
// 		{ product: 'Cereals', quantity: 1, price: 2.5 },
// 	])
// )
// console.log(
// 	getTotalPrice([
// 		{ product: 'Chocolate', quantity: 1, price: 0.1 },
// 		{ product: 'Lollipop', quantity: 1, price: 0.2 },
// 	])
// )

/**Get Students with Names and Top Notes */
function getStudentsWithNamesAndTopNotes(students) {
	let topNotes = []
	students.forEach(student => {
		topNotes.push({
			name: student.name,
			topNote: Math.max(...student.notes, 0),
		})
	})
	return topNotes
}
// console.log(
// 	getStudentsWithNamesAndTopNotes([{ name: 'John', notes: [3, 5, 4] }])
// )

/**Burglary Series (01): Calculate Total Losses */

function calculateLosses(obj) {
	return Object.values(obj).reduce((sum, item) => sum + item, 0) || 'Lucky you!'
}
// console.log(
// 	calculateLosses({
// 		tv: 30,
// 		skate: 20,
// 		stereo: 50,
// 	})
// )
// console.log(
// 	calculateLosses({
// 		painting: 20000,
// 	})
// )
// console.log(calculateLosses({}))
