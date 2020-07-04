/**Get Sum of People's Budget */
const getBudgets = (arr) => arr.reduce((total, person) => total + person.budget, 0)

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
				[k] : [ ...k ] //assigning the object elements
					.filter((v) => v === char.toLowerCase()).length,
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
				[key] : [ ...key ].filter((v) => v === char.toLowerCase()).length,
			}),
		{}
	)
	return object
}
const findOccurrences_3 = (str, char) => {
	let words = str.toLowerCase().match(/\S+/g)
	let object = Object.fromEntries(
		words.map((word) => [
			//ECMAscript2019 Object.fromEntries()
			word,
			[ ...word ].filter((v) => v === char.toLowerCase()).length,
		])
	)
	return object
}
// console.log("findOccurrences", findOccurrences_3("Hello World", "o"));
// console.log("findOccurrences", findOccurrences("Create a nice JUICY function", "c"));
// console.log("findOccurrences", findOccurrences("An APPLE a day keeps an Archeologist AWAY...", "A"));

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
	Randy  : 'Germany',
	Karla  : 'France',
	Wendy  : 'Japan',
	Norman : 'England',
	Sam    : 'Argentina',
}
const greeting = (name) =>
	!GUEST_LIST.hasOwnProperty(name) ? "Hi! I'm a guest." : `Hi! I'm ${name}, and I'm from ${GUEST_LIST[name]}.`
// console.log('greeting', greeting('Randy'))
// console.log('greeting', greeting('Monti'))

/**[Color Conversion] RGB to HEX and HEX to RGB */
const colorConversion = (input) => {
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
		const [ r, g, b ] = input.match(/[0-9a-f]{2}/g).map((h) => parseInt(h, 16))
		return { r, g, b }
	}
	else {
		//RGB => HEX
		const colors = Object.values(input)
		if (colors.some((c) => c < 0 || 255 < c)) return 'Not valid input'
		return '#' + colors.map((c) => c.toString(16).padStart(2, '0')).join('')
	}
}
// console.log(colorConversion('#ffffff'))
// console.log(colorConversion('#050106'))
// console.log(colorConversion({ r: 9, g: 200, b: 125 }))

/**Remove Repeated Letters*/
const unrepeated = (str) => [ ...new Set(str) ].join('')
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
	first      : 'James',
	last       : 'Baker',
	bestFriend : {
		first : 'Scott',
		last  : 'Parkman',
	},
}
function bio({ first, last, bestFriend: { first: best } }) {
	// Do not edit the return statement below
	return 'Hi, my name is ' + first + ' ' + last + '. ' + best + ' is my best friend.'
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
let [ , , { name: thirdUser } ] = users
// console.log(thirdUser)

let names = []
for (const { name } of users) {
	names.push(name)
}
// console.log(names)

/** Online Shopping*/
const freeShipping = (order) => Object.values(order).reduce((total, item) => (total += item)) >= 50
// console.log('freeShipping', freeShipping({ Shampoo: 5.99, 'Rubber Ducks': 15.99 }))
// console.log('freeShipping', freeShipping({ Monopoly: 11.99, 'Secret Hitler': 35.99, Bananagrams: 13.99 }))

/**Lowercase and Uppercase Map */

const mapping = (letters) => {
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
const test = (zahlen) => zahlen.reduce((a, b) => ((a = a + b), a), 0)
// console.log(test([1, 2, 3]))

/**Edabit Experience Points */
const getXP = (obj) => `${Object.values(obj).reduce((sum, v, i) => (sum += v * [ 5, 10, 20, 40, 80 ][i]), 0)}XP`
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

/** Check If objOne Is Equal to objTwo*/
const isEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b)
console.log(
	'#6 true=>',
	isEqual(
		{
			foo : {
				bar : {
					baz : 'edabit.com',
				},
				baz : {
					userIds : {
						jason : 76397,
						steve : 73073,
						joe   : 21076,
					},
				},
			},
		},
		{
			foo : {
				baz : {
					userIds : {
						jason : 76397,
						steve : 73073,
						joe   : 21076,
					},
				},
				bar : {
					baz : 'edabit.com',
				},
			},
		}
	)
)
console.log(
	'#4 false=>',
	isEqual(
		{
			foo : {
				bar : {
					baz : true,
				},
				baz : {
					arr : [ 1, 2, 3 ],
				},
			},
		},
		{
			foo : {
				bar : {
					baz : true,
				},
				baz : {
					arr : [ 3, 2, 1 ],
				},
			},
		}
	)
)
