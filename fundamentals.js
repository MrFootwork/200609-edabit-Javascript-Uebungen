function nothingIsNothing() {
	return [...arguments].every(el => Boolean(el))
}
// console.log(nothingIsNothing(0, false, [], {}))
// console.log(nothingIsNothing(12))
