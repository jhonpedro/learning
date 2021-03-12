// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
	// write your code in JavaScript (Node.js 8.9.4)

	const startArr = Math.min(...A)
	const endArr = Math.max(...A)

	for (
		let i = startArr - 1 > 0 ? startArr - 1 : startArr;
		i <= endArr + 1;
		i++
	) {
		if (!A.includes(i)) {
			return i
		}
	}

	return 1
}

console.log(solution([]))
