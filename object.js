/**Get Sum of People's Budget */
const getBudgets = arr => arr.reduce((total, person) => total + person.budget, 0)

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
				[key] : [ ...key ].filter(v => v === char.toLowerCase()).length,
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
			word,
			[ ...word ].filter(v => v === char.toLowerCase()).length,
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
const greeting = name =>
	!GUEST_LIST.hasOwnProperty(name)
		? "Hi! I'm a guest."
		: `Hi! I'm ${name}, and I'm from ${GUEST_LIST[name]}.`
// console.log('greeting', greeting('Randy'))
// console.log('greeting', greeting('Monti'))
