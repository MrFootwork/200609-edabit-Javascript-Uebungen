/** Design Patterns I: JavaScript Classes?!?*/
//instantiable function
// function Book() {
// 	this.author = 'author'
// 	this.published = 'published'
// }

// //literal object - singleton
// const Author = {
// 	name  : 'author',
// 	books : 'book',
// }

// //new constructor - anonymous function - singleton
// const Publisher = new function() {
// 	this.authors = 'authors'
// 	this.books = 'books'
// }()

// //instantiable class decleration
// class Review {
// 	constructor() {
// 		this.rating = 'rating'
// 		this.user = 'user'
// 	}
// }

// //IIFE - singleton
// ;(function Bookstore() {
// 	this.books = 'books'
// 	this.prices = 'prices'
// })()

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
