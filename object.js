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
        [k]: [...k] //assigning the object elements
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
        [key]: [...key].filter((v) => v === char.toLowerCase()).length,
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
      [...word].filter((v) => v === char.toLowerCase()).length,
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
  Randy: 'Germany',
  Karla: 'France',
  Wendy: 'Japan',
  Norman: 'England',
  Sam: 'Argentina',
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
    const [r, g, b] = input.match(/[0-9a-f]{2}/g).map((h) => parseInt(h, 16))
    return { r, g, b }
  } else {
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
const unrepeated = (str) => [...new Set(str)].join('')
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
