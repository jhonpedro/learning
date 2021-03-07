function solution(N, A) {
	let counters = Array(N).fill(0)

	let maxCounter = 0

	for (let i = 0; i < A.length; i++) {
		if (A[i] <= N) {
			counters[A[i] - 1] += 1

			continue
		}

		maxCounter = Math.max(...counters)

		counters = counters.fill(maxCounter)
	}

	return counters
}

console.log(solution(5, [3, 4, 4, 6, 6, 6, 1, 4, 4]))

// This solution gave me 77% in codility
