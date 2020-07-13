const uniqueSort = arr => [ ...new Set(arr) ].sort((a, b) => b - a)
// console.log(uniqueSort([ 1, 5, 8, 2, 3, 4, 4, 4, 10 ]))

const rps = (p1, p2) => {
	const p1WinsOverp2 = { Rock: 'Scissors', Paper: 'Rock', Scissors: 'Paper' }
	if (p1 == p2) return "It's a draw"
	return `The winner is p${2 - (p1WinsOverp2[p1] == p2)}`
}
// console.log(rps('Scissors', 'Paper'))

const matrix = (x, y, z) => Array(x).fill(Array(y).fill(z))
// console.log('matrix', matrix(2, 1, 'edabit'))
// console.log(matrix(3, 2, 3))

const sharedLetters = (str1, str2) =>
	// [ ...new Set(str1) ].reduce((acc, char1) => [ ...new Set(str2) ].some(char2 => char1 === char2) + acc, 0)
	// [ ...new Set(str1) ].filter(x => new Set(str2).has(x)).length
	[ ...new Set(str1) ].filter(x => str2.includes(x)).length
// console.log('2: ', sharedLetters('apple', 'meaty'))

const countAll = str => ({
	LETTERS : (str.match(/[a-z]/gi) || []).length,
	DIGITS  : (str.match(/\d/g) || []).length,
})
// console.log('{ "LETTERS":  7, "DIGITS": 3 }', countAll('Hello World'))

const risiko = (att, def) => {
	const attS = att.sort((a, b) => b - a)
	const defS = def.sort((a, b) => b - a)
	return attS.reduce((lost, battle, i) => (battle > defS[i]) + lost, 0)
}
// console.log('3: ', risiko([ 3, 6, 4 ], [ 2, 5, 3 ]))
// console.log('0: ', risiko([ 3, 6 ], [ 6, 4, 4 ]))

const sumFractions = arr => Math.round(arr.reduce((sum, fr) => sum + fr[0] / fr[1], 0))
// console.log('2: ', sumFractions([ [ 18, 13 ], [ 4, 5 ] ]))

const hemisphereSeason = (hemisphere, date) => {
	// return [ 'Spring', 'Summer', 'Autumn', 'Winter' ][
	// 	(((new Date(date).getMonth() + (hemisphere === 'N' ? 10 : 16)) / 3) | 0) % 4
	// ]
	date = new Date(date).getMonth()
	let order = [ 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 0, 1 ],
		seasons = {
			N : [ 'Spring', 'Summer', 'Autumn', 'Winter' ],
			S : [ 'Autumn', 'Winter', 'Spring', 'Summer' ],
		}
	return seasons[hemisphere][Math.floor(order.indexOf(date) / 3)]
}
// console.log('Summer: ', hemisphereSeason('S', 'January, 2'))
// console.log('Summer: ', hemisphereSeason('N', 'June, 30'))

const oldest = people => Object.keys(people).reduce((a, b) => (people[a] >= people[b] ? a : b))
// console.log('oldest -> ', oldest({ Emma: 71, Jack: 45, Amy: 15, Ben: 29 }))

const minRemovals = (str1, str2) => {
	str2 = str2.split('')
	return str1.split('').reduce((count, char) => {})
	// return str2
}
console.log('2: ', minRemovals('abcde', 'cab'))
console.log('2: ', minRemovals('deafk', 'kfeap'))
console.log('6: ', minRemovals('acb', 'ghi'))
