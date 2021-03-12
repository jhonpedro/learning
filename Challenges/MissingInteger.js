function testIfValueIsInArray(valueToCheck, array) {
	array.forEach((value) => {
		if (value == valueToCheck) {
			return true
		}
	})

	return false
}

function solution(A) {
	// write your code in JavaScript (Node.js 8.9.4)
	const min = Math.min(...A)
	const max = Math.max(...A)

	let MissingIntegers = []
	let minElem = A[0]

	for (let i = min; i <= max + 1; i++) {
		if (!A.includes(i)) {
			if (minElem > i) {
				minElem = i
			}
			MissingIntegers.push(i)
		}
	}

	if (minElem < 0) {
		return 1
	}

	return Math.min(...MissingIntegers)
}

console.log(solution([1, 2, 3, 4, 5, 7, 8, 10000, 2]))
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 2]))
console.log(solution([-1]))
