//Find gap
function isSafeBridge(str) {
	//return str.split(" ").length === 1;
	return !str.includes(' ')
}
//console.log(isSafeBridge("####"));

//char Zähler
//charCount = (myChar, str) => [...str].filter(chars => chars === myChar).length        //[...str] nimmt str auseinander
charCount = (myChar, str) => str.split(myChar).length - 1
//console.log(charCount("a", "00a132aöoif89AAaaa"));

//Recursion to Repeat a String n Number of Times
//n? nur 0=false, sonst true
repetition = (txt, n) => (n ? txt + repetition(txt, --n) : '')
//console.log(repetition("amigo", 5));

//Check if String Ending Matches Second String
const checkEnding = (str1, str2) =>
	//[...str1].splice(str1.length - str2.length).join("") == str2;
	str1.endsWith(str2)
//console.log(checkEnding("abcdefg", "efg"));
//console.log(checkEnding("abcdefg", "h"));

//Convert Number to String of Dashes
const GoString = num => '-'.repeat(num)
//const GoString = num => Array(num).fill("-").join("");
//console.log(GoString(5));

//Edaaaaabit
const howManyTimes = num => `Ed${'a'.repeat(num)}bit`
//console.log(howManyTimes(5));
//console.log(howManyTimes(0));

//Word Endings
const addEnding = (arr, ending) => arr.map(word => `${word}${ending}`)
//arr.map(word => word + ending);
//arr.map(s => s.concat(ending));
//console.log(addEnding(["clever", "meek", "hurried", "nice"], "ly"));

//Say Hello to guests
const greetPeople = names => names.map(name => 'Hello ' + name).join(', ')
//console.log(greetPeople(["Frank", "Angela", "Joe"]));
//console.log(greetPeople([]));

//Count Syllables
const numberSyllables = word => word.split('-').length
//console.log(numberSyllables("mon-u-men-tal"));

//Shuffle names
//const nameShuffle = str => `${str.split(" ")[1]} ${str.split(" ")[0]}`;
const nameShuffle = str => str.split(' ').reverse().join(' ')
//console.log(nameShuffle("Rosie O'Donnell"));

//Semantic Versioning
const retrieveMajor = semver => semver.split('.')[0]
const retrieveMinor = semver => semver.split('.')[1]
const retrievePatch = semver => semver.split('.')[2]
/* console.log(retrieveMajor("6.1.9"));
console.log(retrieveMinor("6.1.9"));
console.log(retrievePatch("6.1.9")); */

//Reverse and Capitalize
function reverseCapitalize(str) {
	//return str.split("").reverse().join("").toUpperCase()
	return [...str].reverse().join('').toUpperCase()
}
//console.log(reverseCapitalize("hellothere"));

//Convert Number to Corresponding Month Name
const monthName = num =>
	new Date(2000, num - 1).toLocaleString('en-us', { month: 'long' })
//console.log(monthName(12));

//Smaller String Number
const smallerNum = (n1, n2) => Math.min(n1, n2).toString()
//console.log(smallerNum("1", "2"));

//Remove the First and Last Characters
const removeFirstLast = str => str.slice(1, -1) || str
/* console.log(removeFirstLast("xababax"));
console.log(removeFirstLast("x"));
console.log(removeFirstLast("xx")); */

/**Alphabet Soup: rearranges a string in alphabetical order.
 */
const AlphabetSoup = str => str.split('').sort().join('')
//console.log(AlphabetSoup("einstring"));

/** Hitting the Jackpot*/
const testJackpot = result => new Set(result).size === 1
// console.log("result: ", testJackpot(["@", "@", "@", "@"]));
// console.log("result: ", testJackpot(["&&", "&", "&&&", "&&&&"]));

/** Multiplying Numbers in a String*/
const multiplyNums = nums =>
	nums.split(', ').reduce((product, num) => product * num, 1)
// console.log(multiplyNums("1, 2, 3, 4"));

/**Capitalize by ASCII */
const asciiCapitalize = str => {
	/* let strArray = str.split("").map(char => char.toLowerCase().charCodeAt(0));
		let capitalizedString = "";
		for (const char of strArray) {
		  if (97 <= char && char <= 122 && !(char % 2)) {
			 capitalizedString += String.fromCharCode(char - 32);
		  } else capitalizedString += String.fromCharCode(char);
		}
		return capitalizedString; */
	return [...str]
		.map(ascii =>
			ascii.charCodeAt(0) % 2 ? ascii.toLowerCase() : ascii.toUpperCase()
		)
		.join('')
}
// console.log("To Be oR NoT To Be!=>", asciiCapitalize("to be or not to be!"));

/**Converting One Binary String to Another */
const minSwaps = (s1, s2) =>
	[...s1].reduce((totalSwaps, s1, i) => totalSwaps + (s1 != s2[i]), 0) / 2
// s2 is a string and enumerable => no array conversion needed
// console.log("minSwaps => 1: ", minSwaps("1100", "1001"));
// console.log("minSwaps => 4: ", minSwaps("10011001", "01100110"));

/**Numbers in Strings */
const numInStr = arr => arr.filter(value => /\d/g.test(value))
// console.log('numInStr => ["1a", "2b"]: ', numInStr(["1a", "a", "2b", "b"]));

/**Calculate an Earned Run Average */
const era = (er, ip) => {
	let ipCalc = ip
		.toString()
		.split('.')
		.map((innings, i) => (i ? [0, 1 / 3, 2 / 3][innings] : innings))
	ipCalc = Number(ipCalc[0]) + Number(ipCalc[1] ? ipCalc[1] : 0)
	return ((er / ipCalc) * 9).toFixed(2)
	// return (Math.floor(er / ip * 900) / 100).toFixed(2);
	//
}
// console.log("era 2.00: ", era(22, 99));
// console.log("era 2.08: ", era(23, 99.1));

/**Basic Arithmetic Operations on a String Number */
const arithmeticOperation = n => {
	// let workVar = n.split(" ");
	// switch (workVar[1]) {
	//   case "+":
	//     workVar = +workVar[0] + +workVar[2];
	//     break;
	//   case "-":
	//     workVar = +workVar[0] - +workVar[2];
	//     break;
	//   case "*":
	//     workVar = +workVar[0] * +workVar[2];
	//     break;
	//   case "/":
	//     workVar = +workVar[0] / (+workVar[2] || -workVar[0]);
	//     break;
	//   default:
	//     break;
	// }
	// return workVar;
	const [num1, operator, num2] = n.split(' ')
	const operations = {
		'+': +num1 + +num2,
		'-': +num1 - num2,
		'*': +num1 * num2,
		'/': +num1 / (+num2 || -num1),
	}
	return operations[operator]
}
// console.log("arithmeticOperation", arithmeticOperation("100 / 0"));

/**C*ns*r*d Str*ngs */
const uncensor = (str, vowels) => {
	// let vowelsArr = [...vowels];
	// return [...str]
	//   .map((char, i) => (char == "*" ? vowelsArr.shift() : char))
	//   .join("");
	// vowels = [...vowels];
	// return str.replace(/\*/g, () => vowels.shift());
	vowels = [...vowels]
	return str.replace(/\*/g, () => vowels.shift())
}
// console.log("uncensor", uncensor("Wh*r* d*d my v*w*ls g*?", "eeioeo"));

/**Reverse the Odd Length Words */
const reverseOdd = str => {
	// //array with string words
	// let words = str.split(" ").map(word => {
	//   if (word.length % 2) {
	//     let wordLetters = [...word];
	//     return word.replace(/./g, () => wordLetters.pop());
	//   } //odd
	//   return word; //even
	// });
	// return words.join(" ");
	return str
		.split(' ')
		.map(word => (word.length % 2 ? [...word].reverse().join('') : word))
		.join(' ')
}
// console.log("Lösung: enO owt eerht four\n", reverseOdd("One two three four"));

/**Unmix My Strings */
const unmix = str =>
	// [...str]
	//   .map((char, i) => (i % 2 ? str[i - 1] : i == str.length - 1 ? char : str[i + 1]))
	//   .join("");
	str.replace(/(.)(.)?/g, '$2$1')
// console.log(unmix("123456"));
// console.log(unmix("hTsii  s aimex dpus rtni.g"));
// console.log(unmix("badce"));

/**Repeating Letters */
const ndoubleCharame = str =>
	str
		.split('')
		.map(x => x + x)
		.join('')
// console.log('ndoubleCharame', ndoubleCharame('String'))
// console.log('ndoubleCharame', ndoubleCharame('Hello World!'))
// console.log('ndoubleCharame', ndoubleCharame('1234!_ '))

/**Hashes and Pluses */
const hashPlusCount = str => {
	const count = sign => [...str].filter(ch => ch == sign).length
	return [count('#'), count('+')]
}
// console.log("hashPlusCount", hashPlusCount("###+"))
// console.log("hashPlusCount", hashPlusCount("##+++#"))
// console.log("hashPlusCount", hashPlusCount(""));

/**Prefixes vs. Suffixes */
// const isPrefix = (word, prefix) =>
//     [ ...prefix ].slice(0, prefix.length - 1).reduce((total, ch, i) => total && ch == word[i], true)
// const isSuffix = (word, suffix) =>
//     [ ...suffix ]
//         .slice(1, suffix.length)
//         .reduce((total, ch, i) => total && ch == word[word.length - suffix.length + 1 + i], true)
const isPrefix = (word, prefix) => word.startsWith(prefix.slice(0, -1))
const isSuffix = (word, suffix) => word.endsWith(suffix.slice(1))
// console.log('isPrefix -> isPrefix', isPrefix('automation', 'auto-'))
// console.log('isPrefix -> isPrefix', isPrefix('retrospect', 'sub-'))
// console.log('isSuffix -> isSuffix', isSuffix('arachnophobia', '-phobia'))
// console.log('isSuffix -> isSuffix', isSuffix('vocation', '-logy'))

/**Return the Index of the First Vowel */
// const firstVowel = (str) => str.match(/[aeiou]/i)["index"]
const firstVowel = str => str.search(/[aeiou]/i)
// console.log('firstVowel', firstVowel('STRAWBERRY'))

/**Say "Hello" Say "Bye" */
const sayHelloBye = (name, num) =>
	`${['Bye', 'Hello'][num]} ${name[0].toUpperCase() + name.substr(1)}`
// console.log('sayHelloBye', sayHelloBye('alon', 1))
// console.log('sayHelloBye', sayHelloBye('Tomi', 0))

/**Strange Pair */
const isStrangePair = (str1, str2) =>
	str1.endsWith(str2[0]) && str2.endsWith(str1[0])
// console.log('', isStrangePair('ratio', 'orator'))
// console.log('', isStrangePair('bush', 'hubris'))

/**Unfair Hurdles */
function isUnfairHurdle(hurdles) {
	return hurdles.length >= 4 || hurdles[0].indexOf('#', 1) - 1 < 4
}
// console.log(
// 	'false',
// 	isUnfairHurdle([
// 		'#    #    #', //
// 		'#    #    #',
// 		'#    #    #',
// 	])
// )

/**Reverse the Case */
function reverseCase(str) {
	return [...str]
		.map(
			char =>
				char.toLowerCase() == char ? char.toUpperCase() : char.toLowerCase() //
		)
		.join('')
}
// console.log(reverseCase('Happy Birthday'))

/** Read The Abacus (Part 1: Russian Schoty)*/
function schoty(frame) {
	return +frame.map(wire => wire.indexOf('-')).join('')
}
// console.log(
// 	schoty([
// 		'---OOOOOOOOOO',
// 		'---OOOOOOOOOO',
// 		'---OOOOOOOOOO',
// 		'OOO---OOOOOOO',
// 		'O---OOOOOOOOO',
// 		'OOOOOOOOO---O',
// 		'OO---OOOOOOOO',
// 	])
// )

/**Neatly Formatted Math */
function formatMath(expr) {
	return `${expr} = ${eval(expr.replace('x', '*'))}`
}
// console.log(formatMath('3 + 4'))
// console.log(formatMath('4 x 5'))

/**Find First Character That Repeats */
function firstRepeat(chars) {
	return (repetition = chars.match(/(.).*\1/)) ? repetition[1] : '-1'

	let letterCount = new Map()
	let result = ''

	for (letter of chars)
		letterCount.set(
			letter,
			[...chars].filter(searchCount => searchCount == letter).length
		)

	letterCount.forEach((count, letter) => {
		if (count >= 2) result += letter
	})

	if (!result) return '-1'
	else return result[0]
}
// console.log(firstRepeat('legolas'))
// console.log(firstRepeat('Gandalf'))
// console.log(firstRepeat('Isildur'))

function countVowels(str) {
	if (str.length === 0) return 0
	return str.match(/[aeiou]/g).length

	let vowels = ['a', 'e', 'i', 'o', 'u']
	let count = 0
	for (let i = 0; i < str.length; i++) {
		for (let j = 0; j < vowels.length; j++) {
			if (str[i] === vowels[j]) count++
		}
	}
	return count
}
// console.log(countVowels('edabit'))
// console.log(countVowels(''))

/**Scoring Strings */
function scoreIt(s) {
	//create an array with numbers and paranthesis
	let newS = [...s]
	for (let i = 0; i < newS.length; i++)
		if (!isNaN(newS[i]) && !isNaN(newS[i + 1]))
			newS.splice(i, 2, newS[i] + newS[i-- + 1])

	//count the score
	let [level, score] = [0, 0]
	newS.forEach(number => {
		if (number == '(') level++
		if (number == ')') level--
		if (!isNaN(number)) score += number * level
	})
	return score
}
// console.log(scoreIt('((((1)2)3)4)'))
// console.log(scoreIt('(((((20)))))'))
// console.log(scoreIt('123(4)56'))

/**Kaprekar Numbers */
function isKaprekar(n) {
	let square = `${n ** 2}`,
		left = +square.slice(0, square.length / 2),
		right = +square.slice(square.length / 2)

	return left + right == n
}
// console.log(isKaprekar(9))
// console.log(isKaprekar(65))
// console.log(isKaprekar(99))
// console.log(isKaprekar(297))
// console.log(isKaprekar(666))

/**Smiley Faces :) */
function happinessNumber(s) {
	let happiness = 0
	let smiley = ''

	for (let i = 1; i < s.length; i++) {
		smiley = s.substring(i - 1, i + 1)
		if (smiley === ':)' || smiley === '(:') happiness++
		if (smiley === ':(' || smiley === '):') happiness--
	}
	return happiness
}
// console.log(happinessNumber(':):('))
// console.log(happinessNumber('(:)'))
// console.log(happinessNumber('::::'))

/** Between Words*/
function isBetween(first, last, word) {
	return [first, last, word].sort()[1] == word
}
// console.log(isBetween('apple', 'banana', 'azure'))
// console.log(isBetween('shrapnel', 'tapenade', 'tally'))

/**Is the String a Palindrome? */
function checkPalindrome(str) {
	return [...str].reverse().join('') == str
}
// console.log(checkPalindrome('mom'))
// console.log(checkPalindrome('reviver'))
// console.log(checkPalindrome('scary'))

/**Dashed Vowels */
function dashed(str) {
	return str.replace(/([aeiou])/gi, '-$1-')
}
// console.log(dashed('Edabit'))
// console.log(dashed('Carpe Diem'))
// console.log(dashed('Fight for your right to party!'))

/**ReverseAndNot */
function reverseAndNot(i) {
	return +([...('' + i)].reverse().join('') + i)
}
// console.log(reverseAndNot(123))
// console.log(reverseAndNot(152))
// console.log(reverseAndNot(123456789))

/** Barbecue Skewers*/
function bbqSkewers(grill) {
	let veggi = grill.filter(skewer => !skewer.includes('x')).length
	return [veggi, grill.length - veggi]
}

// console.log(
// 	bbqSkewers([
// 		'--oooo-ooo--',
// 		'--xx--x--xx--',
// 		'--o---o--oo--',
// 		'--xx--x--ox--',
// 		'--xx--x--ox--',
// 	])
// )
// console.log(
// 	bbqSkewers([
// 		'--oooo-ooo--',
// 		'--xxxxxxxx--',
// 		'--o---',
// 		'-o-----o---x--',
// 		'--o---o-----',
// 	])
// )

/**Get the Century */
function century(year) {
	const century = Math.ceil(year / 100)
	const ordinalSuffix = century > 20 ? 'st' : 'th'
	return `${century}${ordinalSuffix} century`
}
// console.log(century(1756))
// console.log(century(1000))
// console.log(century(1001))
// console.log(century(2005))

/**Maximize the First Number */
function maxPossible(n1, n2) {
	const num1 = [...('' + n1)].map(digit => +digit)
	const num2 = [...('' + n2)].map(digit => +digit)
	let maxDigit = 0
	const bigNum = num1.map(digit1 => {
		maxDigit = Math.max(digit1, ...num2)
		num2.splice(num2.indexOf(maxDigit), num2.includes(maxDigit))
		return maxDigit
	})
	return +bigNum.join('')
}
// console.log(maxPossible(523, 76))
// console.log(maxPossible(9328, 456))

/**Reverse String Without Affecting Special Characters */
function revSpecstring(s) {
	let regex = /[a-z]/gi
	let batch = s.match(regex) || []
	return s.replace(regex, () => batch.pop())
}
// function revSpecstring([...n]) {
// 	for (let p1 = 0, p2 = n.length - 1; p1 < n.length; p1++, p2--) {
// 		if (p1 > p2) break
// 		if (!isLetter(n[p1])) {
// 			++p2
// 			continue
// 		}
// 		if (!isLetter(n[p2])) {
// 			--p1
// 			continue
// 		}
// 		;[n[p1], n[p2]] = [n[p2], n[p1]]
// 	}
// 	function isLetter(char) {
// 		return (
// 			(char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) ||
// 			(char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122)
// 		)
// 	}
// 	return n.join('')
// }
//gro�: 65-90
//klein: 97-122
console.log(revSpecstring('AFC#47GH$Ieu'))
console.log(revSpecstring('guyhiuj1234!@#$%rtyhghu'))
console.log(revSpecstring('12!@'))
console.log(revSpecstring('abcd'))
console.log(revSpecstring('abcde'))
console.log(revSpecstring('a?cde'))
console.log(revSpecstring('ab?de'))
console.log(revSpecstring('abc?e'))
