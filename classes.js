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

console.log(user1)
console.log(user2)
console.log(challenge6.points)
