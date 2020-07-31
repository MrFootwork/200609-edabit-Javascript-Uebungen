/** Promises II: What Is a Callback?*/
function anotherFunc(manipulator) {
	let str = 'bye'
	setTimeout(() => {
		manipulator(str)
		console.log('anotherFunc() finished waiting for 100ms...')
	}, 100)
}

var doc = 'hello'

// function callback(str) {
// 	doc = str
// }
// console.log('before callback: ', doc)
// console.log("callback('test') running...", callback('test'))
// console.log('after callback: ', doc)
// console.log('anotherFunc() running...', anotherFunc(callback))
// console.log('after anotherFunc: ', doc)
// console.log("callback('test2') running...", callback('test2'))
// console.log('after callback: ', doc)
// setTimeout(() => {
// 	console.log('after waiting: ', doc)
// }, 100)

/**Promises III: Native Promise, Introducing the Executor */
let promiseIII = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('edabit')
	}, 1000)
})
// console.log(promise)

/**Promises IV: The Reject Callback */
let promiseIfDog = new Promise((resolve, reject) => {
	let animal = 'cat'
	setTimeout(() => {
		if (animal === 'dog') {
			resolve("It's a dog!")
		}
		if (animal !== 'dog') {
			reject("It's not a dog!")
		}
	}, 1000)
}).catch(e => {
	console.error(e)
})
// console.log(promiseIfDog)

/**Promises V: Then */
var result = ''

let promiseV = new Promise(resolve => resolve('success!'))

// promiseV.then(val => (result = val))
// console.log(result)

/** Promises VI: Catch*/
let errorLog = {}

let promiseVI = new Promise(() => {
	throw new Error('Something failed')
}).catch(error => (errorLog = error))

/**Promises VII: Chaining */
function doSomething(isGoingToResolve = true) {
	return new Promise((resolve, reject) => {
		if (isGoingToResolve) {
			resolve('something')
		} else {
			reject('something else')
		}
	})
		.then(response => {
			console.log('in my function', response)
			return response
		})
		.catch(error => {
			console.log('in my function', error)
		})
}

// doSomething().then(response => {
// 	console.log('in my main call', response)
// })

/**Promises VIII: Old Callback API */
function saySomething(str) {
	throw 'what the heck'
}
let ERR = ''
const wait = () => new Promise(resolve => setTimeout(resolve, 1000))
wait().then(() => saySomething('1 second has passed')).catch(error => (ERR = error))

/**Promises IX: Composition Introduction */
var resultIX = ''
var thenable = {
	then : function(onFulfill, onReject) {
		onFulfill('edabit!')
	},
}
var promise = Promise.resolve(thenable).then(passed => (resultIX = passed))

/**Anonymous Functions All The Way Down */
const lambdaDepth = n => eval('() => '.repeat(n) + '"edabit"')
// console.log(lambdaDepth(1))
// console.log(lambdaDepth(2))
// console.log(lambdaDepth(3))
// console.log(lambdaDepth(0))

/**Don't Be in Such a Curry */
let carLot = {}
const carMaker = make => carCount => (carLot[make] = (carLot[make] || 0) + carCount)
const toyotaCars = carMaker('Toyota')
const benzCars = carMaker('Mercedes')
// console.log('toyotaCars', toyotaCars(2))
// console.log('benzCars', benzCars(3))
// console.log('carLot', carLot)
// console.log('benzCars', benzCars(1))
// console.log('carLot', carLot)

/**Currying */
add5 = num => num + 5
add6 = num => num + 6
// console.log(add5(2))
// console.log(add6(3))
const addAny = num => add => add + num
const addFive = addAny(5)
const addSix = addAny(6)
// console.log(addFive(2))
// console.log(addSix(1))

/**H4ck3r Sp34k */
const hackerSpeak = str => {
	const replaceChars = {
		a : 4,
		e : 3,
		i : 1,
		o : 0,
		s : 5,
	}
	let toBeReplaced = new RegExp(`[${Object.keys(replaceChars).join('')}]`, 'g')
	return str.replace(toBeReplaced, match => replaceChars[match])
}
// console.log('hackerSpeak=>j4v45cr1pt 15 c00l: ', hackerSpeak('javascript is cool'))

/**Function Factory */
const makePlusFunction = baseNum => addNum => baseNum + addNum
// function makePlusFunction(baseNum) {
// 	return function(addNum) {
// 		return baseNum + addNum
// 	}
// }
const plusFive = makePlusFunction(5)
// console.log('plusFive', plusFive(2))
// console.log(makePlusFunction(3)(2));

/**All About Anonymous Functions: Adding Suffixes */
function add_suffix(suffix) {
	return function(something) {
		return something + suffix
	}
}
// add_ly = add_suffix('ly')
// console.log(add_ly('hopeless'))
// console.log(add_ly('total'))
// add_less = add_suffix('less')
// console.log(add_less('fear'))
// console.log(add_less('ruth'))
