// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
	// write your code in JavaScript (Node.js 8.9.4)

	let minDif = null

	for (let i = 0; i < A.length; i++) {
		if (A.length - 1 === i) {
			continue
		}
		const oneSide = A.slice(0, i + 1)
		const secondSide = A.slice(i + 1)

		const reduceOneSide = oneSide.reduce((acc, currentV) => acc + currentV)
		const reduceSecondSide = secondSide.reduce(
			(acc, currentV) => acc + currentV
		)

		const result = reduceOneSide - reduceSecondSide

		const diff = result > 0 ? result : result * -1

		if (minDif === null) {
			minDif = diff
		} else if (diff < minDif) {
			minDif = diff
		}
	}

	return minDif
}

console.log(solution([1, 2]))
