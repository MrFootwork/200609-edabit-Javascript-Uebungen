/**Owofied a Sentence */
const owofied = sentence =>
	//sentence.replace(/([ie])/g, "w$1") + " owo";
	sentence.replace(/([ie])/g, 'w$1') + ' owo'
// sentence.replace(/i/g, "wi").replace(/e/g, "we") + " owo";
// console.log("owofied: ", owofied("I'm gonna ride 'til I can't no more"));

//Is the Last Character an N?
//const isLastCharacterN = word => word.endsWith("n");
//const isLastCharacterN = w => w[w.length - 1] === "n";
//const isLastCharacterN = word => [...word].pop() == "n";
const isLastCharacterN = word => /n$/.test(word)
// console.log(isLastCharacterN("fishn"));

/**Check String for Spaces */
const hasSpaces = str => /\s/g.test(str)
// console.log("hasSpaces: ", hasSpaces("hello, world"));

/** Letters Only*/
const lettersOnly = str => str.replace(/[^a-z]/gi, '')
//console.log(lettersOnly("R!=:~0o0./c&}9k`60=y"));

const replaceVowels = (str, ch) => str.replace(/[aeiou]/g, ch)
//console.log(replaceVowels("the aardvark", "#"));

const subReddit = link =>
	//link.match(/\/r\/(\w+)/)[1];
	//link.split('/r/')[1].split('/')[0]
	link.split('/')[4]
//console.log("subReddit", subReddit("https://www.reddit.com/r/awww/"));

const removeVowels = str => str.replace(/[aeiouAEIOU]/g, '')
//console.log("removeVowels: ", removeVowels("We're gonna build a wall!"));

/**How Many Vowels? */
const countVowels = str => str.match(/[aeiouAEIOU]/g).length
// console.log("countVowels", countVowels("Hello World!"))

/**Create a Phone Number */
const createPhoneNumber = numbers => `(xxx) xxx-xxxx`.replace(/x/g, numberInsert => numbers.shift())
// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

/**White Spaces Between Lower and Uppercase Letters */
const insertWhitespace = s => s.split(/(?<!^)(?=[A-Z])/g).join(' ')
// s.replace(/([a-z])([A-Z])/g, "$1 $2");
// s.replace(/([a-z][A-Z])/g, ([lower, upper]) => `${lower} ${upper}`);
// console.log("insertWhitespace", insertWhitespace("SheWalksToTheBeach"));

/**Double Character Swap */
const doubleSwap = (str, c1, c2) =>
	// str
	//   .split("")
	//   .map(char => (char == c1 ? c2 : char == c2 ? c1 : char))
	//   .join("");
	[ ...str ].map(v => (v === c1 ? c2 : v === c2 ? c1 : v)).join('')
// console.log("doubleSwap=>bbaaccc:\n", doubleSwap("aabbccc", "a", "b"));
// console.log(
//   "doubleSwap=>random w&rds writt#n h#r#\n",
//   doubleSwap("random w#rds writt&n h&r&", "#", "&")
// );

/**Broken Keyboard */
const findBrokenKeys = (str1, str2) => [ ...new Set([ ...str1 ].filter((char, i) => char !== str2[i])) ]
// console.log(
//   "findBrokenKeys",
//   findBrokenKeys("happy birthday", "hawwy birthday")
// );
// console.log("findBrokenKeys", findBrokenKeys("beethoven", "affthoif5"));

/**Italian Grammar: Present Tense of First Conjugation Verbs */
const conjugate = (verb, pronoun) => {
	let proNSuff = [
		[ 'Io', 'o' ],
		[ 'Tu', 'i' ],
		[ 'Egli', 'a' ],
		[ 'Noi', 'iamo' ],
		[ 'Voi', 'ate' ],
		[ 'Essi', 'ano' ],
	]
	let root =
		pronoun == 2 || pronoun == 4
			? verb.replace(/are$/, '').replace(/(?<=[^b])i$/, '')
			: verb.replace(/are$/, '')
	let suffix = `${root[root.length - 1] == 'c' || /(?<=[^g])g$/.test(root) ? 'h' : ''}${proNSuff[
		pronoun - 1
	][1]}`
	if (verb == 'negare' && pronoun == 3) return 'Egli nega'
	return `${proNSuff[pronoun - 1][0]} ${root}${suffix}`
}
//hi
// console.log("conjugate=>Voi programmate: ", conjugate("programmare", 5));
// console.log("conjugate=>Tu inizi: ", conjugate("iniziare", 2));
// console.log("conjugate=>Noi manchiamo: ", conjugate("mancare", 4));
// console.log("conjugate=>Egli cambia: ", conjugate("cambiare", 3));
// console.log("conjugate=>Egli nega: ", conjugate("negare", 3));
// console.log("conjugate=>Tu pareggi: ", conjugate("pareggiare", 2));
// console.log("conjugate=>Tu neghi: ", conjugate("negare", 2));

/**Recomposing Strings */
const recompose = string =>
	string
		// .split(/(?<=[aeiouAEIOU])(?=[^aeiouAEIOU])|(?<=[^aeiouAEIOU])(?=[aeiouAEIOU])/g)
		.split(/([aeiou]+)/gi)
		.map(group => [ ...group ].reverse().join(''))
		.join('')
		// .split(/(?<=[a-z])(?=[A-Z])/g)
		// .join(' ')
		.replace(/([A-Z])/g, ' $1') //.split().join() = replace()
// console.log('recompose -> Kid Koala', recompose('KiKdaola'))
// console.log('recompose -> Boards Of Canada', recompose('BaosdrOCfanada'))
// console.log('recompose -> Chemical Brothers', recompose('hCemicarBlohtesr'))

/**Ones and Zeroes */
const sameLength = s => {
	// let groups = s.split(/(0+)/g)
	// groups[groups.length - 1] != ''
	// 	? (groups = false)
	// 	: (groups = groups.splice(0, groups.length - 1).reduce((all, el, i, arr) => {
	// 			return all && el.length == arr[i + (i % 2 ? -1 : 1)].length
	// 		}, true))
	// return groups
	return JSON.stringify(s.match(/0+/g)) == JSON.stringify(s.match(/1+/g).map(e => e.replace(/1/g, 0)))
}
// console.log('sameLength', sameLength('110011100010'))
// console.log('sameLength=>false: ', sameLength('11001'))

/**Digits Sum Root */
// const rootDigit = (n) => {
// 	// let less = n.toString().split('').reduce((sum, digit) => sum + +digit, 0)
// 	// while (less.toString().split('').length >= 2) {
// 	// 	return rootDigit(less)
// 	// }
// 	// return less
// 	return n && (+`${BigInt(n) % 9n}` || 9);
// }
// console.log('rootDigit', rootDigit(123))
// console.log('rootDigit', rootDigit(999888777))

/**war zu schwer: nicht geschafft */
const removeLeadingTrailing = n => +(n.match(/[1-9]\d*|(?=\.)\.\d*[1-9]/g) || []).join('')
// console.log(removeLeadingTrailing("230.000"))
// console.log(removeLeadingTrailing("00402"))
// console.log(removeLeadingTrailing("03.1400"))
// console.log(removeLeadingTrailing("30"))

/** Find Number of Digits in Number*/
const num_of_digits = num => `${num}`.match(/\d/g).length
// console.log('1000: ', num_of_digits(1000))

/**Adding Numbers in s String */
const addNums = nums => nums.match(/-?\d+/g).reduce((total, num) => total + +num, 0)
console.log('20: ', addNums('2, 5, 1, 8, 4'))
console.log('-7: ', addNums('-12, -8, 2, 11, -16, 16'))
