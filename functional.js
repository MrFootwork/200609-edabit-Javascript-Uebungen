/**Promises III: Native Promise, Introducing the Executor */
let promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('edabit')
	}, 1000)
})
// console.log(promise)

/** Promises II: What Is a Callback?*/
function anotherFunc(manipulator){
	let str = 'bye'
	setTimeout(() => {
		manipulator(str)
		console.log('anotherFunc() finished waiting for 100ms...')
	}, 100)
}

var doc = 'hello'

function callback(str){
	doc = str
}
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
