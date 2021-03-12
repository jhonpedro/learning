function solution(A) {
	A.sort((a, b) => a - b)

	if (A[A.length - 1] <= 0) {
		return 1
	} else if (A[0] > 1) {
		return 1
	}

	let i = 0
	while (true) {
		const check = A[i] + 1
		// console.log(A[i], A[i] + 1, A[i + 1], check)

		if (A[i + 1] == A[i]) {
			i++
			continue
		}

		if (check != A[i + 1]) {
			return check
		}
		i++
	}
}

console.log(solution([1, 2, 3, 4, 5, 7, 8, 10000, 2]))

// This solution gave me 66%
