// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X, A) {
	// write your code in JavaScript (Node.js 8.9.4)
	let moment = Math.min(...A)
	let highestMoment = A.indexOf(moment)

	let i = 0

	while (true) {
		if (moment === A[i]) {
			if (highestMoment < i) {
				highestMoment = i
			}
			if (moment === X) {
				return highestMoment
			} else {
				moment++
				i = 0
				continue
			}
		}
		i++
	}
}

console.log(solution(5, [1, 4, 2, 2, 5, 4, 3]))
