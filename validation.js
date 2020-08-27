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
