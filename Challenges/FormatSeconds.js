// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(T) {
	// write your code in JavaScript (Node.js 8.9.4)

	let inMinutes = Math.floor(T / 60)
	const inHours = Math.floor(inMinutes / 60)

	let restInMinutesInSeconds = 0

	if (T % 60 != 0) {
		restInMinutesInSeconds = T - inMinutes * 60
	}

	if (inMinutes >= 60) {
		inMinutes = inMinutes - inHours * 60
	}

	return `${inHours}h${inMinutes}m${restInMinutesInSeconds}s`
}

console.log(solution(3630))
console.log(solution(65))
console.log(solution(3600))
