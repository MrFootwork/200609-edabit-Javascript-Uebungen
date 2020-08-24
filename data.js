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
	let unique1 = [ ...str1 ].filter(char => !str2.includes(char))
	let unique2 = [ ...str2 ].filter(char => !str1.includes(char))
	return unique1.push(...unique2)
}
// console.log('2: ', minRemovals('abcde', 'cab'))
// console.log('2: ', minRemovals('deafk', 'kfeap'))
// console.log('6: ', minRemovals('acb', 'ghi'))

/**Stems and Leaves */
const stemPlot = arr => {
	//stem of each element in arr [11, 1, 0]
	const stems = arr.map(stem => {
		let stemS = stem.toString()
		return (stemS.length >= 2) * stemS.substring(0, stemS.length - 1)
	})

	//leaf of each element in arr [1, 1, 1]
	const leafs = arr.map(leaf => +leaf.toString().slice(-1))

	//solution as an object {0:[1], 1:[1], 11:[1]}
	let obj = {}
	stems.forEach(stem => (obj[stem] = []))
	leafs.forEach((leaf, i) => obj[stems[i]].push(leaf))

	//solution formatting
	let array = []
	for (const stem in obj) {
		array.push(`${stem} | ${obj[stem].sort().join(' ')}`)
	}
	return array
}
// console.log('', stemPlot([ 111, 11, 1 ]))
// console.log('', stemPlot([ 22, 22, 38, 22, 19 ]))
// console.log('', stemPlot([ 4, 8, 75 ]))

/**True Ones, False Zeros*/
const integerBoolean = n => [ ...n ].map(num => num == 1)
// console.log('', integerBoolean('100101'))

/**Delete Occurrences of Extra Elements in an Array */
deleteOccurrences = (arr, num, count = {}) => arr.filter(v => (count[v] >= num ? 0 : (count[v] = ++count[v] || 1)))
// console.log(deleteOccurrences([ 1, 1, 1, 1 ], 2))
// console.log(deleteOccurrences([ 13, true, 13, null ], 1))
// console.log(deleteOccurrences([ true, true, true ], 3))

/**Pricey Products */
const products = r => Object.keys(r).sort((a, b) => r[b] - r[a]).filter(product => r[product] >= 500)
// console.log(products({ Computer: 600, TV: 800, Radio: 50 }))

/**The Array Twins */
function twins(arr) {
	const sum = (a, b) => a + b
	for (i in arr) {
		if (arr.slice(0, i).reduce(sum, 0) == arr.slice(i).reduce(sum, 0)) return i
	}
	return 0
}
// console.log(twins([ 10, 1, 2, 3, 5, 5 ]))

/**Album in Albumns */
function releaseYear(album) {
	const albums = {
		'2015' : [ 'Vulnicura', 'Honeymoon', 'Rebel Heart' ],
		'2016' : [ 'Lemonade', 'Blackstar', 'A Moon Shaped Pool' ],
		'2017' : [ 'Flower Boy', 'Antisocialites' ],
		'2018' : [ 'El Mal Querer', 'Someone Out There', 'Cranberry', 'Kamikaze' ],
		'2019' : [ 'thank u next', 'Magdalene', 'Ode to Joy' ],
		'2020' : [ 'Rough and Rowdy Ways', 'folklore', 'Future Nostalgia', 'Colores' ],
	}
	let search = Object.keys(albums).filter(year => albums[year].includes(album))[0]
	return search ? +search : 'Unknown'
}
// console.log(releaseYear('Ode to Joy'))
// console.log(releaseYear('Honeymoon'))
// console.log(releaseYear('fake'))
// console.log(releaseYear('thank u next'))

/**Histogram Function */
function histogram(arr, char) {
	return arr.map(rowLength => char.repeat(rowLength)).join('\n')
}
// console.log(histogram([ 1, 3, 4 ], '#'))

/**Building a Pie Chart */
function pieChart(data) {
	let degreePerUnit = 360 / Object.values(data).reduce((sum, value) => sum + value, 0)
	for (category in data) {
		data[category] = +(data[category] * degreePerUnit).toFixed(1)
	}
	return data
}
// console.log(pieChart({ a: 8, b: 21, c: 12, d: 5, e: 4 }))

/**Conveyor Belts, Warp Tunnels */
function warpTunnel(mtx, n) {
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < mtx.length; j++) {
			mtx[j].unshift(mtx[(j || mtx.length) - 1].pop())
		}
	}
	return mtx
}
// console.log(warpTunnel([ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ], 2))
// console.log(warpTunnel([ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ], 9))

/**Check Magic Square */
function isMagicSquare(square) {
	const magicalSum = square[0].reduce((rowSum, rowElement) => rowSum + rowElement, 0)
	//all rows
	if (square.some(row => row.reduce((rowSum, rowElement) => rowSum + rowElement, 0) != magicalSum)) return false
	//all columns
	for (let i = 0; i < square[0].length; i++) {
		let columnSum = 0
		for (let j = 0; j < square.length; j++) {
			columnSum += square[j][i]
		}
		if (columnSum != magicalSum) return false
	}
	//the diagonals
	let diagonalSum1 = 0
	let diagonalSum2 = 0
	for (let i = 0; i < square.length; i++) {
		diagonalSum1 += square[i][i]
		diagonalSum2 += square[i][square.length - 1 - i]
	}
	if (diagonalSum1 != magicalSum || diagonalSum2 != magicalSum) return false
	return true
}
// console.log(isMagicSquare([ [ 8, 1, 6 ], [ 3, 5, 7 ], [ 4, 9, 2 ] ]))

/**Unique Character Mapping */
function characterMapping(str) {
	return [ ...str ].map(key => [ ...new Set(str) ].indexOf(key))
}
// console.log(characterMapping('abcdd'))
// console.log(characterMapping('babbcb'))

//Object copy
/**Find the Bug: Annual Price and Deposit Increasement */
function migrateProduct(oldProduct) {
	const newProduct = {
		...oldProduct,
		price      : oldProduct.price * 1.15,
		containers : oldProduct.containers.map(container => ({
			...container,
			deposit : container.type === 'bottle' ? 0.2 : container.deposit,
		})),
	}
	return { oldProduct, newProduct }
}
// console.log(
// 	migrateProduct({
// 		product    : 'Milk',
// 		price      : 1.2,
// 		containers : [
// 			{ type: 'bottle', deposit: 0.15, liters: 1.5 },
// 			{ type: 'can', deposit: 0.1, liters: 0.33 },
// 			{ type: 'carton', deposit: null, liters: 1 },
// 		],
// 	})
// )

/**Postfix Notation */
function postfix(E) {
	while (isNaN(E)) E = E.replace(/(\d+) (\d+) (\D)/g, (_, l, r, o) => eval(l + o + r))
	return +E
}
// console.log(postfix('2 2 +'))
// console.log(postfix('2 3 * 1 - 5 /'))

/**Parentheses Clusters */
function split(str) {
	const result = []
	let clusterEnds = 0, //0 indicates the end of a cluster
		cluster = ''
	for (paranthesis of str) {
		cluster += paranthesis
		paranthesis === '(' ? clusterEnds++ : clusterEnds--
		if (clusterEnds === 0 && cluster) {
			result.push(cluster)
			cluster = ''
		}
	}
	return result
}
// console.log(split('()()()'))
// console.log(split('((()))'))
// console.log(split('((()))(())()()(()())'))
// console.log(split('((())())(()(()()))'))
