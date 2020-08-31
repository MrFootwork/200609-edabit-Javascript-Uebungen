/** Design Patterns I: JavaScript Classes?!?*/
// instantiable function
// function Book() {
// 	this.author = 'author'
// 	this.published = 'published'
// }

//literal object - singleton
const Author = {
	name  : 'author',
	books : 'book',
}

//new constructor - anonymous function - singleton
const Publisher = new function() {
	this.authors = 'authors'
	this.books = 'books'
}()

//instantiable class decleration
class Review {
	constructor() {
		this.rating = 'rating'
		this.user = 'user'
	}
}

//IIFE - singleton
;(function Bookstore() {
	this.books = 'books'
	this.prices = 'prices'
})()

/** Book Shelf*/
class Book {
	constructor(title, author) {
		this.title = title
		this.author = author
	}
	getTitle() {
		return 'Title: ' + this.title
	}
	getAuthor() {
		return 'Author: ' + this.author
	}
}

let PP = new Book('Pride and Prejudice', 'Jane Austen')
let H = new Book('Hamlet', 'William Shakespeare')
let WP = new Book('War and Peace', 'Leo Tolstoy')

// console.log(PP.author)
// console.log(PP.title)
// console.log(PP.getTitle())
// console.log(PP.getAuthor())

/**Ready, Set... Get! */
class Challenge {
	// Build class Challenge: constructor + getter
	constructor(id, level) {
		this.id = id
		this.level = level
	}
	get points() {
		const levelPoints = { VE: 5, EA: 10, ME: 20, HA: 40, VH: 80, EX: 120 }
		return levelPoints[this.level] || 0
	}
}

class User {
	// Build class User: constructor + setter
	constructor(name, xp, log) {
		this.name = name
		this.xp = xp || 0
		this.log = log || []
	}
	newSolvedChallenge(challenge) {
		this.log.push(challenge.id)
		this.xp += challenge.points //TODO: String handling for calculation
	}
}

// 1. Declare the class instances (two users and six challenges)
var user1 = new User('Madam', 0, [])
var user2 = new User('Steve', 0, [])
// 2. Set the challenges solved by the users
var challenge1 = new Challenge(1, 'VE')
var challenge2 = new Challenge(2, 'EA')
var challenge3 = new Challenge(3, 'ME')
var challenge4 = new Challenge(4, 'HA')
var challenge5 = new Challenge(5, 'VH')
var challenge6 = new Challenge(6, 'EX')

user1.newSolvedChallenge(challenge1)
user1.newSolvedChallenge(challenge4)
user1.newSolvedChallenge(challenge6)

user2.newSolvedChallenge(challenge5)
user2.newSolvedChallenge(challenge3)
user2.newSolvedChallenge(challenge2)

// console.log(user1)
// console.log(user2)
// console.log(challenge6.points)

/**Write a Simple Console Object */
class Console {
	constructor() {
		this.historyList = []
	}
	log(...args) {
		const result = args.reduce(
			(str, arg) => (typeof arg === 'object' ? `${str}${JSON.stringify(arg)}` : `${str}${arg}`),
			''
		)
		this.historyList.push(result)
		return result
	}
	history([ min, max ] = []) {
		min = Math.max(1, min)
		return this.historyList.slice(min - 1, Math.max(min, max) || this.historyList.length).join('\n')
	}
	clearHistory() {
		this.historyList = []
		return true
	}
}
// https://edabit.com/challenge/o7fs6wQvjfu9iZE2j
// const myConsole = new Console()
// myConsole.log('hi')
// myConsole.log({ myObjectIsHere: true })
// myConsole.log(function() {
// 	return 'hello challengers'
// })
// console.log(myConsole)
// console.log(myConsole.log('test'))
// console.log(myConsole)
// console.log(myConsole.history())
// console.log(myConsole.log.toString())

/** SimpleCrypt*/
function SimpleCrypt(str) {
	this.raw = str
	this.cur = str
}
SimpleCrypt.prototype.encrypt = function(str = this.cur) {
	this.cur = [ ...str ]
		.map((v, i) => String.fromCharCode(v.charCodeAt(0) + (i + 1)))
		.join('')
		.replace(/\s/g, ' ')
	return this.cur
}
SimpleCrypt.prototype.decrypt = function(str = this.cur) {
	this.cur = [ ...str ]
		.map((v, i) => String.fromCharCode(v.charCodeAt(0) - (i + 1)))
		.join('')
		.replace(/\s/g, ' ')
	return this.cur
}
SimpleCrypt.prototype.reset = function() {
	this.cur = this.raw
}
const myExample = new SimpleCrypt('123456')
// console.log(myExample)
// console.log(myExample.encrypt())
// console.log(myExample)
// console.log(myExample.decrypt())
// console.log(myExample)
// console.log(myExample.encrypt())
// console.log(myExample)
// console.log(myExample.reset())
// console.log(myExample)

/**Shiritori Game */
class Shiritori {
	constructor() {
		this.words = []
		this.game_over = false
	}
	play(str) {
		if (this.words != 0 && (this.words.slice(-1)[0].slice(-1) != str[0] || this.words.includes(str))) {
			this.game_over = true
			return 'game over'
		}
		this.words.push(str)
		return this.words
	}
	restart() {
		this.words = []
		this.game_over = false
		return 'game restarted'
	}
}
let my_shiritori = new Shiritori()
// console.log(my_shiritori)
// console.log(my_shiritori.words)
// console.log(my_shiritori.play('hallo'))
// console.log(my_shiritori)
// console.log(my_shiritori.play('oh'))
// console.log(my_shiritori)
// console.log(my_shiritori.play('hallo'))
// console.log(my_shiritori)
// console.log(my_shiritori.restart())
// console.log(my_shiritori)

/**Adding Elements to the End of a Singly Linked List */
function Node(element) {
	this.element = element
	this.next = null
}

function LinkedList() {
	let length = 0
	let head = null

	// write your code below
	this.push = function(element) {
		const node = new Node(element)
		if (!head) {
			head = node
			length++
			return element
		}
		let current = head
		while (current.next) {
			current = current.next
		}
		current.next = node
		length++
		return element
	}
	// code ends here

	this.check = function() {
		let current = head,
			sol = []
		while (current) {
			sol.push(current.element)
			current = current.next
		}
		return sol.join('')
	}
}

const first = new LinkedList()
first
console.log(first.push(2))
console.log(first.push(23))
console.log(first.check())
//https://edabit.com/challenge/xsLBGKTk6upShQTS7
