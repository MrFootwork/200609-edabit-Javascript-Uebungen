/**Omnipresent Value */
function isOmnipresent(arr, val) {
	return arr.every(subArr => subArr.includes(val))
}
// console.log(isOmnipresent([ [ 1, 1 ], [ 1, 3 ], [ 5, 1 ], [ 6, 1 ] ], 1))
// console.log(isOmnipresent([ [ 1, 1 ], [ 1, 3 ], [ 5, 1 ], [ 6, 1 ] ], 6))

/**Pythagorean Triplet*/
function isTriplet(n1, n2, n3) {
	;[ a, b, h ] = [ n1, n2, n3 ].sort((a, b) => a - b)
	return a ** 2 + b ** 2 === h ** 2

	return (
		n1 ** 2 + n2 ** 2 === n3 ** 2 || //
		n1 ** 2 + n3 ** 2 === n2 ** 2 ||
		n2 ** 2 + n3 ** 2 === n1 ** 2
	)
}
// console.log(isTriplet(3, 4, 5))
// console.log(isTriplet(1, 2, 3))

/**Remove Duplicates from an Array */
function removeDups(arr) {
	return [ ...new Set(arr) ]
}
// console.log(removeDups([ 1, 0, 1, 0 ]))
// console.log(removeDups([ 'John', 'Taylor', 'John' ]))

/**Apocalyptic Numbers */
function apocalyptic(number) {
	//2n = BigInt(2)
	let index = `${BigInt(2) ** BigInt(number)}`.indexOf(666)
	return index !== -1 ? `Repent! ${index} days until the Apocalypse!` : `Crisis averted. Resume sinning.`
}
// console.log(apocalyptic(109))
// console.log(apocalyptic(499))
// console.log(apocalyptic(666))

function match(s1, s2) {
	return s1.toLowerCase() == s2.toLowerCase()
}
// console.log(match('hello', 'hELLo'))
// console.log('hi'.toLowerCase().match('Hi'.toLowerCase()))
// console.log(match('bald', 'blad'))
// console.log(match('1', '0'))

/**Is it True? */
function isTrue(str) {
	return eval(str.replace('=', '=='))
}
// console.log(isTrue('2 = 2'))

/**25-Mile Marathon */
function marathonDistance(d) {
	// JS methods
	return d.reduce((sum, num) => sum + Math.abs(num), 0) === 25

	//in-place operation
	d[0] = Math.abs(d[0])
	while (d.length > 1) {
		d[0] += Math.abs(d[1])
		d.splice(1, 1)
	}
	return d[0] === 25
}
// console.log(marathonDistance([ 1, 2, 3, 4 ]))
// console.log(marathonDistance([ 1, 9, 5, 8, 2 ]))
// console.log(marathonDistance([ -6, 15, 4 ]))

/**Vowel Sandwich */
function isVowelSandwich(str) {
	const RegExp = /^[^aeiou][aeiou][^aeiou]$/i
	return RegExp.test(str)
}
// console.log(isVowelSandwich('cat'))
// console.log(isVowelSandwich('ear'))

/** Match the Last Item*/
function matchLastItem(arr) {
	return arr.pop() === arr.join('')
}
// console.log(matchLastItem([ 'rsq', '6hi', 'g', 'rsq6hig' ]))
// console.log(matchLastItem([ 1, 1, 1, '11' ]))
// console.log(matchLastItem([ 8, 'thunder', true, '8thundertrue' ]))

/**Xs and Os, Nobody Knows */
function XO([ ...str ]) {
	//JS methods
	const xoCount = (str, xo) => str.filter(char => char.toLowerCase() === xo).length
	return xoCount(str, 'x') === xoCount(str, 'o')

	//in-place
	let cX = 0
	for (let i = 0; i < str.length; i++) {
		if (str[i].match(/x/i)) str.splice(cX++, 1, ...str.splice(i, 1, 'o'))
		if (str[i].match(/[^xo]/i)) str.splice(i--, 1)
	}
	return cX === str.length / 2
}
// console.log('true: ', XO('ooxx'))
// console.log('false: ', XO('xooxx'))
// console.log('true: ', XO('ooxXm'))
// console.log('true: ', XO('zpzpzpp'))
// console.log('false: ', XO('zzoo'))

/**Something in the Box?
 */
function inBox(arr) {
	for (let i = 1; i < arr.length - 1; i++) {
		if (arr[i].match(/^#\s*\*{1}\s*#$/)) return true
	}
	return false
}
// console.log(inBox([ '###', '#*#', '###' ]))
// console.log(inBox([ '*####', '# #', '#  #*', '####' ]))
// console.log(inBox([ '####', '#* #', '#  #', '####' ]))
// console.log(inBox([ '#####', '#   #', '#   #', '# * #', '#####' ]))

/**Double Letters */
function doubleLetters(word) {
	const RegExp = /(\w)\1+/g
	return !!word.match(RegExp)
}
// console.log(doubleLetters('loop'))
// console.log(doubleLetters('yummy'))
// console.log(doubleLetters('orange'))
// console.log(doubleLetters('munchkin'))
