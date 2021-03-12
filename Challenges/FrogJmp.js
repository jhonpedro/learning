function solution(X, Y, D) {
	const realValue = Y - X

	const jumps = realValue / D

	console.log(jumps)

	return Math.ceil(jumps)
}

console.log(solution(10, 85, 30))
