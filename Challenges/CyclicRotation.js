// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, K) {
	// write your code in JavaScript (Node.js 8.9.4)

	if (A.length == 0) {
		return A
	}

	for (let i = 0; i < K; i++) {
		const lastElement = A.pop()
		A.unshift(lastElement)
	}

	return A
}
